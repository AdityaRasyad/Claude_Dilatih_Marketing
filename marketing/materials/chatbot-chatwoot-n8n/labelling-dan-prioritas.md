# Labelling & Prioritas Chat — Chatbot Dilatih

**Status:** Draf untuk diskusi tim
**Kenapa dokumen ini penting:** tim sudah memutuskan **semua handoff masuk satu antrean umum, tanpa routing per-PIC** (tidak ada "B2B otomatis ke Vika", "technical otomatis ke Adit"). Konsekuensinya, label dan prioritas adalah **satu-satunya mekanisme** yang membedakan chat mana yang diambil duluan oleh siapa pun di tim yang sedang online. Kalau taksonomi ini tidak konsisten atau skornya tidak masuk akal, antrean umum berubah jadi tumpukan tanpa urutan — dan masalah "tim kewalahan" tidak selesai meski bot sudah berjalan.

---

## 1. Taksonomi label

Label dipasang otomatis oleh WF-2 (lihat `spesifikasi-workflow-n8n.md`), dengan prefiks per dimensi supaya mudah difilter di inbox Chatwoot. **Semua label di bawah harus dibuat manual dulu** di Chatwoot Settings → Labels sebelum workflow dijalankan — n8n hanya memasang label yang sudah ada, tidak membuat label baru.

| Dimensi | Label | Wajib? | Aturan |
|---|---|---|---|
| **Intent** | `intent:bnsp` | satu, wajib | Dari pilihan menu 1, atau hasil `klasifikasi_intent` |
| | `intent:workshop` | | Dari pilihan menu 2 |
| | `intent:iht-b2b` | | Dari pilihan menu 3, atau AI mendeteksi kebutuhan korporat |
| | `intent:technical` | | Dari pilihan menu 4, atau AI mendeteksi peserta aktif bermasalah |
| | `intent:minat-baru` | | **Baru** — `cari_program` tidak menemukan hasil sama sekali (program/skema tidak ada di katalog, beda dari waitlist). Dipasang saat tool `catat_minat_baru` dipanggil. |
| | `intent:lain` | | Fallback — pilihan 5 langsung, atau AI tidak bisa mengklasifikasi |
| **Tipe kontak** | `tipe:individu` | satu, wajib | Calon peserta perorangan |
| | `tipe:korporat` | | Lead B2B/IHT |
| | `tipe:peserta-aktif` | | Sudah terdaftar/bayar, sedang di jalur technical |
| **Sub-technical** | `tech:akses` | opsional | Hanya dipasang bersama `intent:technical` |
| | `tech:pembayaran` | | |
| | `tech:sertifikat` | | |
| | `tech:jadwal` | | |
| **Program** | `program:<id>` | opsional | Saat program spesifik teridentifikasi, `<id>` dari tab `program` |
| | `waitlist:<id>` | | Kalau program yang diminati berstatus `waitlist` |
| **Status** | `bot-handled` | satu, wajib | Bot menjawab tuntas tanpa handoff |
| | `human-takeover` | | Sudah di-handoff, menunggu agent |
| | `bot-off` | | Kill switch manual — bot tidak boleh menyentuh percakapan ini |
| | `follow-up-aktif` | | Sedang dalam siklus WF-3 |
| | `tercatat-minat-baru` | | **Baru** — minat program di luar katalog sudah dicatat, tidak butuh agent (kecuali user lanjut bertanya) |
| | `closed` | | Selesai — tidak diproses WF-3/WF-4 lagi |

**Aturan konsistensi:** setiap percakapan yang sudah melalui bot punya **tepat satu** label `intent:*`, **tepat satu** `tipe:*`, dan **tepat satu** label status. Kalau ada dua label `intent:*` di percakapan yang sama, itu bug WF-2 — cek Node 3 (Hitung label) di `spesifikasi-workflow-n8n.md`, kemungkinan label lama tidak dibersihkan sebelum menulis yang baru.

**Kenapa prioritas tidak pakai label:** field prioritas bawaan Chatwoot (`urgent`/`high`/`medium`/`low`) bisa langsung disortir dan difilter di tampilan inbox — pakai label untuk ini cuma menambah langkah tanpa manfaat. Endpoint: `POST /api/v1/accounts/{id}/conversations/{cid}/toggle_priority`.

---

## 2. Model skor prioritas

