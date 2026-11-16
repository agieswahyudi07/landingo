<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const areaSqm = ref(18);
const selectedModel = ref('Kanopi Alderon Double Layer');

const models = [
  {
    name: 'Kanopi Alderon Double Layer',
    pricePerSqm: 650000,
    spec: 'Rangka Hollow Galvanis 4x8 + 4x6 SNI, Cat Epoxy Anti-Karat, Atap UPVC 10mm Peredam Panas',
  },
  {
    name: 'Kanopi Solarflat / Polycarbonate Solid',
    pricePerSqm: 850000,
    spec: 'Rangka Besi Hollow Galvanis 5x10 Tebal 1.6mm, Atap Clear/Bronze Tahan Benturan',
  },
  {
    name: 'Pagar Minimalis Laser / Woodplank',
    pricePerSqm: 720000,
    spec: 'Frame Hollow 4x6 + Kisi-Kisi Besi/Conwood, Rel Pintu Sliding Bearing Roda Besi',
  },
  {
    name: 'Railing Tangga & Balkon Tempered',
    pricePerSqm: 980000,
    spec: 'Tiang Stainless / Besi Hitam Matte + Kaca Tempered 10mm Standar Keamanan',
  },
];

const currentModel = computed(
  () => models.find((m) => m.name === selectedModel.value) || models[0]
);

const totalEstimate = computed(() =>
  new Intl.NumberFormat('id-ID').format(currentModel.value.pricePerSqm * areaSqm.value)
);

const surveyHref = computed(() =>
  whatsappHref(
    `Halo BajaKarya Konstruksi, saya ingin jadwalkan survey ukur lokasi untuk ${currentModel.value.name} (perkiraan luas ${areaSqm.value} m²).`
  )
);

const projects = [
  {
    title: 'Kanopi Carport Alderon Putih 24 m²',
    location: 'Cluster The Zora, BSD City',
    spec: 'Hollow 4x8 Galvanis • Finish Hitam Doff • Selesai 5 Hari',
  },
  {
    title: 'Pagar Sliding Minimalis & Pintu Henderson',
    location: 'Bintaro Sektor 7, Tangerang Selatan',
    spec: 'Hollow 5x10 + Conwood Plank • Anti Karat • Selesai 6 Hari',
  },
  {
    title: 'Railing Balkon & Void Rumah 2 Lantai',
    location: 'Cilandak, Jakarta Selatan',
    spec: 'Besi Hitam Matte + Handrail Kayu Kamper • Selesai 4 Hari',
  },
];
</script>

