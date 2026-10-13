# Dari Empat Komputer ke Miliaran Perangkat: Sejarah ARPANET, Cikal Bakal Internet

**Kata kunci utama:** sejarah ARPANET, apa itu ARPANET, ARPANET adalah, asal usul internet, jaringan komputer pertama di dunia

---

Setiap kali kamu membuka browser, streaming video, atau kirim pesan — kamu sedang memakai teknologi yang akarnya bisa ditelusuri ke satu jaringan eksperimental yang menghubungkan empat universitas di Amerika pada malam 29 Oktober 1969.

Jaringan itu bernama ARPANET. Ia tidak dirancang untuk jadi internet. Tapi tanpanya, internet tidak akan pernah ada.

---

## Kenapa Militer AS Butuh Jaringan Komputer

Latar belakangnya: Perang Dingin. Setelah Uni Soviet meluncurkan Sputnik pada 1957, pemerintah AS panik. Mereka mendirikan **ARPA** (Advanced Research Projects Agency) pada 1958 — sebuah lembaga riset khusus untuk proyek-proyek teknologi yang dianggap kritis bagi pertahanan nasional.

Salah satu masalah yang ingin dipecahkan: bagaimana jaringan komunikasi tetap berfungsi kalau sebagian infrastrukturnya dihancurkan musuh?

Komunikasi militer saat itu terpusat. Ada satu titik kendali, ada jalur-jalur kabel yang terhubung ke sana. Kalau titik pusat itu kena serangan, seluruh komunikasi putus. Ini masalah yang jelas.

Solusi yang diusulkan oleh peneliti bernama **Paul Baran** (dari RAND Corporation, 1962): jangan pakai jaringan terpusat. Pakai jaringan **desentralisasi**, di mana setiap simpul bisa mengarahkan pesan lewat jalur mana pun yang masih berfungsi. Kalau satu jalur putus, pesan otomatis cari jalur lain.

Konsep ini disebut **packet switching** — memecah data jadi paket-paket kecil, mengirimkannya secara terpisah lewat jalur yang berbeda, lalu merakitnya kembali di tujuan. Idenya revolusioner. Komputer saat itu tidak bekerja seperti itu.

---

## 1969: Jaringan Empat Node

ARPA memberi kontrak pengembangan jaringan ke sebuah perusahaan konsultan bernama BBN Technologies. Target pertama: menghubungkan empat komputer di empat lokasi berbeda.

Keempat node awal ARPANET:

1. **UCLA** (University of California, Los Angeles)
2. **SRI** (Stanford Research Institute, Menlo Park)
3. **UC Santa Barbara**
4. **University of Utah**

Perangkat yang jadi tulang punggungnya disebut **IMP** — Interface Message Processor. Ini adalah komputer khusus yang fungsinya mengelola pengiriman dan penerimaan paket data. Setiap node punya satu IMP yang terhubung ke komputer utama kampus.

Malam 29 Oktober 1969, operator di UCLA mencoba mengirim kata "LOGIN" ke SRI. Dua huruf pertama berhasil: "LO". Lalu sistem crash.

Pesan pertama yang pernah dikirim lewat jaringan komputer adalah "LO" — sebuah kecelakaan teknis yang secara puitis terdengar seperti kata sapaan.

Satu jam kemudian, bug diperbaiki. Kata "LOGIN" berhasil dikirim penuh. ARPANET secara resmi bekerja.

---

## Cara Kerja Packet Switching

Ini bagian teknis yang paling penting untuk dipahami, karena prinsipnya masih dipakai di internet hari ini.

Sebelum packet switching, cara mengirim data lewat kabel adalah **circuit switching** — seperti sambungan telepon konvensional. Kamu "menyewa" jalur komunikasi selama percakapan berlangsung. Jalur itu tidak bisa dipakai orang lain sampai kamu selesai. Tidak efisien untuk transmisi data komputer.

Packet switching bekerja berbeda:

1. Data dipecah jadi paket-paket kecil, masing-masing punya **header** yang berisi alamat pengirim, alamat tujuan, dan nomor urut paket.
2. Setiap paket dikirim secara **independen** — bisa lewat jalur yang berbeda-beda.
3. Di titik tujuan, paket-paket dikumpulkan dan disusun ulang sesuai nomor urut.

Keunggulannya: jaringan lebih efisien (satu jalur bisa dipakai banyak pengguna sekaligus), dan lebih tahan gangguan (kalau satu jalur sibuk atau rusak, paket cari jalur lain).

Hampir semua transmisi data di internet modern — termasuk video yang kamu stream sekarang — masih memakai prinsip yang sama.

---

## Email Lahir di ARPANET

Pada 1971, insinyur **Ray Tomlinson** dari BBN Technologies menambahkan sesuatu ke ARPANET yang tidak diminta siapa pun: sistem pengiriman pesan antarpengguna.

Ia membutuhkan cara untuk membedakan nama pengguna dari nama komputer tujuan. Solusinya: pakai simbol **@** sebagai pemisah. Format `pengguna@komputer` itu yang ia ciptakan — dan format itu masih dipakai di setiap alamat email di dunia hingga hari ini.

Pesan email pertama dikirim dari satu terminal ke terminal lain di ruangan yang sama. Tomlinson mengaku tidak ingat isinya — kemungkinan hanya barisan karakter acak untuk menguji apakah sistemnya bekerja.

