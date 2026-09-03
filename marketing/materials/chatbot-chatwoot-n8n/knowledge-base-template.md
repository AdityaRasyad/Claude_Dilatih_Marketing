# Knowledge Base Chatbot — Template Google Sheet `dilatih-kb`

**Status:** Template + data awal, **WAJIB diverifikasi tim sebelum dipakai live**
**Sumber data terbaru:** dicek langsung via browser (Claude in Chrome) pada 2026-09-03 dari `dilatih.co/dilatih-workshop` — halaman ini ternyata adalah **katalog gabungan 55 program** (BNSP + workshop/sertifikasi umum), bukan dua halaman terpisah seperti asumsi awal. Data JP (jam pelatihan) dan tanggal batch terdekat diambil dari listing; harga dicek sampel di beberapa halaman detail (lihat catatan harga di §1). **Tetap wajib diverifikasi ulang tim sebelum go-live** — harga per program belum lengkap (baru 3 sampel), dan tanggal batch bergerak cepat (lihat perubahan status BNSP di bawah, sudah berbeda dari cek 2026-07-11).

**Temuan penting soal format tanggal di situs:** tanggal batch seperti "31 Desember 2030" atau "31 Desember 2039" adalah **placeholder**, bukan jadwal sungguhan — artinya sama dengan "Belum Tersedia". Jangan pernah menampilkan tanggal placeholder ini ke calon peserta sebagai jadwal batch asli.

Buat 1 Google Sheet bernama `dilatih-kb` dengan 5 tab di bawah ini. n8n membaca sheet ini langsung (Google Sheets node) — tidak perlu database terpisah, dan tim non-teknis tetap bisa mengedit lewat browser biasa.

---

## Tab 1 — `program`

Satu tab menampung **dua jalur** (BNSP dan workshop non-BNSP) dibedakan lewat kolom `jalur` — tidak perlu tab terpisah, supaya pencarian AI Agent (`cari_program`) tetap satu sumber.

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | teks | slug unik, mis. `comm-skill-business` |
| `nama` | teks | nama resmi program |
| `jalur` | enum | **baru** — `bnsp` / `workshop` |
| `bidang` | teks | Data & AI / IT / Komunikasi / Manajemen (BNSP) atau kategori workshop |
| `status` | enum | `batch_aktif` / `waitlist` |
| `harga` | angka/kosong | **kosongkan jika waitlist** — jangan isi estimasi |
| `durasi` | teks | mis. "3 hari" |
| `tanggal_batch` | tanggal/kosong | kosongkan jika waitlist |
| `lokasi` | teks | kota/TUK atau "online" |
| `syarat_peserta` | teks | ringkas |
| `tersedia_iht` | ya/tidak | **baru** — apakah program ini bisa dijalankan sebagai in-house/korporat |
| `ringkasan` | teks | 1–2 kalimat untuk dijawab bot |
| `url` | teks | link halaman program di dilatih.co |

### Isi awal — BNSP (15/15, dicek live 2026-09-03 dari `dilatih.co/dilatih-workshop`)

**Perubahan status vs cek 2026-07-11** (lihat memori `project_pelatihan_bnsp_dilatih.md`): *Certified IT Auditor (BNSP)* yang dulu waitlist sekarang **punya batch aktif**; *Certified Communication Skill for Business* yang dulu aktif (16 Jul 2026) sekarang **kembali ke "Belum Tersedia"** — batch lama sudah lewat dan belum ada penggantinya. Ini bukti nyata kenapa KB harus rutin diperbarui, bukan sekali di awal.

