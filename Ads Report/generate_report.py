"""
generate_report.py
Laporan performa Meta Ads kampanye BNSP - Dilatih / Motekar Edukasi.
Output: dilatih-meta-ads-report-YYYY-MM-DD.pdf
"""

import csv
import io
import os
import subprocess
import tempfile
import base64
from datetime import date
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

BASE_DIR = Path(__file__).parent.resolve()
CSV_FILE = BASE_DIR / "Motekar-Edukasi-Ad-sets-Jul-31-2023-Aug-30-2026.csv"
OUTPUT_PDF = BASE_DIR / f"dilatih-meta-ads-report-{date.today()}.pdf"

CHROME_PATHS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]

NAVY      = "#1a365d"
BLUE      = "#2b6cb0"
LIGHT_BLUE = "#ebf8ff"
RED       = "#e53e3e"
ORANGE    = "#dd6b20"
GRAY      = "#4a5568"
LIGHT_GRAY = "#f7fafc"
BORDER    = "#e2e8f0"

# ---------------------------------------------------------------------------
# 1. Read CSV & compute metrics
# ---------------------------------------------------------------------------

def read_csv(path: Path) -> list:
    with open(path, encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def parse_metrics(rows: list) -> dict:
    r = rows[0]

    def n(key, default=0.0):
        val = r.get(key, "").strip()
        try:
            return float(val.replace(",", "")) if val else default
        except ValueError:
            return default

    spend        = n("Amount spent (IDR)")
    impressions  = n("Impressions")
    reach        = n("Reach")
    results      = n("Results")
    cpr          = n("Cost per results")
    msg_contacts = n("Total messaging contacts")

    frequency = round(impressions / reach, 2) if reach else 0.0
    cpm       = round(spend / impressions * 1000, 0) if impressions else 0.0
    repeat    = impressions - reach

    return {
        "ad_set_name":   r.get("Ad set name", ""),
        "period_start":  r.get("Reporting starts", ""),
        "period_end":    r.get("Reporting ends", ""),
        "attribution":   r.get("Attribution setting", ""),
        "bid_type":      r.get("Bid type", ""),
        "spend":         spend,
        "impressions":   impressions,
        "reach":         reach,
        "results":       results,
        "cpr":           cpr,
        "msg_contacts":  msg_contacts,
        "frequency":     frequency,
        "cpm":           cpm,
        "repeat":        repeat,
        "daily_spend":   spend / 32,
    }


def idr(val: float) -> str:
    return "Rp " + f"{int(val):,}".replace(",", ".")


def num(val: float) -> str:
    return f"{int(val):,}".replace(",", ".")


# ---------------------------------------------------------------------------
# 2. Charts -> base64 PNG
# ---------------------------------------------------------------------------

def fig_to_b64(fig) -> str:
    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=150, bbox_inches="tight", facecolor="white")
    plt.close(fig)
    buf.seek(0)
    return base64.b64encode(buf.read()).decode()


def chart_bar(m: dict) -> str:
    labels = ["Impressions", "Reach\nUnik", "Percakapan\nBaru", "Kontak\nPesan"]
    values = [m["impressions"], m["reach"], m["results"], m["msg_contacts"]]
    colors = [BLUE, BLUE, NAVY, NAVY]

    fig, axes = plt.subplots(1, 4, figsize=(9, 2.4))
    fig.patch.set_facecolor("white")

    for ax, label, val, color in zip(axes, labels, values, colors):
        ax.bar([0], [val], color=color, width=0.5)
        for sp in ax.spines.values():
            sp.set_visible(False)
        ax.set_xticks([])
        ax.set_yticks([])
        ax.set_facecolor(LIGHT_GRAY)
        val_str = f"{int(val):,}".replace(",", ".")
        ax.text(0, val * 1.06, val_str, ha="center", va="bottom",
                fontsize=12, fontweight="bold", color=color)
        ax.text(0, -val * 0.14, label, ha="center", va="top",
                fontsize=7.5, color=GRAY)
        ax.set_ylim(0, val * 1.45)

    plt.tight_layout(pad=0.4)
    return fig_to_b64(fig)


