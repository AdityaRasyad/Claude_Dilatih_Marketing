# Meta Ads Audit — Dilatih / Motekar Edukasi

**Run date:** 2026-08-31
**Data window:** 2026-07-20 – 2026-08-21 (32 hari)
**Currency:** IDR
**Sumber data:** `Motekar-Edukasi-Ad-sets-Jul-31-2023-Aug-30-2026.csv`

---

## Ringkasan Eksekutif

| Metrik | Nilai |
|---|---|
| Ad set yang diaudit | 1 (`AI BNSP Personal`) |
| Status | Completed |
| Total spend | Rp 431.401 |
| Impressions | 6.037 |
| Reach | 3.070 |
| Frequency | 1,97x |
| Hasil terukur | 28 percakapan baru (bukan pembelian) |
| Cost per result | Rp 15.407 |
| Pembelian tercatat | 0 |

> **Peringatan data:** Hanya 1 ad set tersedia. Banyak kontrol kembali ke `unknown` karena tidak ada data pendukung.

---

## Temuan Kritis

### 🔴 M18 — Campaign Objective Mismatch

**Observasi:** Ad set dioptimasi untuk `messaging_conversation_started_7d`, bukan pembelian.

**Diagnosis:** Tujuan bisnis adalah *purchases*, tetapi kampanye berjalan dengan objective *messaging*. Meta mengoptimasi delivery ke orang yang kemungkinan besar membalas pesan, bukan membeli. Ini adalah ketidaksesuaian fundamental antara tujuan bisnis dan sinyal optimasi.

**Rekomendasi:** Buat kampanye baru dengan objective **Sales (Purchases)**. Pilih `Purchase` sebagai conversion event.

---

### 🔴 Purchases = 0 — Pixel Purchase Event Tidak Terdeteksi

**Observasi:** Kolom `Purchases` kosong di seluruh data meskipun ad set sudah berjalan 32 hari.

**Diagnosis:** Kemungkinan:
1. Meta Pixel belum terpasang di halaman konfirmasi pesanan, **atau**
2. Event `Purchase` tidak difiring — Pixel ada tapi tidak dikonfigurasi untuk melacak transaksi.

**Dampak:** Tanpa purchase event, Meta tidak bisa mengoptimasi kampanye untuk pembelian. Objective `Sales` tidak akan efektif tanpa ini.

**Rekomendasi:** Pasang Meta Pixel + event `Purchase` (dengan `value` dan `currency`) di halaman konfirmasi pesanan sebelum menjalankan kampanye baru.

---

### 🟡 M-ST1 — Budget Sangat Rendah untuk Learning Phase

**Observasi:** Total spend Rp 431.401 selama 32 hari ≈ Rp 13.481/hari.

**Diagnosis:** Meta membutuhkan minimal 50 conversion events per ad set per minggu untuk keluar dari learning phase. Dengan spend serendah ini dan nol purchase yang tertrack, ad set hampir pasti tidak pernah keluar dari learning phase.

Meta menyarankan budget harian minimal = 5x target CPA. Jika target CPA Rp 100.000–300.000, budget minimum yang disarankan adalah Rp 500.000–1.500.000 per hari.

**Rekomendasi:** Tentukan target CPA, lalu sesuaikan budget harian. Untuk keluar dari learning phase, butuh setidaknya Rp 300.000–500.000/hari sebagai titik awal.

---

### 🟡 M36 — Bid Type ABSOLUTE_OCPM dengan Spend Rendah

**Observasi:** Bid type `ABSOLUTE_OCPM` (cost cap) digunakan.

**Diagnosis:** Cost cap membatasi Meta dari memberikan bid yang kompetitif saat akun baru aktif kembali setelah periode tidak aktif panjang. Dengan volume konversi nol dan budget minim, cost cap sering menyebabkan delivery sangat terbatas atau terhenti.

**Rekomendasi:** Mulai dengan **Highest Volume** (tanpa cost cap) sampai learning phase selesai dan ada data konversi yang cukup. Cost cap baru diterapkan setelah ada baseline CPA.

---

## Kontrol dengan Status `unknown`

| ID | Kontrol | Alasan unknown |
|---|---|---|
| M01 | Meta Pixel installed | Tidak ada data Pixel di export |
| M02 | Conversions API (CAPI) | Tidak dikonfirmasi |
| M03 | Event deduplication | Perlu CAPI aktif untuk relevan |
| M04 | Event Match Quality | Perlu akses Pixel diagnostics |
| M05 | Domain verification | Tidak ada data |
| M25–M31 | Creative diversity & fatigue | Hanya 1 ad set, tidak ada data creative |
| M39 | UTM parameters | Tidak dikonfirmasi |
| M19–M24 | Audience controls | Tidak ada data audience |
| M40 | A/B testing | Tidak ada |

---

## Peluang Tidak Terscoring

- **M66 — AI-generated Instant Forms:** Relevan jika ada kampanye leads untuk BNSP. Tidak wajib.
- **M22 — Advantage+ Audience:** Untuk akun yang baru restart, Advantage+ Audience bisa membantu Meta menemukan audience dengan data historis lebih luas. Evaluasi setelah Pixel aktif.

---

## Missing Inputs

| Item | Dampak jika kosong |
|---|---|
| Target CPA / ROAS | Tidak bisa validasi budget adequacy atau bid strategy |
| Status Meta Pixel | Tidak bisa evaluate M01–M09 |
| Status UTM | Tidak bisa evaluate attribution di GA4/analytics |
| Data creative | Tidak bisa evaluate M25–M32 |
| Data kampanye lain | Audit hanya mencakup 1 ad set |

