# Campaign Report — Meta Ads · CITA BNSP · September 2026

**Status**: Campaign selesai · tidak delivering per 11 September 2026  
**Budget total**: Rp500.000 lifetime  
**Durasi aktual**: 8–11 September 2026 (4 hari)  
**Sumber data**: `Motekar-Edukasi-Ads-Aug-14-2026-Sep-12-2026.csv`  
**Dokumen pasangan**: `campaign-plan-meta-cita-bnsp-sep2026.md`

---

## Ringkasan Eksekutif

**Verdict: Iklan berhasil. Closing gagal.**

Budget habis 99,6% (Rp498k dari Rp500k), reach melampaui target atas, CTR 3,44% — dua kali lipat rata-rata Meta untuk cold audience. Banyak chat WA masuk. Tapi tidak ada satu pun yang bayar.

Masalahnya bukan di iklan. Funnel bocor di tahap WA → registrasi berbayar. Closing process di WA tidak berjalan — tidak ada follow-up sistematis, tidak ada lead tracker, dan cycle keputusan Rp4,25jt tidak bisa diselesaikan dalam 5 hari.

Iklan ini layak diulang untuk batch berikutnya dengan tiga perbaikan: CTWA native (bukan wa.me link), durasi campaign lebih panjang, dan proses closing WA yang terdokumentasi.

---

## Metrik Final vs Target

| Metrik                  | Target      | Aktual                      | Status                       |
| ----------------------- | ----------- | --------------------------- | ---------------------------- |
| Amount Spent            | Rp500.000   | **Rp498.010**               | ✅ 99,6% terpakai             |
| Reach                   | 6.000–8.000 | **8.215**                   | ✅ Di atas target             |
| Impressions             | —           | **12.275**                  | ✅                            |
| Clicks (all)            | —           | **422**                     | ✅                            |
| CTR                     | 1–2%        | **3,44%**                   | ✅ Excellent                  |
| Frequency               | 1,3–2,0     | **1,49**                    | ✅ Sehat                      |
| CPM                     | —           | **Rp40.571**                | ✅ Wajar                      |
| Cost per Click          | —           | **Rp1.180**                 | ✅ Sangat murah               |
| Messages Started (Meta) | 40–80       | **0**                       | ⚠️ Tracking gap — bukan miss |
| Chat WA masuk (aktual)  | 40–80       | **banyak** (belum dihitung) | 🟡 Perlu audit manual        |
| Registrasi berbayar     | 2–5         | **0**                       | 🔴 Miss                      |
| CPA aktual              | Rp100–250k  | **∞**                       | 🔴                           |

---

## Analisis Funnel

```
Impressions: 12.275
      │
      │ CTR 3,44% ✅
      ▼
Clicks: 422
      │
      │ ~20–40% estimasi klik → chat
      ▼
Chat WA masuk: ~85–170 (perlu audit dari log WA)
      │
      │ 0% konversi ← TITIK BOCOR
      ▼
Registrasi berbayar: 0
```

Seluruh kebocoran terjadi di satu tempat: **WA → bayar**.

---

## Temuan Kunci

### A. Tracking Gap Meta — Bukan Bug Performa

Results = 0 di Ads Manager bukan berarti iklan gagal drive traffic. Penyebabnya: campaign memakai link `wa.me/85174369965` (redirect eksternal), bukan fitur Click-to-WhatsApp (CTWA) native Meta. Meta hanya bisa mencatat "Messages Started" kalau conversation dimulai lewat CTWA native yang terhubung ke WA Business Account.

Selama link-nya external redirect, Meta tidak tahu ada orang yang chat — padahal orang tetap chat.

### B. Iklan Bekerja dengan Baik

- CTR 3,44% = ≈ 2× rata-rata Meta cold audience (1–2%)
- CPC Rp1.180 sangat kompetitif untuk segmen professional/B2B
- Frequency 1,49 — tidak oversaturasi, algo punya ruang optimize
- Audience IT Education + Cybersecurity + Risk Management (2,7–3,2 juta) terbukti resonate dengan creative BNSP

Setup ini tidak perlu banyak diubah untuk batch berikutnya.

### C. Closing WA Tidak Berjalan