def chart_donut(m: dict) -> str:
    reach  = m["reach"]
    repeat = m["repeat"]

    fig, ax = plt.subplots(figsize=(3.6, 3.0))
    fig.patch.set_facecolor("white")

    wedges, _ = ax.pie(
        [reach, repeat],
        colors=[BLUE, LIGHT_BLUE],
        startangle=90,
        wedgeprops=dict(width=0.52, edgecolor="white", linewidth=2),
    )
    ax.text(0, 0.08, f"{m['frequency']}x", ha="center", va="center",
            fontsize=16, fontweight="bold", color=NAVY)
    ax.text(0, -0.22, "Frequency", ha="center", va="center",
            fontsize=8, color=GRAY)

    ax.legend(
        wedges,
        [f"Reach Unik ({num(reach)})", f"Berulang ({num(repeat)})"],
        loc="lower center", bbox_to_anchor=(0.5, -0.16),
        fontsize=7.5, frameon=False,
    )
    ax.set_title("Distribusi Tayangan", fontsize=9, color=GRAY, pad=6)
    plt.tight_layout()
    return fig_to_b64(fig)


# ---------------------------------------------------------------------------
# 3. Build HTML
# ---------------------------------------------------------------------------

MONTH_ID = {
    "January": "Januari", "February": "Februari", "March": "Maret",
    "April": "April", "May": "Mei", "June": "Juni", "July": "Juli",
    "August": "Agustus", "September": "September", "October": "Oktober",
    "November": "November", "December": "Desember",
}


def gen_date_id() -> str:
    s = date.today().strftime("%d %B %Y")
    for en, id_ in MONTH_ID.items():
        s = s.replace(en, id_)
    return s


