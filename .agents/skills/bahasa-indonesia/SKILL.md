---
name: bahasa-indonesia
description: Use this skill whenever producing, writing, editing, translating, or summarizing ANY content or document for the Dilatih project, and whenever replying to the user in chat. This is the project's default language layer — all output should be in Bahasa Indonesia. Also use when the user says "tulis dalam bahasa Indonesia," "buatkan dokumen," "terjemahkan," "ringkas section ini," "perbaiki copy ini," "marketing copy," "jadikan bahasa Indonesia," "translate to Indonesian," or works on any of the marketing plan sections. This is a cross-domain language skill that runs ALONGSIDE other skills (copywriting, marketing-plan, emails, ads, etc.) — when those skills generate output, write that output following the rules here. It governs language, tone, terminology, and Indonesian formatting conventions, not a specific marketing domain.
metadata:
  version: 1.0.0
---

# Bahasa Indonesia — Bahasa Default Project Dilatih

Skill ini menetapkan **Bahasa Indonesia sebagai bahasa default** untuk project Dilatih. Tujuannya: menjaga konsistensi bahasa, nada, dan istilah di seluruh dokumen pemasaran dan percakapan, sesuai gaya dokumen yang sudah ada (`marketing/plan.md`, `marketing-plans/dilatih/sections/01-13`).

## Aturan Inti

1. **Semua output dalam Bahasa Indonesia.** Ini berlaku untuk:
   - Dokumen dan file project (rencana, section, copy, email, ringkasan, catatan).
   - **Balasan Claude di chat kepada user** — jawaban percakapan, penjelasan, pertanyaan klarifikasi, dan ringkasan pekerjaan ditulis dalam Bahasa Indonesia.
2. **Jangan terjemahkan secara harfiah.** Tulis seperti penutur asli yang paham bisnis — bukan hasil terjemahan kaku dari Bahasa Inggris.
3. Saat skill lain (copywriting, marketing-plan, ads, emails, dsb.) menghasilkan konten, **tulis hasilnya mengikuti aturan bahasa & nada di sini**. Skill ini melengkapi, bukan menggantikan, skill domain tersebut.

## Istilah yang Dipertahankan (Tidak Diterjemahkan)

Pertahankan istilah berikut dalam bentuk aslinya — menerjemahkannya justru mengurangi kredibilitas dan kejelasan:

- **Metrik & jargon marketing/B2B:** B2B, B2C, CAC, LTV, ROAS, ROI, MQL, SQL, funnel, pipeline, lead, churn, retention, conversion rate, top-of-funnel, AARRR.
- **Lembaga & sertifikasi:** BNSP, LSP, dan nama skema/lembaga sertifikasi resmi.
- **Nama brand, produk, klien, dan platform:** Dilatih, PwC, Peruri, LinkedIn, WhatsApp, dll. — tulis apa adanya.
- **Istilah teknis tanpa padanan alami:** AI, machine learning, upskilling/reskilling (boleh, tapi "peningkatan keterampilan" juga baik bila konteksnya umum), landing page, copy, CTA.

Pedoman: jika padanan Indonesia terdengar alami dan umum dipakai, gunakan padanan Indonesia. Jika padanan terasa dipaksakan atau mengaburkan makna, pertahankan istilah aslinya. Boleh juga menulis istilah asli diikuti penjelasan singkat pada kemunculan pertama, mis. "*churn* (pelanggan yang berhenti)".

## Nada: Intim namun Profesional

- **Hangat tapi kredibel.** Bicara seperti rekan yang kompeten dan bisa dipercaya, bukan korporat yang kaku atau terlalu santai.
- **Jelas dan ringkas.** Kalimat pendek, langsung ke inti. Hindari bertele-tele dan klise pemasaran kosong.
- **Tegas dan berbasis bukti.** Saat menyebut hasil atau aset, nyatakan dengan percaya diri dan konkret.
- Gunakan sapaan yang konsisten dengan dokumen yang ada; default "Anda" untuk nada profesional, kecuali konteks menuntut lebih kasual.

## Konvensi Format Indonesia

- **Mata uang:** Rp dengan pemisah ribuan titik, mis. `Rp1.500.000` (bukan `Rp1,500,000`).
- **Angka besar:** gunakan pemisah ribuan titik dan koma desimal, mis. `300.000` view, `1,5 juta`. Boleh memakai "juta"/"miliar" untuk keterbacaan.
- **Persentase & tanggal:** `25%`; tanggal gaya Indonesia, mis. `20 Juni 2026`.
- **Istilah waktu bisnis:** kuartal (Q1–Q4), bulanan, tahunan.

## Contoh Sebelum → Sesudah

- ❌ "This plan optimizes one thing: turning Dilatih's existing proof into a predictable B2B pipeline."
- ✅ "Rencana ini mengoptimalkan satu hal: mengubah bukti dan jangkauan yang sudah dimiliki Dilatih menjadi *pipeline* B2B yang dapat diprediksi dan berulang."

- ❌ "The lead-capture machine is leaking." (terjemahan harfiah terlalu teknis)
- ✅ "Mesin penangkap *lead* Dilatih masih bocor — banyak peminat datang, tapi sedikit yang berlanjut jadi pembicaraan serius."

- ❌ "We will increase the conversion rate by 25 percent." 
- ✅ "Kami akan menaikkan *conversion rate* sebesar 25%."

## Related Skills

Skill ini bersifat lintas-domain dan berjalan **berdampingan** dengan skill pemasaran lain:

- **copywriting / copy-editing** — tulis dan sunting copy dalam Bahasa Indonesia mengikuti nada di sini.
- **marketing-plan** — seluruh section rencana ditulis/diterjemahkan dengan aturan ini.
- **emails / ads / social / cold-email** — output channel ditulis dalam Bahasa Indonesia, istilah B2B dipertahankan.

Saat skill tersebut aktif, perlakukan skill ini sebagai lapisan bahasa wajib untuk hasil akhirnya.
