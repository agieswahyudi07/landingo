<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const areaSqm = ref(20);
const selectedModelIdx = ref(0);

const models = [
  {
    code: 'SPEC-01',
    name: 'Kanopi Alderon Double Layer',
    frame: 'Hollow Galvanis 4x8 + 4x6 (1.6mm)',
    roof: 'UPVC Alderon 10mm Peredam Panas',
    price: 650000,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&auto=format&fit=crop',
  },
  {
    code: 'SPEC-02',
    name: 'Kanopi Solarflat & Baja WF',
    frame: 'Besi Hollow 5x10 / WF150 Industrial',
    roof: 'Solarflat 3mm Clear / Bronze Anti-Pecah',
    price: 890000,
    image: 'https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=1000&auto=format&fit=crop',
  },
  {
    code: 'SPEC-03',
    name: 'Pagar Sliding & Fasad Laser Cut',
    frame: 'Frame Hollow 5x10 + Bearing Roda Besi',
    roof: 'Plat Besi Laser / Woodplank Anti-Rayap',
    price: 740000,
    image: 'https://images.unsplash.com/photo-1683470156393-8c9d91eb5e2a?w=1000&auto=format&fit=crop',
  },
];

const activeModel = computed(() => models[selectedModelIdx.value] || models[0]);
const totalBudget = computed(() =>
  new Intl.NumberFormat('id-ID').format(activeModel.value.price * areaSqm.value)
);

const surveyHref = computed(() =>
  whatsappHref(
    `Halo BajaKarya Studio, saya ingin jadwalkan survey ukur lokasi untuk ${activeModel.value.name} (perkiraan luas ${areaSqm.value} m²).`
  )
);
</script>

