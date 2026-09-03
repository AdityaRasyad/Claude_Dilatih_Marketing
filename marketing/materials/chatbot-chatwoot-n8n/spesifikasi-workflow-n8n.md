# Spesifikasi Workflow n8n — Chatbot Inquiry Dilatih (4 Jalur + Labelling & Prioritas)

**Status:** Spesifikasi untuk dibangun di n8n. Bukan JSON siap-import — node dan urutan logika, supaya siapa pun yang membangun (internal atau kontraktor) punya kerangka yang sama.

Asumsi: Chatwoot self-hosted/cloud dengan API token tersedia, n8n punya akses HTTP keluar-masuk (webhook publik), dan integrasi WhatsApp Cloud API sudah aktif di inbox Chatwoot (sudah terkonfirmasi).

---

## WF-1 — Inbound Handler

**Trigger:** Webhook (Chatwoot → Settings → Integrations → Webhook, event `message_created`, arahkan ke URL webhook n8n).

### Node 1 — Webhook Trigger
Terima payload `message_created`. Field penting dari payload Chatwoot:
- `message.content`
- `message.message_type` (`incoming` / `outgoing`)
- `message.sender.type` (`contact` vs `agent_bot`/`user`)
- `conversation.id`
- `conversation.status`
- `conversation.labels`
- `conversation.assignee_id`
- `contact.id`, `contact.custom_attributes`

### Node 2 — Filter (IF)
Lanjut hanya jika **semua** benar:
- `message.message_type == "incoming"`
- `message.sender.type == "contact"` (bukan agent/bot)
- `"bot-off"` dan `"human-takeover"` **tidak ada** di `conversation.labels`
- `conversation.assignee_id` kosong/null

Jika gagal → stop (biarkan agent manusia yang pegang).

### Node 3 — Dedupe (NoOp + Static Data / Redis)
Simpan `message.id` yang sudah diproses (n8n Static Data cukup untuk volume ini, tidak perlu Redis). Jika `message.id` sudah pernah diproses → stop. Ini mencegah balasan ganda kalau Chatwoot mengirim webhook retry.

### Node 4 — Cek state percakapan (HTTP Request → Chatwoot API)
`GET /api/v1/accounts/{account_id}/contacts/{contact_id}` → baca `custom_attributes.bot_state` (`baru` / `menunggu_pilihan` / `bebas`).

### Node 5 — Switch: baru vs lanjutan
**Cabang A — `bot_state` kosong/`baru`:**
Kirim pesan sapaan + `input_select` 5 pilihan berbasis jalur (lihat `copy-percakapan.md` §1 untuk teks). Set `bot_state = menunggu_pilihan`. Stop (tunggu balasan berikutnya).

**Cabang B — user baru saja memilih dari `input_select`:**
Router berdasarkan nilai pilihan (`message.content_attributes.submitted_values` atau isi teks sesuai label tombol):
- **1 (Sertifikasi BNSP)** → Node 6a, filter `jalur = bnsp`
- **2 (Workshop & sertifikasi umum)** → Node 6a, filter `jalur = workshop`
- **3 (Pelatihan untuk perusahaan / IHT-B2B)** → Node 7 (jalur B2B)
- **4 (Saya sudah terdaftar — ada kendala)** → Node 7b (jalur technical)
- **5 (Bicara dengan tim)** → Node 9 (handoff langsung, `intent = lain`)

**Cabang C — `bot_state = bebas`, teks bebas:** → Node 8 (AI Agent), yang memanggil `klasifikasi_intent` di awal untuk menentukan jalur sebelum menjawab.

### Node 6a — Jawaban deterministik (Google Sheets read + Set)
Baca tab `program` (filter `jalur` sesuai pilihan) dan/atau `faq`, susun jawaban dari template (lihat `copy-percakapan.md`). **Tidak memanggil LLM.** Set `bot_state = bebas` dan `intent = bnsp`/`workshop` sesuai cabang (agar pertanyaan lanjutan masuk AI Agent dengan intent yang sudah diketahui). Lanjut ke Node 10 (kirim balasan).

