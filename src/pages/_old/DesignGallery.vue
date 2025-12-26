<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 pb-16">
    <!-- Header Section -->
    <section class="container px-5 mx-auto mb-12">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
          <Icon icon="mdi:palette" class="text-indigo-500" />
          Referensi Design Landing Page
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Koleksi Design
          <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Profesional
          </span>
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Jelajahi berbagai referensi design landing page yang bisa kami buatkan untuk bisnis Anda. 
          Setiap design dapat dikustomisasi sesuai kebutuhan dan branding Anda.
        </p>
      </div>

      <!-- Filter Categories -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'cursor-pointer px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300',
            activeCategory === category.id
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
          ]"
        >
          <Icon :icon="category.icon" class="inline mr-2" />
          {{ category.name }}
        </button>
      </div>
    </section>

    <!-- Design Grid -->
    <section class="container px-5 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="design in filteredDesigns"
          :key="design.id"
          class="design-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          @mouseenter="onCardHover($event)"
          @mouseleave="onCardLeave($event)"
        >
          <!-- Image Container -->
          <div class="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <!-- Render komponen preview langsung sebagai thumbnail -->
            <Suspense :key="`suspense-${design.id}-${activeCategory}`">
              <template #default>
                <DesignThumbnail 
                  :key="`thumbnail-${design.id}-${activeCategory}`"
                  :component-name="design.previewComponent" 
                  :width="400"
                  :height="288"
                  class="w-full h-full"
                />
              </template>
              <template #fallback>
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-center p-6">
                    <Icon icon="mdi:loading" class="text-6xl text-gray-400 mb-4 mx-auto animate-spin" />
                    <p class="text-sm text-gray-500 font-medium">Loading preview...</p>
                  </div>
                </div>
              </template>
            </Suspense>
            
            <!-- Overlay on Hover (Desktop) / Always Visible (Mobile) -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div class="p-4 w-full transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                <a
                  v-if="design.previewPath"
                  :href="design.previewPath"
                  target="_blank"
                  rel="noopener"
                  class="cursor-pointer flex-1 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Icon icon="mdi:eye" />
                  Lihat Preview
                </a>
                <button
                  @click="viewDesign(design)"
                  class="cursor-pointer flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon icon="mdi:information" />
                  Info
                </button>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                {{ getCategoryName(design.category) }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ design.name }}</h3>
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ design.description }}</p>
            
            <!-- Features -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(feature, idx) in design.features.slice(0, 5)"
                :key="idx"
                class="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium"
              >
                {{ feature }}
              </span>
              <!-- <span v-if="design.features.length > 3" class="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                +{{ design.features.length - 3 }}
              </span> -->
            </div>

            <!-- CTA Button -->
            <button
              @click="redirectToWhatsApp(design)"
              class="cursor-pointer w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Icon icon="mdi:whatsapp" />
              Konsultasi Design Ini
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredDesigns.length === 0" class="text-center py-16">
        <Icon icon="mdi:image-off-outline" class="text-6xl text-gray-300 mb-4 mx-auto" />
        <p class="text-gray-500 text-lg">Tidak ada design untuk kategori ini</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container px-5 mx-auto mt-16">
      <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 cta-pattern opacity-20"></div>
        <div class="relative z-10">
          <h2 class="text-3xl sm:text-4xl font-extrabold mb-4">Siap Membuat Landing Page Profesional?</h2>
          <p class="text-lg mb-6 opacity-90">Konsultasikan kebutuhan design Anda dengan tim kami. Gratis!</p>
          <button
            @click="redirectToWhatsApp()"
            class="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Icon icon="mdi:whatsapp" class="text-2xl" />
            Konsultasi Gratis via WhatsApp
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, Suspense } from 'vue';
import { gsap } from 'gsap';
import { designs as designsData } from '@/data/designs';
import DesignThumbnail from '@/components/preview/DesignThumbnail.vue';

const activeCategory = ref('all');
const designs = ref(designsData);

const categories = [
  { id: 'all', name: 'Semua', icon: 'mdi:view-grid' },
  { id: 'ecommerce', name: 'E-Commerce', icon: 'mdi:cart' },
  { id: 'service', name: 'Jasa', icon: 'mdi:briefcase' },
  { id: 'product', name: 'Produk', icon: 'mdi:package-variant' },
  { id: 'education', name: 'Edukasi', icon: 'mdi:school' },
  { id: 'healthcare', name: 'Kesehatan', icon: 'mdi:medical-bag' },
  { id: 'food', name: 'F&B', icon: 'mdi:food' },
];

const filteredDesigns = computed(() => {
  if (activeCategory.value === 'all') {
    return designs.value;
  }
  return designs.value.filter(design => design.category === activeCategory.value);
});

const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : categoryId;
};

const onCardHover = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    duration: 0.3,
    scale: 1.02,
    ease: 'power2.out'
  });
};

const onCardLeave = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    duration: 0.3,
    scale: 1,
    ease: 'power2.out'
  });
};

const viewDesign = (design) => {
  // Bisa ditambahkan modal atau lightbox untuk melihat detail design
  console.log('View design:', design.name);
  // Untuk sekarang, redirect ke WhatsApp dengan info design
  redirectToWhatsApp(design);
};

const redirectToWhatsApp = (design = null) => {
  const phoneNumber = '6285183077289';
  let message = 'Halo! Saya tertarik dengan referensi design landing page. Bisa konsultasi lebih lanjut?';
  
  if (design) {
    message = `Halo! Saya tertarik dengan design "${design.name}". Bisa minta informasi lebih detail dan konsultasi untuk customisasi design ini?`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<style scoped>
.design-card {
  will-change: transform;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cta-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>

