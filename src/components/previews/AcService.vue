<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const acUnits = ref(2);
const selectedService = ref('Cuci AC Standard');

const tariffs = [
  { name: 'Cuci AC Standard (0.5 – 1 PK)', price: 75000, unit: 'per unit', note: 'Sudah termasuk cek tekanan freon & arus listrik' },
  { name: 'Cuci AC Besar (1.5 – 2 PK)', price: 95000, unit: 'per unit', note: 'Pembersihan evaporator, filter & drainase anti-bocor' },
  { name: 'Tambah Freon R32 / R410A', price: 185000, unit: 'per isi', note: 'Diukur dengan manifold gauge transparan di depan pelanggan' },
  { name: 'Bongkar Pasang AC Split', price: 375000, unit: 'per unit', note: 'Garansi instalasi pipa & kebocoran selama 30 hari' },
];

const selectedTariff = computed(
  () => tariffs.find((t) => t.name.startsWith(selectedService.value)) || tariffs[0]
);

const estimatedTotal = computed(() =>
  new Intl.NumberFormat('id-ID').format(selectedTariff.value.price * acUnits.value)
);

const orderHref = computed(() =>
  whatsappHref(
    `Halo SejukTek AC, saya ingin pesan layanan ${selectedTariff.value.name} untuk ${acUnits.value} unit (estimasi Rp ${estimatedTotal.value}).`
  )
);
</script>

