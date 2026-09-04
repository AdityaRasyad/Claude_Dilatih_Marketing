# Copy Percakapan Chatbot Dilatih

Nada: hangat, sangat personal, cepat — sesuai `marketing/brand-voice.md` §3 (WhatsApp). Semua teks di bawah adalah draf, boleh disesuaikan tim sebelum dipakai.

---

## 1. Sapaan awal + menu (input_select)

**Teks pembuka:**
> Halo! 👋 Terima kasih sudah menghubungi Dilatih. Aku asisten chat yang bakal bantu jawab cepat — kalau butuh ngobrol langsung sama tim, tinggal bilang ya. Mau tanya soal apa?

**Pilihan (5 item, tombol/list WhatsApp) — menu berbasis jalur, bukan jenis pertanyaan:**
1. Sertifikasi BNSP
2. Workshop & sertifikasi umum (non-BNSP)
3. Pelatihan untuk perusahaan (IHT/B2B)
4. Saya sudah terdaftar — ada kendala
5. Bicara dengan tim

Pertanyaan spesifik (biaya, syarat, jadwal) ditanyakan lagi *setelah* memilih jalur 1/2, supaya jawabannya diambil dari baris KB yang tepat (BNSP vs workshop).

---

## 2. Jawaban deterministik — jalur 1 (Sertifikasi BNSP)

> Saat ini kami punya 15 program sertifikasi BNSP di 4 bidang: Data & AI, IT, Komunikasi, dan Manajemen. Ada program yang lagi kamu incar, atau mau aku bantu carikan yang sesuai kebutuhanmu?

*(lanjutan: kalau user sebut nama program → jawab dari tab `program` filter `jalur = bnsp`; kalau tidak spesifik → serahkan ke AI Agent untuk menggali kebutuhan. Pertanyaan biaya/syarat/jadwal lanjutan dijawab dari baris yang sama.)*

---

## 3. Jawaban deterministik — jalur 2 (Workshop & sertifikasi umum)

> Selain sertifikasi BNSP, kami juga punya workshop dan pelatihan umum yang fokus ke skill praktis tanpa uji kompetensi resmi. Ada topik tertentu yang lagi kamu cari?

*(lanjutan: dari tab `program` filter `jalur = workshop`. **Catatan implementasi:** baris workshop belum terisi di KB per revisi ini — lihat `knowledge-base-template.md` §1b, blocker minggu 1.)*

**Kalau user tanya beda BNSP vs workshop di titik ini** (bukan lewat AI Agent, tapi masih dalam alur menu):
> Bedanya: BNSP itu sertifikasi resmi negara dengan uji kompetensi, diakui secara nasional. Workshop kami fokus ke praktik langsung tanpa uji kompetensi formal — biasanya lebih singkat dan fleksibel. Dua-duanya solid, tinggal sesuai kebutuhanmu. Mau aku bantu sambungkan ke tim buat diskusi lebih lanjut?

---

## 3b. Program/skema yang tidak ada di katalog sama sekali

Beda dari waitlist (§2/§3 — program ADA di katalog, cuma belum ada batch). Ini untuk kasus program/skema yang memang **tidak pernah** ditawarkan Dilatih, misalnya calon peserta menyebut skema BNSP tertentu yang bukan bagian dari 15 program BNSP kami.

**Pesan saat program tidak ditemukan:**
> Untuk {{nama_program_yang_diminta}}, saat ini belum jadi bagian dari program yang kami tawarkan. Boleh aku catat minatmu? Kalau nanti kami buka program ini, kamu jadi salah satu yang pertama kami kabari. Boleh tahu nama dan kontak yang bisa dihubungi?

**Setelah nama+kontak didapat — TIDAK handoff, cukup catat:**
> Sudah aku catat ya! Ada hal lain yang bisa aku bantu?

Ini **tidak memicu eskalasi ke manusia** — sengaja dibuat selesai sendiri oleh bot supaya sinyal minat program baru (data berharga untuk keputusan ekspansi katalog) tercatat cepat tanpa membebani antrean manusia. Kalau user lanjut bertanya hal lain yang bot tidak yakin jawabannya, baru masuk aturan eskalasi biasa.

---

## 4. Jalur IHT/B2B (pilihan 3) — BNSP maupun non-BNSP

**Pesan kualifikasi:**
> Untuk pelatihan in-house, kami sudah biasa menangani tim dari berbagai skala — termasuk PwC, Peruri, dan Pemkab Bandung Barat, baik untuk program bersertifikat BNSP maupun pelatihan umum. Biar bisa saya arahkan ke tim yang tepat, boleh tahu:
> 1) Nama perusahaan
> 2) Perkiraan jumlah peserta
> 3) Butuh yang bersertifikat BNSP atau cukup pelatihan umum?
> 4) Kebutuhan/topik pelatihan yang dicari