| id | nama | status | tanggal_batch | JP | harga | catatan |
|---|---|---|---|---|---|---|
| it-auditor | Certified IT Auditor (BNSP) | batch_aktif | 16 September 2026 | 32 JP | **isi ulang** (belum disampel) | ⚠️ status berubah dari waitlist → aktif sejak cek terakhir |
| office-advance | Practical Office Advance (BNSP) | batch_aktif | 24 September 2026 | 32 JP | **isi ulang** | tetap aktif, tanggal batch baru (bukan lagi 22 Jul) |
| comm-skill-business | Certified Communication Skill for Business (BNSP) | waitlist | Belum Tersedia | 32 JP | — | ⚠️ status berubah dari aktif → waitlist, batch 16 Jul 2026 sudah lewat |
| social-media-marketing | Certified Social Media Marketing (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| ai-keamanan-informasi | Penerapan AI untuk Keamanan Informasi (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| ai-komunikasi-pelanggan | Penerapan AI untuk Pengelolaan Komunikasi Pelanggan (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| ai-suara-pelanggan | Penerapan AI untuk Pengelolaan Suara Pelanggan (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| ai-proses-data | Penerapan AI untuk Proses Data (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| ai-administrasi-keuangan | Penerapan AI untuk Administrasi Keuangan (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| it-service-ops | Certified IT Service Operations Staff (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| digital-marketing | Certified Digital Marketing (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| data-scientist | Certified Data Scientist (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| web-developer | Certified Web Developer (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| it-project-manager | Certified IT Project Manager (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |
| data-analyst | Certified Data Analyst (BNSP) | waitlist | Belum Tersedia | 32 JP | — | |

**Tugas tim sebelum go-live:** isi kolom `harga`, `durasi` (dalam hari, dari JP), `lokasi`, `syarat_peserta`, `tersedia_iht`, `ringkasan`, `url` untuk semua 15 baris. Verifikasi ulang tanggal batch `it-auditor` dan `office-advance` mendekati hari-H — batch bisa penuh atau bergeser.

### Isi awal — Workshop & sertifikasi umum non-BNSP (40 program, dicek live 2026-09-03, harga disampel langsung untuk SEMUA baris "Certified X")

Dari 55 total program di katalog `/dilatih-workshop`, 40 di luar 15 BNSP di atas. Setiap baris "Certified X Professional/Associate" (32 JP) di bawah sudah dicek langsung ke halaman detailnya masing-masing (bukan hanya listing) — total 37 halaman disampel.

**Pola harga yang terkonfirmasi dari sampel langsung (bukan asumsi lagi):**
- Halaman menampilkan **"Harga Batch Terakhir (Batch N)"** ketika tidak ada batch reguler baru terbuka — ini harga referensi dari batch terakhir yang pernah berjalan.
- **Kalau N = 99 → harga selalu Rp375.000.** Ini kode batch resertifikasi (dikonfirmasi tim) — **bukan harga untuk peserta baru**, meski di beberapa halaman batch ini tampil sebagai satu-satunya opsi yang bisa langsung "Daftar Sekarang".
- **Kalau N ≠ 99 (nomor batch reguler biasa) → harga selalu Rp750.000.** Ini konsisten di semua 11 sampel yang menunjukkan pola ini (lihat tabel) — mengkonfirmasi Rp750.000 memang harga standar peserta baru untuk seluruh lini "Certified X".
- Beberapa program **tidak menampilkan harga sama sekali** (belum pernah ada batch selesai untuk dijadikan referensi) — ditandai "tidak ada data harga" di bawah.

Kolom `harga (peserta baru)` di bawah **selalu Rp750.000 untuk baris "Certified X"** mengikuti aturan di atas (baik yang barusan tersampel Rp750rb langsung, maupun yang halamannya menunjukkan Batch 99/Rp375rb — karena itu bukan harga peserta baru) — **kecuali** untuk baris yang situsnya sendiri tidak punya data harga referensi sama sekali, ditandai eksplisit.

| id | nama | status batch saat ini | tanggal/kode batch (dari halaman detail) | JP | harga (peserta baru) | catatan |
|---|---|---|---|---|---|---|
| w-65 | Certified Professional Financial for Non Finance | batch_aktif | Batch 21, 2026-09-16 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-114 | Certified Financial Planner Professional | batch_aktif | Batch 22, 2026-09-09 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-311 | Certified Data Science using Excel Associate | batch_aktif | Batch 12, 2026-09-17 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-208 | Certified Corporate Forensic Auditor | batch_aktif | Batch 19, 2026-09-22 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-113 | Certified Business Continuity Management | batch_aktif | Batch 15, 2026-09-24 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-237 | Certified Audit Management System ISO 19011:2026 | batch_aktif | Batch 13, 2026-09-29 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-283 | Certified Lean Six Sigma Yellow Belt Professional | batch_aktif | Batch 8, 2026-11-12 | 32 JP | **Rp750.000** ✓ tersampel | batch reguler nyata, terkonfirmasi live |
| w-124 | Certified Internal Audit Professional Advanced | ⚠️ tidak konsisten antar-cek | Batch 99 (placeholder) — listing sempat tampilkan 08 Sept 2026, tapi detail hanya tampilkan Batch 99 | 32 JP | Rp750.000 (standar, belum ada batch reguler terbuka saat dicek) | listing vs detail tidak sinkron — verifikasi ulang manual sebelum go-live |
| w-85 | Certified Information Technology Auditor Professional | ⚠️ hasil sampel tidak konsisten | 2 kali cek: sekali muncul Batch 99/Rp375rb, sekali "belum dibuka" tanpa harga sama sekali | 32 JP | Rp750.000 (standar, status batch belum pasti) | **cek manual sebelum go-live** — kemungkinan race condition saat render halaman |
| w-179 | Certified Audit SMK3 Professional | Batch 99 (data ganjil: jam batch 23:27–23:29, 2 menit) | Batch 99, 2026-12-31 | 32 JP | Rp750.000 (standar, belum ada batch reguler terbuka) | data waktu di halaman situs terlihat glitch — bukan sesuatu yang perlu direplikasi ke bot |
| w-71 | Certified Professional Corporate Social Responsibility | Batch 99 aktif ("Daftar Sekarang") | Batch 99, 2030-12-31 | 32 JP | Rp750.000 (standar; yang aktif saat ini cuma batch resertifikasi) | |
| w-75 | Certified Anti Fraud Professional (ISO 37001) | Batch 99 aktif | Batch 99+20, 2030-12-31 | 32 JP | Rp750.000 (standar; yang aktif saat ini cuma batch resertifikasi) | |
| w-103 | Certified Governance, Risk, and Compliance Professional Advanced | Batch 99 aktif | Batch 99, 2030-12-31 | 32 JP | Rp750.000 (standar; yang aktif saat ini cuma batch resertifikasi) | |
| w-154 | Certified Social Media Management Professional | Batch 99 aktif | Batch 99+16, 2030-12-31 | 32 JP | Rp750.000 (standar; yang aktif saat ini cuma batch resertifikasi) | |
| w-70 | Certified Scrum Master Professional | Batch 99 aktif | Batch 99, 2039-12-31 | 32 JP | **Rp750.000 standar** (Rp375.000 ✓ tersampel = harga resertifikasi) | dikonfirmasi tim: Batch 99 = resertifikasi |
| w-73 | Certified Risk Based Audit Professional | Batch 99 aktif | Batch 99, 2039-12-31 | 32 JP | Rp750.000 (standar; yang aktif saat ini cuma batch resertifikasi) | |
| w-156 | Certified Information Security Professional based on ISO 27001 | Batch 99 aktif | Batch 99+13, 2039-12-31 | 32 JP | Rp750.000 (standar; yang aktif saat ini cuma batch resertifikasi) | |
| w-224 | Certified Risk Mgmt & Risk Analysis Using Oracle PRA | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 99) = Rp375.000 | 32 JP | Rp750.000 (standar untuk peserta baru; batch terakhir tercatat = resertifikasi) | |
| w-87 | Certified Human Resource Management Professional | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 99) = Rp375.000 | 32 JP | Rp750.000 (standar untuk peserta baru; batch terakhir tercatat = resertifikasi) | |
| w-307 | Certified Data Visualization Professional | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 99) = Rp375.000 | 32 JP | Rp750.000 (standar untuk peserta baru; batch terakhir tercatat = resertifikasi) | |
| w-69 | Certified Quality Management Professional Based on ISO 9001:2015 | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 16) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | batch reguler terakhir (bukan resert) — mengkonfirmasi standar |
| w-122 | Certified Strategic Management Professional | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 18) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-72 | Certified Data Science Associate | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 7) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-138 | Certified Enterprise Architecture Associate (CEAA) | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 8) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-153 | Certified Financial Risk Management Profesional | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 17) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-169 | Certified Human Resource Business Partner | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 3) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-88 | Certified IT Project Management in Practices | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 5) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-170 | Certified Fundamental Accounting Associate | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 14) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-218 | Certified Audit Professional Government | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 2) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-277 | Certified Supply Chain Professional | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 12) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-284 | Certified Asset Management Professional based on ISO 55001 | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 1) = **Rp750.000** ✓ tersampel | 32 JP | **Rp750.000** ✓ tersampel | |
| w-220 | Certified Maturity Risk Management | tidak ada batch aktif | "Batch belum dibuka" — **tidak ada data harga referensi sama sekali** | 32 JP | Rp750.000 (standar — belum pernah ada batch yang selesai untuk dijadikan referensi harga) | |
| w-323 | Certified IT Service Management Leadership | tidak ada batch aktif | "Batch belum dibuka" — **tidak ada data harga referensi sama sekali** | 32 JP | Rp750.000 (standar — belum ada referensi) | |
| w-60 | Certified Python for Data Science Associate | tidak ada batch aktif | "Batch belum dibuka" — **tidak ada data harga referensi sama sekali** | 32 JP | Rp750.000 (standar — belum ada referensi) | |
| w-76 | Certified Risk Management Professional Advance | tidak ada batch aktif | "Batch belum dibuka" — **tidak ada data harga referensi sama sekali** | 32 JP | Rp750.000 (standar — belum ada referensi) | |
| w-74 | Certified Environment Management System based on ISO 14001 | tidak ada batch aktif | "Batch belum dibuka" — **tidak ada data harga referensi sama sekali** | 32 JP | Rp750.000 (standar — belum ada referensi) | |
| w-108 | Certified Financial Reporting Standard | tidak ada batch aktif | "Batch belum dibuka" — **tidak ada data harga referensi sama sekali** | 32 JP | Rp750.000 (standar — belum ada referensi) | |
| w-313 | Certified Communication Skill for Business | tidak ada batch aktif | "Batch belum dibuka" — tidak ada data harga referensi | 32 JP | Rp750.000 (standar) | ✓ **klarifikasi todo lama:** canonical URL halaman ini persis sama dengan `comm-skill-business` (BNSP) — **bukan duplikat, ini program yang sama**, hanya listing menampilkan tanpa suffix "(BNSP)" secara tidak konsisten. Cukup satu baris di KB untuk program ini. |
| w-325 | Master n8n Automation & AI Agents | batch_aktif | Batch 10, 2026-09-16 | 16 JP | **Rp199.000** ✓ tersampel | mini workshop, Zoom 09:00-14:00 WIB |
| w-329 | Data Analysis & Dashboard Creation with Google Looker Studio | tidak ada batch aktif | "Batch belum dibuka" — listing sempat tampilkan 22 Sept 2026 (tidak akurat), tidak ada data harga | 16 JP | tidak ada data harga sama sekali | mini workshop — ⚠️ **listing tidak sinkron dengan detail**, jangan percaya tanggal listing tanpa cek detail |
| w-246 | Mini Workshop Cultivating Corporate Excellence: GRC & GCG | tidak ada batch aktif | "Batch belum dibuka"; harga batch terakhir (Batch 2) = **GRATIS** | 16 JP | tidak ada data harga standar — hanya ada histori gratis | mini workshop — ⚠️ jangan sebut "gratis" sebagai harga tetap, itu histori promo batch lalu |

