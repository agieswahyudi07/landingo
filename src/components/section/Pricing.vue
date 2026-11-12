<script setup>
import LocalIcon from '@/components/ui/LocalIcon.vue';
import { whatsappHref } from '@/lib/whatsapp';

const formatRupiah = (amount) => amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
const commonFeatures = [
  'Website SSL aktif (aman & terenkripsi HTTPS)',
  'Penulisan konten website (copywriting terima beres)',
  'Akses Live Dashboard Statistik Looker Studio (GA4)',
  'Integrasi Google Maps & profil sosial media usaha',
  'Gratis Domain (.com/.id) & Cloud Hosting 1 tahun'
];
const packages = [
  {
    name: 'LANDINGO LITE',
    label: 'Untuk mulai online',
    realPrice: 3000000,
    discount: 50,
    price: 1500000,
    renewalPrice: 800000,
    solution: 'Solusi agar bisnis langsung dipercaya di Google Maps & medsos tanpa ribet.',
    description: 'Untuk bisnis jasa yang butuh 1 halaman profil rapi agar calon pelanggan tidak ragu dan admin tidak lelah menjawab hal dasar.',
    features: [
      '1 halaman website konversi tinggi',
      'Tombol WhatsApp langsung (Pre-filled chat)',
      'Domain & cloud hosting 1 tahun',
      'Pengerjaan cepat 2–3 hari kerja',
      'Garansi support teknis 15 hari'
    ],
    message: 'Halo! Saya tertarik dengan paket LANDINGO LITE. Bisa minta informasi lebih detail?'
  },
  {
    name: 'LANDINGO PRO',
    label: 'Pilihan utama (Paling Laris)',
    realPrice: 10000000,
    discount: 55,
    price: 4500000,
    renewalPrice: 1500000,
    solution: 'Solusi anti-boncos & anti-kehilangan leads: data prospek otomatis rekap rapi.',
    description: 'Untuk bisnis berkembang yang ingin tampil kredibel di hadapan klien premium dan siap beriklan terukur.',
    features: [
      'Semua fitur di paket LITE',
      'Hingga 5 halaman website terpisah',
      'Form interaktif rekap otomatis ke Google Sheet klien & WA',
      'Gratis Full Setup Tracking Iklan (Meta Pixel + GTM + GA4)',
      '1 akun email bisnis resmi (info@domainklien.id)',
      'Pengerjaan 5–7 hari kerja & Garansi support 30 hari'
    ],
    message: 'Halo! Saya tertarik dengan paket LANDINGO PRO. Bisa minta informasi lebih detail?',
    popular: true
  },
  {
    name: 'LANDINGO FUNNEL',
    label: 'Untuk skala lebih besar',
    realPrice: 15000000,
    discount: 45,
    price: 8500000,
    renewalPrice: 2500000,
    solution: 'Solusi bebas ketergantungan programmer: kontrol katalog & leads mandiri via dashboard.',
    description: 'Untuk bisnis dengan banyak portofolio/katalog dinamis yang butuh kontrol sistem mandiri tanpa pusing kode.',
    features: [
      'Semua fitur di paket PRO',
      'Hingga 10 halaman website eksklusif',
      'Akses Akun Landingo Central CMS Dashboard',
      'Kelola katalog, portofolio & jadwal dinamis mandiri',
      'Tabel database leads terpusat + auto-email notifikasi',
      '3 akun email bisnis resmi untuk divisi tim',
      'Gratis Full Setup Tracking Iklan (Custom Events)',
      'Pengerjaan 7–10 hari & Prioritas garansi support 60 hari'
    ],
    message: 'Halo! Saya tertarik dengan paket LANDINGO FUNNEL. Bisa minta informasi lebih detail?'
  },
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
