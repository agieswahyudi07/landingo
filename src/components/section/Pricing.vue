<script setup>
import LocalIcon from '@/components/ui/LocalIcon.vue';
import { whatsappHref } from '@/lib/whatsapp';

const formatRupiah = (amount) => amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
const commonFeatures = ['Website SSL (aman & terenkripsi)', 'Penulisan konten website', 'Akses statistik kunjungan', 'Integrasi Google Maps & sosial media', 'Tombol WhatsApp'];
const packages = [
  { name: 'LANDINGO LITE', label: 'Untuk mulai online', realPrice: 3000000, discount: 50, price: 1500000, renewalPrice: 800000, description: 'Untuk bisnis yang butuh satu halaman rapi agar terlihat profesional tanpa ribet.', features: ['1 halaman website', 'Domain & hosting', 'Update konten & maintenance', 'Mobile friendly & SEO basic'], message: 'Halo! Saya tertarik dengan paket LANDINGO LITE. Bisa minta informasi lebih detail?' },
  { name: 'LANDINGO PRO', label: 'Pilihan utama', realPrice: 10000000, discount: 55, price: 4500000, renewalPrice: 1500000, description: 'Untuk UMKM yang mulai beriklan dan membutuhkan landing page yang lebih lengkap.', features: ['Semua di paket LITE', '5 halaman website', '1 akun email bisnis', 'Halaman produk, layanan, galeri, atau portofolio', 'Fitur tambahan seperti form kontak'], message: 'Halo! Saya tertarik dengan paket LANDINGO PRO. Bisa minta informasi lebih detail?', popular: true },
  { name: 'LANDINGO FUNNEL', label: 'Untuk kebutuhan lebih luas', realPrice: 15000000, discount: 45, price: 8500000, renewalPrice: 2500000, description: 'Untuk bisnis dengan struktur halaman, fitur, dan kebutuhan integrasi yang lebih lengkap.', features: ['Semua di paket PRO', '10 halaman website', '3 akun email bisnis', 'Desain lebih eksklusif', 'Booking, katalog, atau integrasi lain', 'Optimasi SEO lebih maksimal'], message: 'Halo! Saya tertarik dengan paket LANDINGO FUNNEL. Bisa minta informasi lebih detail?' },
];
</script>

<template>
  <section id="pricing" class="section pricing-section">
    <div class="editorial-container">
      <div class="section-heading pricing-heading"><p class="eyebrow">Paket & harga</p><h2>Pilih ruang yang tepat untuk bisnis Anda tumbuh.</h2><p>Harga jelas, setup lengkap, dan Anda bisa memulai dari paket yang paling sesuai dengan kebutuhan saat ini.</p></div>
      <div class="pricing-grid">
        <article v-for="item in packages" :key="item.name" class="price-card" :class="{ 'price-card-featured': item.popular }">
          <p class="price-label">{{ item.label }}</p><h3>{{ item.name }}</h3><p class="price-description">{{ item.description }}</p>
          <div class="price"><span class="price-old">{{ formatRupiah(item.realPrice) }}</span><strong>{{ formatRupiah(item.price) }}</strong><span class="discount">Hemat {{ item.discount }}%</span></div>
          <p class="renewal">Renewal {{ formatRupiah(item.renewalPrice) }}/tahun</p>
          <ul><li v-for="feature in item.features" :key="feature"><LocalIcon name="check" />{{ feature }}</li></ul>
          <details><summary>Lihat yang selalu termasuk <LocalIcon name="chevron-down" /></summary><ul><li v-for="feature in commonFeatures" :key="feature"><LocalIcon name="check" />{{ feature }}</li></ul></details>
          <a class="button" :class="item.popular ? 'button-primary' : 'button-secondary'" :href="whatsappHref(item.message)" target="_blank" rel="noopener">Tanya paket ini <LocalIcon name="arrow-up-right" /></a>
        </article>
      </div>
      <p class="pricing-note"><LocalIcon name="shield" /> Semua paket sudah termasuk setup lengkap. Tidak ada biaya tersembunyi.</p>
    </div>
  </section>
</template>
