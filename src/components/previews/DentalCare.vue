<script setup>
import { ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const services = [
  {
    name: 'Scaling & Polishing Ultrasonic',
    price: 'Rp 299.000',
    desc: 'Pembersihan karang gigi menyeluruh tanpa ngilu berlebih, dilengkapi pemeriksaan kondisi gusi.',
  },
  {
    name: 'Tambal Gigi Estetik (Composite)',
    price: 'Mulai Rp 350.000',
    desc: 'Menambal gigi berlubang dengan warna resin sewarna gigi asli agar tampak alami dan kuat.',
  },
  {
    name: 'Behel / Ortodonti Transparan & Metal',
    price: 'Cicilan 0%',
    desc: 'Perapihan struktur gigi dan rahang langsung oleh Dokter Gigi Spesialis Ortodonti (Sp.Ort).',
  },
  {
    name: 'Cabut Gigi Bungsu (Odontektomi)',
    price: 'Konsultasi Rontgen',
    desc: 'Penanganan gigi bungsu miring/impaksi dengan teknik minimal trauma oleh Dokter Bedah Mulut.',
  },
];

const doctors = [
  {
    name: 'drg. Nadia Kusuma, Sp.Ort',
    role: 'Spesialis Ortodonti (Behel)',
    schedule: 'Senin, Rabu, Jumat • 15.00 – 20.00 WIB',
  },
  {
    name: 'drg. Arif Pratama',
    role: 'Dokter Gigi Umum & Konservasi',
    schedule: 'Selasa, Kamis, Sabtu • 09.00 – 17.00 WIB',
  },
  {
    name: 'drg. Melisa Wijaya, Sp.KG',
    role: 'Spesialis Perawatan Saluran Akar',
    schedule: 'Selasa & Sabtu • 13.00 – 19.00 WIB',
  },
];

const selectedBranch = ref('Cabang Bintaro Jaya');
const branches = ['Cabang Bintaro Jaya', 'Cabang Kemang Selatan'];

const bookingHref = (subject) =>
  whatsappHref(`Halo Sora Dental Studio (${selectedBranch.value}), saya ingin membuat janji ${subject}.`);
</script>

<template>
  <div class="dc-page">
    <div class="dc-topbar">
      <div class="dc-wrap dc-topbar-inner">
        <span>Praktik Buka Senin – Minggu (09.00 – 21.00 WIB)</span>
        <span>Sterilisasi Autoclave Standar Medis &bull; Parkir Luas</span>
      </div>
    </div>

    <header class="dc-header">
      <div class="dc-wrap dc-header-inner">
        <a href="#top" class="dc-brand">
          <span class="dc-brand-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </span>
          <div>
            <strong>SORA DENTAL</strong>
            <span>Family &amp; Aesthetic Dentistry</span>
          </div>
        </a>

        <nav class="dc-nav" aria-label="Navigasi klinik gigi">
          <a href="#layanan">Layanan</a>
          <a href="#dokter">Jadwal Dokter</a>
          <a href="#booking">Booking</a>
        </nav>

        <a :href="bookingHref('pemeriksaan gigi')" target="_blank" rel="noopener" class="dc-btn dc-btn-primary">
          Buat Janji Dokter
        </a>
      </div>
    </header>

    <section id="top" class="dc-hero">
      <div class="dc-wrap dc-hero-grid">
        <div>
          <span class="dc-pill">Ramah Anak &bull; Tanpa Antre Lama</span>
          <h1>Perawatan Gigi Nyaman dengan Estimasi Biaya Jelas di Awal.</h1>
          <p class="dc-lead">
            Ditangani langsung oleh dokter gigi umum dan spesialis berpengalaman. Ruang tindakan tenang, alat steril per pasien, dan bebas tekanan saat konsultasi.
          </p>
          <div class="dc-branch-picker" role="group" aria-label="Pilih lokasi cabang">
            <button
              v-for="b in branches"
              :key="b"
              type="button"
              :class="{ active: selectedBranch === b }"
              @click="selectedBranch = b"
            >
              {{ b }}
            </button>
          </div>
          <div class="dc-hero-actions">
            <a :href="bookingHref('jadwal kunjungan pertama')" target="_blank" rel="noopener" class="dc-btn dc-btn-primary">
              Booking {{ selectedBranch }}
            </a>
            <a href="#layanan" class="dc-btn dc-btn-ghost">Cek Daftar Layanan</a>
          </div>
        </div>

        <aside class="dc-trust-box">
          <h2>Mengapa Pasien Nyaman di Sora Dental?</h2>
          <div class="dc-trust-grid">
            <div>
              <strong>100% Steril</strong>
              <p>Alat dikemas steril individual per pasien dengan autoclave medis.</p>
            </div>
            <div>
              <strong>Foto Intraoral</strong>
              <p>Anda melihat kondisi gigi langsung di layar sebelum tindakan.</p>
            </div>
            <div>
              <strong>Jelas Biayanya</strong>
              <p>Dokter menjelaskan rincian opsi perawatan sebelum mulai dikerjakan.</p>
            </div>
            <div>
              <strong>4.9 / 5.0</strong>
              <p>Dinilai ribuan pasien keluarga di Google Maps.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section id="layanan" class="dc-section dc-section-white">
      <div class="dc-wrap">
        <div class="dc-heading">
          <p class="dc-eyebrow">Daftar Perawatan</p>
          <h2>Layanan Gigi Keluarga &amp; Estetika</h2>
        </div>
        <div class="dc-grid-2">
          <article v-for="srv in services" :key="srv.name" class="dc-card">
            <div class="dc-card-head">
              <h3>{{ srv.name }}</h3>
              <span>{{ srv.price }}</span>
            </div>
            <p>{{ srv.desc }}</p>
            <a :href="bookingHref(srv.name)" target="_blank" rel="noopener" class="dc-card-cta">
              Cek Ketersediaan Slot &rarr;
            </a>
          </article>
        </div>
      </div>
    </section>

    <section id="dokter" class="dc-section">
      <div class="dc-wrap">
        <div class="dc-heading">
          <p class="dc-eyebrow">Tim Medis Aktif</p>
          <h2>Jadwal Praktik Dokter Gigi Kami</h2>
        </div>
        <div class="dc-grid-3">
          <article v-for="doc in doctors" :key="doc.name" class="dc-doc-card">
            <span class="dc-doc-badge">STR &amp; SIP Aktif</span>
            <h3>{{ doc.name }}</h3>
            <p class="dc-doc-role">{{ doc.role }}</p>
            <p class="dc-doc-time">{{ doc.schedule }}</p>
          </article>
        </div>
      </div>
    </section>

    <div id="booking">
      <PreviewLeadTeaser
        business-name="Sora Dental Studio"
        heading="Jadwalkan Pemeriksaan atau Scaling Gigi Tanpa Antre"
        subheading="Pilih jenis perawatan atau keluhan gigi Anda. Admin klinik akan mengonfirmasi slot jam praktik dokter melalui WhatsApp."
        cta-label="Ajukan Jadwal Kunjungan"
        :service-options="[
          'Scaling & Pembersihan Karang Gigi',
          'Konsultasi Sakit Gigi / Tambal',
          'Konsultasi Behel / Ortodonti',
          'Cabut Gigi Bungsu',
          'Pemeriksaan Gigi Anak'
        ]"
        accent-color="#0284C7"
        accent-text-color="#FFFFFF"
        surface-bg="#F0F9FF"
      />
    </div>

    <footer class="dc-footer">
      <div class="dc-wrap dc-footer-inner">
        <div>
          <strong>SORA DENTAL STUDIO</strong>
          <p>Bintaro Jaya Sektor 9 &bull; Kemang Selatan &bull; Buka Setiap Hari</p>
        </div>
        <span>Contoh Desain Niche Klinik Gigi &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@500;600;700&display=swap');

