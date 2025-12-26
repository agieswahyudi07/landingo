<template>
  <a
    href="/gallery"
    class="cursor-pointer fixed bottom-8 right-8 z-50 group flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-white overflow-hidden"
    aria-label="Kembali ke Gallery"
  >
    <!-- Background Gradient on Hover -->
    <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    
    <!-- Default Dark Background -->
    <div class="absolute inset-0 bg-gray-900/80 opacity-100 group-hover:opacity-0 transition-opacity duration-300 -z-10"></div>

    <Icon icon="mdi:arrow-left" class="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
    <span class="font-medium text-sm">Kembali ke Gallery</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
/* Ensure button stays above other content */
a {
  z-index: 9999;
}
</style>
