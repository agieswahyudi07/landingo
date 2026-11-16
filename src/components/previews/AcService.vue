<script setup>
import { computed, ref } from 'vue';
import PreviewLeadTeaser from '@/components/previews/shared/PreviewLeadTeaser.vue';
import { whatsappHref } from '@/lib/whatsapp';

const services = ref([
  { id: 'cuci-std', name: 'Cuci AC Split 0.5 – 1 PK', desc: 'Termasuk cek tekanan freon & arus listrik + plastik pelindung', price: 75000, qty: 2 },
  { id: 'cuci-big', name: 'Cuci AC Split 1.5 – 2 PK', desc: 'Pembersihan evaporator, filter & saluran pembuangan', price: 95000, qty: 0 },
  { id: 'freon', name: 'Tambah Freon R32 / R410A', desc: 'Diukur pakai manifold gauge di depan Anda sebelum isi', price: 185000, qty: 0 },
  { id: 'bongkar', name: 'Bongkar Pasang AC Split', desc: 'Instalasi rapi + vakum unit + garansi kebocoran 30 hari', price: 375000, qty: 0 },
]);

const totalCost = computed(() =>
  services.value.reduce((sum, item) => sum + item.price * item.qty, 0)
);

const totalUnits = computed(() =>
  services.value.reduce((sum, item) => sum + item.qty, 0)
);

const orderSummaryText = computed(() => {
  const picked = services.value
    .filter((i) => i.qty > 0)
    .map((i) => `${i.qty}x ${i.name}`)
    .join(', ');
  if (!picked) {
    return 'Halo SejukTek Express, saya ingin memanggil teknisi AC hari ini.';
  }
  return `Halo SejukTek Express, saya mau pesan: ${picked} (Estimasi Rp ${new Intl.NumberFormat('id-ID').format(totalCost.value)}).`;
});

const areas = ['Bintaro', 'BSD & Serpong', 'Ciputat', 'Kemang', 'Pondok Indah', 'Cinere', 'Depok'];
</script>

