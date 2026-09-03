# MVP — Tangkap Leads & Intent (versi ringkas WF-1 + WF-2)

**Status:** Alternatif yang lebih sederhana dari `spesifikasi-workflow-n8n.md`, khusus untuk tahap paling awal. Tujuannya satu: setiap orang yang chat dapat balasan dasar (atau diarahkan ke tim), dan setiap chat tercatat dengan intent + data kontak yang benar — **tanpa** AI Agent, tanpa sub-triase technical, tanpa formula skor aditif, tanpa follow-up otomatis.

**Kenapa dipisah dari spesifikasi utama:** `spesifikasi-workflow-n8n.md` sudah benar sebagai desain akhir, tapi punya banyak bagian yang tidak dibutuhkan untuk sekadar "kumpulkan leads & intent" — 4 sub-kategori technical, tabel bobot prioritas yang perlu dikalibrasi, WF-3/WF-4. Dokumen ini memangkas itu semua supaya bisa dibangun dan jalan dalam hitungan hari, bukan minggu. Setelah versi ini stabil, tim bisa naik ke spesifikasi penuh — struktur label dan sheet-nya sengaja dibuat kompatibel (lihat §4).

---

## Apa yang DIHILANGKAN dari spesifikasi penuh (dan kenapa boleh)

| Dihilangkan di MVP | Diganti dengan | Kenapa aman untuk tahap awal |
|---|---|---|
| AI Agent (Node 8), teks bebas dijawab LLM | Teks bebas → langsung handoff ke manusia, pesan "tim akan balas" | Tanpa AI, chat di luar menu memang tidak bisa dijawab otomatis — tapi tetap tercatat, tidak hilang |
| 4 sub-kategori technical (akses/pembayaran/sertifikat/jadwal) | Satu pertanyaan terbuka "kendala apa?" lalu langsung handoff | Detail sub-kategori berguna untuk *routing otomatis* — kalau semua technical toh selalu ke manusia (sesuai desain), detailnya bisa didapat manusia langsung saat membalas |
| Skor prioritas aditif (tabel bobot per sinyal) | Pemetaan langsung: intent → level prioritas (tabel §2) | Skor aditif baru bernilai kalau ada banyak sinyal campuran (AI, waktu tunggu, ukuran B2B) — di MVP sinyalnya cuma satu (intent dari menu), jadi pemetaan langsung sudah cukup akurat |
| WF-3 (follow-up anti-cold) | — (belum ada) | Follow-up otomatis butuh WhatsApp template disetujui Meta + data leads yang sudah stabil dulu; tanpa itu, prioritasnya kalah dari sekadar "leads tertangkap" |
| WF-4 (re-prioritization tiap 30 menit) | — (belum ada) | Butuh volume chat cukup besar dulu supaya bermakna; di awal, antrean masih kecil dan bisa dipantau manual |
| `program:*` / `waitlist:*` label per-program | Cukup `intent:*` + `tipe:*` + status | Detail program tetap ada di kolom `program_diminati` pada sheet `leads` — tidak hilang, cuma tidak jadi label terpisah |

---

## 1. WF-1-mini — Inbound Handler (menu deterministik, tanpa AI)

**Trigger:** Webhook Chatwoot, event `message_created` (sama seperti spesifikasi penuh).