*(setelah data terkumpul → handoff otomatis, label `intent:iht-b2b` + `tipe:korporat`)*

**Pesan sebelum handoff B2B:**
> Terima kasih! Aku sudah teruskan info ini ke tim kami yang pegang program korporat — mereka bakal follow up dengan penawaran yang sesuai. Biasanya respon dalam 1x24 jam kerja ya.

---

## 5. Jalur Technical Issue (pilihan 4)

**Sub-menu (input_select kedua):**
> Baik, boleh cerita kendalanya soal apa?
1. Tidak bisa akses akun / login / materi
2. Pembayaran / invoice
3. Sertifikat belum terbit / data salah
4. Jadwal & kehadiran

**Pesan pembuka per sub-kategori** (dari tab `technical_triage`, lihat `knowledge-base-template.md`):
- Akses: *"Boleh cerita lebih detail — kamu tidak bisa masuk ke mana persisnya?"*
- Pembayaran: *"Baik, biar saya bantu cek. Kapan dan lewat metode apa kamu transfer?"*
- Sertifikat: *"Mohon maaf soal itu. Boleh sebutkan data yang salah dan seharusnya bagaimana?"*
- Jadwal: *"Baik, ceritakan kendalanya — mau reschedule, izin tidak hadir, atau minta rekaman?"*

**Pesan sebelum handoff technical:**
> Oke, sudah saya teruskan lengkap ke tim kami — mereka bakal segera bantu cek ya. Mohon tunggu sebentar 🙏

*(Bot tidak pernah mencoba menyelesaikan technical issue sendiri — hanya mengumpulkan konteks lalu handoff. Jalur ini juga tidak pernah menerima follow-up marketing dari WF-3.)*

---

## 6. Pesan handoff (umum)

**Saat user minta bicara manusia:**
> Tentu, aku sambungkan ke tim kami sekarang ya. Mohon tunggu sebentar 🙏

**Saat AI eskalasi karena tidak yakin:**
> Pertanyaan ini lebih baik dijawab langsung sama tim kami biar akurat. Aku sambungkan sebentar ya.

**Di luar jam kerja (Senin–Jumat 09:00–17:00 WIB — sesuaikan dengan jam kerja aktual tim):**
> Terima kasih sudah menunggu! Saat ini di luar jam kerja tim kami, tapi pertanyaanmu sudah tercatat dan bakal dibalas begitu tim kembali online besok pagi. Ada hal lain yang bisa aku bantu jawab sekarang?

Karena semua handoff masuk satu antrean umum (tidak ada penugasan otomatis ke orang tertentu), pesan di atas sengaja tidak menyebut nama tim/PIC spesifik — cukup "tim kami".

---

## 7. Draf WhatsApp Message Template — Follow-up (WF-3)

Ketiga template ini harus diajukan lewat Meta Business Manager untuk disetujui sebelum bisa dipakai (WhatsApp mewajibkan template resmi untuk pesan di luar jendela 24 jam). **Hanya dipakai untuk `intent:bnsp` dan `intent:workshop`** — tidak pernah dikirim ke lead `intent:technical` atau `intent:iht-b2b` (lihat `spesifikasi-workflow-n8n.md` WF-3 Node 1).

### Template H+1 — Pengingat ringan
**Kategori:** Utility / Marketing (sesuaikan saat submit)
> Halo {{1}}, masih ada yang bisa kami bantu soal {{2}}? Tim Dilatih siap jawab kalau kamu punya pertanyaan lanjutan 😊

Variabel: `{{1}}` nama, `{{2}}` nama program/topik yang ditanyakan.

### Template H+3 — Bukti sosial
**Kategori:** Marketing
> Halo {{1}}, sekadar info — program sertifikasi BNSP kami sudah dipakai tim di PwC, Peruri, dan Pemkab Bandung Barat untuk upskilling karyawan mereka. Kalau kamu masih mempertimbangkan {{2}}, aku bisa bantu jawab pertanyaan apa pun sebelum kamu memutuskan.

### Template H+7 — Penawaran terakhir / waitlist
**Kategori:** Marketing
> Halo {{1}}, ini pesan terakhir dari kami soal {{2}} — kalau masih tertarik, jangan ragu balas chat ini kapan saja, kami senang bantu. Kalau belum siap sekarang, kamu tetap bisa daftar minat supaya diprioritaskan begitu ada info batch terbaru.

**Catatan submit ke Meta:**
- Bahasa: Indonesian (id)
- Pastikan variabel `{{1}}`/`{{2}}` diisi dari tab `leads` (kolom `nama`, `program_diminati`)
- Kategori "Marketing" template kena biaya per pesan lebih tinggi dari "Utility" — pertimbangkan mengajukan sebagai Utility untuk H+1 (masih dianggap kelanjutan servis) dan Marketing untuk H+3/H+7.
