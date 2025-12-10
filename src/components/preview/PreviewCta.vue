<template>
  <section class="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
    <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    
    <div class="container px-5 mx-auto text-center relative z-10">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
        {{ title }}
      </h2>
      <p class="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        {{ description }}
      </p>
      <button
        @click="handleCtaClick"
        class="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
      >
        <Icon icon="mdi:whatsapp" class="text-2xl" />
        {{ ctaText }}
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Siap Memulai Proyek Anda?'
  },
  description: {
    type: String,
    default: 'Konsultasikan kebutuhan Anda dengan tim kami. Gratis!'
  },
  ctaText: {
    type: String,
    default: 'Konsultasi Gratis via WhatsApp'
  }
});

const handleCtaClick = () => {
  const phoneNumber = '6285183077289';
  const message = encodeURIComponent('Halo! Saya tertarik dengan design ini. Bisa konsultasi lebih lanjut?');
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
};
</script>

