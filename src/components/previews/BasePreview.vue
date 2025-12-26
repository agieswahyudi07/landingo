<template>
  <div class="min-h-screen bg-white">
    <!-- Subtle Preview Banner (dapat ditutup) -->
    <div v-if="showBanner" class="bg-indigo-600 text-white py-2 px-4 text-center text-xs font-medium relative">
      <div class="container mx-auto flex items-center justify-center gap-2">
        <Icon icon="mdi:information" class="text-sm" />
        <span>Preview Design - Dapat dikustomisasi sesuai kebutuhan</span>
        <button 
          @click="showBanner = false" 
          class="ml-4 hover:bg-white/20 rounded p-1 transition-colors"
          aria-label="Tutup banner"
        >
          <Icon icon="mdi:close" class="text-sm" />
        </button>
      </div>
      <router-link 
        to="/gallery" 
        class="absolute right-4 top-1/2 -translate-y-1/2 text-xs underline hover:no-underline opacity-80 hover:opacity-100"
      >
        ← Gallery
      </router-link>
    </div>

    <!-- Preview Content -->
    <slot />

    <!-- Minimal Footer (opsional, bisa di-override oleh preview) -->
    <footer v-if="showFooter" class="bg-gray-900 text-white py-8">
      <div class="container px-5 mx-auto text-center">
        <p class="text-gray-400 text-sm">Design oleh <span class="font-semibold">Landingo</span></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  showBanner: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  }
});

const showBanner = ref(true);
</script>

