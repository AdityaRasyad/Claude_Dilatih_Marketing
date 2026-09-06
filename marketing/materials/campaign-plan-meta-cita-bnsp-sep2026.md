# Campaign Plan — Meta Ads · CITA BNSP · September 2026

**Status**: Approved · siap eksekusi  
**Budget total**: Rp500.000 (lifetime)  
**Durasi**: 4 hari · **8–11 September 2026**  
**Objective**: Penambahan registrasi peserta  
**PIC launch**: Adit  
**PIC WA follow-up**: (isi nama)

---

## Ringkasan Eksekutif

Kampanye mikro-budget satu creative, satu ad set, fokus tunggal ke WA conversation. Tidak ada A/B test, tidak ada retarget layer — semua budget dikonsentrasikan ke satu sinyal supaya algo Meta punya cukup data untuk optimize dalam window 4 hari.

**Target realistis**: 3–5 peserta baru dari kampanye ini.  
**Break-even**: 1 peserta (Rp4.250.000 revenue > Rp500.000 ad spend).

---

## Setup Meta Ads Manager

### Campaign
| Setting | Value |
|---|---|
| Nama campaign | `CITA-BNSP-Sep26-Messages` |
| Objective | **Messages** (Click-to-WhatsApp) |
| Budget | **Rp500.000 Lifetime Budget** |
| Tanggal mulai | 8 September 2026 |
| Tanggal selesai | 11 September 2026 (pukul 23:59) |
| Bid strategy | Highest volume (jangan ubah) |

### Ad Set
| Setting                      | Value                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Nama ad set                  | `ProIT-Compliance-Cold-Jawa`                                                                                   |
| Lokasi                       | DKI Jakarta · Bogor · Depok · Tangerang · Bekasi · Bandung · Surabaya · Semarang · Yogyakarta                  |
| Usia                         | 25–40                                                                                                          |
| Bahasa                       | Indonesian                                                                                                     |
| Interests (pilih 4–6)        | Information Technology Audit · Information Security · Internal Audit · Cybersecurity · Risk Management · ISACA |
| Detailed Targeting Expansion | **OFF**                                                                                                        |
| Placements                   | **Manual**: Instagram Feed + Instagram Explore saja (matikan yang lain)                                        |
| Target audience size         | 200k–800k                                                                                                      |

> **Mengapa tidak Advantage+ Placements?** Creative 1:1 dirancang khusus untuk IG Feed. Facebook Feed, Audience Network, dan Messenger akan crop atau scale dengan cara yang rusak — buang budget tanpa hasil.

### Ad
| Setting            | Value                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Nama ad            | `CITA-BNSP-Single-Image-v1`                                                                             |
| Format             | Single Image                                                                                            |
| Creative           | `export/IG-Feed-CITA-BNSP.png`                                                                          |
| CTA button         | Send Message                                                                                            |
| WA destination     | `wa.me/85174369965`                                                                                     |
| Pre-filled message | `Halo Dilatih, saya tertarik daftar Certified IT Auditor BNSP 16–17 Sep 2026. Boleh info lebih lanjut?` |

---

## Copy Ad

**Primary Text:**
```
Kerja di IT tapi belum punya sertifikasi yang diakui negara?
Certified IT Auditor (CITA) BNSP · 16–17 Sep · Online.
Rp4.250.000 · Kuota terbatas.
Chat kami untuk info & daftar 👇
```

**Headline (≤40 char):**
```
Sertifikasi IT Auditor BNSP Resmi
```

**Description (≤30 char):**
```
16–17 Sep · Online · Rp4,25jt
```

---

## Checklist Pre-Launch (selesaikan sebelum 8 Sep pukul 08:00)

### Landing Page & Tracking
- [ ] `dilatih.co/registrationCITAPBNSP` live & mobile (<3 detik load)
- [ ] Harga di LP = Rp4.250.000 (dari Rp5.000.000) — sama persis dengan desain
- [ ] Meta Pixel terpasang · event `ViewContent` atau `Lead` terpicu saat form diisi
- [ ] Verifikasi dengan **Meta Pixel Helper** (Chrome extension) sebelum launch