### Node 7 — Jalur B2B/IHT (Set + Google Sheets append)
Berlaku untuk BNSP maupun non-BNSP — tidak diasumsikan BNSP saja. Kirim pesan kualifikasi singkat: nama perusahaan, perkiraan jumlah peserta, BNSP atau non-BNSP, kebutuhan/timeline (lihat copy). Simpan jawaban ke `contact.custom_attributes` giliran demi giliran, `intent = iht-b2b`, `tipe = korporat`. Setelah data inti terkumpul → panggil WF-2, lalu Node 9 (handoff — **selalu**, jalur ini tidak pernah dijawab tuntas oleh bot, dan tidak pernah menyebut harga).

### Node 7b — Jalur Technical (Set + Google Sheets read `technical_triage`)
1. Tampilkan 4 sub-kategori sebagai `input_select` kedua (akses/login, pembayaran, sertifikat, jadwal).
2. Baca baris `technical_triage` sesuai sub-kategori yang dipilih → kirim `pesan_pembuka`, lalu kumpulkan `info_wajib` satu-dua pesan per giliran, simpan ke `contact.custom_attributes`.
3. Set `intent = technical`, `tipe = peserta-aktif`, `sub_technical = <sub_kategori>`.
4. Setelah semua `info_wajib` terkumpul (atau user tidak bisa memberi semua — jangan memaksa lebih dari 2 giliran) → panggil WF-2, lalu Node 9 (handoff — **selalu**, bot tidak pernah mencoba menyelesaikan technical issue sendiri).

### Node 8 — AI Agent (LangChain Agent node di n8n)
- **Model:** LLM sesuai keputusan terbuka §9 di `keputusan-dan-arsitektur.md` (belum ditentukan — placeholder kredensial).
- **System prompt:** dari `system-prompt-bot.md`.
- **Tools:**
  1. `cari_program(query)` — Google Sheets Tool, baca tab `program` (kedua jalur), filter oleh `nama`/`bidang`/`id`/`jalur` mengandung query.
  2. `cari_faq(query)` — Google Sheets Tool, baca tab `faq`, filter oleh `pertanyaan_kanonik`/`variasi_pertanyaan`, kembalikan juga `boleh_dijawab_bot`.
  3. `klasifikasi_intent(teks)` — **baru**. Untuk pesan bebas yang belum lewat menu: klasifikasikan ke salah satu `bnsp`/`workshop`/`iht-b2b`/`technical`/`lain`. Kalau hasilnya `iht-b2b` atau `technical`, Agent WAJIB mengarahkan ke alur kualifikasi/triase yang sesuai (setara Node 7/7b), bukan mencoba menjawab langsung.
  4. `hitung_prioritas(sinyal[])` — **baru**. Baca tab `prioritas`, jumlahkan skor sinyal yang terdeteksi, kembalikan skor mentah (pemetaan ke level prioritas dilakukan di Node 9/WF-2, bukan di sini).
  5. `catat_minat_baru(nama, kontak, program_diminta)` — **baru**. Dipanggil saat `cari_program` tidak menemukan hasil sama sekali (program/skema di luar katalog, beda dari waitlist — lihat `labelling-dan-prioritas.md` §2.4). Menulis langsung ke tab `leads` (kolom `program_belum_ada`) lewat Google Sheets Tool, set `intent = minat-baru`, `status = tercatat_minat_baru`. **Tidak memicu handoff** — Agent lanjut ke Node 10 seperti biasa (bukan Node 9), kecuali user lanjut bertanya hal lain yang butuh eskalasi.
  6. `eskalasi(alasan)` — Set node yang menandai output khusus `NEEDS_HUMAN` + alasan, ditangkap oleh Node 9.
- **Memory:** n8n Chat Memory node, keyed by `conversation.id`, window pendek (misal 10 pesan) — cukup untuk konteks, tidak perlu riwayat penuh.
- **Output routing:** jika Agent memanggil `eskalasi`, atau `klasifikasi_intent` mengembalikan `iht-b2b`/`technical` → Node 9. Jika Agent memanggil `catat_minat_baru`, atau menghasilkan jawaban normal untuk jalur `bnsp`/`workshop` → Node 10 (bukan Node 9 — kasus ini sengaja tidak masuk antrean handoff).

