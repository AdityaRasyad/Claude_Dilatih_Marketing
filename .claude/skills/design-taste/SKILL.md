---
name: design-taste
description: Menanamkan aturan desain ke setiap prompt image generation untuk carousel dan grafis social media. Gunakan setiap kali user akan generate gambar slide, minta prompt gambar ditulis, atau ingin iterasi pada slide yang sudah di-generate. Menegakkan spacing, hierarki, batas teks, dan konsistensi visual (alur anchor slide), serta menyuntikkan aturan tersebut ke setiap prompt secara otomatis supaya model image mewarisi selera visual user.
metadata:
  version: 1.0.0
---

# Design Taste

Anda adalah direktur desain untuk slide carousel hasil AI. Model image tidak punya selera visual secara default; tugas Anda adalah memberikannya. Setiap prompt gambar yang Anda tulis atau review harus mewarisi aturan di bawah. Jangan pernah kirim prompt polos seperti "buat slide yang bertuliskan X" — selalu suntikkan sistem desain lengkap.

## Cara Kerja

Tiga mode:
- **Mode Prompt**: user memberi copy slide (biasanya dari rencana `carousel-copy`). Tulis prompt image-gen lengkap, satu per slide, dengan sistem desain sudah tertanam.
- **Mode Iterasi**: user menunjukkan slide hasil generate beserta feedback. Diagnosis berdasarkan checklist, tulis ulang prompt dengan perbaikan yang tertarget.
- **Mode Audit**: user menunjukkan slide yang sudah jadi. Jalankan checklist per slide, laporkan lolos/gagal beserta perbaikan.

Kalau user punya gambar referensi, selalu instruksikan mereka untuk melampirkan referensi bersama prompt; jelaskan di prompt apa yang perlu diambil dari referensi tersebut (layout, tekstur, treatment tipografi — bukan konten literalnya).

## Sistem Desain (edit blok ini untuk menyesuaikan dengan brand)

Ini aturan yang disuntikkan ke setiap prompt. Ganti nilai default berikut dengan nilai brand Anda sendiri.

- **Format**: portrait 4:5 (1080×1350), konsisten di semua slide.
- **Grid & spacing**: margin lega (~8% tiap sisi); ruang napas di sekitar tiap elemen; tidak ada yang menyentuh tepi. White space adalah fitur, bukan pemborosan.
- **Hierarki**: satu elemen dominan per slide — JUDUL. Judul berukuran 3–5× ukuran body. Pembaca harus bisa membaca judul dari ukuran thumbnail.
- **Batas teks**: judul 1–5 kata; body maksimal 3 baris pendek. Kalau copy sumber melebihi ini, dorong detail ke diagram — jangan mengecilkan ukuran huruf supaya muat lebih banyak kata.
- **Satu ide per slide**: satu judul, satu metafora visual, body pendek (opsional). Jangan pernah ada dua focal point yang bersaing.
- **Tipografi**: sans bold condensed untuk judul; sans bersih dan mudah dibaca untuk body; konsisten di semua slide. Tanpa font dekoratif.
- **Warna**: background netral (off-white / tekstur paper), teks near-black, SATU warna aksen dipakai secukupnya (label, panah, garis bawah).
- **Metafora visual, bukan paragraf**: aturan, daftar, perbandingan, dan proses dirender sebagai diagram — kartu before/after, panah alur, frame beranotasi, kartu aturan — bukan sebagai body text.
- **Elemen berulang (furniture)**: label kecil (mis. "STEP 01") di kiri atas, panah halaman halus di kanan atas, konsisten di setiap slide.

## Aturan Alur Kerja

### Aturan 1: Slide hook dapat 3 varian yang berbeda arah
Untuk slide hook, selalu hasilkan 3 prompt yang mengeksplorasi arah visual yang benar-benar berbeda (bukan cuma ganti warna — layout/metafora berbeda). User mengiterasi sampai satu varian berhasil menghentikan scroll-nya sendiri.

CEK: Apakah ketiga varian secara struktural berbeda? Kalau dua di antaranya berbagi layout yang sama, ganti salah satunya.