<template>
  <div class="forge">
    <header class="forge-header">
      <div class="forge-wrap forge-header-row">
        <a href="#top" class="forge-brand">
          <span class="forge-code mono">// BK-01</span>
          <strong>BAJAKARYA</strong>
        </a>

        <nav class="forge-nav" aria-label="Navigasi bengkel konstruksi">
          <a href="#spesifikasi">Material SNI</a>
          <a href="#proyek">Proyek</a>
          <a href="#rab">Hitung RAB</a>
          <a href="#survey">Survey</a>
        </nav>

        <a :href="surveyHref" target="_blank" rel="noopener" class="forge-btn">
          Survey Gratis
        </a>
      </div>
    </header>

    <section id="top" class="forge-hero">
      <div class="forge-wrap">
        <div class="forge-hero-meta mono">
          <span>WORKSHOP SERPONG // JABODETABEK</span>
          <span>GARANSI STRUKTUR &amp; KEBOCORAN 12 BULAN</span>
        </div>

        <h1 class="forge-display">
          BESI SNI.<br />
          LAS PRESISI.<br />
          <span>TANPA SUNAT KETEBALAN.</span>
        </h1>

        <div class="forge-hero-gallery">
          <figure class="forge-photo-wide">
            <img
              src="https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=1400&auto=format&fit=crop"
              alt="Proses pengelasan konstruksi baja presisi di workshop"
            />
            <figcaption class="mono">01 / FABRIKASI WORKSHOP FULL EPOXY PRIMER</figcaption>
          </figure>
          <figure class="forge-photo-tall">
            <img
              src="https://images.unsplash.com/photo-1683470156393-8c9d91eb5e2a?w=900&auto=format&fit=crop"
              alt="Pengelasan sambungan struktur kanopi besi"
            />
            <figcaption class="mono">02 / SAMBUNGAN LAS PENUH &amp; DEMPUL RAPI</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="spesifikasi" class="forge-specs">
      <div class="forge-wrap">
        <div class="forge-head">
          <span class="mono">MATRIKS MATERIAL</span>
          <h2>Bandingkan Spesifikasi &amp; Ketebalan Besi</h2>
        </div>

        <div class="forge-table-wrap">
          <table class="forge-table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Paket Konstruksi</th>
                <th>Rangka Utama</th>
                <th>Penutup / Finishing</th>
                <th>Estimasi / m&sup2;</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in models" :key="m.code">
                <td class="mono forge-orange">{{ m.code }}</td>
                <td><strong>{{ m.name }}</strong></td>
                <td>{{ m.frame }}</td>
                <td>{{ m.roof }}</td>
                <td class="mono">Rp {{ new Intl.NumberFormat('id-ID').format(m.price) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="proyek" class="forge-projects">
      <div class="forge-wrap">
        <div class="forge-head">
          <span class="mono">ARSIP PROYEK</span>
          <h2>Pengerjaan Hunian &amp; Komersial</h2>
        </div>

        <div class="forge-project-grid">
          <article v-for="(m, idx) in models" :key="m.code" class="forge-proj-card">
            <div class="forge-proj-img">
              <img :src="m.image" :alt="m.name" loading="lazy" />
            </div>
            <div class="forge-proj-body">
              <span class="mono">0{{ idx + 1 }} // {{ m.code }}</span>
              <h3>{{ m.name }}</h3>
              <p>{{ m.frame }} &mdash; {{ m.roof }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="rab" class="forge-rab">
      <div class="forge-wrap forge-rab-band">
        <div class="forge-rab-controls">
          <span class="mono">KALKULATOR RAB CEPAT</span>
          <h2>Simulasi Anggaran Proyek</h2>
          <div class="forge-model-pills">
            <button
              v-for="(m, idx) in models"
              :key="m.code"
              type="button"
              :class="{ active: selectedModelIdx === idx }"
              @click="selectedModelIdx = idx"
            >
              {{ m.name }}
            </button>
          </div>
          <label for="forge-range" class="forge-range-label">
            Luas Area Pekerjaan: <strong class="mono">{{ areaSqm }} m&sup2;</strong>
          </label>
          <input id="forge-range" v-model.number="areaSqm" type="range" min="8" max="80" step="1" />
        </div>

        <div class="forge-rab-output">
          <span class="mono">ESTIMASI BIAYA TERPASANG</span>
          <strong class="mono">Rp {{ totalBudget }}</strong>
          <p>Sudah termasuk bahan, cat anti-karat, dan ongkos pasang area Jabodetabek.</p>
          <a :href="surveyHref" target="_blank" rel="noopener" class="forge-btn forge-btn-full">
            Jadwalkan Survey Bawa Sampel Besi
          </a>
        </div>
      </div>
    </section>

    <div id="survey">
      <PreviewLeadTeaser
        business-name="BajaKarya Studio"
        heading="Jadwalkan Survey Ukur Gratis ke Lokasi"
        subheading="Teknisi kami membawa sampel besi hollow dan potongan atap asli sehingga Anda bisa cek ketebalan langsung sebelum deal."
        cta-label="Minta Jadwal Survey"
        :service-options="[
          'Kanopi Alderon Double Layer',
          'Kanopi Solarflat / Tempered',
          'Pagar Minimalis & Laser Cut',
          'Railing Tangga / Balkon',
          'Mezzanine & Konstruksi Baja'
        ]"
        accent-color="#EA580C"
        accent-text-color="#FFFFFF"
        surface-bg="#111315"
        :dark="true"
      />
    </div>

    <footer class="forge-footer">
      <div class="forge-wrap forge-footer-row">
        <strong class="mono">BAJAKARYA STUDIO // SERPONG KM 7</strong>
        <span>Preview Niche Bengkel Las &amp; Kanopi &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Oswald:wght@600;700&display=swap');

.forge {
  min-height: 100vh;
  background: #111315;
  color: #f3f4f6;
  font-family: 'Inter', sans-serif;
  line-height: 1.55;
  overflow-x: hidden;
}

.mono {
  font-family: 'JetBrains Mono', monospace;
}

.forge-wrap {
  width: min(1160px, calc(100% - 36px));
  margin-inline: auto;
}

.forge-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(17, 19, 21, 0.94);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #2c3138;
}

.forge-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 74px;
}

.forge-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
}

.forge-code {
  color: #fb923c;
  font-size: 0.78rem;
  font-weight: 700;
}

.forge-brand strong {
  font-family: 'Oswald', sans-serif;
  font-size: 1.35rem;
  letter-spacing: 0.08em;
}

.forge-nav {
  display: flex;
  gap: 24px;
}

.forge-nav a {
  color: #9ca3af;
  font-size: 0.84rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
}

.forge-nav a:hover {
  color: #ffffff;
}

.forge-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  background: #ea580c;
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  cursor: pointer;
}

.forge-btn:hover {
  background: #c2410c;
}

.forge-btn-full {
  width: 100%;
}

