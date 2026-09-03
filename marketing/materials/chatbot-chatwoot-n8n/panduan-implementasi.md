# Panduan Implementasi Step-by-Step — Chatbot Chatwoot + n8n

**Status:** Panduan eksekusi teknis, pelengkap `keputusan-dan-arsitektur.md` §7 (rollout strategis 4 minggu). Dokumen ini menjabarkan §7 jadi langkah konkret yang bisa langsung dikerjakan, urut dari nol.

**Cara pakai:** kerjakan berurutan dari Fase 0. Setiap langkah menyebut dokumen sumber yang jadi rujukan detailnya — dokumen ini tidak mengulang isi lengkap, hanya urutan eksekusinya.

---

## Fase 0 — Persiapan akses & akun (sebelum menyentuh n8n sama sekali)

- [ ] **0.1** Buat **Chatwoot Agent Bot** khusus integrasi ini (Settings → Agent Bots) — bukan akun agent manusia. Simpan API token-nya, ini yang dipakai n8n, bukan token personal siapa pun.
- [ ] **0.2** Buat semua **label Chatwoot** sesuai taksonomi di `labelling-dan-prioritas.md` §1 (Settings → Labels). n8n tidak bisa membuat label baru lewat API — hanya bisa memasang label yang sudah ada. Daftar lengkap termasuk yang baru: `intent:bnsp`, `intent:workshop`, `intent:iht-b2b`, `intent:technical`, `intent:minat-baru`, `intent:lain`, `tipe:individu`, `tipe:korporat`, `tipe:peserta-aktif`, `tech:akses`, `tech:pembayaran`, `tech:sertifikat`, `tech:jadwal`, `bot-handled`, `human-takeover`, `bot-off`, `follow-up-aktif`, `tercatat-minat-baru`, `closed` (label `program:<id>`/`waitlist:<id>` dibuat belakangan per-program saat KB final, opsional).
- [ ] **0.3** Konfirmasi **jam kerja resmi tim** untuk perhitungan SLA (draf pakai Senin–Jumat 09:00–17:00 WIB) — keputusan terbuka di `keputusan-dan-arsitektur.md` §9.
- [ ] **0.4** Tentukan **kanal notifikasi urgent** (nomor WA internal tim atau email) — dipakai WF-2 Node 6 dan WF-4 Node 4.
- [ ] **0.5** Tentukan **pemilik knowledge base** — siapa yang bertanggung jawab menjaga data tetap segar. Tanpa ini KB basi dalam hitungan minggu (lihat bukti nyata di `project_pelatihan_bnsp_dilatih.md`: 2 program BNSP berubah status hanya dalam ~2 bulan).
- [ ] **0.6** Putuskan **model LLM** untuk n8n AI Agent node (keputusan terbuka lain di §9) — pastikan kredensialnya sudah bisa dipakai di n8n sebelum Fase 3.

---

## Fase 1 — Knowledge base (bisa paralel dengan Fase 0)

- [ ] **1.1** Buka `dilatih-kb.xlsx` di folder ini, upload/import ke **Google Sheets** (bukan dipakai sebagai file Excel lokal — n8n butuh Google Sheets API). Beri nama sheet `dilatih-kb`.
- [ ] **1.2** Bagikan akses edit ke pemilik KB (0.5) dan akses read-only ke service account n8n (dibuat di Fase 3.1).
- [ ] **1.3** Lengkapi kolom yang masih kosong di tab `program` — harga BNSP (`it-auditor`, `office-advance`), `durasi`, `lokasi`, `syarat_peserta`, `tersedia_iht`, `ringkasan`, `url`. Daftar tugas lengkap ada di `knowledge-base-template.md` bagian "Yang masih harus dikerjakan tim sebelum go-live" (BNSP dan workshop, dua bagian terpisah).
- [ ] **1.4** **Verifikasi manual** dua baris yang ditandai ambigu: `w-124` dan `w-85` (hasil sampel tidak konsisten — cek langsung ke halaman detailnya di dilatih.co).
- [ ] **1.5** Klarifikasi ke tim: `w-246` (GRC & GCG) — apakah "gratis" itu kebijakan tetap atau promo satu kali.
- [ ] **1.6** Isi tab `faq` dengan jawaban aktual untuk 12 baris starter (kolom `jawaban` sengaja kosong di template — isi dengan bahasa sesuai `brand-voice.md`).
- [ ] **1.7** Review bobot di tab `prioritas` — nilai awal adalah hipotesis, boleh dipakai apa adanya di Fase 1, tapi rencanakan peninjauan ulang di Fase 5 (shadow mode).
- [ ] **1.8** Tab `technical_triage` dan `leads` sudah siap pakai apa adanya (leads memang kosong, diisi otomatis nanti).

**Checkpoint Fase 1 selesai:** semua kolom di tab `program` terisi (tidak ada "isi ulang"/"belum disampel" tersisa untuk program dengan `status = batch_aktif`), semua label Chatwoot sudah dibuat (Fase 0.2).

---

## Fase 2 — Bangun WF-1 versi minimal (menu + jawaban deterministik, TANPA AI)