<template>
  <div class="bk-page">
    <header class="bk-header">
      <div class="bk-wrap bk-header-inner">
        <a href="#top" class="bk-brand">
          <span class="bk-mark" aria-hidden="true">BK</span>
          <div>
            <strong>BAJAKARYA</strong>
            <span>Bengkel Las &amp; Konstruksi Kanopi</span>
          </div>
        </a>

        <nav class="bk-nav" aria-label="Navigasi bengkel kanopi">
          <a href="#katalog">Model &amp; Harga</a>
          <a href="#proyek">Hasil Proyek</a>
          <a href="#survey">Jadwal Survey</a>
        </nav>

        <a :href="surveyHref" target="_blank" rel="noopener" class="bk-btn bk-btn-orange">
          Gratis Survey Lokasi
        </a>
      </div>
    </header>

    <section id="top" class="bk-hero">
      <div class="bk-wrap bk-hero-grid">
        <div>
          <p class="bk-eyebrow">Material SNI &bull; Las Rapi Full Dempul &bull; Garansi Kebocoran</p>
          <h1>Kanopi, Pagar &amp; Konstruksi Besi Presisi untuk Hunian Modern.</h1>
          <p class="bk-lead">
            Gratis biaya survey dan pengukuran ke lokasi. Spesifikasi ketebalan besi dijelaskan terbuka di awal tanpa pengurangan ukuran di lapangan.
          </p>
          <div class="bk-spec-strip">
            <div><strong class="mono">1.4–1.8mm</strong><span>Ketebalan Besi Real</span></div>
            <div><strong class="mono">0 Rp</strong><span>Biaya Survey Ukur</span></div>
            <div><strong class="mono">1 Tahun</strong><span>Garansi Konstruksi</span></div>
          </div>
        </div>

        <aside class="bk-sim" aria-label="Simulasi estimasi anggaran">
          <h2>Simulasi Estimasi Proyek</h2>
          <div class="bk-sim-field">
            <label for="bk-model-select">Pilih Model Konstruksi</label>
            <select id="bk-model-select" v-model="selectedModel">
              <option v-for="m in models" :key="m.name" :value="m.name">{{ m.name }}</option>
            </select>
          </div>
          <div class="bk-sim-field">
            <label for="bk-area-range">Perkiraan Luas: <strong class="mono">{{ areaSqm }} m&sup2;</strong></label>
            <input id="bk-area-range" v-model.number="areaSqm" type="range" min="6" max="80" step="1" />
          </div>
          <div class="bk-sim-price">
            <span>Estimasi RAB Kasar</span>
            <strong class="mono">Rp {{ totalEstimate }}</strong>
            <small>Harga pasti ditentukan setelah ukur akurat di lokasi</small>
          </div>
          <a :href="surveyHref" target="_blank" rel="noopener" class="bk-btn bk-btn-orange bk-btn-full">
            Jadwalkan Survey Ukur Gratis
          </a>
        </aside>
      </div>
    </section>

    <section id="katalog" class="bk-section bk-white">
      <div class="bk-wrap">
        <p class="bk-eyebrow">Katalog Konstruksi</p>
        <h2>Pilihan Model &amp; Harga per Meter Persegi</h2>
        <div class="bk-grid-2">
          <article v-for="m in models" :key="m.name" class="bk-card">
            <div class="bk-card-top">
              <h3>{{ m.name }}</h3>
              <strong class="mono">Rp {{ new Intl.NumberFormat('id-ID').format(m.pricePerSqm) }}/m&sup2;</strong>
            </div>
            <p>{{ m.spec }}</p>
            <a :href="whatsappHref(`Halo BajaKarya, saya tertarik model ${m.name}. Boleh kirim contoh foto pengerjaannya?`)" target="_blank" rel="noopener" class="bk-card-link">
              Minta Foto Referensi &rarr;
            </a>
          </article>
        </div>
      </div>
    </section>

    <section id="proyek" class="bk-section">
      <div class="bk-wrap">
        <p class="bk-eyebrow">Dokumentasi Lapangan</p>
        <h2>Proyek Selesai di Jabodetabek</h2>
        <div class="bk-grid-3">
          <article v-for="p in projects" :key="p.title" class="bk-project">
            <span class="bk-project-loc">{{ p.location }}</span>
            <h3>{{ p.title }}</h3>
            <p class="mono">{{ p.spec }}</p>
          </article>
        </div>
      </div>
    </section>

    <div id="survey">
      <PreviewLeadTeaser
        business-name="BajaKarya Konstruksi"
        heading="Jadwalkan Survey &amp; Pengukuran Gratis ke Lokasi Anda"
        subheading="Tim teknisi kami siap datang membawa sampel material besi dan atap sehingga Anda bisa cek ketebalan langsung sebelum deal."
        cta-label="Booking Jadwal Survey"
        :service-options="[
          'Kanopi Alderon / UPVC',
          'Kanopi Solarflat / Kaca Tempered',
          'Pagar Minimalis / Sliding',
          'Railing Tangga & Balkon',
          'Renovasi Mezzanine & Baja Ringan'
        ]"
        accent-color="#EA580C"
        accent-text-color="#FFFFFF"
        surface-bg="#F8FAFC"
      />
    </div>

    <footer class="bk-footer">
      <div class="bk-wrap bk-footer-inner">
        <div>
          <strong>BAJAKARYA KONSTRUKSI</strong>
          <p>Workshop: Jl. Raya Serpong KM 7, Tangerang Selatan &bull; Melayani Seluruh Jabodetabek</p>
        </div>
        <span>Contoh Desain Niche Bengkel Las &amp; Kanopi &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

.bk-page {
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  line-height: 1.55;
  overflow-x: hidden;
}

.mono {
  font-family: 'JetBrains Mono', monospace;
}