.forge-hero {
  padding: clamp(36px, 5vw, 68px) 0 72px;
  border-bottom: 1px solid #2c3138;
}

.forge-hero-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 18px;
  border-bottom: 1px solid #2c3138;
  color: #9ca3af;
  font-size: 0.76rem;
}

.forge-display {
  margin: 28px 0 36px;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(3.1rem, 8.2vw, 6.4rem);
  font-weight: 700;
  line-height: 0.94;
  letter-spacing: 0.01em;
}

.forge-display span {
  color: #fb923c;
}

.forge-hero-gallery {
  display: grid;
  grid-template-columns: 1.45fr 0.85fr;
  gap: 16px;
}

.forge-hero-gallery figure {
  margin: 0;
  border: 1px solid #2c3138;
  background: #1a1d21;
}

.forge-photo-wide img,
.forge-photo-tall img {
  display: block;
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.forge-hero-gallery figcaption {
  padding: 12px 16px;
  border-top: 1px solid #2c3138;
  color: #9ca3af;
  font-size: 0.75rem;
}

.forge-specs,
.forge-projects {
  padding: 64px 0;
  border-bottom: 1px solid #2c3138;
}

.forge-head {
  margin-bottom: 28px;
}

.forge-head span {
  color: #fb923c;
  font-size: 0.76rem;
  font-weight: 700;
}

.forge-head h2 {
  margin: 6px 0 0;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1.9rem, 3.6vw, 2.8rem);
  text-transform: uppercase;
}

.forge-table-wrap {
  overflow-x: auto;
  border: 1px solid #2c3138;
}

.forge-table {
  width: 100%;
  border-collapse: collapse;
  background: #1a1d21;
  text-align: left;
  font-size: 0.9rem;
}

.forge-table th,
.forge-table td {
  padding: 16px 18px;
  border-bottom: 1px solid #2c3138;
}

.forge-table th {
  color: #9ca3af;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #14171a;
}

.forge-orange {
  color: #fb923c;
}

.forge-project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.forge-proj-card {
  border: 1px solid #2c3138;
  background: #1a1d21;
}

.forge-proj-img img {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.forge-proj-body {
  padding: 20px;
}

.forge-proj-body span {
  color: #fb923c;
  font-size: 0.74rem;
}

.forge-proj-body h3 {
  margin: 8px 0 6px;
  font-size: 1.08rem;
}

.forge-proj-body p {
  margin: 0;
  color: #9ca3af;
  font-size: 0.85rem;
}

.forge-rab {
  padding: 64px 0;
  background: #1a1d21;
  border-bottom: 1px solid #2c3138;
}

.forge-rab-band {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 32px;
  align-items: center;
}

.forge-rab-controls span {
  color: #fb923c;
  font-size: 0.76rem;
}

.forge-rab-controls h2 {
  margin: 8px 0 18px;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1.9rem, 3.2vw, 2.5rem);
  text-transform: uppercase;
}

.forge-model-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.forge-model-pills button {
  min-height: 44px;
  padding: 8px 14px;
  border: 1px solid #2c3138;
  background: #111315;
  color: #d1d5db;
  font: inherit;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
}

.forge-model-pills button.active {
  border-color: #ea580c;
  background: #ea580c;
  color: #ffffff;
}

.forge-range-label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #d1d5db;
}

.forge-rab-controls input[type='range'] {
  width: 100%;
  accent-color: #ea580c;
  min-height: 34px;
}

.forge-rab-output {
  padding: 28px;
  border: 1px solid #ea580c;
  background: #111315;
}

.forge-rab-output span {
  display: block;
  color: #9ca3af;
  font-size: 0.74rem;
}

.forge-rab-output strong {
  display: block;
  margin: 8px 0 10px;
  font-size: 2rem;
  color: #fb923c;
}

.forge-rab-output p {
  margin: 0 0 18px;
  color: #d1d5db;
  font-size: 0.84rem;
}

.forge-footer {
  padding: 26px 0;
  background: #0a0b0d;
  border-top: 1px solid #2c3138;
  color: #9ca3af;
  font-size: 0.82rem;
}

.forge-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

@media (max-width: 860px) {
  .forge-nav {
    display: none;
  }
  .forge-hero-gallery,
  .forge-project-grid,
  .forge-rab-band {
    grid-template-columns: 1fr;
  }
}
</style>