1. **Node 1 — Webhook Trigger.** Sama seperti spesifikasi penuh — field yang dipakai: `message.content`, `message.message_type`, `message.sender.type`, `conversation.id`, `conversation.labels`, `conversation.assignee_id`, `contact.id`.
2. **Node 2 — Filter (IF).** Sama seperti spesifikasi penuh: lanjut hanya jika `incoming`, dari `contact`, tidak ada label `bot-off`/`human-takeover`, `assignee_id` kosong.
3. **Node 3 — Dedupe.** Sama seperti spesifikasi penuh (n8n Static Data, simpan `message.id`).
4. **Node 4 — Cek state** (`bot_state` di `contact.custom_attributes`) → **Node 5 — Switch baru/lanjutan**:
   - **Cabang A (baru):** kirim menu 4 pilihan (bukan 5 — pilihan "bicara dengan tim" digabung ke fallback teks bebas, lihat Cabang C):
     1. Sertifikasi BNSP
     2. Workshop & sertifikasi umum
     3. Pelatihan untuk perusahaan (B2B/IHT)
     4. Saya sudah terdaftar — ada kendala

     Set `bot_state = menunggu_pilihan`. Stop.
   - **Cabang B (baru pilih dari menu):**
     - **1/2 → Node 6-mini** (jawaban deterministik)
     - **3 → Node 7-mini** (capture B2B ringkas)
     - **4 → Node 8-mini** (capture technical ringkas)
   - **Cabang C (`bot_state = bebas`, teks bebas — termasuk yang tadinya pilihan "bicara dengan tim"):** → **Node 9 (Handoff)** langsung, `intent = lain`, kirim pesan "Terima kasih, tim kami akan segera membalas" (teks final di `copy-percakapan.md`, ambil dari bagian pilihan 5 yang sudah ada). **Tidak ada AI di sini** — ini bedanya dengan spesifikasi penuh.

5. **Node 6-mini — Jawaban deterministik (BNSP/Workshop).** Sama persis dengan Node 6a di spesifikasi penuh: baca tab `program`/`faq`, susun jawaban dari `copy-percakapan.md`. Set `intent = bnsp`/`workshop`, `bot_state = bebas`. Kirim balasan → panggil WF-2-mini dengan status `bot-handled`.
6. **Node 7-mini — Jalur B2B (ringkas).** Kirim SATU pesan yang minta 3 hal sekaligus dalam satu balasan (bukan giliran demi giliran seperti spesifikasi penuh): nama perusahaan, perkiraan jumlah peserta, BNSP atau non-BNSP. Simpan jawaban apa adanya (boleh dalam satu blok teks, tidak perlu di-parse per field) ke `contact.custom_attributes.info_b2b`. `intent = iht-b2b`, `tipe = korporat` → panggil WF-2-mini, status `handoff`.
7. **Node 8-mini — Jalur Technical (ringkas).** Kirim SATU pesan terbuka: "Ceritakan kendalanya ya, tim kami akan bantu langsung." Simpan balasan apa adanya ke `contact.custom_attributes.info_technical`. `intent = technical`, `tipe = peserta-aktif` → panggil WF-2-mini, status `handoff`. **Tidak ada sub-kategori** — itu bedanya dengan Node 7b di spesifikasi penuh.
8. **Node 9 — Handoff.** Sama seperti spesifikasi penuh tapi lebih ringkas: pasang label (lihat §2), set prioritas dari tabel pemetaan langsung (§2, bukan hitung skor), panggil WF-2-mini, stop.
9. **Node 10 — Kirim balasan**, **Node 11 — Panggil WF-2-mini.** Sama seperti spesifikasi penuh.

---

## 2. Label & prioritas — pemetaan langsung (bukan skor aditif)

Taksonomi label **tetap sama** dengan `labelling-dan-prioritas.md` §1 untuk dimensi yang dipakai — `intent:*`, `tipe:*`, status (`bot-handled`/`human-takeover`/`bot-off`/`closed`). **Yang tidak dipakai di MVP:** `tech:*`, `program:*`/`waitlist:*`, `intent:minat-baru` (belum ada `catat_minat_baru` tanpa AI), `follow-up-aktif`/`tercatat-minat-baru`.

Prioritas: langsung dari intent, tidak dihitung dari sinyal berlapis.

| Intent | Prioritas Chatwoot | Alasan |
|---|---|---|
| `technical` | `high` | Peserta aktif dengan kendala — tetap paling mendesak meski tanpa sub-kategori |
| `iht-b2b` | `high` | Potensi nilai transaksi besar |
| `lain` (teks bebas, belum lewat menu) | `medium` | Tidak tahu isinya, tapi butuh dilihat manusia |
| `bnsp` / `workshop` yang sudah dijawab bot (`bot-handled`) | *(tidak diset — biarkan default)* | Bot sudah menjawab tuntas, tidak masuk antrean handoff |

