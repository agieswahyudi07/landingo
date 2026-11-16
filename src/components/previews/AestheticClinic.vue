<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const activeCategory = ref('Semua');
const categories = ['Semua', 'Facial & Glow', 'Acne Care', 'Anti-Aging'];

const treatments = [
  {
    name: 'Medical Aqua Glow Facial',
    category: 'Facial & Glow',
    duration: '60 Menit',
    price: 'Rp 349.000',
    desc: 'Pembersihan komedo mendalam dengan serum hidrasi medis tanpa rasa sakit dan minim kemerahan.',
    tag: 'Paling Diminati',
  },
  {
    name: 'Pico Laser Brightening',
    category: 'Facial & Glow',
    duration: '45 Menit',
    price: 'Rp 899.000',
    desc: 'Menyamarkan flek hitam, bekas jerawat PIH, dan meratakan warna kulit dengan teknologi laser non-ablatif.',
    tag: 'Dokter Spesialis',
  },
  {
    name: 'Acne Peeling & Blue Light',
    category: 'Acne Care',
    duration: '50 Menit',
    price: 'Rp 425.000',
    desc: 'Mengeringkan jerawat aktif, mengontrol sebum berlebih, dan menenangkan inflamasi kulit sensitif.',
    tag: 'BPOM Certified',
  },
  {
    name: 'DNA Salmon Skin Booster',
    category: 'Anti-Aging',
    duration: '45 Menit',
    price: 'Rp 1.450.000',
    desc: 'Nutrisi regenerasi sel untuk elastisitas kulit, mengecilkan pori, dan memperbaiki tekstur bopeng halus.',
    tag: 'Hasil Terukur',
  },
];

const filteredTreatments = computed(() =>
  activeCategory.value === 'Semua'
    ? treatments
    : treatments.filter((t) => t.category === activeCategory.value)
);

const cases = [
  {
    title: 'Pemulihan Jerawat Meradang & Bekas Kemerahan',
    patient: 'Rania P., 26 tahun — Tangerang Selatan',
    protocol: '3x Acne Peeling + Blue Light Therapy (6 Minggu)',
    result: 'Jerawat aktif mereda 85% dan barrier kulit kembali tenang.',
  },
  {
    title: 'Flek Melasma & Kulit Kusam Pasca-Paparan Matahari',
    patient: 'Dewi K., 34 tahun — Jakarta Selatan',
    protocol: '2x Pico Laser Brightening + Medical Sunscreen',
    result: 'Noda gelap memudar signifikan dan warna kulit tampak lebih merata.',
  },
];

const consultHref = (topic) =>
  whatsappHref(`Halo Lumiere Skin Clinic, saya ingin konsultasi mengenai ${topic}.`);
</script>

