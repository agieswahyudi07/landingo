<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { designs as designsData } from '@/data/designs';
import { whatsappHref } from '@/lib/whatsapp';
import LocalIcon from '@/components/ui/LocalIcon.vue';
import DesignThumbnail from '@/components/preview/DesignThumbnail.vue';

const categories = [
  { id: 'all', name: 'Semua' }, { id: 'ecommerce', name: 'E-Commerce' }, { id: 'service', name: 'Jasa' },
  { id: 'product', name: 'Produk' }, { id: 'education', name: 'Edukasi' }, { id: 'healthcare', name: 'Kesehatan' },
  { id: 'food', name: 'F&B' }, { id: 'interior', name: 'Properti & Interior' },
];
const designs = ref(designsData);
const activeCategory = ref('all');
const categoryLabel = (id) => categories.find((category) => category.id === id)?.name || id;
const filteredDesigns = computed(() => activeCategory.value === 'all' ? designs.value : designs.value.filter((design) => design.category === activeCategory.value));
const setCategory = (category) => {
  activeCategory.value = category;
  const url = new URL(window.location.href);
  if (category === 'all') url.searchParams.delete('category');
  else url.searchParams.set('category', category);
  window.history.pushState({ category }, '', url);
};
const onPopState = () => {
  const category = new URLSearchParams(window.location.search).get('category');
  activeCategory.value = categories.some((item) => item.id === category) ? category : 'all';
};
const consultationHref = (design) => whatsappHref(`Halo! Saya tertarik dengan design "${design.name}". Bisa minta informasi lebih detail dan konsultasi untuk customisasi design ini?`);
onMounted(() => { onPopState(); window.addEventListener('popstate', onPopState); });
onUnmounted(() => window.removeEventListener('popstate', onPopState));
</script>

<template>
  <main class="gallery-page">
    <section class="gallery-intro"><div class="editorial-container">
      <p class="eyebrow">Referensi design landing page</p>
      <h1>Pilih arah visual yang paling dekat dengan bisnis Anda.</h1>
      <p>Jelajahi referensi yang bisa kami sesuaikan dengan layanan, karakter, dan cara kerja bisnis Anda.</p>
      <nav class="gallery-filters" aria-label="Filter kategori design">
        <button v-for="category in categories" :key="category.id" type="button" :class="{ active: activeCategory === category.id }" :aria-pressed="activeCategory === category.id" @click="setCategory(category.id)">{{ category.name }}</button>
      </nav>
      <p class="gallery-count">{{ filteredDesigns.length }} referensi desain</p>
    </div></section>

    <section class="gallery-results"><div class="editorial-container">
      <div v-if="filteredDesigns.length" class="gallery-grid">
        <article v-for="design in filteredDesigns" :key="design.id" class="gallery-card">
          <a class="gallery-preview" :href="design.previewPath" :aria-label="`Lihat preview ${design.name}`"><DesignThumbnail :component-name="design.previewComponent" :width="600" :height="360" lazy /></a>
          <div class="gallery-card-body"><div class="gallery-card-meta"><span>{{ categoryLabel(design.category) }}</span><span>{{ design.features.length }} fitur</span></div><h2>{{ design.name }}</h2><p>{{ design.description }}</p><div class="gallery-card-actions"><a class="button button-primary" :href="design.previewPath">Lihat preview <LocalIcon name="arrow-up-right" /></a><a class="gallery-consult" :href="consultationHref(design)" target="_blank" rel="noopener">Konsultasi <LocalIcon name="message" /></a></div></div>
        </article>
      </div>
      <div v-else class="gallery-empty"><h2>Belum ada design di kategori ini.</h2><button type="button" class="button button-secondary" @click="setCategory('all')">Lihat semua design</button></div>
    </div></section>

    <section class="gallery-cta"><div class="editorial-container"><p class="eyebrow">Punya arah sendiri?</p><h2>Mulai dari kebutuhan bisnis Anda.</h2><p>Referensi hanyalah awal. Kami bisa menyesuaikan struktur dan visualnya agar terasa milik Anda.</p><a class="button button-light" href="https://api.whatsapp.com/send?phone=6285183077289&text=Halo!%20Saya%20ingin%20konsultasi%20tentang%20design%20landing%20page." target="_blank" rel="noopener">Konsultasi via WhatsApp <LocalIcon name="arrow-up-right" /></a></div></section>
  </main>
</template>

<style>
.gallery-page { background:var(--canvas); color:var(--ink); }
.gallery-intro { padding:clamp(68px,9vw,120px) 0 42px; border-bottom:1px solid var(--line); }
.gallery-intro h1 { max-width:760px; margin:0; font-size:clamp(2.8rem,6vw,6rem); line-height:.98; }
.gallery-intro > .editorial-container > p:not(.eyebrow):not(.gallery-count) { max-width:560px; margin:24px 0 0; color:var(--muted); font-size:1.05rem; }
.gallery-filters { display:flex; flex-wrap:wrap; gap:8px; margin-top:48px; }
.gallery-filters button { min-height:42px; padding:8px 14px; border:1px solid var(--line); background:transparent; color:var(--muted); cursor:pointer; font:700 .82rem var(--font-display); transition:all .2s ease; }
.gallery-filters button:hover,.gallery-filters button.active { border-color:var(--primary); background:var(--primary); color:white; }
.gallery-count { margin:14px 0 0; color:var(--muted); font-size:.78rem; }
.gallery-results { padding:56px 0 120px; }
.gallery-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
.gallery-card { display:flex; min-width:0; flex-direction:column; border:1px solid var(--line); background:white; }
.gallery-preview { display:block; min-width:0; height:clamp(190px,18vw,270px); overflow:hidden; border-bottom:1px solid var(--line); background:#f6f7fb; }
.gallery-preview > * { display:block; width:100%; height:100%; min-width:0; }
.gallery-card-body { display:flex; flex:1; flex-direction:column; padding:20px; }
.gallery-card-meta { display:flex; justify-content:space-between; gap:12px; color:var(--primary); font:700 .7rem var(--font-display); letter-spacing:.08em; text-transform:uppercase; }
.gallery-card h2 { margin:16px 0 6px; font-size:1.45rem; }.gallery-card p { min-height:52px; margin:0; color:var(--muted); font-size:.84rem; }.gallery-card-actions { display:flex; align-items:center; gap:14px; margin-top:22px; }.gallery-card-actions .button { min-height:42px; padding:9px 13px; font-size:.8rem; }.gallery-consult { display:inline-flex; align-items:center; gap:6px; color:var(--primary); font:700 .8rem var(--font-display); }.gallery-consult:hover { text-decoration:underline; }
.gallery-empty { padding:80px 0; text-align:center; }.gallery-empty h2 { margin:0 0 20px; font-size:2rem; }.gallery-cta { padding:86px 0; background:var(--primary); color:white; }.gallery-cta h2 { max-width:650px; margin:0; font-size:clamp(2.4rem,5vw,5rem); line-height:1; }.gallery-cta p:not(.eyebrow) { max-width:540px; margin:20px 0 28px; color:#e9e9ff; }.gallery-cta .eyebrow { color:#cbfbff; }.button-light { color:var(--ink); background:white; border-color:white; }
@media (max-width:820px) { .gallery-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:600px) { .gallery-intro h1 { font-size:3.15rem; }.gallery-grid { grid-template-columns:1fr; }.gallery-results { padding-top:36px; }.gallery-card p { min-height:0; }.gallery-card-actions { flex-wrap:wrap; } }
</style>