<template>
  <div class="ac-srv">
    <header class="ac-srv-header">
      <div class="ac-srv-wrap ac-srv-header-inner">
        <a href="#top" class="ac-srv-brand">
          <span class="ac-srv-badge">SEJUKTEK</span>
          <span>Service AC &amp; Pendingin</span>
        </a>

        <nav class="ac-srv-nav" aria-label="Navigasi service AC">
          <a href="#tarif">Daftar Tarif</a>
          <a href="#garansi">Standar Kerja</a>
          <a href="#panggil">Panggil Teknisi</a>
        </nav>

        <a :href="orderHref" target="_blank" rel="noopener" class="ac-srv-btn ac-srv-btn-cta">
          Panggil Teknisi Hari Ini
        </a>
      </div>
    </header>

    <section id="top" class="ac-srv-hero">
      <div class="ac-srv-wrap ac-srv-hero-grid">
        <div>
          <span class="ac-srv-chip">Teknisi Berpengalaman &bull; Garansi 30 Hari</span>
          <h1>AC Tidak Dingin atau Bocor? Teknisi Kami Siap Datang Hari Ini.</h1>
          <p class="ac-srv-lead">
            Tarif diinformasikan di muka sebelum pengerjaan. Setiap pencucian dilengkapi plastik pelindung dinding agar ruangan tetap bersih tanpa repot.
          </p>
          <div class="ac-srv-proof-row">
            <div><strong>08.00 – 20.00</strong><span>Buka Setiap Hari</span></div>
            <div><strong>30 Hari</strong><span>Garansi Pengerjaan</span></div>
            <div><strong>Jabodetabek</strong><span>Rumah, Ruko &amp; Kantor</span></div>
          </div>
        </div>

        <aside class="ac-srv-calc" aria-label="Kalkulator estimasi biaya cepat">
          <h2>Cek Estimasi Biaya Cepat</h2>
          <div class="ac-srv-calc-group">
            <label for="ac-service-select">Jenis Layanan</label>
            <select id="ac-service-select" v-model="selectedService">
              <option value="Cuci AC Standard">Cuci AC Standard (0.5 – 1 PK)</option>
              <option value="Cuci AC Besar">Cuci AC Besar (1.5 – 2 PK)</option>
              <option value="Tambah Freon">Tambah Freon R32 / R410A</option>
              <option value="Bongkar Pasang">Bongkar Pasang AC Split</option>
            </select>
          </div>
          <div class="ac-srv-calc-group">
            <label for="ac-unit-count">Jumlah Unit AC: <strong class="mono">{{ acUnits }} Unit</strong></label>
            <div class="ac-srv-stepper">
              <button type="button" @click="acUnits = Math.max(1, acUnits - 1)" aria-label="Kurangi unit">-</button>
              <span id="ac-unit-count" class="mono">{{ acUnits }}</span>
              <button type="button" @click="acUnits = Math.min(20, acUnits + 1)" aria-label="Tambah unit">+</button>
            </div>
          </div>
          <div class="ac-srv-total">
            <span>Estimasi Biaya</span>
            <strong class="mono">Rp {{ estimatedTotal }}</strong>
          </div>
          <a :href="orderHref" target="_blank" rel="noopener" class="ac-srv-btn ac-srv-btn-cta ac-srv-btn-full">
            Pesan Sekarang via WhatsApp
          </a>
        </aside>
      </div>
    </section>

    <section id="tarif" class="ac-srv-section ac-srv-white">
      <div class="ac-srv-wrap">
        <p class="ac-srv-eyebrow">Transparansi Harga</p>
        <h2>Daftar Tarif Layanan Standar</h2>
        <div class="ac-srv-tariffs">
          <article v-for="t in tariffs" :key="t.name" class="ac-srv-tariff-card">
            <div>
              <h3>{{ t.name }}</h3>
              <p>{{ t.note }}</p>
            </div>
            <div class="ac-srv-tariff-price">
              <strong class="mono">Rp {{ new Intl.NumberFormat('id-ID').format(t.price) }}</strong>
              <span>{{ t.unit }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="garansi" class="ac-srv-section">
      <div class="ac-srv-wrap">
        <p class="ac-srv-eyebrow">Kenapa SejukTek</p>
        <h2>Komitmen Teknisi Jujur &amp; Rapi</h2>
        <div class="ac-srv-grid-3">
          <div class="ac-srv-feature">
            <strong class="mono">01</strong>
            <h3>Cek Sebelum Tambah Freon</h3>
            <p>Freon hanya diisi jika tekanan memang berkurang. Hasil ukur diperlihatkan langsung ke Anda.</p>
          </div>
          <div class="ac-srv-feature">
            <strong class="mono">02</strong>
            <h3>Pelindung Dinding &amp; Lantai</h3>
            <p>Menggunakan terpal penampung air dan penutup furnitur agar tidak ada cipratan air kotor.</p>
          </div>
          <div class="ac-srv-feature">
            <strong class="mono">03</strong>
            <h3>Garansi Kunjungan Ulang</h3>
            <p>Jika AC kembali menetes atau bermasalah dalam 30 hari, teknisi datang kembali tanpa biaya jasa.</p>
          </div>
        </div>
      </div>
    </section>

    <div id="panggil">
      <PreviewLeadTeaser
        business-name="SejukTek Service AC"
        heading="Butuh Teknisi Datang ke Lokasi Hari Ini?"
        subheading="Tulis keluhan AC dan kecamatan Anda. Admin langsung mencarikan teknisi terdekat yang siap meluncur."
        cta-label="Panggil Teknisi via WhatsApp"
        :service-options="[
          'Cuci AC Rutin (1-3 Unit)',
          'AC Tidak Dingin / Cek Freon',
          'AC Bocor Menetes Air',
          'Bongkar Pasang Pindahan',
          'Kontrak Maintenance Kantor / Kos'
        ]"
        accent-color="#EA580C"
        accent-text-color="#FFFFFF"
        surface-bg="#EFF6FF"
      />
    </div>

    <footer class="ac-srv-footer">
      <div class="ac-srv-wrap ac-srv-footer-inner">
        <div>
          <strong>SEJUKTEK AC SERVICE</strong>
          <p>Melayani Tangerang Selatan, Jakarta Selatan, Depok &amp; Bekasi</p>
        </div>
        <span>Contoh Desain Niche Service AC &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

.ac-srv {
  min-height: 100vh;
  background: #eff6ff;
  color: #1e3a8a;
  font-family: 'Inter', sans-serif;
  line-height: 1.55;
  overflow-x: hidden;
}

.mono {
  font-family: 'JetBrains Mono', monospace;
}

.ac-srv-wrap {
  width: min(1140px, calc(100% - 36px));
  margin-inline: auto;
}

.ac-srv-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: #ffffff;
  border-bottom: 2px solid #bfdbfe;
}

.ac-srv-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 72px;
}

.ac-srv-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #1e3a8a;
  font-weight: 700;
}

