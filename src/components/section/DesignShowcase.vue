<script setup>
import { ref, onMounted, computed, Suspense } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/vue';
import { designs as allDesigns } from '@/data/designs';
import DesignThumbnail from '@/components/preview/DesignThumbnail.vue';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();
const sectionRef = ref(null);
const headerRef = ref(null);
const cardsRef = ref(null);

// Ambil 3 design teratas untuk featured
const featuredDesigns = computed(() => {
  if (!allDesigns || allDesigns.length === 0) {
    return [];
  }
  return allDesigns.slice(0, 3);
});

const getCategoryLabel = (category) => {
  const labels = {
    'ecommerce': 'E-Commerce',
    'service': 'Jasa',
    'product': 'Produk',
    'education': 'Edukasi',
    'healthcare': 'Kesehatan',
    'food': 'F&B'
  };
  return labels[category] || category;
};

const getCategoryGradient = (category) => {
  const gradients = {
    'ecommerce': 'from-blue-500 to-purple-500',
    'service': 'from-indigo-500 to-cyan-500',
    'product': 'from-purple-500 to-pink-500',
    'education': 'from-green-500 to-teal-500',
    'healthcare': 'from-blue-500 to-cyan-500',
    'food': 'from-orange-500 to-red-500'
  };
  return gradients[category] || 'from-gray-500 to-gray-600';
};

const navigateToGallery = () => {
  router.push('/gallery');
};

const viewDesign = (design) => {
  if (design.previewPath) {
    router.push(design.previewPath);
  } else {
    navigateToGallery();
  }
};

// Simple hover animations for cards
const onCardEnter = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    y: -4,
    duration: 0.3,
    ease: 'power2.out'
  });
};

const onCardLeave = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  });
};

onMounted(() => {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    if (!sectionRef.value) return;

    // Ensure cards are visible first
    if (cardsRef.value) {
      const cards = cardsRef.value.querySelectorAll('.design-card');
      cards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    if (headerRef.value && headerRef.value.children.length > 0) {
      tl.from(headerRef.value.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
      });
    }

    if (cardsRef.value) {
      const cards = cardsRef.value.querySelectorAll('.design-card');
      if (cards.length > 0) {
        // Simple fade in animation
        gsap.set(cards, { 
          opacity: 0, 
          y: 30
        });
        
        tl.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        }, '-=0.3');
      }
    }
    
    // Animate CTA button - ensure it's visible
    const ctaButton = sectionRef.value?.querySelector('.cta-button');
    if (ctaButton) {
      gsap.set(ctaButton, { opacity: 1, visibility: 'visible' });
      tl.from(ctaButton, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.2');
    }
  }, 100);
});
</script>

<template>
  <section
    ref="sectionRef"
    id="design-showcase"
    class="relative py-24 bg-gradient-to-b from-white via-[#DFF5FF]/20 to-white overflow-hidden"
  >
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#5356FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#378CE7] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

    <div class="container px-5 mx-auto relative z-10">
      <!-- Header -->
      <div ref="headerRef" class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#DFF5FF] border border-[#67C6E3]/30">
          <Icon icon="mdi:palette" class="text-[#5356FF]" />
          <span class="text-sm font-semibold text-[#5356FF]">Portfolio Design</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Pilih Design yang
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#5356FF] to-[#378CE7]">
            Sesuai Brand Anda
          </span>
        </h2>
        
        <p class="text-lg text-gray-600 leading-relaxed">
          Lihat koleksi design landing page profesional kami. Setiap design dibuat dengan fokus pada konversi dan user experience yang optimal.
        </p>
      </div>

      <!-- Design Cards Grid -->
      <div v-if="featuredDesigns.length > 0" ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
        <div
          v-for="design in featuredDesigns"
          :key="design.id"
          class="design-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          style="opacity: 1; visibility: visible;"
          @click="viewDesign(design)"
          @mouseenter="onCardEnter"
          @mouseleave="onCardLeave"
        >
          <!-- Image Container -->
          <div class="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <!-- Render komponen preview langsung sebagai thumbnail -->
            <div class="thumbnail-wrapper w-full h-full">
              <Suspense :key="`suspense-${design.id}`">
                <template #default>
                  <DesignThumbnail 
                    :key="`thumbnail-${design.id}`"
                    :component-name="design.previewComponent" 
                    :width="400"
                    :height="192"
                    class="w-full h-full"
                  />
                </template>
                <template #fallback>
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div class="text-center">
                      <Icon icon="mdi:loading" class="text-4xl text-gray-400 mb-2 mx-auto animate-spin" />
                      <p class="text-xs text-gray-500">Loading preview...</p>
                    </div>
                  </div>
                </template>
              </Suspense>
            </div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 z-10">
              {{ getCategoryLabel(design.category) }}
            </div>
            <!-- View Badge -->
            <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#5356FF] text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              Preview
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5356FF] transition-colors">
              {{ design.name }}
            </h3>
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">
              {{ design.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(feature, idx) in design.features.slice(0, 2)"
                :key="idx"
                class="px-2 py-1 rounded-md bg-[#DFF5FF] text-[#5356FF] text-xs font-medium"
              >
                {{ feature }}
              </span>
            </div>
            <button
              class="w-full px-4 py-2 rounded-lg bg-[#DFF5FF] text-[#5356FF] font-semibold text-sm hover:bg-[#5356FF] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Lihat Preview</span>
              <Icon icon="mdi:arrow-right" class="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <!-- Fallback jika tidak ada design -->
      <div v-else class="text-center py-12">
        <p class="text-gray-500">Loading designs...</p>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <button
          @click="navigateToGallery"
          class="cta-button inline-flex items-center gap-3 px-8 py-4 bg-[#5356FF] hover:bg-[#378CE7] text-white rounded-full font-bold text-lg shadow-xl shadow-[#5356FF]/20 hover:shadow-[#5356FF]/40 transition-all duration-300 transform hover:-translate-y-1"
          style="opacity: 1; visibility: visible;"
        >
          <Icon icon="mdi:view-grid-outline" class="text-2xl" />
          <span>Lihat Semua Design</span>
          <Icon icon="mdi:arrow-right" class="text-xl" />
        </button>
        <p class="text-sm text-gray-500 mt-4">
          Lebih dari 10+ design template siap pakai untuk berbagai jenis bisnis
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.design-card {
  will-change: transform;
}
</style>