<template>
  <div class="ac-page">
    <header class="ac-header">
      <div class="ac-wrap ac-header-inner">
        <a href="#top" class="ac-brand">
          <span class="ac-brand-mark" aria-hidden="true">L</span>
          <div>
            <strong>LUMIÈRE</strong>
            <span>Aesthetic &amp; Skin Clinic</span>
          </div>
        </a>

        <nav class="ac-nav" aria-label="Navigasi klinik kecantikan">
          <a href="#treatment">Treatment</a>
          <a href="#hasil">Before &amp; After</a>
          <a href="#reservasi">Reservasi</a>
        </nav>

        <a :href="consultHref('jadwal konsultasi dokter')" target="_blank" rel="noopener" class="ac-btn ac-btn-primary">
          Booking Dokter
        </a>
      </div>
    </header>

    <section id="top" class="ac-hero">
      <div class="ac-wrap ac-hero-grid">
        <div class="ac-hero-copy">
          <p class="ac-eyebrow">Klinik Estetika Berizin Resmi &bull; Ditangani Dokter</p>
          <h1>Kulit Sehat, Cerah &amp; Terawat dengan Protokol Medis Terukur.</h1>
          <p class="ac-lead">
            Konsultasi analisa kulit menyeluruh sebelum tindakan. Tanpa krim abal-abal, seluruh rangkaian serum dan tindakan diawasi dokter estetika berpengalaman.
          </p>
          <div class="ac-hero-actions">
            <a :href="consultHref('konsultasi analisa kulit pertama')" target="_blank" rel="noopener" class="ac-btn ac-btn-primary">
              Konsultasi Kulit Gratis via WA
            </a>
            <a href="#treatment" class="ac-btn ac-btn-outline">Lihat Daftar Treatment</a>
          </div>
        </div>

        <div class="ac-hero-panel" aria-label="Ringkasan keunggulan klinik">
          <div class="ac-panel-card">
            <span class="ac-panel-badge">Sertifikasi &amp; Keamanan</span>
            <h2>Standar Perawatan Klinik Lumière</h2>
            <ul class="ac-panel-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span><strong>Analisa Kulit 3D:</strong> Cek kondisi pori, hidrasi, &amp; pigmentasi sebelum memilih tindakan.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span><strong>Skincare Ber-BPOM:</strong> Formulasi dokter aman untuk kulit sensitif, ibu hamil &amp; menyusui.</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                <span><strong>Tanpa Biaya Tersembunyi:</strong> Estimasi harga disampaikan transparan di awal.</span>
              </li>
            </ul>
            <div class="ac-panel-stats">
              <div><strong>4.9 / 5</strong><span>Rating Google Maps</span></div>
              <div><strong>12.400+</strong><span>Tindakan Selesai</span></div>
              <div><strong>6 Dokter</strong><span>Estetika Aktif</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="treatment" class="ac-section">
      <div class="ac-wrap">
        <div class="ac-section-head">
          <div>
            <p class="ac-eyebrow">Menu Perawatan</p>
            <h2>Treatment Unggulan &amp; Estimasi Biaya</h2>
          </div>
          <div class="ac-tabs" role="tablist" aria-label="Kategori treatment">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              role="tab"
              :aria-selected="activeCategory === cat"
              :class="{ active: activeCategory === cat }"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="ac-grid-2">
          <article v-for="item in filteredTreatments" :key="item.name" class="ac-card">
            <div class="ac-card-top">
              <span class="ac-tag">{{ item.tag }}</span>
              <span class="ac-duration">{{ item.duration }}</span>
            </div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
            <div class="ac-card-foot">
              <div>
                <small>Mulai dari</small>
                <strong>{{ item.price }}</strong>
              </div>
              <a :href="consultHref(item.name)" target="_blank" rel="noopener" class="ac-link">
                Tanya Dokter &rarr;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="hasil" class="ac-section ac-section-tint">
      <div class="ac-wrap">
        <div class="ac-section-head">
          <div>
            <p class="ac-eyebrow">Progres Pasien Nyata</p>
            <h2>Studi Kasus &amp; Ulasan Klien</h2>
          </div>
        </div>
        <div class="ac-grid-2">
          <article v-for="c in cases" :key="c.title" class="ac-case">
            <span class="ac-case-protocol">{{ c.protocol }}</span>
            <h3>{{ c.title }}</h3>
            <p>{{ c.result }}</p>
            <footer>{{ c.patient }}</footer>
          </article>
        </div>
      </div>
    </section>

    <div id="reservasi">
      <PreviewLeadTeaser
        business-name="Lumière Aesthetic Clinic"
        heading="Jadwalkan Analisa Kulit &amp; Treatment Anda"
        subheading="Pilih perawatan yang Anda minati dan tentukan waktu kunjungan. Tim resepsionis klinik akan mengonfirmasi jadwal dokter via WhatsApp."
        cta-label="Reservasi Jadwal Klinik"
        :service-options="[
          'Konsultasi Analisa Kulit Gratis',
          'Medical Aqua Glow Facial',
          'Pico Laser Brightening',
          'Acne Peeling & Blue Light',
          'DNA Salmon Skin Booster'
        ]"
        accent-color="#DB2777"
        accent-text-color="#FFFFFF"
        surface-bg="#FDF2F8"
      />
    </div>

    <footer class="ac-footer">
      <div class="ac-wrap ac-footer-inner">
        <div>
          <strong>LUMIÈRE AESTHETIC CLINIC</strong>
          <p>Jl. Boulevard Utama No. 18, BSD City &bull; Buka Setiap Hari 09.00 – 20.00 WIB</p>
        </div>
        <span>Contoh Desain Niche Klinik Kecantikan &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

.ac-page {
  min-height: 100vh;
  background: #fdf2f8;
  color: #831843;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

.ac-wrap {
  width: min(1140px, calc(100% - 36px));
  margin-inline: auto;
}

.ac-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(253, 242, 248, 0.94);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #fbcfe8;
}

.ac-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 74px;
}

.ac-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #831843;
}

.ac-brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #db2777;
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  font-weight: 700;
}

.ac-brand strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
}