Empat sinyal yang relevan menurut tim — peserta aktif terkendala, potensi nilai transaksi B2B, kedekatan dengan keputusan beli, dan lama menunggu — **tidak bisa jadi aturan terpisah yang saling berebut**. Kalau dibuat sebagai if-else berurutan, kasus seperti "lead B2B besar yang baru masuk 5 menit lalu" vs "peserta individu yang sudah menunggu 3 jam" tidak punya cara dibandingkan secara adil. Solusinya: **skor aditif** — setiap sinyal yang terdeteksi menambah angka, totalnya dipetakan ke level prioritas Chatwoot.

Bobot disimpan di tab `prioritas` pada `dilatih-kb` (lihat `knowledge-base-template.md`), **bukan di-hardcode di n8n** — supaya tim bisa menyetel ulang berdasarkan data nyata tanpa menyentuh workflow.

### 2.1 Tabel bobot (nilai awal)

| Sinyal | Skor | Sumber deteksi |
|---|---|---|
| Peserta aktif terkendala — akses/login | 50 | `intent:technical` + `tech:akses` |
| Peserta aktif terkendala — pembayaran/invoice | 50 | `intent:technical` + `tech:pembayaran` |
| Peserta aktif terkendala — sertifikat | 35 | `intent:technical` + `tech:sertifikat` |
| Peserta aktif terkendala — jadwal/kehadiran | 30 | `intent:technical` + `tech:jadwal` |
| Lead B2B/IHT teridentifikasi | 30 | `intent:iht-b2b` |
| B2B dengan ≥20 peserta | +15 (tambahan) | `jumlah_peserta` di data kualifikasi |
| Sinyal siap beli ("mau transfer", "kirim invoice", "daftar sekarang") | 30 | Deteksi AI Agent (tool `klasifikasi_intent`/pola kalimat) |
| Inquiry umum (BNSP/workshop, belum ada sinyal beli) | 10 | `intent:bnsp` atau `intent:workshop` tanpa sinyal lain |
| Minat program di luar katalog (tidak ada di katalog sama sekali) | 5 | `intent:minat-baru` — sengaja lebih rendah dari inquiry umum karena tidak butuh respons agent, cuma tercatat |
| Menunggu >2 jam kerja tanpa balasan agent | +10 | WF-4, dihitung dari waktu pesan terakhir |
| Menunggu >4 jam kerja tanpa balasan agent | +20 (menggantikan +10, bukan menumpuk) | WF-4 |

Catatan: `intent:minat-baru` biasanya tidak pernah menyentuh WF-4 sama sekali karena statusnya langsung `tercatat-minat-baru` (bukan `human-takeover`) — skornya cuma relevan kalau karena suatu sebab percakapan itu tetap dieskalasi (mis. user lanjut bertanya hal lain).

**Kenapa akses/login dan pembayaran dapat skor tertinggi (50):** dua ini berarti peserta yang sudah bayar tidak bisa memakai apa yang mereka bayar — risiko komplain dan reputasi paling tinggi, dan biasanya juga paling mendesak waktunya (kelas sudah mulai, mereka tidak bisa ikut).

**Kenapa "menunggu 4 jam" menggantikan, bukan menumpuk dengan "menunggu 2 jam":** ini murni bobot waktu-tunggu, jadi cukup ambil tingkat tertinggi yang terpenuhi. Kalau ditumpuk (10+20=30), efeknya sama dengan menaikkan bobot dasarnya secara implisit — lebih jelas ditulis eksplisit di tabel kalau perlu dinaikkan.

### 2.2 Pemetaan skor → prioritas Chatwoot

| Skor total | Prioritas Chatwoot | SLA target |
|---|---|---|
| ≥60 | `urgent` | 30 menit |
| 35–59 | `high` | 2 jam |
| 15–34 | `medium` | 1 hari kerja |
| <15 | `low` | 2 hari kerja |

### 2.3 Contoh kalibrasi

| Situasi | Sinyal | Skor | Prioritas |
|---|---|---|---|
| Peserta tidak bisa login, baru masuk | `peserta_aktif_kendala_akses` (50) | 50 | `high` |
| Sama seperti di atas, sudah nunggu 4 jam | 50 + 20 | 70 | `urgent` |
| Lead B2B 25 peserta, bilang siap tanda tangan | 30 + 15 + 30 | 75 | `urgent` |
| Individu tanya harga program BNSP | `inquiry_umum` (10) | 10 | `low` |
| Sama seperti di atas, sudah nunggu 2 jam | 10 + 10 | 20 | `medium` |
| Peserta tanya soal sertifikat salah nama | `peserta_aktif_kendala_sertifikat` (35) | 35 | `high` |