.dc-page {
  min-height: 100vh;
  background: #f0f9ff;
  color: #0c4a6e;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

.dc-wrap {
  width: min(1140px, calc(100% - 36px));
  margin-inline: auto;
}

.dc-topbar {
  background: #0c4a6e;
  color: #e0f2fe;
  font-size: 0.78rem;
  padding: 8px 0;
}

.dc-topbar-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.dc-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #bae6fd;
}

.dc-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 74px;
}

.dc-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #0c4a6e;
  text-decoration: none;
}

.dc-brand-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #0284c7;
  color: #ffffff;
}

.dc-brand strong {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
}

.dc-brand span {
  display: block;
  color: #475569;
  font-size: 0.72rem;
}

.dc-nav {
  display: flex;
  gap: 24px;
}

.dc-nav a {
  color: #475569;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.dc-nav a:hover {
  color: #0284c7;
}

.dc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.dc-btn-primary {
  background: #0284c7;
  color: #ffffff;
  border: 1px solid #0284c7;
}

.dc-btn-primary:hover {
  background: #0369a1;
}

.dc-btn-ghost {
  background: #ffffff;
  color: #0c4a6e;
  border: 1px solid #bae6fd;
}

.dc-hero {
  padding: clamp(44px, 6vw, 84px) 0;
}

