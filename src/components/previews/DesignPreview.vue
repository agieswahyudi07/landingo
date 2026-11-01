<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { designs } from '@/data/designs';
import { whatsappHref } from '@/lib/whatsapp';
import LocalIcon from '@/components/ui/LocalIcon.vue';

const props = defineProps({ designId: { type: String, required: true } });
const design = computed(() => designs.find((item) => item.slug === props.designId || item.id === props.designId));
const categoryName = computed(() => ({ ecommerce: 'E-Commerce', service: 'Jasa', product: 'Produk', education: 'Edukasi', healthcare: 'Kesehatan', food: 'F&B', interior: 'Properti & Interior' }[design.value?.category] || design.value?.category || 'Design'));
const previewComponent = computed(() => {
  if (!design.value) return null;
  const loaders = {
    'ecommerce-modern': () => import('@/components/previews/EcommerceModern.vue'), 'service-business': () => import('@/components/previews/ServiceBusiness.vue'), 'product-launch': () => import('@/components/previews/ProductLaunch.vue'), 'online-course': () => import('@/components/previews/OnlineCourse.vue'), healthcare: () => import('@/components/previews/Healthcare.vue'), restaurant: () => import('@/components/previews/Restaurant.vue'), 'fashion-store': () => import('@/components/previews/FashionStore.vue'), consulting: () => import('@/components/previews/Consulting.vue'), 'tech-product': () => import('@/components/previews/TechProduct.vue'), 'tech-product-v2': () => import('@/components/previews/TechProductV2.vue'), 'interior-design': () => import('@/components/previews/InteriorDesign.vue'), 'architecture-studio': () => import('@/components/previews/ArchitectureStudio.vue'),
  };
  const loader = loaders[design.value.slug] || loaders[design.value.id];
  return loader ? defineAsyncComponent(loader) : null;
});
const consultationHref = computed(() => whatsappHref(`Halo! Saya tertarik dengan design "${design.value?.name || 'landing page'}". Bisa minta informasi lebih detail dan konsultasi untuk customisasi design ini?`));
</script>

<template>
  <main v-if="design" class="preview-page">
    <header class="preview-bar"><a href="/gallery" class="preview-back"><LocalIcon name="arrow-right" /> <span>Kembali ke gallery</span></a><div class="preview-title"><span>{{ categoryName }}</span><strong>{{ design.name }}</strong></div><a class="preview-consult" :href="consultationHref" target="_blank" rel="noopener">Konsultasi design ini <LocalIcon name="arrow-up-right" /></a></header>
    <section class="preview-canvas" aria-label="Preview design"><Suspense><template #default><component v-if="previewComponent" :is="previewComponent" /></template><template #fallback><div class="preview-loading">Memuat preview…</div></template></Suspense></section>
    <section class="preview-details"><div><p class="eyebrow">{{ categoryName }}</p><h1>{{ design.name }}</h1><p>{{ design.description }}</p></div><ul><li v-for="feature in design.features" :key="feature"><LocalIcon name="check" />{{ feature }}</li></ul></section>
    <section class="preview-final-cta"><div><p class="eyebrow">Siap memakai arah ini?</p><h2>Jadikan referensi ini milik bisnis Anda.</h2><a class="button button-primary" :href="consultationHref" target="_blank" rel="noopener">Konsultasi design ini <LocalIcon name="arrow-up-right" /></a></div></section>
    <a class="preview-mobile-cta" :href="consultationHref" target="_blank" rel="noopener"><LocalIcon name="message" /> Konsultasi design ini</a>
  </main>
  <main v-else class="preview-not-found"><h1>Design tidak ditemukan</h1><a class="button button-secondary" href="/gallery">Kembali ke gallery</a></main>
</template>

<style>
.preview-page { min-height:100vh; overflow-x:hidden; background:var(--canvas); color:var(--ink); }.preview-bar { position:sticky; top:0; z-index:100; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:20px; min-height:70px; padding:12px clamp(16px,4vw,56px); border-bottom:1px solid var(--line); background:color-mix(in srgb,var(--canvas) 94%,transparent); backdrop-filter:blur(14px); }.preview-back,.preview-consult { display:inline-flex; align-items:center; gap:7px; font:700 .78rem var(--font-display); }.preview-back { justify-self:start; }.preview-back svg { transform:rotate(180deg); }.preview-consult { justify-self:end; padding:10px 13px; border:1px solid var(--primary); color:var(--primary); }.preview-consult:hover { background:var(--primary); color:white; }.preview-title { display:flex; flex-direction:column; align-items:center; gap:1px; }.preview-title span { color:var(--primary); font:700 .65rem var(--font-display); letter-spacing:.1em; text-transform:uppercase; }.preview-title strong { font:700 1rem var(--font-display); }.preview-canvas { min-width:0; overflow:hidden; border-bottom:1px solid var(--line); }.preview-canvas > * { min-width:0; }.preview-loading { display:grid; min-height:60vh; place-items:center; color:var(--muted); }.preview-details { display:grid; grid-template-columns:1fr 1fr; gap:60px; width:min(100% - 40px,1000px); margin:0 auto; padding:80px 0; }.preview-details h1 { margin:0; font-size:clamp(2.5rem,5vw,5rem); line-height:1; }.preview-details p:not(.eyebrow) { max-width:520px; margin:20px 0 0; color:var(--muted); }.preview-details ul { display:grid; align-content:start; gap:12px; margin:32px 0 0; padding:0; list-style:none; }.preview-details li { display:flex; align-items:flex-start; gap:9px; color:var(--muted); font-size:.9rem; }.preview-details li svg { flex:none; margin-top:4px; color:var(--primary); }.preview-final-cta { padding:80px 20px; background:var(--surface); }.preview-final-cta > div { width:min(100%,900px); margin:auto; }.preview-final-cta h2 { max-width:700px; margin:0 0 28px; font-size:clamp(2.5rem,5vw,5rem); line-height:1; }.preview-mobile-cta { display:none; }.preview-not-found { display:grid; min-height:100vh; place-content:center; justify-items:center; gap:20px; }.preview-not-found h1 { font-size:3rem; }
@media (max-width:700px) { .preview-bar { grid-template-columns:auto 1fr auto; }.preview-title { align-items:flex-start; }.preview-title strong { max-width:130px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }.preview-back span { display:none; }.preview-consult { padding:10px; font-size:0; }.preview-consult svg { font-size:1rem; }.preview-details { grid-template-columns:1fr; gap:24px; padding:56px 0 100px; }.preview-details ul { margin-top:0; }.preview-final-cta { padding-bottom:100px; }.preview-mobile-cta { position:fixed; right:16px; bottom:calc(12px + env(safe-area-inset-bottom)); left:16px; z-index:120; display:flex; min-height:52px; align-items:center; justify-content:center; gap:8px; background:#25d366; color:white; box-shadow:0 8px 22px rgba(23,23,42,.2); font:700 .9rem var(--font-display); } }
</style>
