<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

// Daftar link navigasi
const navLinks = ref([
  { href: '#value-proposition', text: 'Keunggulan' },
  { href: '#pricing', text: 'Paket & Harga' },
  { href: '#cta', text: 'Mulai Sekarang' },
  // { href: '#faq', text: 'FAQ' },
]);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const redirectToWhatsApp = () => {
  // use international fomat, without '+', space, atau '-'. example: 6281234567890
  const phoneNumber = '6285183077289'; 

  // --- default message ---
  const defaultMessage = 'Halo! Saya ingin konsultasi tentang landing page profesional untuk bisnis saya. Bisa minta informasi lebih detail?';
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};


/**
 * Fungsi utama untuk smooth scroll.
 * Menerima id dari section tujuan (contoh: '#harga').
 */
const scrollToSection = (id) => {
  // Menghapus karakter '#' dari awal string id
  const targetId = id.substring(1);
  const element = document.getElementById(targetId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  // Selalu tutup menu setelah aksi scroll
  closeMenu();
};
</script>

<template>
  <header class="fixed w-full text-gray-600 body-font z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
    <div class="container mx-auto flex flex-wrap p-4 lg:px-16 flex-row items-center justify-between">
      
      <a href="#home" @click.prevent="scrollToSection('#hero')" class="flex title-font font-semibold items-center text-gray-900 mr-1 hover:opacity-80 transition-opacity" aria-label="Landingo - Landing Page Profesional untuk UMKM">
        <img src="/assets/images/landingo_logo.webp" alt="Landingo - Landing Page Profesional untuk UMKM" class="h-11 3xl:h-15 w-auto" loading="eager" fetchpriority="high" decoding="sync">
      </a>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors" aria-label="hamburger">
        <svg v-if="!isMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <div :class="{ 'hidden': !isMenuOpen }" class="absolute top-full left-0 w-full bg-white shadow-lg md:shadow-none md:static md:w-auto md:flex md:items-center md:bg-transparent">
        
        <nav class="flex flex-col md:flex-row sm:ml-auto items-center text-base w-full md:w-auto">
          <a v-for="link in navLinks" 
             :key="link.href" 
             :href="link.href"
             @click.prevent="scrollToSection(link.href)" 
             class="mr-0 md:mr-6 font-medium text-gray-700 hover:text-indigo-600 py-3 md:py-0 border-b md:border-b-0 w-full text-center md:w-auto transition-colors"
          >
            {{ link.text }}
          </a>
        </nav>
        
        <div class="flex justify-center w-full md:w-auto mt-4 md:mt-0 lg:ml-4 pb-5 sm:pb-0">
           <n-button 
             color="#25D366" 
             round 
             size="medium"
             class="font-semibold shadow-md hover:shadow-lg transition-all"
             @click="redirectToWhatsApp" 
             aria-label="Konsultasi gratis via WhatsApp untuk pembuatan landing page"
           >
             <Icon icon="mdi:whatsapp" class="text-xl mr-2"/>
             Konsultasi Gratis
           </n-button>
        </div>

      </div>
    </div>
  </header>
</template>