def build_html(m: dict, b64_bar: str, b64_donut: str) -> str:
    gd = gen_date_id()

    # pre-format all dynamic values
    spend_f      = idr(m["spend"])
    daily_f      = idr(m["daily_spend"])
    impressions_f = num(m["impressions"])
    reach_f      = num(m["reach"])
    freq_f       = str(m["frequency"])
    cpm_f        = idr(m["cpm"])
    results_f    = str(int(m["results"]))
    cpr_f        = idr(m["cpr"])
    contacts_f   = str(int(m["msg_contacts"]))
    ad_name      = m["ad_set_name"]
    attribution  = m["attribution"]
    bid_type     = m["bid_type"]
    period       = f"{m['period_start']} – {m['period_end']}"

    return f"""<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Laporan Kampanye Meta Ads - Dilatih</title>
<style>
@page {{ size: A4; margin: 18mm 20mm 18mm 20mm; }}
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{ font-family: "Segoe UI", Arial, sans-serif; font-size: 11px;
        color: #2d3748; background: #fff; line-height: 1.5; }}

.cover {{ background: {NAVY}; color: white; padding: 36px 32px 28px;
          border-radius: 4px; margin-bottom: 20px; }}
.cover .brand {{ font-size: 20px; font-weight: 700; letter-spacing: 1px;
                 opacity: 0.85; margin-bottom: 4px; }}
.cover h1 {{ font-size: 17px; font-weight: 600; margin-bottom: 3px; }}
.cover .sub {{ opacity: 0.7; font-size: 10.5px; }}
.cover .meta {{ margin-top: 16px; display: flex; gap: 28px; flex-wrap: wrap; }}
.cover .meta-item label {{ display: block; opacity: 0.6; font-size: 8.5px;
                            text-transform: uppercase; letter-spacing: 0.5px; }}
.cover .meta-item span {{ font-size: 11px; font-weight: 600; }}

h2 {{ font-size: 12px; font-weight: 700; color: {NAVY};
      border-bottom: 2px solid {NAVY}; padding-bottom: 4px;
      margin: 20px 0 10px; text-transform: uppercase; letter-spacing: 0.5px; }}

.cards {{ display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }}
.card {{ flex: 1; min-width: 90px; background: {LIGHT_GRAY}; border: 1px solid {BORDER};
         border-radius: 5px; padding: 10px 8px; text-align: center; }}
.card .val {{ font-size: 13px; font-weight: 700; color: {NAVY}; }}
.card .lbl {{ font-size: 8.5px; color: {GRAY}; margin-top: 2px;
              text-transform: uppercase; letter-spacing: 0.3px; }}
.card.hl {{ border-color: {BLUE}; background: {LIGHT_BLUE}; }}

.charts {{ display: flex; gap: 16px; align-items: flex-start; margin-bottom: 14px; }}
.chart-main {{ flex: 3; }}
.chart-side {{ flex: 1.6; }}
.chart-main img, .chart-side img {{ width: 100%; border-radius: 3px; }}

table {{ width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 14px; }}
thead tr {{ background: {NAVY}; color: white; }}
thead th {{ padding: 6px 8px; text-align: left; font-weight: 600; }}
tbody tr:nth-child(even) {{ background: {LIGHT_GRAY}; }}
tbody td {{ padding: 5px 8px; border-bottom: 1px solid {BORDER}; }}
.zero {{ color: {RED}; font-weight: 700; }}

.finding {{ border-left: 3px solid; border-radius: 0 4px 4px 0;
            padding: 8px 10px; margin-bottom: 8px; }}
.finding.crit {{ border-color: {RED}; background: #fff5f5; }}
.finding.warn {{ border-color: {ORANGE}; background: #fffaf0; }}
.ftag {{ display: inline-block; padding: 1px 6px; border-radius: 3px;
         font-size: 8.5px; font-weight: 700; color: white; margin-right: 5px; }}
.ftag.crit {{ background: {RED}; }}
.ftag.warn {{ background: {ORANGE}; }}
.ftitle {{ font-weight: 700; font-size: 10.5px; }}
.finding p {{ font-size: 9.5px; color: {GRAY}; margin-top: 4px; }}
.finding .act {{ margin-top: 5px; font-size: 9.5px; color: #2d3748; }}

.rec {{ display: flex; gap: 8px; margin-bottom: 7px; align-items: flex-start; }}
.rnum {{ min-width: 20px; height: 20px; background: {NAVY}; color: white;
         border-radius: 50%; display: flex; align-items: center; justify-content: center;
         font-size: 8.5px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }}
.rbody strong {{ font-size: 10px; color: {NAVY}; display: block; }}
.rbody span {{ font-size: 9.5px; color: {GRAY}; }}

.warn-box {{ background: #fffbeb; border: 1px solid #fbd38d; border-radius: 4px;
             padding: 7px 10px; margin-bottom: 14px; font-size: 9.5px; color: #744210; }}

.footer {{ margin-top: 24px; border-top: 1px solid {BORDER}; padding-top: 8px;
           display: flex; justify-content: space-between; color: {GRAY}; font-size: 8.5px; }}
</style>
</head>
<body>

<div class="cover">
  <div class="brand">Dilatih</div>
  <h1>Laporan Performa Kampanye Meta Ads</h1>
  <div class="sub">Motekar Edukasi &mdash; Kursus Online &amp; Sertifikasi BNSP</div>
  <div class="meta">
    <div class="meta-item"><label>Periode Data</label><span>{period}</span></div>
    <div class="meta-item"><label>Durasi</label><span>32 hari</span></div>
    <div class="meta-item"><label>Platform</label><span>Meta Ads</span></div>
    <div class="meta-item"><label>Dibuat</label><span>{gd}</span></div>
  </div>
</div>

<div class="warn-box">
  <strong>Catatan:</strong> Laporan ini mencakup 1 ad set aktif dalam periode tersebut.
  Beberapa metrik (CTR, breakdown placement, data creative) tidak tersedia di export ini.
</div>

<h2>Ringkasan Eksekutif</h2>
<div class="cards">
  <div class="card hl"><div class="val">{spend_f}</div><div class="lbl">Total Spend</div></div>
  <div class="card"><div class="val">{impressions_f}</div><div class="lbl">Impressions</div></div>
  <div class="card"><div class="val">{reach_f}</div><div class="lbl">Reach Unik</div></div>
  <div class="card"><div class="val">{freq_f}x</div><div class="lbl">Frequency</div></div>
  <div class="card"><div class="val">{results_f}</div><div class="lbl">Percakapan Baru</div></div>
  <div class="card"><div class="val">{cpr_f}</div><div class="lbl">Cost per Result</div></div>
</div>

<p style="font-size:10px; color:{GRAY}; margin-bottom:14px;">
  Kampanye berjalan dengan objective <strong>messaging</strong>, menghasilkan
  <strong>{results_f} percakapan baru</strong> dari {reach_f} orang unik.
  <strong style="color:{RED}">Tidak ada pembelian yang terdata</strong> &mdash;
  indikasi Meta Pixel belum men-track event Purchase. Spend harian rata-rata
  <strong>{daily_f}/hari</strong> berada di bawah threshold optimal learning phase.
</p>

<h2>Performa Overview</h2>
<div class="charts">
  <div class="chart-main">
    <img src="data:image/png;base64,{b64_bar}" alt="Metrik Utama">
  </div>
  <div class="chart-side">
    <img src="data:image/png;base64,{b64_donut}" alt="Frequency">
  </div>
</div>

<table>
  <thead><tr><th>Metrik</th><th>Nilai</th><th>Catatan</th></tr></thead>
  <tbody>
    <tr><td>Total Spend</td><td>{spend_f}</td><td>{daily_f}/hari rata-rata</td></tr>
    <tr><td>Impressions</td><td>{impressions_f}</td><td>Total tayangan</td></tr>
    <tr><td>Reach Unik</td><td>{reach_f}</td><td>Orang berbeda yang terpapar</td></tr>
    <tr><td>Frequency</td><td>{freq_f}x</td><td>Rata-rata tayangan per orang</td></tr>
    <tr><td>CPM</td><td>{cpm_f}</td><td>Cost per 1.000 impressions</td></tr>
    <tr><td>Percakapan Baru</td><td>{results_f}</td><td>Hasil utama kampanye</td></tr>
    <tr><td>Cost per Percakapan</td><td>{cpr_f}</td><td></td></tr>
    <tr><td>Total Kontak Pesan</td><td>{contacts_f}</td><td>Termasuk kontak yang pernah pesan</td></tr>
    <tr><td>Pembelian Tercatat</td><td class="zero">0</td><td>Pixel Purchase tidak aktif</td></tr>
  </tbody>
</table>

<h2>Detail Ad Set</h2>
<table>
  <thead>
    <tr><th>Ad Set</th><th>Status</th><th>Bid Type</th><th>Atribusi</th><th>Mulai</th><th>Selesai</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>{ad_name}</strong></td>
      <td><span style="background:#c6f6d5;color:#276749;padding:1px 6px;border-radius:8px;font-size:8.5px;font-weight:700;">Selesai</span></td>
      <td>{bid_type}</td>
      <td>{attribution}</td>
      <td>{m["period_start"]}</td>
      <td>{m["period_end"]}</td>
    </tr>
  </tbody>
</table>

<h2>Temuan Audit</h2>

<div class="finding crit">
  <div><span class="ftag crit">KRITIS</span><span class="ftitle">M18 &mdash; Ketidaksesuaian Objective Kampanye</span></div>
  <p>Kampanye dioptimasi untuk <em>messaging conversations</em>, bukan pembelian. Meta mendistribusikan
  iklan ke orang yang kemungkinan besar membalas pesan, bukan membeli. Tujuan bisnis tidak selaras
  dengan sinyal optimasi yang diberikan ke algoritma.</p>
  <p class="act"><strong>Tindakan:</strong> Buat kampanye baru dengan objective <strong>Sales (Purchases)</strong>.</p>
</div>

<div class="finding crit">
  <div><span class="ftag crit">KRITIS</span><span class="ftitle">Pixel Purchase Event Tidak Aktif (Purchases = 0)</span></div>
  <p>Tidak ada pembelian yang terdata selama 32 hari. Meta tidak dapat mengoptimasi untuk pembelian
  tanpa event Purchase yang aktif. Kemungkinan: Pixel belum dipasang di halaman konfirmasi pesanan,
  atau event tidak dikonfigurasi dengan value dan currency IDR.</p>
  <p class="act"><strong>Tindakan:</strong> Pasang Meta Pixel + event Purchase sebelum launch kampanye baru.</p>
</div>

<div class="finding warn">
  <div><span class="ftag warn">PERHATIAN</span><span class="ftitle">M-ST1 &mdash; Budget di Bawah Threshold Learning Phase</span></div>
  <p>Spend harian ~{daily_f} jauh di bawah rekomendasi Meta (minimal 5x target CPA per hari).
  Dengan nol purchase event, ad set hampir pasti tidak keluar dari learning phase sehingga delivery
  tidak teroptimasi secara algoritma.</p>
  <p class="act"><strong>Tindakan:</strong> Set budget minimal Rp 300.000&ndash;500.000/hari setelah Pixel aktif.</p>
</div>

<div class="finding warn">
  <div><span class="ftag warn">PERHATIAN</span><span class="ftitle">M36 &mdash; Cost Cap pada Akun yang Baru Aktif Kembali</span></div>
  <p>Bid type ABSOLUTE_OCPM (cost cap) membatasi kemampuan Meta bersaing di auction saat akun baru
  restart setelah lama tidak aktif. Sering menyebabkan delivery terbatas sebelum data konversi
  terkumpul.</p>
  <p class="act"><strong>Tindakan:</strong> Gunakan <strong>Highest Volume</strong> (tanpa cost cap) sampai learning phase selesai.</p>
</div>

<h2>Rekomendasi Tindakan</h2>

<div class="rec">
  <div class="rnum">1</div>
  <div class="rbody">
    <strong>Pasang / Verifikasi Meta Pixel + Purchase Event</strong>
    <span>Blocker utama. Pastikan event difired dengan value (IDR) dan currency: IDR di halaman konfirmasi pesanan.</span>
  </div>
</div>
<div class="rec">
  <div class="rnum">2</div>
  <div class="rbody">
    <strong>Aktifkan Conversions API (CAPI)</strong>
    <span>Redundansi tracking server-side, penting untuk pengguna iOS yang memblokir browser tracking.</span>
  </div>
</div>
<div class="rec">
  <div class="rnum">3</div>
  <div class="rbody">
    <strong>Buat Kampanye Baru dengan Objective Sales (Purchases)</strong>
    <span>Jangan lanjutkan kampanye lama. Buat fresh dengan conversion event = Purchase.</span>
  </div>
</div>
<div class="rec">
  <div class="rnum">4</div>
  <div class="rbody">
    <strong>Gunakan Bid Highest Volume (Tanpa Cost Cap)</strong>
    <span>Berlaku sampai learning phase selesai dan ada baseline CPA dari minimal 50 purchase events per minggu.</span>
  </div>
</div>
<div class="rec">
  <div class="rnum">5</div>
  <div class="rbody">
    <strong>Tingkatkan Budget Harian ke Rp 300.000&ndash;500.000</strong>
    <span>Diperlukan agar volume konversi cukup untuk keluar dari learning phase.</span>
  </div>
</div>
<div class="rec">
  <div class="rnum">6</div>
  <div class="rbody">
    <strong>Pasang UTM Parameters di Semua Iklan</strong>
    <span>Contoh: utm_source=facebook&amp;utm_medium=paid&amp;utm_campaign=bnsp-purchase</span>
  </div>
</div>

<div class="footer">
  <span>Dilatih / Motekar Edukasi &mdash; Laporan Internal</span>
  <span>Dibuat: {gd} &bull; Sumber: Meta Ads Manager Export</span>
</div>

</body>
</html>"""


