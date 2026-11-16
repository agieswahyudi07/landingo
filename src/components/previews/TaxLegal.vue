<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const activeTab = ref('legalitas');

const packages = {
  legalitas: [
    {
      title: 'Pendirian PT Umum Lengkap',
      price: 'Rp 5.900.000',
      timeline: '5–7 Hari Kerja',
      items: ['Pengecekan & Pemesanan Nama PT', 'Akta Pendirian Notaris & SK Kemenkumham', 'NPWP Badan & SKT Pajak', 'NIB & Sertifikat Standar OSS RBA'],
    },
    {
      title: 'Pendirian CV / PT Perorangan',
      price: 'Mulai Rp 2.500.000',
      timeline: '3–5 Hari Kerja',
      items: ['Akta Notaris / Sertifikat Kemenkumham', 'Pendaftaran NIB & KBLI Usaha', 'NPWP Badan Usaha Resmi', 'Konsultasi Struktur Pemegang Saham'],
    },
  ],
  pajak: [
    {
      title: 'Pendampingan Pajak Bulanan UMKM & PT',
      price: 'Mulai Rp 1.750.000/bln',
      timeline: 'Retainer Bulanan',
      items: ['Pembukuan Laporan Laba Rugi & Neraca', 'Hitung, Setor & Lapor SPT Masa PPh/PPN', 'Rekonsiliasi Faktur Pajak & Bukti Potong', 'Konsultasi Kepatuhan Tanpa Batas'],
    },
    {
      title: 'SPT Tahunan Badan & Respon SP2DK',
      price: 'Mulai Rp 3.500.000',
      timeline: 'Sesuai Kompleksitas',
      items: ['Review Laporan Keuangan Fiskal', 'Penyusunan & Pelaporan SPT Tahunan Badan', 'Pendampingan Klarifikasi Surat DJP (SP2DK)', 'Perjanjian Kerahasiaan Data (NDA)'],
    },
  ],
};

const activePackages = computed(() => packages[activeTab.value]);

const consultHref = (topic) =>
  whatsappHref(`Halo Pratama Tax & Legal, saya ingin konsultasi rahasia mengenai ${topic}.`);
</script>