---

## 2.4 Kasus khusus: minat program di luar katalog

Ini bukan sekadar detail teknis — ini menutup gap nyata di desain awal. Sebelumnya, bot hanya punya satu cara menangani "program tidak ditemukan": aturan umum "cek ke tim lalu eskalasi", yang tidak membedakan antara program yang memang **ada di katalog tapi belum ada batch** (waitlist — sudah tertangani baik lewat framing "daftar minat") dengan program yang **sama sekali tidak pernah ditawarkan** Dilatih (mis. skema BNSP di luar 15 yang kami punya).

Kasus kedua ini penting secara bisnis, bukan cuma percakapan: setiap kali seseorang menanyakan skema yang tidak ada di katalog, itu adalah **sinyal demand mentah** untuk keputusan "skema apa yang layak ditambahkan berikutnya" — relevan langsung dengan konteks project ini (Dilatih sedang pivot ke BNSP, baru 2/15 program yang punya batch aktif). Kalau sinyal ini tercampur ke `program_diminati = "belum jelas"` atau hilang di generic handoff, tim kehilangan data yang seharusnya bisa dipakai untuk roadmap katalog.

**Keputusan desain:** bot mencatat minat ini **sendiri, tanpa handoff ke manusia** (tool `catat_minat_baru`, lihat `system-prompt-bot.md` aturan #11) — beda dari jalur B2B/technical yang selalu wajib eskalasi. Alasan: volume permintaan seperti ini berpotensi cukup sering (banyak skema BNSP yang tidak Dilatih tawarkan), dan menaruh semuanya ke antrean manusia untuk sekadar "dicatat" akan membebani antrean tanpa manfaat sebanding — sementara mencatatnya otomatis tetap menangkap datanya secara utuh untuk ditinjau tim secara berkala (bukan real-time).

**Tinjau tab `leads` kolom `program_belum_ada` secara berkala** (mis. bulanan) sebagai salah satu input riset demand untuk keputusan katalog — bukan hanya operasional chatbot.

---

## 3. Notifikasi tim

Hanya prioritas **`urgent`** yang memicu notifikasi aktif (WA/email) ke tim — baik saat pertama kali dihitung (WF-2) maupun saat naik ke `urgent` lewat re-prioritization (WF-4). Level lain cukup terlihat lewat sortir prioritas di inbox Chatwoot. Ini sengaja dibatasi: kalau semua level dinotifikasi, notifikasi kehilangan makna dan tim mulai mengabaikannya — persis pola "alert fatigue" yang membuat sinyal penting tenggelam.

---

## 4. Menjaga skor tetap relevan

Bobot di atas adalah **hipotesis awal**, bukan angka final. Setelah 2–3 minggu berjalan (bertepatan dengan shadow mode minggu 2 di rollout):

1. Bandingkan skor yang diberi bot dengan urutan yang sebenarnya dipakai agent saat membalas manual.
2. Kalau agent konsisten membalas chat `medium` duluan dibanding `high`, berarti bobot sinyal `medium` itu ditaksir terlalu rendah — naikkan di tab `prioritas`, tidak perlu ubah workflow.
3. Tinjau juga apakah ada sinyal baru yang seharusnya ditambahkan (mis. kata kunci tertentu yang selalu berujung transaksi cepat) — tambah baris baru di tab `prioritas`, set `aktif = ya`.
4. Jangan mengubah bobot lebih dari sekali per minggu di awal — butuh volume data yang cukup untuk melihat pola nyata, bukan bereaksi ke satu-dua kasus outlier.

---

## 5. Checklist sebelum go-live

- [ ] Semua label di §1 sudah dibuat di Chatwoot Settings → Labels
- [ ] Tab `prioritas` di `dilatih-kb` sudah terisi dengan bobot awal §2.1
- [ ] Jam kerja resmi tim (untuk perhitungan waktu tunggu WF-4) sudah dikonfirmasi — draf memakai Senin–Jumat 09:00–17:00 WIB
- [ ] Kanal notifikasi `urgent` (nomor WA internal atau email tim) sudah ditentukan
- [ ] Tim memahami: prioritas tinggi di Chatwoot tidak berarti "auto-assign ke saya" — tetap harus diambil manual dari antrean umum