# ---------------------------------------------------------------------------
# 4. HTML -> PDF via Chrome/Edge headless
# ---------------------------------------------------------------------------

def find_browser() -> str:
    for p in CHROME_PATHS:
        if os.path.exists(p):
            return p
    raise RuntimeError(
        "Chrome/Edge tidak ditemukan. Pastikan salah satu terinstall di path standar."
    )


def html_to_pdf(html: str, out: Path) -> None:
    browser = find_browser()
    with tempfile.NamedTemporaryFile(
        suffix=".html", delete=False, mode="w", encoding="utf-8"
    ) as f:
        f.write(html)
        tmp = f.name

    try:
        url = "file:///" + tmp.replace("\\", "/")
        cmd = [
            browser,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--no-pdf-header-footer",
            f"--print-to-pdf={out}",
            url,
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if not out.exists():
            raise RuntimeError(
                f"PDF tidak terbuat.\nstderr:\n{result.stderr[:600]}"
            )
    finally:
        os.unlink(tmp)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("Membaca CSV ...")
    rows = read_csv(CSV_FILE)
    m = parse_metrics(rows)

    print("Membuat chart ...")
    b64_bar   = chart_bar(m)
    b64_donut = chart_donut(m)

    print("Menyusun HTML ...")
    html = build_html(m, b64_bar, b64_donut)

    print(f"Mengekspor PDF -> {OUTPUT_PDF.name} ...")
    html_to_pdf(html, OUTPUT_PDF)

    kb = OUTPUT_PDF.stat().st_size // 1024
    print(f"Selesai! {OUTPUT_PDF.name} ({kb} KB)")


if __name__ == "__main__":
    main()
