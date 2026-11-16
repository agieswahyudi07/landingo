<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const treatments = [
  {
    id: 'aqua-glow',
    category: 'Facial Medis',
    name: 'Lumière Aqua Glow Ritual',
    duration: '60 Menit',
    price: 'Rp 349.000',
    downtime: 'Tanpa Downtime',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&auto=format&fit=crop',
    summary: 'Hidrasi mendalam & eksfoliasi lembut dengan serum medis untuk mengembalikan kilau alami kulit lelah.',
    steps: ['Analisa kulit 3D Visia', 'Double cleansing & vakum komedo lembut', 'Infusi serum hyaluronic & masker menenangkan'],
  },
  {
    id: 'pico-laser',
    category: 'Laser & Pigmentasi',
    name: 'Pico Toning Brightening',
    duration: '45 Menit',
    price: 'Rp 899.000',
    downtime: 'Kemerahan Ringan 2 Jam',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1000&auto=format&fit=crop',
    summary: 'Menargetkan flek melasma, bekas jerawat kehitaman (PIH), dan meratakan warna kulit tanpa merusak permukaan.',
    steps: ['Konsultasi dokter estetika', 'Penyinaran laser picosecond terkalibrasi', 'Soothing peptide mask & sunscreen medis'],
  },
  {
    id: 'acne-protocol',
    category: 'Acne Care',
    name: 'Medical Acne Calm Therapy',
    duration: '50 Menit',
    price: 'Rp 425.000',
    downtime: 'Minimal',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1000&auto=format&fit=crop',
    summary: 'Protokol khusus jerawat aktif meradang untuk menekan bakteri penyebab jerawat sekaligus menjaga skin barrier.',
    steps: ['Ekstraksi steril oleh perawat terlatih', 'Chemical peeling lembut tingkat medis', 'Terapi LED Blue Light anti-inflamasi'],
  },
  {
    id: 'skin-booster',
    category: 'Regenerasi',
    name: 'DNA Salmon Glass Skin Booster',
    duration: '45 Menit',
    price: 'Rp 1.450.000',
    downtime: '1–2 Hari Bintik Halus',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&auto=format&fit=crop',
    summary: 'Nutrisi polinukleotida untuk memperbaiki elastisitas kulit, menyamarkan bopeng halus, dan mengecilkan pori.',
    steps: ['Anestesi topikal nyaman 30 menit', 'Mikro-injeksi oleh dokter estetika', 'Post-care cream pencegah lebam'],
  },
];

const selectedId = ref(treatments[0].id);
const activeTreatment = computed(
  () => treatments.find((item) => item.id === selectedId.value) || treatments[0]
);

const consultHref = (topic) =>
  whatsappHref(`Halo Lumière Skin Atelier, saya ingin reservasi konsultasi untuk ${topic}.`);
</script>

