<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

// Daftar link navigasi
const navLinks = ref([
  { href: '#value-proposition', text: 'Kenapa Landingo ?' },
  { href: '#pricing', text: 'Paket Harga' },
  { href: '#cta', text: 'Siap Upgrade Bisnis' },
  // { href: '#faq', text: 'FAQ' },
]);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const redirectToWhatsApp = () => {
  // use international fomat, without '+', space, atau '-'. example: 6281234567890
  const phoneNumber = '6281398257238'; 

  // --- default message ---
  const defaultMessage = 'Halo, saya tertarik dengan jasa pembuatan landing page/website untuk bisnis saya. Bisa minta informasi lebih lanjut?';
  
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
  <header class="fixed w-full text-gray-600 body-font z-50 bg-white/50 backdrop-blur-md shadow-md">
    <div class="container mx-auto flex flex-wrap p-4 lg:px-15 flex-row items-center justify-between">
      
      <a href="#home" @click.prevent="scrollToSection('#hero')" class="flex title-font font-medium items-center text-gray-900 flex-row gap-2 mr-1">
        <img src="/assets/images/landingo_logo2.webp" alt="Logo Landingo" class=" max-w-10">
        <img src="/assets/images/landingo_logo.webp" alt="Logo Landingo" class=" max-h-5">
      </a>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 rounded-md text-gray-600 focus:outline-none" aria-label="hamburger">
        <svg v-if="!isMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <div :class="{ 'hidden': !isMenuOpen }" class="absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:static md:w-auto md:flex md:items-center md:bg-transparent">
        
        <nav class="flex flex-col md:flex-row sm:ml-auto items-center text-base w-full md:w-auto">
          <a v-for="link in navLinks" 
             :key="link.href" 
             :href="link.href"
             @click.prevent="scrollToSection(link.href)" 
             class="mr-0 md:mr-5 font-medium hover:text-indigo-600 py-3 md:py-0 border-b md:border-b-0 w-full text-center md:w-auto"
          >
            {{ link.text }}
          </a>
        </nav>
        
        <div class="flex justify-center w-full md:w-auto mt-4 md:mt-0 lg:ml-4 pb-5 sm:pb-0">
           <n-button color="#25D366" round @click="redirectToWhatsApp" aria-label="Konsultasi gratis via WhatsApp untuk pembuatan landing page">
             Konsultasi Gratis
            <Icon icon="mdi:whatsapp" class=" text-2xl ml-1"/>
           </n-button>
        </div>

      </div>
    </div>
  </header>
</template>