**Notifikasi tim:** kirim untuk **semua** yang masuk `high` (technical + B2B) — bukan cuma sub-kategori tertentu seperti spesifikasi penuh, karena di MVP tidak ada cara membedakan "urgent" dari "high" tanpa skor. Ini artinya notifikasi akan lebih sering di awal — **wajar dan sementara**, akan mengetat lagi begitu skor aditif dipasang saat naik ke spesifikasi penuh.

---

## 3. WF-2-mini — Lead Capture (ringkas)

1. **Node 1 — Cek baris existing** (lookup `conversation_id` di tab `leads`) — sama seperti spesifikasi penuh.
2. **Node 2 — Set/Append** — kolom yang diisi: `conversation_id`, `nama`, `kontak`, `intent`, `tipe`, `program_diminati` (isi bebas dari teks user, tidak perlu ID program terstruktur), `status`, `timestamp`. **Tidak ada kolom `skor`** — cukup `prioritas` (nilai teks: high/medium, dari tabel §2).
3. **Node 3 — Pasang label** — set `intent:*` + `tipe:*` + status, `POST /conversations/{id}/labels` (payload penuh, sama seperti spesifikasi penuh).
4. **Node 4 — Set prioritas** — `POST /conversations/{id}/toggle_priority` dengan nilai dari tabel §2 (langsung, tanpa hitung).
5. **Node 5 — IF prioritas = high** → notifikasi tim (WA/email), isi: nama, kontak, intent, cuplikan `program_diminati`/`info_b2b`/`info_technical`, link percakapan.

Sheet `dilatih-kb` yang dipakai: tab `program` dan `faq` (untuk Node 6-mini) — **tab `prioritas` dan `technical_triage` belum dipakai** di MVP, boleh tetap kosong/diabaikan sampai naik ke spesifikasi penuh.

---

## 4. Jalur naik ke spesifikasi penuh

MVP ini disusun supaya tidak perlu dibongkar total saat naik level — cukup tambah, bukan ganti:

1. **Tambah sub-triase technical** → Node 8-mini pecah jadi 4 sub-kategori (Node 7b spesifikasi penuh), isi tab `technical_triage`.
2. **Tambah AI Agent** → Cabang C di Node 5 dialihkan dari handoff langsung ke Node 8 (AI Agent), mulai dari mode shadow (lihat `panduan-implementasi.md` Fase 3).
3. **Ganti pemetaan langsung jadi skor aditif** → isi tab `prioritas` dengan bobot §2.1 di `labelling-dan-prioritas.md`, tambahkan Node hitung skor di WF-2.
4. **Tambah WF-3/WF-4** setelah data leads dari MVP sudah berjalan stabil beberapa minggu dan WhatsApp template disetujui Meta.

Karena struktur label (`intent:*`/`tipe:*`/status) dan struktur sheet `leads` sudah kompatibel sejak awal, data yang terkumpul di MVP **tidak hilang atau perlu migrasi** saat naik ke spesifikasi penuh.

---

## Checklist sebelum mulai bangun MVP

- [ ] Label yang dipakai MVP sudah dibuat di Chatwoot: `intent:bnsp`, `intent:workshop`, `intent:iht-b2b`, `intent:technical`, `intent:lain`, `tipe:individu`, `tipe:korporat`, `tipe:peserta-aktif`, `bot-handled`, `human-takeover`, `bot-off`, `closed`
- [ ] Chatwoot Agent Bot + token sudah dibuat (`panduan-implementasi.md` 0.1)
- [ ] Tab `program` dan `faq` di `dilatih-kb` sudah cukup terisi untuk BNSP + workshop (`panduan-implementasi.md` Fase 1)
- [ ] Kanal notifikasi tim sudah ditentukan (`panduan-implementasi.md` 0.4)