<template>
  <div class="express">
    <div class="express-alert">
      <div class="express-wrap express-alert-row">
        <span>TEKNISI SIAGA HARI INI (08.00 – 20.00 WIB)</span>
        <span>GARANSI KERJA 30 HARI &bull; TANPA BIAYA SILUMAN</span>
      </div>
    </div>

    <header class="express-header">
      <div class="express-wrap express-header-row">
        <a href="#top" class="express-brand">
          <span class="express-bolt" aria-hidden="true">ST</span>
          <div>
            <strong>SEJUKTEK EXPRESS</strong>
            <span>Spesialis AC Rumah &amp; Kantor</span>
          </div>
        </a>

        <nav class="express-nav" aria-label="Navigasi service AC">
          <a href="#tarif">Rakit Estimasi</a>
          <a href="#alur">Cara Kerja</a>
          <a href="#panggil">Panggil Teknisi</a>
        </nav>

        <a :href="whatsappHref(orderSummaryText)" target="_blank" rel="noopener" class="express-cta-btn">
          Panggil Teknisi
        </a>
      </div>
    </header>

    <section id="top" class="express-hero">
      <div class="express-wrap express-hero-grid">
        <div>
          <span class="express-pill">Rata-rata Tiba 60–90 Menit</span>
          <h1>AC Panas, Berisik, atau Menetes Air? Beres Hari Ini.</h1>
          <p>
            Teknisi kami membawa terpal pelindung dinding dan alat ukur freon digital. Harga dipastikan di awal sebelum obeng menyentuh unit AC Anda.
          </p>
          <div class="express-hero-actions">
            <a :href="whatsappHref(orderSummaryText)" target="_blank" rel="noopener" class="express-cta-btn express-cta-lg">
              Chat WA Panggil Teknisi Sekarang
            </a>
            <a href="#tarif" class="express-ghost-btn">Hitung Biaya Layanan</a>
          </div>
        </div>

        <div class="express-photo-frame">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop"
            alt="Ruangan keluarga nyaman dan sejuk"
          />
          <div class="express-photo-bar">
            <div><strong class="mono">Rp 75rb</strong><span>Cuci AC Mulai</span></div>
            <div><strong class="mono">30 Hari</strong><span>Garansi Ulang</span></div>
            <div><strong class="mono">08–20</strong><span>Buka Tiap Hari</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="alur" class="express-steps">
      <div class="express-wrap">
        <div class="express-steps-grid">
          <div class="express-step">
            <span class="mono">STEP 01</span>
            <h3>Kirim Lokasi &amp; Jumlah Unit</h3>
            <p>Admin cek teknisi terdekat dari kecamatan Anda dalam hitungan menit.</p>
          </div>
          <div class="express-step">
            <span class="mono">STEP 02</span>
            <h3>Cek Tekanan Sebelum Aksi</h3>
            <p>Freon tidak pernah ditambah kalau tekanannya masih normal.</p>
          </div>
          <div class="express-step">
            <span class="mono">STEP 03</span>
            <h3>Garansi Resmi 30 Hari</h3>
            <p>AC kembali bocor atau kurang dingin? Teknisi datang ulang gratis.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="tarif" class="express-calc-section">
      <div class="express-wrap">
        <div class="express-sec-head">
          <h2>Rakit Estimasi Tarif Resmi Anda</h2>
          <p>Klik tombol tambah/kurang pada layanan yang dibutuhkan untuk langsung menghitung total estimasi.</p>
        </div>

        <div class="express-ledger">
          <div v-for="srv in services" :key="srv.id" class="express-ledger-row">
            <div class="express-ledger-info">
              <h3>{{ srv.name }}</h3>
              <p>{{ srv.desc }}</p>
            </div>
            <div class="express-ledger-price mono">
              Rp {{ new Intl.NumberFormat('id-ID').format(srv.price) }}
            </div>
            <div class="express-qty">
              <button type="button" @click="srv.qty = Math.max(0, srv.qty - 1)" :aria-label="`Kurangi ${srv.name}`">-</button>
              <span class="mono">{{ srv.qty }}</span>
              <button type="button" @click="srv.qty = Math.min(20, srv.qty + 1)" :aria-label="`Tambah ${srv.name}`">+</button>
            </div>
          </div>

          <div class="express-ledger-total">
            <div>
              <span>Total Estimasi ({{ totalUnits }} Item Layanan)</span>
              <strong class="mono">Rp {{ new Intl.NumberFormat('id-ID').format(totalCost) }}</strong>
            </div>
            <a :href="whatsappHref(orderSummaryText)" target="_blank" rel="noopener" class="express-cta-btn express-cta-lg">
              Pesan Paket Ini via WhatsApp
            </a>
          </div>
        </div>

        <div class="express-areas">
          <span>Area Jangkauan Cepat:</span>
          <strong v-for="a in areas" :key="a">{{ a }}</strong>
        </div>
      </div>
    </section>

    <div id="panggil">
      <PreviewLeadTeaser
        business-name="SejukTek Express"
        heading="Jadwalkan Kedatangan Teknisi AC"
        subheading="Isi alamat singkat dan keluhan unit AC Anda agar tim dispatch kami langsung mengonfirmasi jam kedatangan."
        cta-label="Konfirmasi Panggilan Teknisi"
        :service-options="[
          'Cuci AC Rutin',
          'AC Tidak Dingin / Cek Freon',
          'AC Bocor Menetes Air',
          'Bongkar Pasang AC',
          'Perawatan AC Kantor / Ruko'
        ]"
        accent-color="#EA580C"
        accent-text-color="#FFFFFF"
        surface-bg="#F1F5F9"
      />
    </div>

    <footer class="express-footer">
      <div class="express-wrap express-footer-row">
        <strong>SEJUKTEK EXPRESS &bull; Tangerang Selatan &amp; Jakarta Selatan</strong>
        <span>Preview Niche Service AC &bull; Landingo</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.express {
  min-height: 100vh;
  background: #ffffff;
  color: #0b1f4d;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.55;
  overflow-x: hidden;
}

.mono {
  font-family: 'JetBrains Mono', monospace;
}

.express-wrap {
  width: min(1140px, calc(100% - 36px));
  margin-inline: auto;
}

.express-alert {
  background: #ea580c;
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 8px 0;
}