<template>
  <div class="atelier">
    <header class="atelier-header">
      <div class="atelier-wrap atelier-header-row">
        <nav class="atelier-nav" aria-label="Navigasi menu klinik">
          <a href="#filosofi">Filosofi</a>
          <a href="#menu">Treatment</a>
          <a href="#transformasi">Kisah Pasien</a>
        </nav>

        <a href="#top" class="atelier-wordmark">
          <strong>LUMIÈRE</strong>
          <span>SKIN ATELIER</span>
        </a>

        <div class="atelier-header-cta">
          <a :href="consultHref('konsultasi analisa kulit')" target="_blank" rel="noopener" class="atelier-btn-pill">
            Buat Janji
          </a>
        </div>
      </div>
    </header>

    <section id="top" class="atelier-hero">
      <div class="atelier-wrap atelier-hero-layout">
        <div class="atelier-hero-text">
          <span class="atelier-kicker">Klinik Estetika Medis &bull; BSD &amp; Jakarta Selatan</span>
          <h1>Kulit sehat bercahaya lahir dari <em>perawatan yang jujur</em>.</h1>
          <p>
            Di Lumière, setiap kunjungan dimulai dengan analisa kondisi kulit oleh dokter—bukan paksaan paket mahal. Formula berizin BPOM, hasil bertahap dan alami.
          </p>
          <div class="atelier-hero-actions">
            <a :href="consultHref('analisa kulit pertama')" target="_blank" rel="noopener" class="atelier-btn-solid">
              Jadwalkan Analisa Kulit
            </a>
            <a href="#menu" class="atelier-text-link">Jelajahi Menu Treatment &darr;</a>
          </div>
          <div class="atelier-signature">
            <div><strong>4.9 &bull; Google Maps</strong><span>Dari 1.100+ ulasan pasien</span></div>
            <div><strong>100% Dokter</strong><span>Semua tindakan di bawah pengawasan medis</span></div>
          </div>
        </div>

        <div class="atelier-hero-visual">
          <div class="atelier-arch-frame">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop"
              alt="Perawatan wajah lembut di Lumière Skin Atelier"
            />
          </div>
          <div class="atelier-floating-note">
            <span>Protokol Terukur</span>
            <strong>Tanpa krim etiket biru berbahaya</strong>
          </div>
        </div>
      </div>
    </section>

    <div id="filosofi" class="atelier-ribbon" aria-label="Nilai klinik">
      <div class="atelier-wrap atelier-ribbon-grid">
        <span>01. Analisa Visia 3D</span>
        <span>02. Dokter Estetika Aktif</span>
        <span>03. Skincare Resmi BPOM</span>
        <span>04. Harga Jelas Tanpa Tekanan</span>
      </div>
    </div>

    <section id="menu" class="atelier-menu-section">
      <div class="atelier-wrap">
        <div class="atelier-section-title">
          <span>Kurasi Perawatan</span>
          <h2>Pilih perawatan yang paling relevan dengan kondisi kulit Anda.</h2>
        </div>

        <div class="atelier-menu-split">
          <div class="atelier-menu-list" role="tablist" aria-label="Daftar menu treatment">
            <button
              v-for="(item, idx) in treatments"
              :key="item.id"
              type="button"
              role="tab"
              class="atelier-menu-row"
              :class="{ active: selectedId === item.id }"
              :aria-selected="selectedId === item.id"
              @click="selectedId = item.id"
            >
              <span class="atelier-row-num">0{{ idx + 1 }}</span>
              <div class="atelier-row-main">
                <small>{{ item.category }}</small>
                <strong>{{ item.name }}</strong>
              </div>
              <span class="atelier-row-price">{{ item.price }}</span>
            </button>
          </div>

          <aside class="atelier-menu-detail" aria-live="polite">
            <div class="atelier-detail-media">
              <img :src="activeTreatment.image" :alt="activeTreatment.name" loading="lazy" />
            </div>
            <div class="atelier-detail-body">
              <div class="atelier-detail-meta">
                <span>{{ activeTreatment.duration }}</span>
                <span>&bull;</span>
                <span>{{ activeTreatment.downtime }}</span>
              </div>
              <h3>{{ activeTreatment.name }}</h3>
              <p>{{ activeTreatment.summary }}</p>
              <ul>
                <li v-for="step in activeTreatment.steps" :key="step">{{ step }}</li>
              </ul>
              <div class="atelier-detail-foot">
                <div>
                  <small>Investasi Perawatan</small>
                  <strong>{{ activeTreatment.price }}</strong>
                </div>
                <a :href="consultHref(activeTreatment.name)" target="_blank" rel="noopener" class="atelier-btn-solid">
                  Reservasi Sesi Ini
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section id="transformasi" class="atelier-story">
      <div class="atelier-wrap atelier-story-grid">
        <blockquote class="atelier-quote">
          “Setelah dua tahun gonta-ganti krim tanpa hasil, di sini saya baru paham masalah barrier kulit saya. Tiga kali sesi acne calm, kemerahan mereda tanpa pengelupasan parah.”
          <footer>&mdash; Rania Putri, 27 thn &bull; Pasien Acne Care (6 Minggu)</footer>
        </blockquote>

        <div class="atelier-timeline">
          <div class="atelier-tl-item">
            <span>Minggu 1</span>
            <p>Analisa menyeluruh &amp; pembersihan komedo tanpa iritasi; penyesuaian basic skincare.</p>
          </div>
          <div class="atelier-tl-item">
            <span>Minggu 3</span>
            <p>Sesi laser/peeling terkontrol untuk meredakan inflamasi dan memudarkan bekas gelap.</p>
          </div>
          <div class="atelier-tl-item">
            <span>Minggu 6</span>
            <p>Skin barrier kembali stabil, tekstur lebih halus, jadwal perawatan masuk fase maintenance.</p>
          </div>
        </div>
      </div>
    </section>

    <PreviewLeadTeaser
      business-name="Lumière Skin Atelier"
      heading="Mulai Konsultasi Kulit Pertama Anda"
      subheading="Pilih treatment yang ingin ditanyakan. Tim dokter dan resepsionis kami akan merespons dengan estimasi jadwal tercepat."
      cta-label="Reservasi via WhatsApp"
      :service-options="[
        'Analisa Kulit 3D + Konsultasi Dokter',
        'Lumière Aqua Glow Ritual',
        'Pico Toning Brightening',
        'Medical Acne Calm Therapy',
        'DNA Salmon Glass Skin Booster'
      ]"
      accent-color="#A65D57"
      accent-text-color="#FFFFFF"
      surface-bg="#EFE7DE"
    />

    <footer class="atelier-footer">
      <div class="atelier-wrap atelier-footer-row">
        <div>
          <strong>LUMIÈRE SKIN ATELIER</strong>
          <p>The Breeze Boulevard Kav. 18, BSD City &bull; Senin – Minggu 09.30 – 20.00 WIB</p>
        </div>
        <span>Preview Niche Klinik Kecantikan &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.atelier {
  min-height: 100vh;
  background: #faf6f2;
  color: #2b1e1a;
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.65;
  overflow-x: hidden;
}

