# Chatbot Chatwoot + n8n untuk Inquiry Dilatih — Keputusan & Arsitektur

**Status:** Draf untuk diskusi tim
**Tanggal:** 2026-09-03 (revisi: cakupan diperluas + labelling & prioritas)
**Konteks:** Chat masuk ke Chatwoot (WhatsApp Cloud API resmi) mencakup empat jenis kebutuhan yang berbeda — sertifikasi BNSP, workshop non-BNSP, pelatihan korporat (IHT/B2B), dan kendala teknis peserta terdaftar — dan tim 4 orang kewalahan membalas semuanya lewat satu inbox.

---

## 1. Masalah sebenarnya

Ini bukan masalah volume (<30 chat/hari ≈ 900/bulan — kecil). Ini masalah **kecepatan respon dan konsistensi jawaban**, dan itu persis kebocoran funnel #1 yang sudah teridentifikasi sejak riset awal: *"inquiries go cold"* (`research.md`). Sampai hari ini juga belum ada lead tracking sama sekali — setiap chat yang datang lalu hilang, tidak meninggalkan jejak apa pun untuk dianalisis atau ditindaklanjuti.

Ada lapisan masalah kedua yang baru muncul begitu cakupan diperluas ke 4 jalur: **semua handoff jatuh ke satu antrean umum** — tidak ada routing per-PIC (bukan "B2B ke Vika, technical ke Adit"). Konsekuensinya, siapa pun di tim yang online mengambil chat berikutnya tanpa tahu mana yang paling mendesak, kecuali ada mekanisme yang secara eksplisit memberi tahu. Itu sebabnya labelling dan prioritas bukan fitur tambahan di sini — itu **satu-satunya cara antrean umum tetap punya urutan**.

Jadi target otomasi ini bukan "hemat biaya balas chat", tapi empat hal konkret:

1. Balasan pertama < 1 menit, 24/7 (termasuk malam & akhir pekan), untuk pertanyaan yang bisa dijawab bot.
2. Setiap inquiry meninggalkan **data lead terstruktur** (nama, kontak, jalur/intent, program diminati, individu/korporat).
3. Tidak ada inquiry yang mati tanpa follow-up (khusus jalur yang memang butuh follow-up — lihat §4).
4. **Setiap chat yang di-handoff sudah punya label dan prioritas** — agent tahu chat mana yang diambil duluan tanpa harus baca semua histori dulu.

Konteks katalog BNSP yang relevan: dari 15 program BNSP, **hanya 2 yang punya batch aktif** (Certified Communication Skill for Business, Practical Office Advance); 13 sisanya masih tahap "Ajukan Ketertarikan". Artinya sebagian besar chat BNSP sebenarnya harus berujung pada **waitlist + validasi minat**, bukan hard-sell — status batch ini perlu dicek ulang tim sebelum knowledge base dipakai live. Katalog workshop non-BNSP (`dilatih.co/dilatih-workshop`) belum tercatat di knowledge base sama sekali dan perlu disalin manual tim (halaman itu di-render JavaScript, tidak bisa dibaca otomatis).

---

## 2. Menu biasa atau AI chatbot?

**Keputusan: hybrid — menu-first, AI sebagai fallback. Bukan salah satunya saja.**

### Kenapa bukan menu murni
- 15 program × ~6 kategori pertanyaan (harga, jadwal, syarat peserta, durasi, lokasi/TUK, masa berlaku sertifikat) = pohon menu 4–5 level. Orang keluar di level 2 dan mengetik bebas juga.
- Pertanyaan nyata tidak muat di menu manapun: *"lulusan SMA bisa ikut?"*, *"kalau 20 orang karyawan, bisa in-house?"*, *"sertifikatnya diakui BUMN?"*. Menu akan mentok dan chat tetap jatuh ke tim — jadi menu murni tidak benar-benar menyelesaikan masalah, hanya memindahkan titik macetnya.

### Kenapa bukan AI murni
- Harga dan jadwal batch adalah informasi yang **tidak boleh salah** untuk lembaga sertifikasi resmi. AI tanpa sumber data terkunci akan mengarang saat tidak tahu — risiko reputasi lebih besar daripada manfaat kecepatannya.
- Menu di awal memotong ambiguitas secara gratis. WhatsApp Cloud API resmi mendukung tombol & list interaktif (di Chatwoot: `input_select`), jadi tidak ada alasan untuk tidak memakainya sebagai lapisan pertama.

### Kenapa hybrid masuk akal secara biaya
900 chat/bulan dengan LLM kelas ringan (Haiku/Sonnet) dan konteks pendek → biaya di bawah Rp100rb/bulan. Argumen "AI terlalu mahal untuk skala kami" tidak berlaku di volume ini.

