# Template Balasan WA Bisnis Dilatih — Skenario Umum

*Diperbarui: Sep 2026 · Untuk template campaign aktif (CITA BNSP, dll.) lihat file campaign masing-masing*

---

## Cara Pakai

1. Buka WhatsApp Business → Pengaturan → Alat Bisnis → Pesan Cepat
2. Simpan setiap template dengan shortcut `/t0`, `/s1`, `/s2`, `/s4`, dst.
3. Saat chat masuk, ketik `/` untuk akses cepat, pilih template yang sesuai
4. Ganti semua placeholder `[...]` sebelum kirim

---

## Placeholder Lintas Template

| Placeholder | Isi dengan |
|---|---|
| `[NAMA]` | Nama penanya (cek nama profil WA atau tanya di awal) |
| `[PROGRAM]` | Nama pelatihan/sertifikasi yang ditanyakan |
| `[LINK_PROGRAM]` | URL halaman program, mis. `dilatih.co/dilatih-workshop/certified-data-analyst-bnsp` |
| `[JADWAL]` | Tanggal batch aktif, mis. "16–17 Oktober 2026" |
| `[HARGA]` | Harga resmi program, mis. "Rp3.500.000" |
| `[LINK_FORM]` | URL form pendaftaran batch tersebut |
| `[LINK_WAITLIST]` | https://bit.ly/FormWaitingListDilatih |

---

## T0 — Pembuka Umum (Pesan Ambigu)

**Kapan dipakai:** Pesan masuk tidak menyebut program spesifik, atau niatnya belum jelas.

> *Contoh trigger:* "Halo, ada info pelatihan?" / "Mau tanya-tanya dulu boleh?"

**Shortcut WA Business:** `/t0`

```
Halo! Makasih udah hubungi Dilatih 👋

Kami punya program pelatihan & sertifikasi BNSP — dari data science, AI, digital marketing, sampai IT audit & keamanan siber.

Lagi cari yang mana, atau mau lihat daftar lengkapnya dulu? Kalau ada bidang tertentu yang diminati, cerita di sini aja supaya bisa saya bantu carikan yang paling pas.

👉 Lihat semua program: https://dilatih.co/courses
```

---

## S1 — Program Ada, Jadwal Aktif

**Kapan dipakai:** Lead masuk lewat tombol WA di halaman program, atau tanya program yang sudah ada batch terbuka.

> *Contoh trigger:* "Halo Dilatih, saya tertarik dengan *[PROGRAM]* ([link]). Mohon info jadwal & biaya."

**Shortcut WA Business:** `/s1`

### Checklist Sebelum Closing

- [ ] Nama penanya (ambil dari profil WA atau tanya)
- [ ] Individu atau mewakili perusahaan? (kalau perusahaan → eskalasi ke jalur B2B)
- [ ] Seberapa urgent, mau batch terdekat atau bisa fleksibel?

### Balasan Pertama

```
Halo [NAMA]! 😊

Pas banget, *[PROGRAM]* masih buka pendaftaran untuk batch ini:

📅 *[JADWAL]* · Online via Zoom
🏅 Sertifikat *BNSP resmi* (diakui secara nasional)
🎬 Dapat akses rekaman sesi
💰 *[HARGA]*

Daftar untuk diri sendiri, atau ada rekan tim yang ikut sekalian?

Kalau sudah siap, langsung isi form di sini ya:
👉 *[LINK_FORM]*
```

### Follow-up 24–48 Jam

```
Halo lagi [NAMA] 👋

Sekadar follow-up soal *[PROGRAM]* — batch-nya masih buka. Kalau ada yang belum jelas atau mau tanya dulu, balas di sini aja.

Link form: *[LINK_FORM]*
```

---

## S2/S3 — Program Belum Tersedia, Bisa Diadakan Min. 5 Peserta

**S2 — Kapan dipakai:** Lead masuk dari artikel blog (mis. artikel sertifikasi BNSP di `dilatih.co/blog/...`) menanyakan program yang *belum ada sama sekali* di katalog Dilatih.

> *Contoh trigger:* "Halo Dilatih, saya tertarik dengan *Sertifikasi BNSP [PROGRAM]* (https://dilatih.co/blog/...). Mohon info jadwal & biaya."

**S3 — Kapan dipakai:** Lead organik tanya langsung program yang Dilatih belum pernah selenggarakan tapi secara teknis bisa diadakan.

> *Contoh trigger:* "Halo, ada kelas [PROGRAM] tidak ya?"

Respons untuk S2 dan S3 sama. Sumber masuknya beda, penanganannya satu alur.

**Shortcut WA Business:** `/s2`

### Checklist Sebelum Eskalasi

- [ ] Nama & nomor WA aktif
- [ ] Individu atau mewakili perusahaan? (kalau perusahaan: nama perusahaan, jumlah peserta potensial)
- [ ] Timeline: kapan butuh sertifikasinya?
- [ ] Punya kelompok peserta sendiri, atau mau masuk waitlist publik?

### Balasan Pertama