.express-alert-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.express-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: #0b1f4d;
  color: #ffffff;
  border-bottom: 1px solid #1e3a8a;
}

.express-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 74px;
}

.express-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  text-decoration: none;
}

.express-bolt {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #2563eb;
  font-weight: 700;
}

.express-brand strong {
  display: block;
  font-size: 1rem;
  letter-spacing: 0.04em;
}

.express-brand span {
  display: block;
  font-size: 0.72rem;
  color: #93c5fd;
}

.express-nav {
  display: flex;
  gap: 24px;
}

.express-nav a {
  color: #dbeafe;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
}

.express-cta-btn,
.express-ghost-btn {
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

.express-cta-btn {
  background: #ea580c;
  color: #ffffff;
}

.express-cta-btn:hover {
  background: #c2410c;
}

.express-cta-lg {
  padding: 13px 24px;
  font-size: 0.94rem;
}

.express-ghost-btn {
  border: 1px solid #60a5fa;
  color: #ffffff;
}

.express-hero {
  background: #0b1f4d;
  color: #ffffff;
  padding: clamp(44px, 6vw, 76px) 0 64px;
}

.express-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 36px;
  align-items: center;
}

.express-pill {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 6px;
  background: #1e3a8a;
  color: #93c5fd;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.express-hero h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4.3vw, 3.45rem);
  line-height: 1.08;
}

.express-hero p {
  margin: 18px 0 28px;
  color: #cbd5e1;
  font-size: 1rem;
}

.express-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.express-photo-frame {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #1e3a8a;
  background: #172554;
}

.express-photo-frame img {
  display: block;
  width: 100%;
  height: 290px;
  object-fit: cover;
}

.express-photo-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #1e3a8a;
}

.express-photo-bar > div {
  background: #0f2963;
  padding: 14px;
  text-align: center;
}

.express-photo-bar strong {
  display: block;
  font-size: 1.15rem;
  color: #fb923c;
}

.express-photo-bar span {
  font-size: 0.74rem;
  color: #dbeafe;
}

.express-steps {
  background: #f1f5f9;
  padding: 48px 0;
  border-bottom: 1px solid #e2e8f0;
}

.express-steps-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.express-step span {
  display: inline-block;
  margin-bottom: 8px;
  color: #ea580c;
  font-size: 0.8rem;
  font-weight: 700;
}

.express-step h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
}

.express-step p {
  margin: 0;
  color: #475569;
  font-size: 0.9rem;
}

.express-calc-section {
  padding: 64px 0;
}

.express-sec-head {
  margin-bottom: 28px;
}

.express-sec-head h2 {
  margin: 0 0 8px;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
}

.express-sec-head p {
  margin: 0;
  color: #475569;
}

.express-ledger {
  border: 2px solid #0b1f4d;
  border-radius: 14px;
  overflow: hidden;
}

.express-ledger-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 20px;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
}

.express-ledger-info h3 {
  margin: 0 0 4px;
  font-size: 1.05rem;
}

.express-ledger-info p {
  margin: 0;
  color: #475569;
  font-size: 0.86rem;
}

.express-ledger-price {
  font-weight: 700;
  color: #1e40af;
  font-size: 1.05rem;
}

.express-qty {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.express-qty button {
  width: 44px;
  height: 44px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #f8fafc;
  color: #0b1f4d;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
}

.express-qty span {
  min-width: 24px;
  text-align: center;
  font-weight: 700;
}

.express-ledger-total {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 22px 24px;
  background: #f8fafc;
}

.express-ledger-total span {
  display: block;
  color: #475569;
  font-size: 0.82rem;
}

.express-ledger-total strong {
  font-size: 1.55rem;
  color: #0b1f4d;
}

.express-areas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  font-size: 0.82rem;
  color: #475569;
}

.express-areas strong {
  padding: 5px 12px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1e40af;
}

.express-footer {
  padding: 26px 0;
  background: #0b1f4d;
  color: #dbeafe;
  font-size: 0.84rem;
}

.express-footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

@media (max-width: 860px) {
  .express-nav {
    display: none;
  }
  .express-hero-grid,
  .express-steps-grid,
  .express-ledger-row {
    grid-template-columns: 1fr;
  }
}
</style>