.atelier-wrap {
  width: min(1160px, calc(100% - 36px));
  margin-inline: auto;
}

.atelier-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(250, 246, 242, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #e4d8cc;
}

.atelier-header-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 78px;
  gap: 16px;
}

.atelier-nav {
  display: flex;
  gap: 24px;
}

.atelier-nav a {
  color: #5c4942;
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
}

.atelier-nav a:hover {
  color: #a65d57;
}

.atelier-wordmark {
  text-align: center;
  text-decoration: none;
  color: #2b1e1a;
}

.atelier-wordmark strong {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1;
}

.atelier-wordmark span {
  display: block;
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  color: #7d675f;
  margin-top: 3px;
}

.atelier-header-cta {
  display: flex;
  justify-content: flex-end;
}

.atelier-btn-pill,
.atelier-btn-solid {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.atelier-btn-pill {
  border: 1px solid #2b1e1a;
  color: #2b1e1a;
}

.atelier-btn-pill:hover {
  background: #2b1e1a;
  color: #faf6f2;
}

.atelier-btn-solid {
  background: #a65d57;
  color: #ffffff;
  border: 1px solid #a65d57;
}

.atelier-btn-solid:hover {
  background: #8c4b46;
}

.atelier-hero {
  padding: clamp(44px, 6vw, 84px) 0;
}

.atelier-hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}

.atelier-kicker {
  display: inline-block;
  margin-bottom: 16px;
  color: #a65d57;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.atelier-hero-text h1 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 5.4vw, 4.6rem);
  font-weight: 600;
  line-height: 1.03;
  letter-spacing: -0.01em;
}

.atelier-hero-text h1 em {
  font-style: italic;
  color: #a65d57;
  font-weight: 500;
}

.atelier-hero-text p {
  margin: 22px 0 30px;
  max-width: 510px;
  color: #5c4942;
  font-size: 1rem;
}

.atelier-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.atelier-text-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: #2b1e1a;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #2b1e1a;
}

.atelier-signature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
  padding-top: 22px;
  border-top: 1px solid #e4d8cc;
}

.atelier-signature strong {
  display: block;
  font-size: 0.92rem;
}

.atelier-signature span {
  color: #7d675f;
  font-size: 0.8rem;
}

.atelier-hero-visual {
  position: relative;
}

.atelier-arch-frame {
  overflow: hidden;
  border-radius: 260px 260px 18px 18px;
  aspect-ratio: 4 / 5;
  background: #efe7de;
}

.atelier-arch-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.atelier-floating-note {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 14px 18px;
  background: #efe7de;
  border-radius: 12px;
  font-size: 0.82rem;
}

