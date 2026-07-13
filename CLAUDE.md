# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Dilatih

Project ini berisi rencana dan materi pemasaran untuk **Dilatih**, perusahaan pelatihan dan sertifikasi asal Indonesia (fokus teknologi & AI, status lembaga sertifikasi + BNSP). Ini adalah project **konten & strategi pemasaran**, bukan codebase — tidak ada langkah build, test, atau lint. Pekerjaan utamanya menulis dan menyunting dokumen Markdown.

## Bahasa

**Default project ini adalah Bahasa Indonesia.** Berlaku untuk:

- Semua dokumen, file, dan output project (rencana, section, copy, email, ringkasan).
- **Balasan Claude kepada user di chat** — jawaban, penjelasan, dan pertanyaan klarifikasi ditulis dalam Bahasa Indonesia.

Pertahankan istilah teknis/B2B dalam bentuk aslinya (B2B, CAC, LTV, ROAS, MQL, SQL, funnel, pipeline, BNSP, nama brand). Jangan menerjemahkan secara harfiah — tulis seperti penutur asli yang paham bisnis. Nada: **intim namun profesional**.

Panduan lengkap (istilah, format angka/mata uang, contoh) ada di skill **`bahasa-indonesia`** (`.agents/skills/bahasa-indonesia/SKILL.md`).

## Konteks & Lokasi Dokumen

Ada dua lokasi dokumen — pahami perbedaannya sebelum mengedit:

- **`marketing/plan.md`** — rencana final v1 yang sudah disatukan (13 section dalam satu file), berada di dalam repo. Ini dokumen utama yang dirujuk.
- **`C:\Users\ThinkPad\marketing-plans\dilatih\`** — direktori kerja di luar repo tempat rencana disusun per-section:
  - `sections/01.md`–`13.md` — section terpisah (sumber dari `plan.md`).
  - `final_plan.md` — gabungan section (versi di luar repo).
  - `research.md` — riset latar (klien, aset, kebocoran funnel, prioritas founder).
  - `progress.md` — status pengerjaan rencana (phase, section selesai, artifact disetujui, catatan).
  - `materials/` — materi pendukung.

Saat melanjutkan atau merevisi rencana, baca `progress.md` lebih dulu untuk status terkini.

## Struktur Rencana (13 Section)

`plan.md` mengikuti kerangka **AARRR**. Penomoran section konsisten antara `plan.md` dan `sections/NN.md`:

1. Ringkasan eksekutif · 2. Kerangka strategis · 3. Kondisi saat ini · **4. Acquisition · 5. Activation · 6. Retention · 7. Referral · 8. Revenue** (inti AARRR) · 9. Roadmap 90 hari · 10. Proyeksi 12 bulan · 11. Marketing operations stack · 12. Bank ide taktis · 13. Pengukuran, RACI, keputusan terbuka, lampiran.

Konteks bisnis kunci: bootstrapped (<Rp1B/tahun), khusus pasar ID, sedang pivot dari kursus B2C ke in-house training B2B + sertifikasi BNSP. Prioritas founder 90 hari: SEO + brand awareness B2B.

## Skills Pemasaran

- Skill domain pemasaran (copywriting, ads, emails, marketing-plan, dll.) ada di `.agents/skills/` dan di-symlink ke `.claude/skills/`. Dikelola via CLI `npx skills` dan terkunci di `skills-lock.json` (sumber: `coreyhaines31/marketingskills`).
- **`bahasa-indonesia` adalah lapisan bahasa lintas-domain** — berjalan bersamaan dengan skill lain. Saat skill domain menghasilkan konten, tulis hasilnya mengikuti aturan bahasa & nada di skill tersebut.
