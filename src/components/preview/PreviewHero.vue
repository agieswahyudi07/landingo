<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden" :style="heroStyle">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
    <div v-if="showBlobs" class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center z-10 relative">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <!-- Badge -->
        <div v-if="badge" class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
          <span class="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          {{ badge }}
        </div>
        
        <!-- Main Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-gray-900 font-extrabold leading-tight">
          <span v-if="headlineGradient" class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {{ headlineGradient }}
          </span>
          <span v-if="headlineGradient && headlineNormal">
            <br class="hidden lg:inline-block">
          </span>
          <span v-if="headlineNormal" class="text-gray-900">{{ headlineNormal }}</span>
        </h1>
        
        <!-- Subheadline -->
        <p class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
          {{ subheadline }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            v-for="(cta, index) in ctas"
            :key="index"
            @click="handleCtaClick(cta)"
            :class="[
              'px-8 py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2',
              index === 0 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-indigo-500 hover:text-indigo-600'
            ]"
          >
            <Icon v-if="cta.icon" :icon="cta.icon" class="text-xl" />
            {{ cta.text }}
          </button>
        </div>
      </div>

      <!-- Hero Image/Visual -->
      <div v-if="showImage" class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
          <div class="relative bg-white rounded-3xl shadow-2xl p-8">
            <div class="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <Icon icon="mdi:image-outline" class="text-6xl text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  badge: {
    type: String,
    default: ''
  },
  headlineGradient: {
    type: String,
    default: ''
  },
  headlineNormal: {
    type: String,
    default: ''
  },
  subheadline: {
    type: String,
    required: true
  },
  ctas: {
    type: Array,
    default: () => [
      { text: 'Mulai Sekarang', icon: 'mdi:rocket-launch', action: 'whatsapp' },
      { text: 'Lihat Demo', icon: 'mdi:play-circle', action: 'demo' }
    ]
  },
  showImage: {
    type: Boolean,
    default: true
  },
  showBlobs: {
    type: Boolean,
    default: true
  },
  heroStyle: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['cta-click']);

const handleCtaClick = (cta) => {
  emit('cta-click', cta);
  
  if (cta.action === 'whatsapp') {
    const phoneNumber = '6285183077289';
    const message = encodeURIComponent('Halo! Saya tertarik dengan design ini. Bisa konsultasi lebih lanjut?');
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  }
};
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>