### Node 9 — Handoff (HTTP Request → Chatwoot API)
1. Tentukan label lengkap sesuai taksonomi (`intent:*`, `tipe:*`, `tech:*` bila ada, `program:*`/`waitlist:*` bila ada, `human-takeover`) — rincian penuh: `labelling-dan-prioritas.md`. `POST /conversations/{id}/labels`.
2. Hitung skor prioritas final (kombinasi `hitung_prioritas` + sinyal waktu tunggu bila ada dari state sebelumnya), petakan ke level Chatwoot, `POST /conversations/{id}/toggle_priority`.
3. **Tidak ada assignment ke agent spesifik** — semua handoff masuk antrean umum tanpa `assignee_id`; prioritas Chatwoot yang menentukan urutan pengambilan, bukan penugasan otomatis. Di luar jam kerja: kirim juga pesan "kami balas pagi ya" dari `copy-percakapan.md`.
4. Panggil WF-2 (lead capture) dengan status `handoff`, intent, tipe, skor, dan prioritas yang sudah dihitung.
5. Stop — bot tidak membalas lagi sampai label `human-takeover` dilepas manual.

### Node 10 — Kirim balasan (HTTP Request → Chatwoot API)
`POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages`
```json
{ "content": "<jawaban>", "message_type": "outgoing" }
```
Untuk sapaan awal dengan tombol, gunakan `content_type: "input_select"` + `content_attributes.items`.

### Node 11 — Panggil WF-2
Trigger sub-workflow lead capture (Execute Workflow node), kirim data yang terkumpul sejauh ini.

---

## WF-2 — Lead Capture (dipanggil sebagai sub-workflow)

**Trigger:** Execute Workflow Trigger (dipanggil dari WF-1).

Ini workflow yang paling banyak berubah dari draf awal — sekarang menjalankan seluruh labelling + prioritas, bukan hanya menulis lead.

1. **Node 1 — Cek baris existing** (Google Sheets: lookup `conversation_id` di tab `leads`).
2. **Node 2 — Set/Append** — kalau belum ada baris, append baru; kalau sudah ada, update kolom yang berubah (`intent`, `tipe`, `sub_technical`, `program_diminati`, `skor`, `prioritas`, `status`, dst).
3. **Node 3 — Hitung label** (Function/Set node) — susun set label lengkap sesuai taksonomi `labelling-dan-prioritas.md`: tepat satu `intent:*` (termasuk `intent:minat-baru`), tepat satu `tipe:*`, `tech:*` bila `intent = technical`, `program:*`/`waitlist:*` bila program teridentifikasi, tepat satu status (`bot-handled`/`human-takeover`/`follow-up-aktif`/`tercatat-minat-baru`/`closed`).
4. **Node 4 — Pasang label** (HTTP Request) — `POST /conversations/{id}/labels` dengan array label dari Node 3. Chatwoot mengganti seluruh set label per-request, jadi kirim label lama yang masih relevan + label baru dalam satu payload, bukan menambah satu-satu.
5. **Node 5 — Hitung & set prioritas** (Function + HTTP Request) — jumlahkan skor dari tab `prioritas` sesuai sinyal yang terdeteksi, petakan ke level Chatwoot (`urgent`/`high`/`medium`/`low` — tabel pemetaan di `labelling-dan-prioritas.md`), `POST /conversations/{id}/toggle_priority`.
6. **Node 6 — IF prioritas = urgent** → kirim notifikasi ke tim (WhatsApp ke nomor internal, atau email) via HTTP Request/Email node. Isi: nama, kontak, intent, ringkasan kebutuhan, skor, link percakapan Chatwoot. **Hanya `urgent`** — kalau semua level dinotifikasi, tim berhenti memperhatikan notifikasinya.

---

## WF-3 — Follow-up Anti-Cold

**Trigger:** Schedule Trigger (Cron), sekali sehari pagi (mis. 09:00 WIB).

1. **Node 1 — Google Sheets read** tab `leads`, filter `status` bukan `closed`/`follow_up_selesai` **DAN `intent` adalah `bnsp` atau `workshop`**. Baris `intent = technical` atau `intent = iht-b2b` tidak pernah masuk WF-3 — B2B ditindaklanjuti manusia langsung, dan mengirim follow-up marketing ke orang yang sedang punya masalah teknis merusak hubungan, bukan memperbaikinya.
2. **Node 2 — Function** — hitung selisih hari dari `timestamp` (atau `last_activity` bila ditambahkan kolomnya), tentukan tahap: H+1 / H+3 / H+7 / lewat H+7 (tandai `closed`, hentikan).
3. **Node 3 — Switch per tahap** → pilih **WhatsApp message template** yang sesuai (lihat `copy-percakapan.md` §5). Wajib pakai template resmi (bukan pesan bebas) karena kemungkinan besar sudah di luar jendela 24 jam WhatsApp — template harus disetujui Meta lebih dulu.
4. **Node 4 — Kirim via Chatwoot API** — `POST /conversations/{id}/messages` dengan `template_params` sesuai konfigurasi template WhatsApp yang didaftarkan.
5. **Node 5 — Update tab `leads`** — set `status = follow_up_h1/h3/h7` agar tidak dikirim ulang di hari yang sama, label `follow-up-aktif`.
6. **Guard tambahan:** jika lead sudah membalas (ada pesan `incoming` baru setelah `timestamp` follow-up terakhir) atau berlabel `closed`, WF-3 melewati baris itu — jangan kirim follow-up ke orang yang sudah aktif berbicara dengan tim.