.ac-srv-badge {
  padding: 6px 10px;
  border-radius: 6px;
  background: #1e40af;
  color: #ffffff;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.ac-srv-nav {
  display: flex;
  gap: 24px;
}

.ac-srv-nav a {
  color: #475569;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.ac-srv-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.ac-srv-btn-cta {
  background: #ea580c;
  color: #ffffff;
  border: 1px solid #ea580c;
}

.ac-srv-btn-cta:hover {
  background: #c2410c;
}

.ac-srv-btn-full {
  width: 100%;
}

.ac-srv-hero {
  padding: clamp(40px, 6vw, 76px) 0;
}

.ac-srv-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: 32px;
  align-items: start;
}

.ac-srv-chip {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 6px;
  background: #dbeafe;
  color: #1e40af;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.ac-srv-hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 800;
  line-height: 1.12;
  color: #1e3a8a;
}

.ac-srv-lead {
  margin: 16px 0 26px;
  color: #475569;
  font-size: 1rem;
}

.ac-srv-proof-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding: 18px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #bfdbfe;
}

.ac-srv-proof-row strong {
  display: block;
  color: #1e40af;
  font-size: 1.05rem;
}

.ac-srv-proof-row span {
  color: #475569;
  font-size: 0.78rem;
}

.ac-srv-calc {
  padding: 24px;
  border-radius: 12px;
  background: #ffffff;
  border: 2px solid #1e40af;
}

.ac-srv-calc h2 {
  margin: 0 0 18px;
  font-size: 1.2rem;
  font-weight: 800;
}

.ac-srv-calc-group {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.ac-srv-calc-group label {
  font-size: 0.84rem;
  font-weight: 600;
  color: #334155;
}

.ac-srv-calc-group select {
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  font: inherit;
  color: #1e3a8a;
  background: #eff6ff;
}

.ac-srv-stepper {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.ac-srv-stepper button {
  width: 44px;
  height: 44px;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  background: #eff6ff;
  color: #1e3a8a;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
}

.ac-srv-stepper span {
  min-width: 32px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
}

.ac-srv-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 14px 0;
  margin-bottom: 14px;
  border-top: 1px solid #bfdbfe;
  border-bottom: 1px solid #bfdbfe;
}

.ac-srv-total strong {
  font-size: 1.35rem;
  color: #1e40af;
}

.ac-srv-section {
  padding: 64px 0;
}

.ac-srv-white {
  background: #ffffff;
}

.ac-srv-eyebrow {
  margin: 0 0 8px;
  color: #ea580c;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.ac-srv-section h2 {
  margin: 0 0 28px;
  font-size: clamp(1.65rem, 3vw, 2.25rem);
  font-weight: 800;
}

.ac-srv-tariffs {
  display: grid;
  gap: 12px;
}

.ac-srv-tariff-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  background: #f8fafc;
}

.ac-srv-tariff-card h3 {
  margin: 0 0 4px;
  font-size: 1.05rem;
}

.ac-srv-tariff-card p {
  margin: 0;
  color: #475569;
  font-size: 0.86rem;
}

.ac-srv-tariff-price {
  text-align: right;
}

.ac-srv-tariff-price strong {
  display: block;
  font-size: 1.2rem;
  color: #1e40af;
}

.ac-srv-tariff-price span {
  font-size: 0.76rem;
  color: #475569;
}

.ac-srv-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.ac-srv-feature {
  padding: 24px;
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  background: #ffffff;
}

.ac-srv-feature > strong {
  display: inline-block;
  margin-bottom: 10px;
  color: #ea580c;
  font-size: 1.1rem;
}

.ac-srv-feature h3 {
  margin: 0 0 8px;
  font-size: 1.08rem;
}

.ac-srv-feature p {
  margin: 0;
  color: #475569;
  font-size: 0.88rem;
}

.ac-srv-footer {
  padding: 28px 0;
  background: #1e3a8a;
  color: #eff6ff;
}

.ac-srv-footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.ac-srv-footer p {
  margin: 4px 0 0;
  color: #bfdbfe;
  font-size: 0.84rem;
}

@media (max-width: 820px) {
  .ac-srv-nav {
    display: none;
  }
  .ac-srv-hero-grid,
  .ac-srv-grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .ac-srv-proof-row {
    grid-template-columns: 1fr;
  }
}
</style>