**Yang masih harus dikerjakan tim sebelum go-live:**
1. **Semua 37 baris "Certified X" + 3 mini workshop sudah disampel langsung** dari halaman detail (2026-09-03) — harga Rp750.000 untuk peserta baru sekarang berbasis data nyata, bukan asumsi lagi. Yang masih perlu dicek ulang mendekati go-live: `w-124` dan `w-85` — hasil sampelnya **tidak konsisten** antar percobaan (kemungkinan race condition saat halaman baru dimuat, sebelum data batch selesai ter-render). Cek manual keduanya sebelum dipakai live.
2. **Temuan penting: listing utama situs bisa tidak sinkron dengan status riil di halaman detail** (bukti: `w-329` listing tampilkan 22 Sept 2026, detail bilang belum ada batch; `w-124` juga tidak sinkron). Kolom `status`/`tanggal_batch` final di Google Sheet sebaiknya diambil dari halaman detail masing-masing, bukan dari listing `/dilatih-workshop` saja.
3. `w-179` datanya sendiri terlihat glitch di situs (jam batch cuma 2 menit: 23:27–23:29) — bukan sesuatu yang perlu ditiru bot, cukup treat sebagai "belum ada batch reguler".
4. ✅ **Selesai:** klarifikasi w-313 — dicek langsung, canonical URL-nya identik dengan `comm-skill-business` (BNSP). Ini **bukan duplikat**, satu program yang sama — cukup satu baris di KB final, gunakan data dari entri BNSP.
5. Isi `durasi`, `lokasi` (dari sampel: dominan Zoom), `syarat_peserta`, `tersedia_iht`, `ringkasan`, `url` (gunakan slug canonical dari hasil cek, bukan `/dilatih-workshop/<angka>`).
6. **Tambahkan produk resertifikasi (Rp375.000, kode Batch 99) sebagai baris/entitas terpisah di KB** — bot perlu tahu ini eksis untuk menjawab kalau ditanya, tapi tidak boleh menawarkannya ke calon peserta baru (aturan mutlak #9 di `system-prompt-bot.md`).
7. Tandai untuk tiap program apakah ini alternatif non-BNSP dari salah satu program BNSP (berguna untuk pertanyaan perbandingan — lihat `system-prompt-bot.md`).
8. `w-246` (GRC & GCG): konfirmasi apakah "gratis" di Batch 2 adalah kebijakan tetap mini workshop ini atau promo satu kali yang tidak akan berulang — situsnya sendiri tidak menyatakan harga standar untuk batch berikutnya.

---

## Tab 2 — `faq`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | teks | nomor urut |
| `pertanyaan_kanonik` | teks | bentuk baku pertanyaan |
| `variasi_pertanyaan` | teks | variasi bahasa sehari-hari, dipisah `;` — membantu AI mencocokkan |
| `jawaban` | teks | jawaban final, nada sesuai `brand-voice.md` bagian WhatsApp |
| `kategori` | enum | umum / harga / jadwal / sertifikat / korporat |
| `boleh_dijawab_bot` | ya/tidak | `tidak` = paksa handoff meski AI "tahu" jawabannya |

### Isi awal (starter set — tim boleh menambah)

| id | pertanyaan_kanonik | variasi_pertanyaan | kategori | boleh_dijawab_bot |
|---|---|---|---|---|
| 1 | Sertifikat BNSP diakui di mana saja? | diakui perusahaan?; berlaku nasional? | umum | ya |
| 2 | Berapa masa berlaku sertifikat BNSP? | sertifikat expired?; perlu perpanjang? | sertifikat | ya |
| 3 | Apa syarat pendidikan minimal peserta? | lulusan SMA bisa?; minimal S1? | umum | ya |
| 4 | Bagaimana cara mendaftar? | cara daftar?; link pendaftaran? | umum | ya |
| 5 | Apakah bisa cicilan / metode pembayaran apa saja? | bisa dicicil?; bayar pakai apa? | harga | **tidak** |
| 6 | Apakah ada diskon / harga khusus? | ada promo?; bisa nego harga? | harga | **tidak** |
| 7 | Bagaimana kalau tidak lulus uji kompetensi? | kalau gagal gimana?; ada garansi lulus? | sertifikat | **tidak** |
| 8 | Bagaimana proses in-house training untuk perusahaan? | bisa in-house?; harga korporat? | korporat | **tidak** — selalu handoff ke tim B2B |
| 9 | Apa bedanya sertifikasi BNSP dengan workshop biasa? | bedanya apa?; mending yang mana? | umum | ya — **jelaskan fakta, jangan rekomendasikan** |
| 10 | Program apa saja yang bisa dijadikan in-house/korporat? | bisa in-house?; ada paket korporat? | korporat | ya — cukup arahkan ke jalur B2B, jangan bahas harga |
| 11 | Apa bedanya harga Rp750.000 dan Rp375.000 yang saya lihat di web? | kok harganya beda?; harga resertifikasi berapa? | harga | ya — **hanya untuk yang sudah pernah bersertifikat**, jangan tawarkan ke peserta baru |
| 12 | Program yang saya cari kok tidak ada di daftar? | gak ada di katalog?; belum ditawarkan ya? | umum | ya — **catat minat, jangan eskalasi** (lihat §Program tidak ditemukan di `system-prompt-bot.md` aturan #11) |

Baris `boleh_dijawab_bot = tidak` tetap disimpan di KB (untuk deteksi topik oleh AI Agent), tapi jawabannya tidak pernah dikirim otomatis — AI wajib memanggil tool `eskalasi` begitu mendeteksi kategori ini. Baris #9 sengaja `boleh_dijawab_bot = ya` tapi dengan catatan khusus: bot boleh memaparkan perbedaan BNSP vs workshop secara faktual, tapi dilarang merekomendasikan salah satu (lihat aturan di `system-prompt-bot.md`).

---

## Tab 3 — `prioritas` (baru)

Menyimpan bobot skor prioritas supaya tim bisa menyetel ulang tanpa menyentuh workflow n8n. n8n membaca tab ini di setiap perhitungan skor (tool `hitung_prioritas`).

| Kolom | Tipe | Keterangan |
|---|---|---|
| `sinyal` | teks | nama sinyal, harus persis cocok dengan yang dicek n8n — jangan ubah nama tanpa koordinasi teknis |
| `skor` | angka | bobot yang ditambahkan bila sinyal terdeteksi |
| `aktif` | ya/tidak | set `tidak` untuk menonaktifkan sinyal tanpa menghapus baris |

### Isi awal

| sinyal | skor | aktif |
|---|---|---|
| peserta_aktif_kendala_akses | 50 | ya |
| peserta_aktif_kendala_pembayaran | 50 | ya |
| peserta_aktif_kendala_sertifikat | 35 | ya |
| peserta_aktif_kendala_jadwal | 30 | ya |
| lead_b2b_teridentifikasi | 30 | ya |
| b2b_20_peserta_atau_lebih | 15 | ya |
| sinyal_siap_beli | 30 | ya |
| inquiry_umum | 10 | ya |
| menunggu_2_jam | 10 | ya |
| menunggu_4_jam | 20 | ya |

Detail penuh model skoring, pemetaan ke prioritas Chatwoot (`urgent`/`high`/`medium`/`low`), dan cara mengkalibrasi ulang: `labelling-dan-prioritas.md`.

---

## Tab 4 — `technical_triage` (baru)

Menyimpan skrip pengumpulan info per sub-kategori technical issue, dibaca WF-1 saat user memilih jalur "Saya sudah terdaftar — ada kendala".

| Kolom | Tipe | Keterangan |
|---|---|---|
| `sub_kategori` | enum | akses / pembayaran / sertifikat / jadwal |
| `info_wajib` | teks | daftar data yang wajib dikumpulkan sebelum handoff, dipisah `;` |
| `pesan_pembuka` | teks | kalimat pembuka bot untuk sub-kategori ini |

### Isi awal

| sub_kategori | info_wajib | pesan_pembuka |
|---|---|---|
| akses | nama; email/nomor terdaftar; program & batch; pesan error persis; sudah coba apa | "Boleh cerita lebih detail — kamu tidak bisa masuk ke mana persisnya?" |
| pembayaran | nama; kontak; program; tanggal & metode bayar; nominal; bukti transfer | "Baik, biar saya bantu cek. Kapan dan lewat metode apa kamu transfer?" |
| sertifikat | nama; kontak; program & tanggal batch; data yang salah vs yang benar | "Mohon maaf soal itu. Boleh sebutkan data yang salah dan seharusnya bagaimana?" |
| jadwal | nama; kontak; batch yang diikuti; tanggal bermasalah; permintaannya apa | "Baik, ceritakan kendalanya — mau reschedule, izin tidak hadir, atau minta rekaman?" |

---

## Tab 5 — `leads`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `timestamp` | datetime | diisi otomatis oleh WF-2 |
| `nama` | teks | dari slot filling percakapan |
| `kontak` | teks | nomor WA / kontak Chatwoot |
| `kanal` | teks | WhatsApp / IG / FB / Web widget |
| `intent` | enum | **baru** — bnsp / workshop / iht-b2b / technical / minat-baru / lain |
| `tipe` | enum | individu / korporat / peserta-aktif |
| `program_diminati` | teks | id dari tab `program` (kalau match katalog), atau "belum jelas" |
| `program_belum_ada` | teks | **baru** — teks bebas nama program/skema yang diminta TAPI tidak ada di katalog sama sekali (beda dari waitlist). Diisi tool `catat_minat_baru`. Sinyal demand untuk keputusan ekspansi katalog — tinjau tab ini berkala. |
| `jumlah_peserta` | angka | khusus korporat |
| `timeline` | teks | target waktu mulai, jika disebut |
| `sub_technical` | teks | **baru** — akses/pembayaran/sertifikat/jadwal, hanya untuk intent=technical |
| `skor` | angka | **baru** — hasil `hitung_prioritas` |
| `prioritas` | enum | **baru** — urgent/high/medium/low, sinkron dengan Chatwoot |
| `status` | enum | baru / dijawab_bot / handoff / follow_up / tercatat_minat_baru / closed |
| `conversation_id` | teks | ID percakapan Chatwoot — kunci untuk WF-3 & WF-4 |

Tab ini kosong di awal — WF-2 yang mengisi otomatis setiap ada percakapan baru.

---

## Catatan pemeliharaan

Sebutkan di dokumen `keputusan-dan-arsitektur.md` §9: **harus ada pemilik KB** yang bertanggung jawab memperbarui tab `program` (terutama `tanggal_batch`, `status`, dan sekarang juga katalog workshop) setiap kali ada perubahan — idealnya begitu batch baru dibuka/penuh, bukan menunggu siklus review bulanan. Bobot di tab `prioritas` juga perlu ditinjau ulang setelah 2–3 minggu data berjalan (lihat `labelling-dan-prioritas.md`). Tanpa pemilik yang jelas, KB basi dalam hitungan minggu dan bot ikut menjawab/memprioritaskan salah.