### Bentuknya
Sapaan + list menu 5 pilihan **berbasis jalur** (bukan berbasis jenis pertanyaan — lihat §3) → pilihan menu dijawab **deterministik** dari knowledge base (tanpa LLM sama sekali) → apa pun di luar menu ditangani AI yang **hanya boleh menjawab dari knowledge base** dan wajib eskalasi ke manusia bila tidak yakin.

---

## 3. Empat jalur

Menu utama tidak lagi disusun berdasarkan jenis pertanyaan (program/biaya/syarat), tapi berdasarkan **jalur** — karena jalur itulah yang menentukan cara penanganan, label, dan prioritas:

1. **Sertifikasi BNSP**
2. **Workshop & sertifikasi umum (non-BNSP)**
3. **Pelatihan untuk perusahaan (IHT / B2B)**
4. **Saya sudah terdaftar — ada kendala** (technical)
5. **Bicara dengan tim**

| Jalur | Ditangani bot sampai mana | Berakhir di |
|---|---|---|
| BNSP | Info program, jadwal, syarat, biaya dari KB. Waitlist untuk program tanpa batch aktif. | Bot tuntas, atau handoff bila siap daftar |
| Workshop non-BNSP | Sama seperti BNSP, dari baris KB ber-`jalur = workshop` | Bot tuntas, atau handoff bila siap daftar |
| IHT / B2B | **Hanya kualifikasi** — perusahaan, jumlah peserta, BNSP/non-BNSP, timeline. Tidak pernah menyebut harga. Berlaku untuk BNSP maupun non-BNSP, bukan cuma BNSP seperti draf awal. | Selalu handoff |
| Technical issue | **Hanya triase** — identifikasi peserta + kumpulkan konteks sesuai 4 sub-kategori (akses/login, pembayaran, sertifikat, jadwal) sebelum handoff | Selalu handoff |

**Perbandingan BNSP vs non-BNSP:** bot boleh menjelaskan perbedaan keduanya secara faktual (siapa yang menerbitkan, ada/tidaknya uji kompetensi, bentuk pengakuan) tapi **tidak boleh merekomendasikan** salah satu — kalau diminta saran langsung, bot memaparkan fakta lalu menawarkan bicara dengan tim.

**Technical issue** adalah audiens yang sama sekali berbeda dari tiga jalur lain: bukan calon peserta, tapi peserta yang sudah terdaftar/bayar dan sedang punya masalah. Bot tidak punya akses ke sistem internal untuk menyelesaikannya — nilainya murni di **triase**: agent membuka chat dan semua konteks yang dibutuhkan (nama, program, apa yang salah) sudah terkumpul, bukan mulai dari nol.

---

## 4. Arsitektur

```
WhatsApp Cloud API ──► Chatwoot ──webhook(message_created)──► n8n WF-1 (Inbound)
                          ▲                                      │
                          │                                      ├─► Google Sheet (KB: program, faq, prioritas, technical_triage)
                          └────── Chatwoot API (kirim balasan,   ├─► LLM (AI Agent, fallback)
                                  label, prioritas, assign) ◄────┤
                                                                 └─► WF-2 (Lead capture + labelling + prioritas)

n8n WF-3 (Cron harian)   ──► cek lead stagnan (BNSP/workshop saja) ──► WA template follow-up (H+1, H+3, H+7)
n8n WF-4 (Cron 30 menit) ──► cek handoff belum dibalas ──► naikkan prioritas berdasar waktu tunggu
```

Empat workflow n8n:

- **WF-1 Inbound Handler** — terima webhook Chatwoot, jalankan menu 5-jalur/router/AI Agent, kirim balasan. Rincian penuh: `spesifikasi-workflow-n8n.md`.
- **WF-2 Lead Capture** — tulis ke tab `leads`, **pasang label lengkap + hitung & set prioritas Chatwoot** (lihat `labelling-dan-prioritas.md`), notifikasi tim hanya untuk prioritas `urgent`.
- **WF-3 Follow-up Anti-Cold** — cron harian, khusus lead `intent:bnsp` dan `intent:workshop` yang stagnan, kirim WhatsApp template follow-up H+1/H+3/H+7. **Tidak pernah** dikirim ke `intent:technical` — orang yang sedang punya masalah lalu dikirimi promo merusak hubungan, bukan memperbaikinya.
- **WF-4 Re-prioritization (baru)** — cron tiap 30 menit di jam kerja, cari percakapan `human-takeover` yang belum dibalas agent, hitung ulang skor dengan bobot waktu tunggu, naikkan prioritas bila perlu. Ini yang membuat faktor "lama menunggu" benar-benar hidup, bukan cuma nilai sekali di awal.

---

## 5. Kapan bot menyerahkan ke manusia (handoff)

Salah satu terpenuhi → bot berhenti, label `human-takeover`, prioritas dihitung (lihat `labelling-dan-prioritas.md`), percakapan masuk antrean umum:

- User minta bicara dengan manusia
- Terdeteksi B2B / in-house (BNSP maupun non-BNSP) — jalur ini **tidak pernah** dijawab tuntas oleh bot, langsung kualifikasi lalu handoff
- Terdeteksi technical issue — setelah triase 4-sub-kategori selesai dikumpulkan
- AI tidak yakin / 2 giliran berturut tanpa jawaban memuaskan
- Topik sensitif: negosiasi harga korporat, jaminan kelulusan, permintaan diskon
- User menyatakan siap daftar/bayar

Karena **tidak ada routing per-PIC** — semua handoff masuk satu antrean umum — label dan prioritas adalah satu-satunya sinyal yang membedakan mana yang harus diambil duluan. Detail taksonomi label dan model skor prioritas: `labelling-dan-prioritas.md`.

Di luar jam kerja: bot menjawab apa yang bisa dijawab + janji balasan pagi hari, percakapan masuk antrean dengan prioritas yang sudah dihitung seperti biasa.

---

## 6. Guardrail

- **Kill switch:** label `bot-off` per percakapan + variabel env global untuk mematikan total.
- **Rate limit:** maksimal 1 balasan bot per 5 detik per percakapan.
- **Anti-loop:** bot tidak pernah membalas pesan dari bot/agent sendiri.
- **Logging:** semua pasangan pertanyaan–jawaban AI dicatat untuk audit mingguan.
- **Larangan mutlak:** menyebut harga/tanggal yang tidak ada di knowledge base, menjanjikan kelulusan uji kompetensi, menegosiasikan harga, mengirim follow-up marketing ke chat `intent:technical`.

---

## 7. Rollout bertahap (4 minggu)

| Minggu | Isi | Risiko |
|---|---|---|
| 1 | Bangun knowledge base (termasuk katalog workshop, tab `prioritas` & `technical_triage`) + buat semua label di Chatwoot + WF-1 hanya menu & auto-reply deterministik. **Labelling & prioritas aktif sejak minggu ini** — deterministik, tidak butuh AI, manfaatnya langsung terasa ke tim meski AI belum jalan. | Rendah |
| 2 | **Shadow mode**: AI menulis draft jawaban sebagai catatan privat di Chatwoot, agent yang memutuskan kirim atau tidak. Kumpulkan ~100 kasus nyata. Sekaligus validasi apakah skor prioritas bot cocok dengan penilaian agent — kalau tidak, setel ulang bobot di tab `prioritas`. | Nol — pelanggan tidak pernah melihat AI |
| 3 | AI kirim langsung, tapi hanya untuk jalur BNSP & workshop kategori aman (jadwal, syarat, info program). Harga, semua kasus B2B, dan semua technical tetap 100% manusia. | Sedang |
| 4 | Aktifkan WF-3 follow-up + WF-4 re-prioritization + perluas cakupan AI berdasarkan hasil audit log minggu 2–3. | Sedang |

Minggu 2 (shadow mode) adalah tahap yang paling sering dilewati tim yang buru-buru, dan justru paling menentukan — ini kesempatan menilai kualitas jawaban AI sebelum dipercaya bicara langsung ke calon peserta.

---

## 8. Metrik yang dipantau

- Waktu respon pertama (target <1 menit, dibanding baseline sekarang yang tidak terukur)
- % percakapan tuntas tanpa handoff (target 50–60% setelah minggu 4)
- Jumlah lead dengan data lengkap per minggu (baseline sekarang: 0)
- % lead follow-up (WF-3) yang membalas
- Lead → pendaftaran
- Waktu tunggu rata-rata per tingkat prioritas (apakah `urgent` benar-benar dibalas dalam SLA-nya)

---

## 9. Keputusan terbuka

- **Model LLM & penyedia** yang dipakai di n8n AI Agent node — belum ditentukan.
- **Pemilik knowledge base** — siapa yang bertanggung jawab memperbarui jadwal batch, katalog workshop, dan bobot prioritas. Tanpa pemilik yang jelas, KB basi dalam sebulan dan bot ikut menjawab/memprioritaskan salah.
- **Jam kerja resmi tim** untuk perhitungan SLA — draf memakai Senin–Jumat 09:00–17:00 WIB, perlu dikonfirmasi.

---

## 10. Dokumen terkait

- `panduan-implementasi.md` — **mulai dari sini untuk eksekusi** — langkah step-by-step dari nol sampai live, dengan checklist per fase
- `knowledge-base-template.md` + `dilatih-kb.xlsx` — skema Google Sheet (7 sheet, termasuk katalog 55 program yang sudah tersampel harganya) siap diimpor
- `spesifikasi-workflow-n8n.md` — rincian node per workflow (WF-1–WF-4), payload, endpoint API
- `system-prompt-bot.md` — system prompt lengkap AI Agent + aturan guardrail
- `copy-percakapan.md` — teks sapaan, menu 5-jalur, jawaban FAQ, pesan handoff, draf WhatsApp template follow-up
- `labelling-dan-prioritas.md` — taksonomi label, model skor prioritas, pemetaan SLA