<template>
  <div class="tl-page">
    <header class="tl-header">
      <div class="tl-wrap tl-header-inner">
        <a href="#top" class="tl-brand">
          <span class="tl-seal" aria-hidden="true">PTL</span>
          <div>
            <strong>PRATAMA TAX &amp; LEGAL</strong>
            <span>Konsultan Pajak &amp; Perizinan Badan Usaha</span>
          </div>
        </a>

        <nav class="tl-nav" aria-label="Navigasi konsultan pajak dan legal">
          <a href="#layanan">Layanan &amp; Tarif</a>
          <a href="#proses">Alur Kerja</a>
          <a href="#konsultasi">Konsultasi Rahasia</a>
        </nav>

        <a :href="consultHref('konsultasi awal pajak dan legalitas')" target="_blank" rel="noopener" class="tl-btn tl-btn-navy">
          Konsultasi Rahasia
        </a>
      </div>
    </header>

    <section id="top" class="tl-hero">
      <div class="tl-wrap tl-hero-grid">
        <div>
          <p class="tl-eyebrow">Konsultan Pajak Terdaftar &bull; Rekanan Notaris Resmi &bull; NDA Protected</p>
          <h1>Pendirian PT/CV &amp; Kepatuhan Pajak Bisnis Beres Tanpa Ribet.</h1>
          <p class="tl-lead">
            Fokus kembangkan omzet bisnis Anda. Urusan akta notaris, NIB OSS RBA, pembukuan bulanan, hingga pelaporan SPT kami tangani secara rapi, legal, dan transparan biayanya.
          </p>
          <div class="tl-hero-actions">
            <a :href="consultHref('pendirian PT atau kepatuhan pajak')" target="_blank" rel="noopener" class="tl-btn tl-btn-gold">
              Jadwalkan Konsultasi 1-on-1
            </a>
            <a href="#layanan" class="tl-btn tl-btn-outline">Lihat Paket Layanan</a>
          </div>
        </div>

        <aside class="tl-cred-card">
          <h2>Standar Kerahasiaan &amp; Kredensial</h2>
          <ul>
            <li>
              <strong>Izin Praktik Resmi (Brevet A/B/C &amp; USKP)</strong>
              <span>Ditangani oleh konsultan berpengalaman menangani perusahaan jasa, perdagangan, hingga konstruksi.</span>
            </li>
            <li>
              <strong>Jaminan Kerahasiaan Dokumen (NDA)</strong>
              <span>Seluruh data keuangan dan akta perusahaan dijaga ketat dengan perjanjian kerahasiaan tertulis.</span>
            </li>
            <li>
              <strong>Update Progres Real-Time</strong>
              <span>Laporan status pengerjaan akta maupun bukti lapor pajak dikirim rutin setiap tahapan selesai.</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section id="layanan" class="tl-section tl-white">
      <div class="tl-wrap">
        <div class="tl-section-head">
          <div>
            <p class="tl-eyebrow">Transparansi Biaya</p>
            <h2>Pilih Layanan Sesuai Kebutuhan Usaha</h2>
          </div>
          <div class="tl-tabs" role="tablist" aria-label="Kategori jasa pajak dan legal">
            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'legalitas'"
              :class="{ active: activeTab === 'legalitas' }"
              @click="activeTab = 'legalitas'"
            >
              Pendirian PT/CV &amp; Izin
            </button>
            <button
              type="button"
              role="tab"
              :aria-selected="activeTab === 'pajak'"
              :class="{ active: activeTab === 'pajak' }"
              @click="activeTab = 'pajak'"
            >
              Pajak &amp; Pembukuan
            </button>
          </div>
        </div>

        <div class="tl-grid-2">
          <article v-for="pkg in activePackages" :key="pkg.title" class="tl-card">
            <div class="tl-card-head">
              <span class="tl-time">{{ pkg.timeline }}</span>
              <h3>{{ pkg.title }}</h3>
              <strong class="tl-price">{{ pkg.price }}</strong>
            </div>
            <ul class="tl-list">
              <li v-for="item in pkg.items" :key="item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ item }}</span>
              </li>
            </ul>
            <a :href="consultHref(pkg.title)" target="_blank" rel="noopener" class="tl-btn tl-btn-navy tl-btn-full">
              Konsultasi Paket Ini
            </a>
          </article>
        </div>
      </div>
    </section>

    <section id="proses" class="tl-section">
      <div class="tl-wrap">
        <p class="tl-eyebrow">Alur Pengerjaan</p>
        <h2>4 Langkah Pendampingan Terstruktur</h2>
        <div class="tl-steps">
          <div class="tl-step">
            <span>01</span>
            <h3>Diagnosa Kebutuhan</h3>
            <p>Cek kelayakan KBLI usaha, status PKP, atau evaluasi kewajiban pajak perusahaan Anda.</p>
          </div>
          <div class="tl-step">
            <span>02</span>
            <h3>Penandatanganan NDA &amp; Penawaran</h3>
            <p>Rincian biaya resmi tanpa tambahan mendadak dan jaminan kerahasiaan data.</p>
          </div>
          <div class="tl-step">
            <span>03</span>
            <h3>Eksekusi &amp; Pelaporan</h3>
            <p>Pengurusan dokumen notaris, OSS RBA, maupun penyusunan laporan fiskal oleh tim ahli.</p>
          </div>
          <div class="tl-step">
            <span>04</span>
            <h3>Serah Terima &amp; Arsip</h3>
            <p>Berkas fisik dan arsip digital BPE/Akta diserahkan rapi beserta pengingat jadwal pajak berikutnya.</p>
          </div>
        </div>
      </div>
    </section>

    <div id="konsultasi">
      <PreviewLeadTeaser
        business-name="Pratama Tax & Legal"
        heading="Jadwalkan Konsultasi Pajak atau Pendirian Badan Usaha"
        subheading="Sampaikan kebutuhan Anda secara ringkas. Konsultan kami akan menghubungi melalui jalur pribadi WhatsApp untuk sesi diskusi awal."
        cta-label="Minta Jadwal Konsultasi Rahasia"
        :service-options="[
          'Pendirian PT Umum / PMA',
          'Pendirian CV / PT Perorangan',
          'Jasa Pajak Bulanan & Pembukuan',
          'Pelaporan SPT Tahunan Badan',
          'Pendampingan Surat DJP / SP2DK'
        ]"
        accent-color="#1E3A8A"
        accent-text-color="#FFFFFF"
        surface-bg="#F8FAFC"
      />
    </div>

    <footer class="tl-footer">
      <div class="tl-wrap tl-footer-inner">
        <div>
          <strong>PRATAMA TAX &amp; LEGAL PARTNERS</strong>
          <p>Menara Sudirman Lt. 12, Jakarta Selatan &bull; Layanan Seluruh Indonesia</p>
        </div>
        <span>Contoh Desain Niche Konsultan Pajak &amp; Legalitas &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&family=Lato:wght@400;700&display=swap');

