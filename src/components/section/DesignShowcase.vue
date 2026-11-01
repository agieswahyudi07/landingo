<script setup>
import { computed } from 'vue';
import LocalIcon from '@/components/ui/LocalIcon.vue';
import { designs as allDesigns } from '@/data/designs';
import DesignThumbnail from '@/components/preview/DesignThumbnail.vue';

const featuredSlugs = ['service-business', 'consulting', 'healthcare'];
const featuredDesigns = computed(() => featuredSlugs.map((slug) => allDesigns.find((design) => design.slug === slug)).filter(Boolean));
</script>

<template>
  <section id="design-showcase" class="section portfolio-section">
    <div class="editorial-container">
      <div class="section-heading portfolio-heading">
        <p class="eyebrow">Contoh desain</p>
        <h2>Pilih rasa visual yang paling dekat dengan bisnis Anda.</h2>
        <p>Setiap template dapat disesuaikan agar layanan, keunggulan, dan cara menghubungi bisnis Anda tersampaikan dengan jelas.</p>
      </div>
      <div class="portfolio-list">
        <a v-for="(design, index) in featuredDesigns" :key="design.id" :href="design.previewPath" class="portfolio-item">
          <div class="portfolio-meta"><span>0{{ index + 1 }}</span><span>{{ design.category === 'healthcare' ? 'Kesehatan' : 'Bisnis jasa' }}</span></div>
          <div class="portfolio-preview"><DesignThumbnail :component-name="design.previewComponent" :width="900" :height="520" /></div>
          <div class="portfolio-copy"><div><h3>{{ design.name }}</h3><p>{{ design.description }}</p></div><LocalIcon name="arrow-up-right" /></div>
        </a>
      </div>
      <div class="portfolio-footer"><a class="text-link" href="/gallery">Lihat semua contoh desain <LocalIcon name="arrow-right" /></a></div>
    </div>
  </section>
</template>