---

## WF-4 — Re-prioritization (baru)

**Trigger:** Schedule Trigger (Cron), tiap 30 menit, hanya jam kerja (mis. Senin–Jumat 09:00–17:00 WIB — perlu dikonfirmasi tim).

Ini workflow yang membuat faktor "lama menunggu" benar-benar berpengaruh terus-menerus, bukan cuma dihitung sekali saat chat pertama kali di-handoff.

1. **Node 1 — Chatwoot API** — `GET /conversations` filter berlabel `human-takeover`, belum berlabel `closed`, dan pesan terakhir bertipe `incoming` (agent belum membalas).
2. **Node 2 — Function** — untuk tiap percakapan, hitung lama menunggu dalam jam kerja sejak pesan terakhir. Tambahkan skor sesuai tab `prioritas` (`menunggu_2_jam`, `menunggu_4_jam` — yang berlaku hanya salah satu, ambil yang tertinggi terpenuhi, bukan dijumlah).
3. **Node 3 — IF skor baru menghasilkan level prioritas lebih tinggi dari yang tercatat** → `POST /conversations/{id}/toggle_priority` dengan level baru, update tab `leads` kolom `skor`/`prioritas`.
4. **Node 4 — IF naik ke `urgent`** → kirim notifikasi ke tim (sama seperti WF-2 Node 6) — ini menangkap kasus chat yang awalnya `medium`/`low` tapi jadi mendesak karena kelamaan menunggu, bukan cuma yang urgent sejak awal.

---

## Endpoint Chatwoot API yang dipakai (ringkasan)

| Aksi | Endpoint |
|---|---|
| Baca contact | `GET /api/v1/accounts/{account_id}/contacts/{id}` |
| Update custom attributes | `PATCH /api/v1/accounts/{account_id}/contacts/{id}` |
| Kirim pesan | `POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/messages` |
| Tambah/ganti label | `POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/labels` |
| Set prioritas | `POST /api/v1/accounts/{account_id}/conversations/{conversation_id}/toggle_priority` |
| List percakapan (untuk WF-4) | `GET /api/v1/accounts/{account_id}/conversations` (filter `labels`, `status`) |

Autentikasi: header `api_access_token` (Chatwoot Agent Bot token — buat 1 Agent Bot khusus untuk n8n, jangan pakai token personal agent).

**Catatan:** draf awal menyertakan endpoint assignment (`/assignments`) untuk menugaskan agent spesifik per jalur (mis. B2B ke Vika). Ini **dihapus** karena keputusan operasional tim adalah satu antrean umum tanpa routing per-PIC — semua handoff dibiarkan unassigned dan diurutkan lewat prioritas Chatwoot saja.

---

## Hal yang perlu disiapkan sebelum implementasi teknis

1. Chatwoot **Agent Bot** dibuat khusus untuk integrasi ini (bukan akun agent manusia) — API token diambil dari sini.
2. Webhook Chatwoot diarahkan ke URL n8n (produksi, bukan test URL).
3. Kredensial LLM di n8n (keputusan terbuka).
4. Google Sheet `dilatih-kb` sudah dibuat & diisi, termasuk katalog workshop dan tab `prioritas`/`technical_triage` (lihat `knowledge-base-template.md`).
5. WhatsApp message template untuk WF-3 sudah diajukan & disetujui Meta (proses ini bisa makan beberapa hari, ajukan di awal minggu 1 jangan tunggu minggu 4).
6. Semua label di taksonomi `labelling-dan-prioritas.md` sudah dibuat manual di Chatwoot Settings → Labels — n8n tidak bisa membuat label baru otomatis lewat endpoint `/labels`, hanya memasang label yang sudah ada.