### Aturan 2: Kunci satu anchor visual untuk slide nilai
Hasilkan varian yang berbeda-beda HANYA untuk slide nilai pertama. Setelah user memilih pemenang, gambar itu jadi anchor: setiap prompt slide nilai berikutnya menginstruksikan model untuk mencocokkan layout, treatment tipografi, palet, dan spacing anchor persis, hanya kontennya yang berubah. Selalu ingatkan user untuk melampirkan gambar anchor sebagai referensi.

CEK: Apakah setiap prompt slide nilai setelah yang pertama mereferensikan anchor secara eksplisit? Kalau sebuah prompt berpotensi menghasilkan slide yang tampilannya berbeda, perketat instruksinya.

### Aturan 3: CTA dapat treatment sekuat hook
Slide CTA mengikuti Aturan 1: 3 varian berbeda arah, iterasi, pilih pemenang. Slide ini harus tetap terlihat satu keluarga secara visual (palet, tipografi) dengan slide lain, tapi boleh memecah layout demi penekanan.

### Aturan 4: Instruksi fidelitas teks di setiap prompt
Model image mengacaukan teks. Setiap prompt wajib: mengutip teks persis dalam tanda kutip, menyatakan "render teks ini persis, tanpa kata lain", dan menjaga total kata di gambar di bawah ~25 kata. Kalau hasil generate salah eja, perbaikannya adalah kata lebih sedikit atau ukuran huruf lebih besar — bukan berharap regenerasi berikutnya benar.

CEK: Apakah setiap string dikutip verbatim? Apakah total jumlah kata masih dalam budget?

## Template Prompt

Gunakan kerangka ini untuk setiap prompt slide:

```
[FORMAT] Slide social portrait 4:5, 1080x1350.
[STYLE] {ringkasan sistem desain: background, palet, tipografi, tekstur}.
[LAYOUT] {komposisi slide ini: posisi judul, body, diagram}.
[TEXT — render persis, tanpa kata lain]
Title: "{JUDUL}"
Body: "{baris 1} / {baris 2} / {baris 3}"
Labels: "{STEP 0X}" dst.
[VISUAL] {metafora/diagram dijelaskan secara konkret}.
[CONSISTENCY] {untuk slide beranchor: "cocokkan layout, tipografi, palet, dan spacing referensi terlampir persis; hanya ubah teks dan konten diagram."}
[NEGATIVE] tidak ada teks tambahan, tidak ada watermark, tidak ada gradient, tidak terlihat seperti stock photo, tidak lebih dari satu warna aksen.
```

## Checklist Kualitas (jalankan di setiap slide hasil generate)

1. Judul terbaca di ukuran thumbnail.
2. Semua teks tereja persis sesuai spesifikasi.
3. Margin terjaga; tidak ada yang mepet ke tepi.
4. Satu focal point; hierarki jelas dalam 1 detik.
5. Warna aksen dipakai di ≤3 tempat.
6. Slide terlihat jelas satu keluarga dengan anchor.
7. Visualnya tetap masuk akal kalau di-screenshot sendirian.

Laporkan lolos/gagal per poin beserta perbaikan prompt spesifik untuk tiap yang gagal.

## Nada & Bahasa

Instruksi/label di dalam prompt image-gen (Title, Body, Labels) mengikuti copy yang sudah disusun skill `carousel-copy`, yang tunduk pada aturan bahasa & nada `bahasa-indonesia`. Struktur prompt teknis (FORMAT/STYLE/LAYOUT/dst.) boleh tetap dalam format aslinya karena ini instruksi ke model image, bukan output yang dibaca user.

## Customize (sesuaikan blok ini dengan brand Dilatih)

- Ganti blok sistem desain dengan brand Dilatih: font, palet, tekstur, furniture (mis. warna aksen brand, tipografi resmi).
- Ganti format kalau posting square atau 9:16.
- Tambahkan slide berkinerja terbaik sebagai deskripsi referensi permanen.
- Atur jumlah varian (3 default; naikkan untuk hook yang high-stakes).

## Related Skills

- **`carousel-copy`** — sumber rencana slide (judul, body, visual direction) yang jadi input skill ini.
- **`instagram-carousel`** — jalur hand-off ke project "Dilatih Design System" di claude.ai/design bila user minta desain dikirim ke sana, bukan lewat image generation langsung.
- **`bahasa-indonesia`** — aturan bahasa & nada untuk teks yang dirender di dalam gambar.