```
Halo [NAMA]! 😊

Makasih udah tertarik dengan *[PROGRAM]*. Program ini belum masuk ke jadwal rutin kami sekarang — tapi bisa kami adakan dengan dua opsi:

1️⃣ *Kumpulkan tim sendiri* — min. 5 peserta dari perusahaan atau komunitasmu, kami siapkan batch khusus
2️⃣ *Masuk waitlist publik* — isi form di bawah, begitu 5 peminat terkumpul dari berbagai pihak, kami langsung kabari
👉 *https://bit.ly/FormWaitingListDilatih*

Kamu ikut sendiri, atau ada tim yang juga butuh sertifikasi ini?
```

### Balasan Lanjutan — Lead Bilang "Sedang Cari Tim"

**Kapan dipakai:** Lead sudah niat, bilang sedang proses kumpulkan peserta. Shortcut: `/s2b`

```
Wah oke, semangat nyarinya! 😄

Sambil proses kumpul tim, isi form waitlist ini dulu ya supaya kami bisa catat:
👉 *https://bit.ly/FormWaitingListDilatih*

Ada kolom estimasi jumlah peserta & timeline di sana — isi sesuai rencana sekarang juga tidak masalah. Begitu timnya fix, kami yang hubungi untuk atur jadwal & detailnya.
```

### Follow-up 24–48 Jam

```
Halo lagi [NAMA] 👋

Masih tertarik dengan *[PROGRAM]*? Kalau mau, langsung isi form waitlist ini — begitu kuota 5 peserta terpenuhi, kamu yang pertama kami kabari.

👉 *https://bit.ly/FormWaitingListDilatih*
```

---

## S4 — Program Ada di Katalog, Belum Ada Jadwal Aktif

**Kapan dipakai:** Lead menanyakan program yang sudah tercantum di `dilatih.co/courses` tapi batch-nya belum dibuka karena masih menunggu min. 5 peminat terkumpul.

> *Contoh trigger:* "Halo, kapan ada jadwal untuk [PROGRAM]?" / "Masih ada kelas [PROGRAM]?"

**Shortcut WA Business:** `/s4`

### Checklist Sebelum Eskalasi

- [ ] Nama & nomor WA aktif
- [ ] Individu atau mewakili tim? (kalau tim: berapa orang?)
- [ ] Timeline butuhnya
- [ ] Bersedia tunggu waitlist, atau butuh opsi privat yang bisa lebih cepat?

### Balasan Pertama

```
Halo [NAMA]! 😊

*[PROGRAM]* saat ini batch-nya belum terjadwal karena masih menunggu min. 5 peminat, begitu kuota terpenuhi pendaftaran akan langsung kami buka.

Terdapat dua pilihan yang bisa kakak pilih:

1️⃣ *Masuk waitlist* — isi form di bawah, dapat notifikasi pertama kali kalau batch sudah bisa dibuka
👉 *https://bit.ly/FormWaitingListDilatih*
2️⃣ *Bawa tim sendiri* — ada min. 5 orang dari kantor yang butuh? Bisa kami jadwalkan batch khusus lebih cepat

Lagi cari untuk diri sendiri atau ada tim yang ikut juga?

```

### Balasan Lanjutan — Lead Bilang "Sedang Cari Tim"

**Kapan dipakai:** Lead sudah niat, sedang proses kumpulkan peserta. Shortcut: `/s4b`

```
Wah oke, semangat nyarinya! 😄

Sambil proses kumpul tim, isi form waitlist ini dulu ya supaya kami bisa catat:
👉 *https://bit.ly/FormWaitingListDilatih*

Ada kolom estimasi jumlah peserta & timeline di sana — isi sesuai rencana sekarang juga tidak masalah. Begitu timnya fix, kami yang hubungi untuk atur jadwal & detailnya.
```

### Follow-up 24–48 Jam

```
Halo lagi [NAMA] 👋

Sekadar follow-up soal *[PROGRAM]* — posisinya masih menunggu kuota 5 peserta. Langsung isi form waitlist ini supaya dapat kabar duluan kalau batch sudah bisa dibuka:

👉 *https://bit.ly/FormWaitingListDilatih*
```

---

## Appendix A: Tabel Eskalasi

| Situasi | Tindakan |
|---|---|
| Penanya menyebut nama perusahaan / mewakili tim | Eskalasi ke PIC B2B, arahkan ke `dilatih.co/partnership` |
| Butuh lebih dari 10 peserta | Langsung tawarkan in-house training, koordinasi ke founder |
| Komplain teknis atau masalah pasca-pelatihan | Jangan selesaikan di WA, minta data lengkap dan eskalasi ke tim internal |
| Instansi pemerintah / BUMN | Flag ke founder, ada alur pengadaan berbeda |
| Tawaran kerja sama / partnership vendor | Arahkan ke `dilatih.co/partnership`, tidak perlu dilayani lebih jauh di WA |

---

## Appendix B: Data yang Dicatat per Lead S2/S3/S4

Catat di spreadsheet demand setelah setiap chat masuk skenario ini. Data ini menentukan program mana yang diprioritaskan untuk dibuka jadwalnya.

| Field | Keterangan |
|---|---|
| Tanggal | Tanggal chat masuk |
| Nama | Nama penanya |
| Program | Program yang ditanyakan |
| Sumber | Blog / WA langsung / referral / ads |
| Tipe | Individu / Perusahaan (nama perusahaan) |
| Jumlah peserta | Estimasi peserta yang bisa ikut |
| Timeline | Kapan butuh sertifikasinya |
| Status | Waitlist / Follow-up aktif / Tidak jadi |