.ac-brand span {
  display: block;
  color: #475569;
  font-size: 0.72rem;
}

.ac-nav {
  display: flex;
  gap: 24px;
}

.ac-nav a {
  color: #475569;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.ac-nav a:hover {
  color: #db2777;
}

.ac-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.ac-btn-primary {
  background: #db2777;
  color: #ffffff;
  border: 1px solid #db2777;
}

.ac-btn-primary:hover {
  background: #be185d;
  border-color: #be185d;
}

.ac-btn-outline {
  border: 1px solid #db2777;
  color: #831843;
  background: #ffffff;
}

.ac-btn-outline:hover {
  background: #fce7f3;
}

.ac-eyebrow {
  margin: 0 0 12px;
  color: #be185d;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.ac-hero {
  padding: clamp(44px, 6vw, 84px) 0;
}

.ac-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 36px;
  align-items: center;
}

.ac-hero h1 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 4.4vw, 3.6rem);
  line-height: 1.12;
  color: #500724;
}

.ac-lead {
  margin: 18px 0 28px;
  color: #475569;
  font-size: 1.02rem;
  max-width: 540px;
}

.ac-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.ac-panel-card {
  padding: 28px;
  border: 1px solid #fbcfe8;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 14px 36px rgba(131, 24, 67, 0.08);
}

.ac-panel-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 999px;
  background: #f3e8ff;
  color: #6d28d9;
  font-size: 0.74rem;
  font-weight: 700;
}

.ac-panel-card h2 {
  margin: 14px 0 16px;
  font-family: 'Playfair Display', serif;
  font-size: 1.45rem;
  color: #500724;
}

.ac-panel-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #334155;
  font-size: 0.9rem;
}

.ac-panel-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.ac-panel-list svg {
  flex: none;
  margin-top: 3px;
  color: #db2777;
}

.ac-panel-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid #fbcfe8;
}

.ac-panel-stats strong {
  display: block;
  font-size: 1.15rem;
  color: #831843;
}

.ac-panel-stats span {
  font-size: 0.75rem;
  color: #475569;
}

.ac-section {
  padding: 64px 0;
  background: #ffffff;
}

.ac-section-tint {
  background: #f8f5fc;
}

.ac-section-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 32px;
}

.ac-section-head h2 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  color: #500724;
}

.ac-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ac-tabs button {
  min-height: 44px;
  padding: 8px 16px;
  border: 1px solid #fbcfe8;
  border-radius: 999px;
  background: #ffffff;
  color: #475569;
  font: inherit;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
}

.ac-tabs button.active {
  background: #db2777;
  border-color: #db2777;
  color: #ffffff;
}

.ac-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.ac-card,
.ac-case {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid #fbcfe8;
  border-radius: 16px;
  background: #ffffff;
}

.ac-card-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.ac-tag {
  padding: 4px 10px;
  border-radius: 999px;
  background: #fdf2f8;
  color: #be185d;
  font-size: 0.74rem;
  font-weight: 700;
}

.ac-duration {
  color: #475569;
  font-size: 0.8rem;
  font-weight: 600;
}

.ac-card h3,
.ac-case h3 {
  margin: 0 0 8px;
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #500724;
}

.ac-card p,
.ac-case p {
  margin: 0 0 20px;
  color: #475569;
  font-size: 0.9rem;
}

.ac-card-foot {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #fce7f3;
}

.ac-card-foot small {
  display: block;
  color: #64748b;
  font-size: 0.74rem;
}

.ac-card-foot strong {
  color: #831843;
  font-size: 1.12rem;
}

.ac-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: #be185d;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}

.ac-case-protocol {
  display: inline-block;
  margin-bottom: 10px;
  color: #6d28d9;
  font-size: 0.78rem;
  font-weight: 700;
}

.ac-case footer {
  margin-top: auto;
  color: #64748b;
  font-size: 0.82rem;
  font-weight: 600;
}

.ac-footer {
  padding: 28px 0;
  background: #500724;
  color: #fce7f3;
}

.ac-footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.ac-footer p {
  margin: 4px 0 0;
  color: #fbcfe8;
  font-size: 0.84rem;
}

.ac-footer > div > span {
  font-size: 0.8rem;
  color: #f9a8d4;
}

@media (max-width: 820px) {
  .ac-nav {
    display: none;
  }
  .ac-hero-grid,
  .ac-grid-2 {
    grid-template-columns: 1fr;
  }
}
</style>