### WhatsApp
- [ ] Nomor `wa.me/85174369965` aktif · PIC available selama 8–17 Sep
- [ ] Response time target: < 2 jam di jam kerja
- [ ] Siapkan **template balas cepat** untuk pertanyaan umum:
  - "Berapa harganya?" → Rp4.250.000 (dari Rp5 juta), berlaku untuk batch ini
  - "Apa yang didapat?" → Sertifikat BNSP CITA, Attendance Certificate, Transcript 32 JP, Materi (Modul, e-book, Zoom), Akses WAG Alumni
  - "Bagaimana cara bayar?" → (isi metode bayar)
  - "Apakah ada rekaman?" → **Ya, peserta mendapat akses rekaman sesi** (dikonfirmasi 6 Sep 2026)

### Ad Account
- [ ] Business Manager aktif · payment method valid · tidak ada billing issue
- [ ] Instagram account terhubung ke Ad Account
- [ ] Creative diupload → **preview di semua placement** yang dipilih di Ads Manager sebelum publish
- [ ] UTM terpasang di semua URL yang muncul di iklan:
  `?utm_source=meta&utm_medium=paid&utm_campaign=cita-bnsp-sep26&utm_content=cold-messages`

### Compliance
- [ ] Cek text overlay ratio dengan **Meta Text Overlay Tool** (link di Ads Manager)
- [ ] Copy tidak ada klaim: "garansi lulus", "pasti lulus", "#1", "terbaik"
- [ ] Logo BNSP di desain valid (Dilatih adalah lembaga sertifikasi BNSP aktif)

---

## Monitoring Harian

| Hari | Cek | Tindakan jika masalah |
|---|---|---|
| **Hari 1 (8 Sep)** · jam 12:00 & 20:00 | Delivery status "Active"? Impression > 0? | Jika "Rejected": cek notification Ads Manager & perbaiki |
| **Hari 2 (9 Sep)** | CPM? CTR? Chat WA masuk? | CPM >Rp100k → longgarkan 1 interest. 0 chat setelah 200+ klik → audit LP |
| **Hari 3 (10 Sep)** | CPA per chat? Lead quality? | CPA >Rp50k/chat → biarkan habis. Jangan tambah budget (reset learning) |
| **Hari 4 (11 Sep)** | Budget habis otomatis | Tidak perlu aksi |

**Jangan ubah apapun di Hari 1.** Meta butuh waktu untuk distribute budget — perubahan di hari pertama mereset learning.

---

## Estimasi Hasil

| Metrik | Konservatif | Optimis |
|---|---|---|
| Reach | 6.000–8.000 | 10.000–15.000 |
| WA chat initiated | 40–80 | 100–150 |
| Lead qualified | 15–30 | 40–60 |
| **Registrasi bayar** | **2–5 peserta** | **6–10 peserta** |
| CPA per peserta | Rp100–250k | Rp50–83k |

---

## Setelah Kampanye Selesai (12–16 Sep)

- **Nurture semua WA lead** yang belum bayar — kirim reminder H-3, H-1, H-0
- **Organic reach gratis**: post desain yang sama di IG feed + WA Story Dilatih
- **Catat actual result** (reach, chat, registrasi, CPA) → simpan sebagai baseline untuk kampanye batch berikutnya

---

## Yang Sengaja Tidak Dilakukan (Budget Constraint)

Ini bukan kelalaian — ini keputusan sadar karena Rp500k tidak cukup untuk:

- Retarget layer (butuh +Rp300k min)
- A/B test copy atau creative (butuh 2× budget)
- Cold + Warm layering (fragmentasi sinyal)
- Google Search RSA
- Video/Reels

Semua di atas disimpan untuk **kampanye batch Oktober** jika budget bertambah.

---

*Dokumen ini adalah referensi operasional tim. Update hasil aktual setelah kampanye selesai (12 Sep).*