.dc-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 32px;
  align-items: center;
}

.dc-pill {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.dc-hero h1 {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.16;
  color: #0c4a6e;
}

.dc-lead {
  margin: 16px 0 22px;
  color: #475569;
  font-size: 1rem;
}

.dc-branch-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.dc-branch-picker button {
  min-height: 44px;
  padding: 8px 14px;
  border: 1px solid #bae6fd;
  border-radius: 8px;
  background: #ffffff;
  color: #475569;
  font: inherit;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
}

.dc-branch-picker button.active {
  border-color: #0284c7;
  background: #e0f2fe;
  color: #0c4a6e;
}

.dc-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.dc-trust-box {
  padding: 26px;
  border: 1px solid #bae6fd;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(12, 74, 110, 0.06);
}

.dc-trust-box h2 {
  margin: 0 0 18px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
}

.dc-trust-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.dc-trust-grid strong {
  display: block;
  color: #0284c7;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
}

.dc-trust-grid p {
  margin: 4px 0 0;
  color: #475569;
  font-size: 0.82rem;
}

.dc-section {
  padding: 64px 0;
}

.dc-section-white {
  background: #ffffff;
}

.dc-heading {
  margin-bottom: 30px;
}

.dc-eyebrow {
  margin: 0 0 8px;
  color: #0284c7;
  font-family: 'Poppins', sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.dc-heading h2 {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
}

.dc-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.dc-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.dc-card,
.dc-doc-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid #bae6fd;
  border-radius: 14px;
  background: #ffffff;
}

.dc-card-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 10px;
}

.dc-card-head h3,
.dc-doc-card h3 {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.12rem;
}

.dc-card-head span {
  flex: none;
  color: #0284c7;
  font-weight: 700;
  font-size: 0.88rem;
}

.dc-card p {
  margin: 0 0 18px;
  color: #475569;
  font-size: 0.9rem;
}

.dc-card-cta {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: auto;
  color: #0284c7;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
}

.dc-doc-badge {
  display: inline-block;
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.dc-doc-role {
  margin: 6px 0 8px;
  color: #0284c7;
  font-weight: 600;
  font-size: 0.86rem;
}

.dc-doc-time {
  margin: auto 0 0;
  color: #475569;
  font-size: 0.84rem;
}

.dc-footer {
  padding: 28px 0;
  background: #0c4a6e;
  color: #e0f2fe;
}

.dc-footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.dc-footer p {
  margin: 4px 0 0;
  color: #bae6fd;
  font-size: 0.84rem;
}

@media (max-width: 820px) {
  .dc-nav {
    display: none;
  }
  .dc-hero-grid,
  .dc-grid-2,
  .dc-grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .dc-trust-grid {
    grid-template-columns: 1fr;
  }
}
</style>