Tujuan fase ini: bot bisa jalan dan sudah memberi nilai (jawab pertanyaan dasar + label + prioritas) sebelum AI Agent disentuh sama sekali — ini yang bikin rollout `keputusan-dan-arsitektur.md` §7 minggu 1 punya risiko rendah.

- [ ] **2.1** Di n8n, buat kredensial **Chatwoot API** (pakai token dari 0.1) dan **Google Sheets** (service account dengan akses ke `dilatih-kb`, dari 1.2).
- [ ] **2.2** Bangun **Webhook Trigger** (Node 1) — di Chatwoot: Settings → Integrations → Webhook, event `message_created`, arahkan ke URL produksi n8n (bukan test URL). Rujuk `spesifikasi-workflow-n8n.md` WF-1 Node 1.
- [ ] **2.3** Bangun **Node 2 (Filter)** dan **Node 3 (Dedupe)** — guard dasar sebelum apa pun lain jalan. Detail kondisi ada di spesifikasi WF-1.
- [ ] **2.4** Bangun **Node 4 (cek state)** dan **Node 5 (switch baru/lanjutan)** — kirim sapaan + menu 5 pilihan (teks di `copy-percakapan.md` §1) saat percakapan baru.
- [ ] **2.5** Bangun **Node 6a (jawaban deterministik)** untuk jalur 1 (BNSP) dan jalur 2 (Workshop) — baca tab `program`/`faq`, susun jawaban dari template `copy-percakapan.md` §2–§3. **Belum ada LLM di sini.**
- [ ] **2.6** Bangun **Node 7 (jalur B2B/IHT)** dan **Node 7b (jalur Technical)** — kualifikasi/triase sesuai copy di §4–§5, selalu berakhir di handoff (Node 9).
- [ ] **2.7** Bangun **Node 9 (Handoff)** — pasang label lengkap (belum termasuk skor AI karena AI belum ada, cukup label dasar `intent:*`/`tipe:*`/`human-takeover`), set prioritas, panggil WF-2.
- [ ] **2.8** Bangun **Node 10 (kirim balasan)** dan **Node 11 (panggil WF-2)**.
- [ ] **2.9** Bangun **WF-2 (Lead Capture)** lengkap — Node 1–6 sesuai `spesifikasi-workflow-n8n.md`, termasuk perhitungan label dan prioritas (bisa jalan tanpa AI karena semua sinyal sejauh ini berasal dari pilihan menu, bukan teks bebas).
- [ ] **2.10** **Uji end-to-end tanpa AI:** kirim pesan WA ke nomor Dilatih, jalani tiap pilihan menu (1–5), pastikan balasan benar, label terpasang, prioritas ter-set, baris masuk ke tab `leads`.

**Checkpoint Fase 2 selesai:** bot menjawab menu + FAQ dasar dengan benar, tapi apa pun di luar menu (teks bebas) masih belum tertangani (Cabang C di Node 5 belum ada tujuan). Ini **sudah bisa dipakai secara terbatas** kalau perlu — tim sudah dapat manfaat labelling & prioritas meski AI belum jalan.

---

## Fase 3 — Tambahkan AI Agent (Node 8) — mode SHADOW dulu