Banyak chat masuk, tapi tidak ada yang closing. Kemungkinan penyebab (perlu diaudit dari log WA):

- **Response time lambat** — lead dingin sebelum dapat info lengkap
- **Tidak ada follow-up** — template T7 (follow-up 24 jam) tidak dijalankan secara konsisten
- **Tidak ada lead tracker** — tidak tahu siapa yang sudah di tahap mana
- **Trust gap** — cold audience belum kenal Dilatih, butuh lebih banyak social proof sebelum keputusan Rp4,25jt
- **Target tidak selalu decision-maker** — profesional IT individu sering butuh approval perusahaan untuk budget sebesar ini

### D. Timing Terlalu Ketat

Campaign tutup 11 Sep, event 16–17 Sep — hanya 5 hari untuk keputusan bayar Rp4,25jt. Untuk harga di kisaran ini, cycle keputusan B2B biasanya 7–14 hari (koordinasi dengan HRD, approval bos, proses keuangan).

---

## Rekomendasi untuk Batch Berikutnya

### Untuk Iklan — Pertahankan

- Audience: IT Education + Cybersecurity + Risk Management
- Placement: IG Feed manual only (matikan semua placement lain)
- Copy angle: sertifikasi BNSP resmi + harga coret + urgency batch
- Creative format: single-image, navy gelap + oranye + badge BNSP

### Untuk Iklan — Ubah

| Yang Perlu Diubah | Dari | Ke | Alasan |
|---|---|---|---|
| WA destination | `wa.me/...` link | CTWA native (hubungkan WA Business ke Meta) | Tracking benar + algo bisa optimasi ke conversation |
| Durasi campaign | 4 hari | 7–10 hari | Lebih banyak data untuk algo, lebih banyak waktu nurture |
| Timing mulai | H-8 sebelum event | H-14 sebelum event | Beri ruang cycle keputusan 7–14 hari |
| Budget | Rp500k | Rp750k–1jt (kalau event-nya lebih besar) | Scale yang sudah terbukti |

### Untuk Closing WA — Fix Wajib Sebelum Campaign Berikutnya

1. **Lead tracker spreadsheet** — kolom: nama, WA, tanggal pertama chat, last touch, status (cold/warm/hot), objection utama, hasil akhir
2. **SLA response** — <15 menit di jam kerja (08.00–17.00)
3. **Follow-up wajib** — T7 dikirim 24 jam setelah chat pertama tanpa balasan
4. **Template baru: approval perusahaan** — "Apakah ini akan dikover oleh perusahaan? Kami bisa bantu siapkan surat penawaran resmi."
5. **Weekly closing review** — jumlah chat masuk, closing rate, objection paling umum — ini metrik primer, bukan spend/reach

### Untuk Pricing — Eksplor di Batch Berikutnya

- **Deposit sistem**: bayar Rp500k sekarang untuk lock seat, sisa H-3 sebelum event → menurunkan friction keputusan awal
- **Group pricing**: 3+ peserta dari perusahaan yang sama → diskon + invoice ke HRD
- **Anchor price lebih ekstrem**: tampilkan Rp7.500.000 (coret) → Rp4.250.000 untuk memperkuat persepsi diskon

---

## Aksi Segera — Sebelum Event 16–17 September

Event 3 hari lagi. Lead yang sudah chat masih bisa closing.

- [ ] Audit log WA: hitung total chat yang masuk 8–11 Sep, kategorikan hot/warm/cold
- [ ] Kirim follow-up manual ke warm lead (yang sudah tanya harga/cara bayar) — jangan broadcast massal
- [ ] Prioritas kontak hari ini: lead yang sudah ada di T3 (harga) atau T4 (cara bayar) — ini yang paling dekat bayar

---

## Lampiran

| Dokumen | Path |
|---|---|
| Data mentah Ads Manager | `Motekar-Edukasi-Ads-Aug-14-2026-Sep-12-2026.csv` |
| Campaign plan original | `marketing/materials/campaign-plan-meta-cita-bnsp-sep2026.md` |
| Visual brief A–C | `marketing/materials/brief-visual-ads-itaudit-bnsp-sep2026.md` |
| Visual brief D–H | `marketing/materials/brief-visual-ads-itaudit-bnsp-extension-D-E-F-G-H.md` |
