<template>
  <div class="font-sans text-stone-800 antialiased bg-[#FAFAF9] selection:bg-orange-200 selection:text-orange-900">
    
    <header 
      class="fixed w-full top-0 z-50 transition-all duration-300"
      :class="isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-orange-700 rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform">
            <Icon icon="mdi:rice" class="text-2xl" />
          </div>
          <div>
            <h1 class="font-serif text-xl font-bold tracking-tight text-stone-900">Bumbu<span class="text-orange-700">Nusantara</span></h1>
            <p class="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">Autentik Rasa</p>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm font-medium text-stone-600 hover:text-orange-700 transition-colors uppercase tracking-wide">
            {{ link.text }}
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <button @click="handleReservation" class="hidden md:flex px-6 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-orange-700 transition-colors items-center gap-2 shadow-lg shadow-orange-900/10">
            <span>Reservasi Meja</span>
            <Icon icon="mdi:arrow-right" class="text-xs" />
          </button>
          
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl text-stone-800">
            <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
          </button>
        </div>
      </div>

      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl md:hidden p-6 flex flex-col gap-4">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-lg font-serif font-medium text-stone-800 py-2 border-b border-stone-100">
            {{ link.text }}
          </a>
          <button @click="handleReservation" class="w-full py-3 bg-orange-700 text-white rounded-lg mt-2">Reservasi Sekarang</button>
        </div>
      </transition>
    </header>

    <section id="home" class="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=2000&auto=format&fit=crop" 
          class="w-full h-full object-cover object-center brightness-[0.6]"
          alt="Indonesian Dining"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/30"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 pt-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
            <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span class="text-xs font-medium tracking-widest uppercase">Est. 2009 &bull; Jakarta</span>
          </div>
          
          <h2 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-8">
            Warisan Kuliner <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100 italic">Tanah Air.</span>
          </h2>
          
          <p class="text-lg md:text-xl text-stone-300 max-w-xl leading-relaxed mb-10">
            Menghadirkan kehangatan rempah Nusantara dalam suasana modern. Sebuah perjalanan rasa dari Sabang hingga Merauke di setiap piring.
          </p>

          <div class="flex flex-wrap gap-4">
            <button @click="scrollToSection('menu')" class="px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-3">
              Lihat Menu
              <Icon icon="mdi:silverware" />
            </button>
            <button @click="handleVideo" class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center">
                <Icon icon="mdi:play" />
              </div>
              Tentang Kami
            </button>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 hidden lg:flex bg-white p-10 rounded-tl-3xl z-10 gap-12 shadow-2xl">
        <div v-for="(stat, idx) in stats" :key="idx">
          <div class="font-serif text-3xl font-bold text-stone-900">{{ stat.val }}</div>
          <div class="text-xs uppercase tracking-widest text-stone-500 mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section id="about" class="py-24 bg-[#FAFAF9]">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <div class="lg:w-1/2 relative group">
            <div class="absolute -inset-4 bg-orange-100 rounded-3xl rotate-3 transition-transform group-hover:rotate-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              class="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Chef Cooking"
            />
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-[200px]">
              <p class="font-serif italic text-lg text-stone-800">"Memasak adalah melukis dengan rasa."</p>
              <p class="text-xs font-bold text-orange-700 mt-2">— Chef Handoko</p>
            </div>
          </div>
          <div class="lg:w-1/2">
            <h3 class="text-orange-700 font-bold tracking-widest uppercase text-sm mb-4">Cerita Kami</h3>
            <h2 class="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
              Menjaga Keaslian Resep <br/>Nenek Moyang
            </h2>
            <div class="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Bumbu Nusantara dimulai dari sebuah dapur kecil di tahun 2009. Kami percaya bahwa makanan Indonesia bukan hanya tentang rasa pedas, tetapi tentang keseimbangan kompleksitas rempah yang harmonis.
              </p>
              <p>
                Kami bekerja sama langsung dengan petani lokal untuk mendapatkan lengkuas tersegar, cabai terbaik, dan daging berkualitas premium untuk memastikan setiap suapan membawa nostalgia rumah.
              </p>
            </div>
            <div class="mt-10 pt-10 border-t border-stone-200 flex items-center gap-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Halal_logo_Indonesia.svg/1200px-Halal_logo_Indonesia.svg.png" class="h-12 grayscale opacity-50 hover:opacity-100 transition-opacity" alt="Halal">
              <img src="https://cdn-icons-png.flaticon.com/512/3408/3408546.png" class="h-12 grayscale opacity-50 hover:opacity-100 transition-opacity" alt="Local">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="menu" class="py-24 bg-white relative">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Hidangan Pilihan</h2>
          <p class="text-stone-500">Dikurasi khusus untuk pengalaman makan yang tak terlupakan.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-12 sticky top-24 z-30 bg-white/80 backdrop-blur-lg py-4 rounded-full max-w-fit mx-auto px-6 border border-stone-100 shadow-sm">
          <button 
            v-for="cat in menuCategories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeCategory === cat.id 
                ? 'bg-stone-900 text-white' 
                : 'text-stone-500 hover:text-orange-700 hover:bg-orange-50'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div 
            v-for="(item, index) in filteredMenuItems" 
            :key="index"
            class="group cursor-pointer"
            @click="viewDetail(item)"
          >
            <div class="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              >
              <div v-if="item.badge" class="absolute top-4 left-4 bg-white/90 backdrop-blur text-orange-800 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                {{ item.badge }}
              </div>
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="bg-white text-stone-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Lihat Detail</span>
              </div>
            </div>
            
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-serif text-2xl text-stone-900 group-hover:text-orange-700 transition-colors">{{ item.name }}</h3>
              <span class="font-bold text-lg text-stone-600">IDR {{ item.price / 1000 }}K</span>
            </div>
            <p class="text-stone-500 line-clamp-2 text-sm leading-relaxed mb-4">{{ item.description }}</p>
            <div class="flex items-center gap-1 text-yellow-500 text-sm">
              <Icon icon="mdi:star" />
              <span class="text-stone-800 font-bold">{{ item.rating }}</span>
              <span class="text-stone-400">({{ item.reviews }})</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-32 relative bg-stone-900 overflow-hidden flex items-center justify-center text-center">
      <div class="absolute inset-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-10 container px-6">
        <Icon icon="mdi:silverware-fork-knife" class="text-5xl text-orange-500 mx-auto mb-6" />
        <h2 class="font-serif text-4xl md:text-6xl text-white mb-6">Reservasi Meja Anda</h2>
        <p class="text-stone-300 max-w-xl mx-auto mb-10 text-lg">
          Hindari antrian dan pastikan momen spesial Anda berjalan sempurna. Kami melayani makan malam romantis, acara keluarga, hingga meeting korporat.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button @click="handleReservation" class="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-sm font-medium tracking-wide transition-colors">
            WhatsApp Reservasi
          </button>
          <button class="px-10 py-4 border border-white/30 text-white hover:bg-white hover:text-stone-900 rounded-sm font-medium tracking-wide transition-colors">
            Lihat Lokasi (Gmaps)
          </button>
        </div>
      </div>
    </section>

    <footer class="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="text-center md:text-left">
            <h2 class="font-serif text-2xl text-white mb-1">BumbuNusantara</h2>
            <p class="text-sm">Since 2009 &bull; Jakarta Pusat</p>
          </div>
          <div class="flex gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#" class="hover:text-white transition-colors">Instagram</a>
            <a href="#" class="hover:text-white transition-colors">Facebook</a>
            <a href="#" class="hover:text-white transition-colors">Tiktok</a>
          </div>
          <div class="text-sm">
            &copy; 2025. Hak Cipta Dilindungi. <span class="text-stone-400">Built by <span class="font-semibold text-orange-500">Landingo</span></span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// --- Assets & Data ---
// Menggunakan font eksternal di index.html atau via import CSS (disimulasikan di sini)
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const activeCategory = ref('all');

// Navigation
const navLinks = [
  { text: 'Beranda', href: '#home' },
  { text: 'Tentang', href: '#about' },
  { text: 'Menu', href: '#menu' },
  { text: 'Lokasi', href: '#contact' },
];

const stats = [
  { val: '4.9', label: 'Rating Google' },
  { val: '50+', label: 'Menu Autentik' },
  { val: '15th', label: 'Pengalaman' },
];

const menuCategories = [
  { id: 'all', name: 'Semua' },
  { id: 'main', name: 'Hidangan Utama' },
  { id: 'appetizer', name: 'Pembuka' },
  { id: 'beverage', name: 'Minuman' }
];

// Data Menu dengan Gambar Realistis (Unsplash Source)
const menuItems = [
  {
    name: 'Rendang Sapi Royal',
    category: 'main',
    description: 'Daging sapi wagyu lokal dimasak lambat 8 jam dengan santan kelapa tua dan 12 rempah rahasia.',
    price: 85000,
    rating: 5.0,
    reviews: 234,
    badge: 'Chef Pick',
    image: 'https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Rendang-like
  },
  {
    name: 'Sate Ayam Ponorogo',
    category: 'main',
    description: 'Potongan daging ayam besar tanpa lemak, dibakar arang batok kelapa dengan saus kacang creamy.',
    price: 45000,
    rating: 4.9,
    reviews: 189,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1689997122000-c94449288dd1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Satay
  },
  {
    name: 'Nasi Goreng Kampung',
    category: 'main',
    description: 'Nasi goreng tradisional dengan ikan teri medan, petai (opsional), dan telur bebek mata sapi.',
    price: 38000,
    rating: 4.8,
    reviews: 156,
    badge: null,
    image: 'https://images.unsplash.com/photo-1680675027408-7232d86cbc47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Nasi Goreng
  },
  {
    name: 'Gado-Gado Siram',
    category: 'appetizer',
    description: 'Sayuran organik rebus disiram bumbu kacang mede, disajikan dengan kerupuk udang.',
    price: 32000,
    rating: 4.7,
    reviews: 98,
    badge: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1707269561481-a4a0370a980a?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Salad/Gado-gado look
  },
  {
    name: 'Es Teler Sultan',
    category: 'beverage',
    description: 'Perpaduan alpukat mentega, kelapa muda, nangka, dan susu kental manis di atas serutan es.',
    price: 25000,
    rating: 4.9,
    reviews: 203,
    badge: 'Sweet',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800&auto=format&fit=crop' // Dessert drink
  },
  {
    name: 'Sop Buntut Bakar',
    category: 'main',
    description: 'Buntut sapi impor dibakar dengan bumbu kecap, disajikan dengan kuah kaldu sapi bening terpisah.',
    price: 95000,
    rating: 5.0,
    reviews: 112,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1681378128359-a5c2492a3535?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Meaty dish
  }
];

const filteredMenuItems = computed(() => {
  if (activeCategory.value === 'all') return menuItems;
  return menuItems.filter(item => item.category === activeCategory.value);
});

// --- Logic & Events ---

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToSection = (id) => {
  isMobileMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const whatsappBase = '6285183077289'; // Ganti dengan nomor asli

const handleReservation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik dengan design landing page restaurant ini. Bisa minta informasi lebih detail tentang paket dan harga untuk membuat landing page seperti ini?');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const viewDetail = (item) => {
  const msg = encodeURIComponent(`Halo! Saya tertarik dengan design landing page restaurant ini, khususnya bagian menu dan fitur-fitur yang ditampilkan. Bisa konsultasi lebih lanjut tentang customisasi design ini untuk bisnis saya?`);
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleVideo = () => {
  alert('Fitur video profile akan segera hadir!');
};
</script>

<style>
/* Pastikan font dimuat di index.html atau css global proyek Anda */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

/* Utilities Tambahan */
.font-serif {
  font-family: 'Playfair Display', serif;
}
.font-sans {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Transisi Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>