.atelier-floating-note span {
  color: #a65d57;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.atelier-ribbon {
  background: #2b1e1a;
  color: #efe7de;
  padding: 18px 0;
}

.atelier-ribbon-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.atelier-menu-section {
  padding: clamp(56px, 8vw, 96px) 0;
}

.atelier-section-title {
  max-width: 620px;
  margin-bottom: 40px;
}

.atelier-section-title span {
  color: #a65d57;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.atelier-section-title h2 {
  margin: 10px 0 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.1rem, 3.8vw, 3.1rem);
  font-weight: 600;
  line-height: 1.1;
}

.atelier-menu-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  gap: 36px;
  align-items: start;
}

.atelier-menu-list {
  display: grid;
  border-top: 1px solid #d9cbbd;
}

.atelier-menu-row {
  display: grid;
  grid-template-columns: 38px 1fr auto;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 22px 14px;
  border: 0;
  border-bottom: 1px solid #d9cbbd;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.atelier-menu-row:hover,
.atelier-menu-row.active {
  background: #efe7de;
}

.atelier-row-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  color: #a65d57;
  font-weight: 600;
}

.atelier-row-main small {
  display: block;
  color: #7d675f;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.atelier-row-main strong {
  display: block;
  margin-top: 2px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem;
  font-weight: 600;
}

.atelier-row-price {
  font-weight: 700;
  font-size: 0.92rem;
  color: #2b1e1a;
}

.atelier-menu-detail {
  background: #ffffff;
  border: 1px solid #e4d8cc;
  border-radius: 18px;
  overflow: hidden;
}

.atelier-detail-media {
  aspect-ratio: 16 / 10;
  background: #efe7de;
}

.atelier-detail-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.atelier-detail-body {
  padding: 26px;
}

.atelier-detail-meta {
  display: flex;
  gap: 8px;
  color: #a65d57;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.atelier-detail-body h3 {
  margin: 10px 0 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.85rem;
  font-weight: 600;
}

.atelier-detail-body p {
  margin: 0 0 16px;
  color: #5c4942;
  font-size: 0.92rem;
}

.atelier-detail-body ul {
  margin: 0 0 22px;
  padding-left: 18px;
  color: #3d2e28;
  font-size: 0.88rem;
  display: grid;
  gap: 6px;
}

.atelier-detail-foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid #e4d8cc;
}

.atelier-detail-foot small {
  display: block;
  color: #7d675f;
  font-size: 0.75rem;
}

.atelier-detail-foot strong {
  font-size: 1.2rem;
}

.atelier-story {
  padding: 64px 0;
  background: #ffffff;
  border-top: 1px solid #e4d8cc;
}

.atelier-story-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 40px;
  align-items: center;
}

.atelier-quote {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.55rem, 2.6vw, 2.15rem);
  font-style: italic;
  line-height: 1.35;
  color: #2b1e1a;
}

.atelier-quote footer {
  margin-top: 18px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-style: normal;
  font-size: 0.84rem;
  font-weight: 600;
  color: #a65d57;
}

.atelier-timeline {
  display: grid;
  gap: 14px;
}

.atelier-tl-item {
  padding: 16px 20px;
  background: #faf6f2;
  border-left: 3px solid #a65d57;
}

.atelier-tl-item span {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #a65d57;
  margin-bottom: 4px;
}

.atelier-tl-item p {
  margin: 0;
  font-size: 0.9rem;
  color: #3d2e28;
}

.atelier-footer {
  padding: 28px 0;
  background: #2b1e1a;
  color: #efe7de;
}

.atelier-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.atelier-footer p {
  margin: 4px 0 0;
  color: #d9cbbd;
  font-size: 0.82rem;
}

@media (max-width: 860px) {
  .atelier-header-row {
    grid-template-columns: 1fr auto;
  }
  .atelier-nav {
    display: none;
  }
  .atelier-wordmark {
    text-align: left;
  }
  .atelier-hero-layout,
  .atelier-menu-split,
  .atelier-story-grid,
  .atelier-ribbon-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .atelier-signature {
    grid-template-columns: 1fr;
  }
}
</style>