Yang ia tidak duga: fitur "kecil" itu akan jadi salah satu cara komunikasi paling dominan dalam sejarah manusia.

---

## Dari ARPANET ke Internet: Protokol TCP/IP

ARPANET berkembang pesat sepanjang 1970-an. Tapi muncul masalah baru: bagaimana menghubungkan ARPANET dengan jaringan-jaringan lain yang mulai bermunculan? Setiap jaringan punya "bahasa" sendiri.

Solusinya datang dari **Vint Cerf** dan **Bob Kahn** pada 1974 — dua orang yang sering disebut "Bapak Internet". Mereka merancang **TCP/IP** (Transmission Control Protocol / Internet Protocol): seperangkat aturan universal yang bisa dipakai jaringan manapun untuk berkomunikasi satu sama lain.

TCP mengatur cara memecah, mengirim, dan merakit kembali paket data. IP mengatur pengalamatan — setiap perangkat di jaringan punya alamat IP unik, seperti kode pos digital.

Pada 1 Januari 1983, ARPANET beralih sepenuhnya ke TCP/IP. Tanggal ini kadang disebut "hari lahir internet" yang sesungguhnya — karena sejak saat itu, berbagai jaringan terpisah bisa saling terhubung membentuk satu jaringan global.

**Internet** secara harfiah berarti "inter-network" — jaringan di antara jaringan-jaringan.

---

## Akhir ARPANET, Awal Internet Sipil

Sepanjang 1980-an, ARPANET mulai dibagi. Jaringan militer dipisah ke **MILNET**. Komunitas akademis dan riset mendapat akses lewat **NSFNET** yang dibangun National Science Foundation.

ARPANET secara resmi dinonaktifkan pada **28 Februari 1991**. Saat itu, jaringan yang ia bantu ciptakan sudah berkembang jauh melampaui yang bisa dibayangkan siapa pun di laboratorium UCLA pada 1969.

Setahun kemudian, 1992, **Tim Berners-Lee** meluncurkan World Wide Web — sistem hyperlink yang mengubah internet dari alat riset menjadi platform publik. Browser pertama, server web pertama, URL pertama: semuanya lahir dari fondasi yang ARPANET letakkan.

---

## Warisan yang Tidak Terlihat

ARPANET tidak pernah masuk ke rumah-rumah orang biasa. Tidak ada iklannya, tidak ada peluncuran produknya. Ia berjalan di ruang-ruang server kampus dan laboratorium militer selama 22 tahun, lalu dimatikan begitu saja.

Tapi hampir setiap teknologi jaringan yang ada sekarang — router, protokol internet, email, bahkan konsep dasar cloud computing — bisa dilacak akarnya ke keputusan-keputusan desain yang dibuat dalam proyek itu.

Packet switching masih jadi tulang punggung transmisi data. TCP/IP masih jadi bahasa universal jaringan. Konsep desentralisasi — bahwa jaringan tidak boleh punya satu titik kegagalan — masih jadi prinsip arsitektur internet hingga hari ini.

Ini bukan warisan kecil. Ini fondasi dari hampir semua infrastruktur digital yang kita andalkan setiap hari.

---

## Pelajari Infrastruktur Jaringan secara Profesional

Memahami bagaimana jaringan komputer bekerja — dari packet switching hingga arsitektur modern — adalah kompetensi inti bagi profesional IT. Bukan hanya untuk engineer jaringan, tapi juga untuk siapa pun yang mengelola sistem, keamanan, atau operasional teknologi.

Cek program pelatihan bersertifikat di Dilatih:

- **[Certified IT Service Operations Staff BNSP](https://dilatih.co/dilatih-workshop/certified-it-service-operations-staff-bnsp)** — operasional layanan IT sesuai standar industri
- **[Certified IT Project Manager BNSP](https://dilatih.co/dilatih-workshop/certified-it-project-manager-bnsp)** — manajemen proyek teknologi bersertifikat resmi
- **[Certified Information Security Professional (ISO 27001)](https://dilatih.co/dilatih-workshop/certified-information-security-professional-based-on-iso-27001)** — standar keamanan informasi internasional
- **[Certified IT Auditor BNSP](https://dilatih.co/dilatih-workshop/certified-it-auditor-bnsp)** — audit sistem dan infrastruktur teknologi

---

*Artikel terkait:*
- *[Dari Timbangan Abad 15 ke Alamat Email: Sejarah Simbol @](https://dilatih.co/blog/sejarah-simbol-at-asal-usul-email)*
- *[Di Balik Layar Two-Factor Authentication (2FA): Cara Kerja dan Mengapa Akun Kamu Butuh Ini](https://dilatih.co/blog/di-balik-layar-two-factor-authentication-2fa)*
- *[Apa Itu Incognito Mode dan Seberapa Aman Sebenarnya?](https://dilatih.co/blog/apa-itu-incognito-mode-dan-seberapa-aman-sebenarnya)*

---

**Meta description (≤160 karakter):**
ARPANET lahir dari proyek militer 1969 dan hanya menghubungkan 4 komputer. Begini sejarahnya jadi fondasi seluruh internet yang kamu pakai hari ini.

**Slug yang disarankan:** `arpanet-sejarah-asal-usul-internet`