.bk-wrap {
  width: min(1140px, calc(100% - 36px));
  margin-inline: auto;
}

.bk-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: #ffffff;
  border-bottom: 1px solid #cbd5e1;
}

.bk-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 74px;
}

.bk-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #1e293b;
}

.bk-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background: #334155;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.bk-brand strong {
  display: block;
  font-size: 1rem;
  letter-spacing: 0.06em;
}

.bk-brand span {
  display: block;
  color: #475569;
  font-size: 0.72rem;
}

.bk-nav {
  display: flex;
  gap: 24px;
}

.bk-nav a {
  color: #475569;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.bk-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 18px;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.bk-btn-orange {
  background: #ea580c;
  color: #ffffff;
  border: 1px solid #ea580c;
}

.bk-btn-orange:hover {
  background: #c2410c;
}

.bk-btn-full {
  width: 100%;
}

.bk-eyebrow {
  margin: 0 0 10px;
  color: #ea580c;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.bk-hero {
  padding: clamp(44px, 6vw, 80px) 0;
  border-bottom: 1px solid #e2e8f0;
}

.bk-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 32px;
  align-items: start;
}

.bk-hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 800;
  line-height: 1.12;
  color: #0f172a;
}

.bk-lead {
  margin: 16px 0 26px;
  color: #475569;
  font-size: 1rem;
}

.bk-spec-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #cbd5e1;
  border: 1px solid #cbd5e1;
}

.bk-spec-strip > div {
  padding: 16px;
  background: #ffffff;
}

.bk-spec-strip strong {
  display: block;
  color: #0f172a;
  font-size: 1.1rem;
}

.bk-spec-strip span {
  color: #475569;
  font-size: 0.78rem;
}

.bk-sim {
  padding: 24px;
  border: 2px solid #334155;
  background: #ffffff;
}

.bk-sim h2 {
  margin: 0 0 18px;
  font-size: 1.2rem;
  font-weight: 800;
}

.bk-sim-field {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.bk-sim-field label {
  font-size: 0.84rem;
  font-weight: 600;
  color: #334155;
}

.bk-sim-field select {
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  color: #0f172a;
  font: inherit;
}

.bk-sim-field input[type='range'] {
  width: 100%;
  accent-color: #ea580c;
  min-height: 32px;
}

.bk-sim-price {
  padding: 14px 0;
  margin-bottom: 16px;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.bk-sim-price span {
  display: block;
  font-size: 0.78rem;
  color: #475569;
}

.bk-sim-price strong {
  display: block;
  margin: 4px 0;
  font-size: 1.45rem;
  color: #0f172a;
}

.bk-sim-price small {
  color: #64748b;
  font-size: 0.75rem;
}

.bk-section {
  padding: 64px 0;
}

.bk-white {
  background: #ffffff;
}

.bk-section h2 {
  margin: 0 0 28px;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0f172a;
}

.bk-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.bk-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.bk-card,
.bk-project {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
}

.bk-project {
  background: #ffffff;
}

.bk-card-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 10px;
}

.bk-card-top h3,
.bk-project h3 {
  margin: 0;
  font-size: 1.08rem;
  color: #0f172a;
}

.bk-card-top strong {
  flex: none;
  color: #ea580c;
  font-size: 0.95rem;
}

.bk-card p {
  margin: 0 0 18px;
  color: #475569;
  font-size: 0.88rem;
}

.bk-card-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: auto;
  color: #0f172a;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
}

.bk-project-loc {
  display: inline-block;
  margin-bottom: 8px;
  color: #ea580c;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.bk-project p {
  margin: auto 0 0;
  padding-top: 14px;
  color: #475569;
  font-size: 0.78rem;
}

.bk-footer {
  padding: 28px 0;
  background: #1e293b;
  color: #f8fafc;
}

.bk-footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.bk-footer p {
  margin: 4px 0 0;
  color: #cbd5e1;
  font-size: 0.84rem;
}

@media (max-width: 820px) {
  .bk-nav {
    display: none;
  }
  .bk-hero-grid,
  .bk-grid-2,
  .bk-grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .bk-spec-strip {
    grid-template-columns: 1fr;
  }
}
</style>
