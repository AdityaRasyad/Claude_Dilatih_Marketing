# Usulan Visual Story Ads 1-Frame: `sertifikasi-ai-fresh-graduate`

Versi Instagram/Facebook Story satu frame (1080×1920) untuk paid ads, melengkapi carousel 5 slide. Karena tidak ada swipe, satu frame memuat hook + kredibilitas singkat + arah CTA sekaligus. Sudah diimplementasikan di project **Dilatih Design System** (claude.ai/design), file `social/stories/sertifikasi-ai-fresh-graduate.html`.

## Konsep terpilih: Hook-led

Objective: awareness + traffic (selaras ads-plan §1 — awareness dulu karena budget kecil & tracking belum final). CTA mengandalkan tombol native Meta ("Pelajari Selengkapnya"), bukan tombol/URL custom.

| Elemen | Isi | Treatment |
|---|---|---|
| Eyebrow | "Semua fresh graduate ngaku 'jago AI.'" | Barlow, sedang, warna muted (`#ffe6f3`) di atas background brand |
| Headline (dominan) | **"Kamu bisa buktiin?"** | Righteous, sangat besar (118px) — fokus utama frame |
| Support | "Sertifikasi AI BNSP — diakui nasional." | Barlow, tebal, + badge BNSP kecil |
| Echo visual (ringan) | Chip "Skills: AI ✓" ala slide 1 carousel | Kecil, transparan — tipografi tetap dominan, bisa dilepas kalau frame kerasa penuh |
| Arah CTA | "👇 Cek skema kamu" | Ditempatkan di zona aman bawah, tepat di atas area tombol native |
| Brand | "Dilatih" | Konsisten dengan footer carousel |

## Spesifikasi format

- **Kanvas:** 1080×1920 (vertikal, beda dari carousel yang 1080×1350).
- **Zona aman:** hindari **~250px teratas** (avatar/username story) dan **~300px terbawah** (tombol CTA native + profil) — konten inti harus di area tengah.
- **Background:** satu warna brand solid — default **magenta `#e82796`**, teks putih. Alternatif ungu `#5657a5` bisa dipakai untuk A/B test.
- **Font & warna:** `Righteous` (headline) + `Barlow` (body), badge putih dengan teks magenta, konsisten dengan carousel.

## Catatan

- Ini bukan carousel — satu frame saja, tanpa swipe, jadi tidak ada slide angka/skema/otoritas seperti di carousel. Kalau perlu detail lebih (5 skema, kontras sertifikat, data 50%+), arahkan lewat traffic ke landing page atau tetap gunakan carousel untuk placement feed.
- Warna background (magenta vs ungu) dan chip echo visual masih bersifat opsional — mudah disesuaikan saat eksekusi/testing.