- [ ] **3.1** Buat kredensial LLM di n8n (dari keputusan 0.6).
- [ ] **3.2** Bangun **Node 8 (AI Agent)** — system prompt dari `system-prompt-bot.md` (copy persis blok kode di dalamnya), pasang 6 tools: `cari_program`, `cari_faq`, `klasifikasi_intent`, `hitung_prioritas`, `catat_minat_baru`, `eskalasi`. Definisi tiap tool ada di `spesifikasi-workflow-n8n.md` WF-1 Node 8.
- [ ] **3.3** Sambungkan **Cabang C** di Node 5 (teks bebas) ke Node 8.
- [ ] **3.4** **PENTING — mode shadow dulu:** untuk tahap ini, ubah Node 10 supaya jawaban AI **tidak dikirim ke pelanggan**, tapi ditulis sebagai *private note* di Chatwoot (endpoint sama, tambahkan `"private": true` di payload). Agent manusia yang melihat draf dan memutuskan kirim manual atau tidak.
- [ ] **3.5** Uji dengan **10 skenario** minimum (jalankan manual, catat hasilnya):
  1. Pertanyaan harga program BNSP batch aktif
  2. Pertanyaan program BNSP waitlist (harus dapat framing "daftar minat", bukan penolakan)
  3. Pertanyaan program yang **tidak ada di katalog sama sekali** (harus jalan lewat `catat_minat_baru`, TIDAK eskalasi — lihat `system-prompt-bot.md` aturan #11 dan contoh interaksinya)
  4. Pertanyaan di luar topik pelatihan
  5. Minta bicara dengan manusia langsung
  6. Skenario B2B (BNSP dan non-BNSP, termasuk ≥20 peserta)
  7. Peserta aktif dengan kendala (uji semua 4 sub-kategori technical)
  8. Pesan di luar jam kerja
  9. Dua pesan beruntun cepat (uji dedupe Node 3)
  10. Percakapan berlabel `bot-off` (pastikan bot benar-benar diam)
  11. Pertanyaan perbandingan BNSP vs workshop (harus netral, tidak merekomendasikan)
  12. Pertanyaan harga yang jawabannya kena aturan resertifikasi (Rp375rb/Batch 99) — pastikan bot **tidak** menyebut harga resert ke calon peserta baru
- [ ] **3.6** Kumpulkan **~100 kasus nyata** di mode shadow (biarkan berjalan beberapa hari dengan trafik asli). Agent menilai kualitas tiap draf.
- [ ] **3.7** Audit mingguan: bandingkan draf AI vs yang sebenarnya dikirim agent. Kalau ada pola kesalahan berulang, revisi `system-prompt-bot.md` atau tambah baris di tab `faq`/`program` — jangan tambal di n8n.

**Checkpoint Fase 3 selesai:** AI Agent menghasilkan jawaban yang secara konsisten diterima agent tanpa revisi besar (target subjektif tim, tidak ada angka baku — tapi kalau masih sering salah arah setelah 100 kasus, jangan lanjut ke Fase 4).

---

## Fase 4 — AI kirim langsung (terbatas)

- [ ] **4.1** Ubah Node 10 kembali ke kirim langsung (`"private": false`), **tapi batasi cakupan**: hanya untuk jalur BNSP & workshop kategori aman (info program, jadwal, syarat). Ini bisa berupa IF tambahan sebelum Node 10 yang mengecek kategori topik.
- [ ] **4.2** Harga tetap dijawab AI (karena sudah dari KB terkunci), tapi **semua kasus B2B dan technical tetap 100% manusia** — pastikan Node 7/7b tidak pernah lewat Node 8.
- [ ] **4.3** Pantau harian selama minggu ini — cek log (guardrail "Logging" di `keputusan-dan-arsitektur.md` §6), cek apakah ada pelanggaran aturan mutlak (harga di luar KB, janji kelulusan, dst).

---

## Fase 5 — Aktifkan WF-3 dan WF-4, kalibrasi ulang prioritas

- [ ] **5.1** Ajukan **3 WhatsApp message template** ke Meta Business Manager (teks di `copy-percakapan.md` §7) — proses approval bisa beberapa hari, idealnya sudah diajukan sejak Fase 0/1, jangan tunggu sampai fase ini.
- [ ] **5.2** Bangun **WF-3 (Follow-up Anti-Cold)** — cron harian, filter `intent` bnsp/workshop saja (jangan technical/iht-b2b/minat-baru). Detail di spesifikasi WF-3.
- [ ] **5.3** Bangun **WF-4 (Re-prioritization)** — cron 30 menit, jam kerja saja.
- [ ] **5.4** **Kalibrasi ulang tab `prioritas`** berdasarkan data 2–3 minggu berjalan — bandingkan skor bot vs urutan yang benar-benar dipakai agent. Panduan lengkap di `labelling-dan-prioritas.md` §4.
- [ ] **5.5** Mulai tinjau kolom `program_belum_ada` di tab `leads` secara berkala (bulanan) sebagai input riset demand untuk keputusan katalog — bukan tugas teknis, tapi tugas tim marketing/founder.

---

## Fase 6 — Perluasan bertahap

- [ ] **6.1** Berdasarkan audit log Fase 3–4, perluas kategori yang boleh dijawab AI langsung (mis. jalur workshop kalau tadinya baru BNSP yang diaktifkan).
- [ ] **6.2** Tinjau ulang bobot `prioritas` lagi setelah sebulan penuh berjalan.
- [ ] **6.3** Evaluasi metrik di `keputusan-dan-arsitektur.md` §8 — kalau target tidak tercapai, cek dulu apakah masalahnya di KB (data kurang lengkap) atau di system prompt (aturan kurang jelas), baru revisi.

---

## Peta silang: fase ini ↔ dokumen sumber

| Fase | Dokumen yang dirujuk |
|---|---|
| 0 | `keputusan-dan-arsitektur.md` §9, `labelling-dan-prioritas.md` §1 dan §5 (checklist) |
| 1 | `knowledge-base-template.md`, `dilatih-kb.xlsx`, `project_pelatihan_bnsp_dilatih.md` (memori) |
| 2 | `spesifikasi-workflow-n8n.md` WF-1 (Node 1–7b, 9–11), WF-2; `copy-percakapan.md` §1–§6 |
| 3 | `system-prompt-bot.md` (seluruh isi), `spesifikasi-workflow-n8n.md` WF-1 Node 8 |
| 4 | `keputusan-dan-arsitektur.md` §6 (guardrail) |
| 5 | `copy-percakapan.md` §7, `spesifikasi-workflow-n8n.md` WF-3/WF-4, `labelling-dan-prioritas.md` §4 |
| 6 | `keputusan-dan-arsitektur.md` §7 dan §8 |

Dokumen ini **tidak menggantikan** rincian teknis di masing-masing dokumen sumber — ini hanya peta urutan eksekusi. Kalau ada detail yang berubah di dokumen sumber (mis. KB direvisi, aturan system prompt ditambah), urutan langkah di sini tetap berlaku, hanya isinya yang mengikuti versi terbaru dokumen sumber.