---

## Insight Tambahan dari Data Performa

### Efisiensi Biaya

| Metrik Turunan | Nilai | Interpretasi |
|---|---|---|
| CPM (cost per 1.000 tayangan) | Rp 71.462 | Tinggi untuk Indonesia — wajar untuk niche profesional/sertifikasi |
| Spend per hari | Rp 13.481 | Jauh di bawah threshold optimal |
| Reach per hari | ~96 orang | Volume terlalu kecil untuk pembelajaran algoritma |
| Percakapan per hari | 0,875 | Kurang dari 1 result per hari |
| Cost per kontak baru | Rp 14.800 | (431.401 / 30 kontak total) |

**CPM Rp 71.462** berada di rentang atas untuk Indonesia. Ini konsisten dengan target niche sempit (profesional yang mencari sertifikasi AI/BNSP) — bukan tanda masalah, tapi konfirmasi bahwa audience yang dijangkau memang terspesialisasi dan berbiaya lebih tinggi per tayangan.

---

### Analisis Funnel Tersembunyi

Dari 3.070 orang yang terjangkau, hanya 28 yang memulai percakapan — **conversion rate reach-ke-percakapan: 0,91%**.

```
3.070 reach
  └─ 28 percakapan baru (0,91%)
       └─ ? yang lanjut diskusi serius     ← tidak terdata
            └─ ? qualified leads           ← tidak terdata
                 └─ 0 pembelian tercatat   ← Pixel tidak aktif
```

Funnel setelah percakapan dimulai (closing rate, follow-up, pembayaran) **tidak terdata sama sekali**. Ini adalah gap informasi terbesar — bukan hanya masalah teknis Pixel, tapi juga tidak ada sistem untuk melacak perjalanan prospek dari DM ke transaksi.

**Estimasi CAC berdasarkan skenario closing rate:**

| Closing Rate DM → Beli | Implied CPA |
|---|---|
| 10% | Rp 154.070 |
| 20% | Rp 77.035 |
| 30% | Rp 51.357 |

Tanpa data harga kursus dan closing rate aktual, tidak bisa disimpulkan apakah angka ini sehat atau tidak. Tapi jika harga kursus BNSP di kisaran Rp 500.000–2.000.000, skenario 20–30% closing masih menghasilkan margin positif.

---

### Volume vs Kebutuhan Learning Phase

Meta butuh **50 konversi/minggu per ad set** untuk keluar dari learning phase. Kampanye ini menghasilkan:

- 28 hasil dalam 32 hari = **6,2 hasil/minggu**
- Hanya **12% dari threshold** yang dibutuhkan

Artinya kampanye berjalan di learning phase selama seluruh periode aktif — delivery tidak pernah dioptimasi. Untuk mencapai threshold dengan objective percakapan (bukan purchase), dibutuhkan sekitar **8x lipat** volume saat ini.

---

### Skala Audience yang Dijangkau

3.070 reach unik selama 32 hari adalah audience yang **sangat kecil** untuk iklan Meta. Ini bisa berarti:
1. **Targeting terlalu sempit** — kombinasi interest/demographic yang membatasi ukuran audience
2. **Budget terlalu kecil** — Meta tidak punya cukup anggaran untuk menjangkau lebih banyak orang
3. **Cost cap terlalu ketat** — ABSOLUTE_OCPM membatasi bid sehingga kalah di auction

Frequency 1,97x mengindikasikan **audience belum jenuh** — masing-masing orang rata-rata baru melihat iklan 2x. Masalahnya bukan frekuensi terlalu tinggi, tapi populasi yang dijangkau terlalu sedikit.

---

### Konteks Nama Ad Set: "AI BNSP Personal"

Nama ini mengindikasikan targeting untuk individu (B2C) yang mencari sertifikasi BNSP di bidang AI. Ini adalah irisan niche yang sempit secara natural:

- Tidak semua orang tahu BNSP
- Tidak semua yang tahu BNSP tertarik AI
- Tidak semua yang tertarik AI/BNSP sedang aktif mencari pelatihan

Audience potensial di Indonesia untuk segmen ini kemungkinan **di bawah 500.000 orang** secara nasional — jauh lebih kecil dari kampanye B2C umum. Implikasinya: reach 3.070 dalam 32 hari bukan anomali, tapi ekspektasi yang perlu disesuaikan saat menetapkan KPI.

---

### Waktu Kampanye: Juli–Agustus

Periode Juli–Agustus di Indonesia cenderung memiliki permintaan lebih rendah untuk pelatihan profesional (pertengahan tahun, transisi semester). Periode permintaan lebih tinggi untuk sertifikasi BNSP biasanya:
- **Januari–Maret** — resolusi tahun baru, anggaran training baru
- **Oktober–November** — persiapan akhir tahun, kejar sertifikasi sebelum tutup buku

Ini bukan penjelasan tunggal untuk performa rendah, tapi perlu dipertimbangkan saat memilih timing kampanye berikutnya.

---

## Urutan Tindakan

1. **Pasang / verifikasi Meta Pixel + Purchase event** — blocker utama sebelum apapun.
2. **Aktifkan Conversions API (CAPI)** — untuk redundansi tracking, terutama di iOS.
3. **Buat kampanye baru dengan objective Sales (Purchases)** — jangan gunakan kampanye lama.
4. **Mulai dengan bid Highest Volume** — tanpa cost cap sampai learning phase selesai.
5. **Set budget harian minimal Rp 300.000–500.000** — supaya ada volume konversi yang cukup.
6. **Pasang UTM parameters** di semua iklan untuk tracking di luar Meta.