.tl-page {
  min-height: 100vh;
  background: #f8fafc;
  color: #0f172a;
  font-family: 'Lato', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

.tl-wrap {
  width: min(1140px, calc(100% - 36px));
  margin-inline: auto;
}

.tl-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: #ffffff;
  border-bottom: 1px solid #cbd5e1;
}

.tl-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 76px;
}

.tl-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #0f172a;
}

.tl-seal {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #1e3a8a;
  color: #ffffff;
  font-family: 'EB Garamond', serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.tl-brand strong {
  display: block;
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
  letter-spacing: 0.04em;
}

.tl-brand span {
  display: block;
  color: #475569;
  font-size: 0.74rem;
}

.tl-nav {
  display: flex;
  gap: 24px;
}

.tl-nav a {
  color: #334155;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}

.tl-nav a:hover {
  color: #1e3a8a;
}

.tl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.tl-btn-navy {
  background: #1e3a8a;
  color: #ffffff;
  border: 1px solid #1e3a8a;
}

.tl-btn-navy:hover {
  background: #1e40af;
}

.tl-btn-gold {
  background: #b45309;
  color: #ffffff;
  border: 1px solid #b45309;
}

.tl-btn-gold:hover {
  background: #92400e;
}

.tl-btn-outline {
  background: #ffffff;
  color: #1e3a8a;
  border: 1px solid #1e3a8a;
}

.tl-btn-full {
  width: 100%;
}

.tl-eyebrow {
  margin: 0 0 12px;
  color: #b45309;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.tl-hero {
  padding: clamp(48px, 6vw, 88px) 0;
  border-bottom: 1px solid #cbd5e1;
}

.tl-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 36px;
  align-items: center;
}

.tl-hero h1 {
  margin: 0;
  font-family: 'EB Garamond', serif;
  font-size: clamp(2.3rem, 4.5vw, 3.6rem);
  font-weight: 700;
  line-height: 1.1;
  color: #0f172a;
}

.tl-lead {
  margin: 18px 0 28px;
  color: #334155;
  font-size: 1.04rem;
}

.tl-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tl-cred-card {
  padding: 28px;
  border: 1px solid #cbd5e1;
  border-top: 4px solid #1e3a8a;
  border-radius: 8px;
  background: #ffffff;
}

.tl-cred-card h2 {
  margin: 0 0 18px;
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
}

.tl-cred-card ul {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tl-cred-card strong {
  display: block;
  color: #1e3a8a;
  font-size: 0.94rem;
}

.tl-cred-card span {
  display: block;
  margin-top: 4px;
  color: #475569;
  font-size: 0.86rem;
}

.tl-section {
  padding: 64px 0;
}

.tl-white {
  background: #ffffff;
}

.tl-section-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 32px;
}

.tl-section h2 {
  margin: 0;
  font-family: 'EB Garamond', serif;
  font-size: clamp(1.9rem, 3.2vw, 2.5rem);
}

.tl-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tl-tabs button {
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: #f8fafc;
  color: #334155;
  font: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
}

.tl-tabs button.active {
  background: #1e3a8a;
  border-color: #1e3a8a;
  color: #ffffff;
}

.tl-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.tl-card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #f8fafc;
}

.tl-card-head {
  padding-bottom: 18px;
  border-bottom: 1px solid #cbd5e1;
  margin-bottom: 18px;
}

.tl-time {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  background: #e2e8f0;
  color: #1e3a8a;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.tl-card h3 {
  margin: 0 0 8px;
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
}

.tl-price {
  color: #b45309;
  font-size: 1.25rem;
}

.tl-list {
  display: grid;
  gap: 10px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
  color: #334155;
  font-size: 0.92rem;
}

.tl-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.tl-list svg {
  flex: none;
  margin-top: 4px;
  color: #1e3a8a;
}

.tl-card .tl-btn {
  margin-top: auto;
}

.tl-steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 28px;
}

.tl-step {
  padding: 22px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
}

.tl-step span {
  display: block;
  margin-bottom: 10px;
  color: #b45309;
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.tl-step h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
}

.tl-step p {
  margin: 0;
  color: #475569;
  font-size: 0.88rem;
}

.tl-footer {
  padding: 28px 0;
  background: #0f172a;
  color: #f8fafc;
}

.tl-footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.tl-footer p {
  margin: 4px 0 0;
  color: #cbd5e1;
  font-size: 0.84rem;
}

@media (max-width: 900px) {
  .tl-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .tl-nav {
    display: none;
  }
  .tl-hero-grid,
  .tl-grid-2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .tl-steps {
    grid-template-columns: 1fr;
  }
}
</style>
