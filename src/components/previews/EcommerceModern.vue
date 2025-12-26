<template>
  <div class="font-sans antialiased bg-white text-zinc-900 selection:bg-lime-400 selection:text-black">
    
    <div class="bg-black text-white py-2 overflow-hidden whitespace-nowrap relative z-50">
      <div class="animate-marquee inline-block">
        <span class="mx-4 text-xs font-bold tracking-widest uppercase">Gratis Ongkir Seluruh Indonesia</span> •
        <span class="mx-4 text-xs font-bold tracking-widest uppercase">Diskon 20% Pengguna Baru</span> •
        <span class="mx-4 text-xs font-bold tracking-widest uppercase">Garansi 30 Hari Pengembalian</span> •
        <span class="mx-4 text-xs font-bold tracking-widest uppercase">Gratis Ongkir Seluruh Indonesia</span> •
        <span class="mx-4 text-xs font-bold tracking-widest uppercase">Diskon 20% Pengguna Baru</span> •
      </div>
    </div>

    <header 
      class="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-zinc-200 transition-all duration-300"
    >
      <div class="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button @click="isMobileMenuOpen = true" class="md:hidden p-2 -ml-2">
          <Icon icon="mdi:menu" class="text-2xl" />
        </button>

        <a href="#" class="flex items-center gap-1 group">
          <div class="font-black text-2xl tracking-tighter italic group-hover:text-lime-600 transition-colors">
            URBAN<span class="text-lime-500">PULSE</span>.
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm font-bold uppercase tracking-wide hover:text-lime-600 hover:underline underline-offset-4 transition-all">
            {{ link.text }}
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <button class="hidden sm:block hover:text-lime-600 transition-colors">
            <Icon icon="mdi:magnify" class="text-2xl" />
          </button>
          <button class="relative hover:text-lime-600 transition-colors group">
            <Icon icon="mdi:cart-outline" class="text-2xl" />
            <span class="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 text-black text-[10px] font-bold flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">2</span>
          </button>
          <button @click="handleConsultation" class="hidden md:flex bg-black text-white px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-lime-400 hover:text-black transition-colors items-center gap-2">
            Buat Toko
            <Icon icon="mdi:arrow-right" />
          </button>
        </div>
      </div>
    </header>

    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden" @click="isMobileMenuOpen = false"></div>
    <div class="fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 md:hidden" :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="p-6 h-full flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-8">
            <span class="font-black text-xl">MENU</span>
            <button @click="isMobileMenuOpen = false"><Icon icon="mdi:close" class="text-2xl" /></button>
          </div>
          <nav class="flex flex-col gap-6">
             <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-lg font-bold uppercase tracking-wide border-b border-zinc-100 pb-2">
              {{ link.text }}
            </a>
          </nav>
        </div>
        <button @click="handleConsultation" class="w-full bg-lime-400 text-black py-4 font-bold uppercase tracking-wider">
          Konsultasi Website
        </button>
      </div>
    </div>

    <section id="home" class="relative bg-zinc-100 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2 z-10 relative">
          <div class="inline-block bg-black text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest animate-pulse">
            New Collection 2025
          </div>
          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-zinc-900">
            WEAR <br/>
            YOUR <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500">ATTITUDE</span>
          </h1>
          <p class="text-lg text-zinc-600 max-w-md mb-10 font-medium">
            Koleksi streetwear premium dengan desain eksklusif. Dibuat untuk mereka yang berani tampil beda.
          </p>
          <div class="flex gap-4">
             <button @click="scrollToSection('products')" class="px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-lg shadow-black/20">
              Belanja Sekarang
            </button>
            <button @click="handleConsultation" class="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
              Buat Web Ini
            </button>
          </div>
        </div>
        
        <div class="md:w-1/2 relative">
           <div class="absolute inset-0 bg-lime-300 rounded-full blur-[100px] opacity-40 transform translate-x-1/4"></div>
           <img 
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop" 
            alt="Hero Model" 
            class="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 transform rotate-2 shadow-2xl border-4 border-white"
          >
        </div>
      </div>
    </section>

    <section id="features" class="border-y border-zinc-200">
      <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
        <div v-for="(feat, idx) in features" :key="idx" class="p-10 group hover:bg-zinc-50 transition-colors text-center md:text-left">
          <Icon :icon="feat.icon" class="text-4xl mb-4 text-zinc-400 group-hover:text-lime-600 transition-colors" />
          <h3 class="text-xl font-black uppercase tracking-tight mb-2">{{ feat.title }}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>
    </section>

    <section id="products" class="py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">Selected <span class="text-lime-500">Drops</span></h2>
            <p class="text-zinc-500 font-medium">Produk terlaris minggu ini.</p>
          </div>
          <a href="#" class="hidden md:flex items-center gap-2 font-bold uppercase tracking-wide border-b-2 border-black pb-1 hover:text-lime-600 hover:border-lime-600 transition-colors">
            Lihat Semua <Icon icon="mdi:arrow-right" />
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          <div v-for="(product, index) in products" :key="index" class="group relative cursor-pointer">
            <div class="aspect-[3/4] bg-zinc-100 relative overflow-hidden mb-4">
              <img :src="product.image" class="w-full h-full object-cover" alt="Product Front">
              <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div v-if="product.badge" class="absolute top-2 left-2 bg-lime-400 text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
                {{ product.badge }}
              </div>

              <button 
                @click.stop="handleProductInquiry(product)"
                class="absolute bottom-0 left-0 w-full bg-black text-white py-3 font-bold uppercase text-sm tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-lime-500 hover:text-black"
              >
                <Icon icon="mdi:whatsapp" /> Tanya Stok
              </button>
            </div>

            <div>
              <h3 class="text-lg font-bold uppercase tracking-tight mb-1 group-hover:text-lime-600 transition-colors">{{ product.name }}</h3>
              <p class="text-sm text-zinc-500 mb-2">{{ product.category }}</p>
              <div class="flex items-center gap-3">
                <span class="font-black text-lg">Rp {{ product.price.toLocaleString('id-ID') }}</span>
                <span v-if="product.originalPrice" class="text-sm text-zinc-400 line-through decoration-1">
                  Rp {{ product.originalPrice.toLocaleString('id-ID') }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center md:hidden">
           <button class="w-full py-4 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
             Lihat Semua Produk
           </button>
        </div>
      </div>
    </section>

    <section class="py-24 bg-black text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">
          Summer <span class="text-lime-400 stroke-text">Sale</span>
        </h2>
        <p class="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
          Diskon hingga 50% untuk item terpilih. Jangan lewatkan kesempatan untuk upgrade style Anda.
        </p>
        <button @click="handleConsultation" class="bg-lime-400 text-black px-10 py-5 font-black uppercase text-xl tracking-widest hover:bg-white transition-colors transform hover:-translate-y-1 shadow-xl shadow-lime-900/50">
          Get Access
        </button>
      </div>
    </section>

    <section id="contact" class="py-24 bg-zinc-50 border-t border-zinc-200">
      <div class="container mx-auto px-6">
        <div class="bg-white border border-zinc-200 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">
           <div class="absolute -right-20 -top-20 w-64 h-64 bg-lime-100 rounded-full blur-3xl opacity-50 group-hover:bg-lime-200 transition-colors"></div>
           
           <div class="relative z-10 max-w-3xl mx-auto">
             <Icon icon="mdi:store-cog" class="text-6xl mb-6 text-zinc-300" />
             <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-zinc-900">
               Ingin Toko Online Seperti Ini?
             </h2>
             <p class="text-lg text-zinc-600 mb-10 leading-relaxed">
               Kami membangun website e-commerce yang cepat, responsif, dan didesain untuk konversi penjualan. Jangan biarkan bisnis Anda terlihat biasa saja.
             </p>
             <div class="flex flex-col sm:flex-row justify-center gap-4">
               <button 
                 @click="handleConsultation"
                 class="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-lime-500 hover:text-black transition-all"
               >
                 <Icon icon="mdi:whatsapp" class="text-xl" />
                 Konsultasi Gratis
               </button>
               <button class="px-8 py-4 border-2 border-zinc-200 text-zinc-600 font-bold uppercase tracking-wider hover:border-black hover:text-black transition-colors">
                 Lihat Paket Harga
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>

    <footer class="bg-black text-white pt-20 pb-10 border-t border-zinc-800">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="md:col-span-2">
            <h3 class="text-3xl font-black italic tracking-tighter mb-6">URBAN<span class="text-lime-500">PULSE</span>.</h3>
            <p class="text-zinc-500 max-w-sm mb-8">
              Platform fashion streetwear terdepan. Kami mengkurasi style terbaik untuk Anda yang berani tampil beda.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all"><Icon icon="mdi:instagram" /></a>
              <a href="#" class="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all"><Icon icon="mdi:tiktok" /></a>
              <a href="#" class="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all"><Icon icon="mdi:youtube" /></a>
            </div>
          </div>
          
          <div>
            <h4 class="font-bold uppercase tracking-wider mb-6 text-zinc-400">Shop</h4>
            <ul class="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Hoodies & Sweatshirts</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" class="hover:text-white transition-colors text-lime-400">Sale</a></li>
            </ul>
          </div>

          <div>
             <h4 class="font-bold uppercase tracking-wider mb-6 text-zinc-400">Support</h4>
            <ul class="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" class="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs uppercase tracking-widest">
          <p>&copy; 2025 UrbanPulse Store. Built by Landingo.</p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white">Privacy</a>
            <a href="#" class="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const navLinks = [
  { text: 'New Drops', href: '#products' },
  { text: 'Men', href: '#products' },
  { text: 'Women', href: '#products' },
  { text: 'Accessories', href: '#products' },
];

const features = [
  {
    icon: 'mdi:truck-fast-outline',
    title: 'Fast Shipping',
    desc: 'Pengiriman kilat ke seluruh kota besar di Indonesia dengan tracking real-time.'
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Authentic Gear',
    desc: 'Jaminan 100% produk original atau uang kembali 2x lipat.'
  },
  {
    icon: 'mdi:headphones',
    title: '24/7 Support',
    desc: 'Tim support kami siap membantu pertanyaan ukuran dan styling kapan saja.'
  }
];

const products = [
  {
    name: 'Oversized Tee Black',
    category: 'T-Shirts',
    price: 249000,
    originalPrice: null,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Urban Cargo Pants',
    category: 'Bottoms',
    price: 499000,
    originalPrice: 650000,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Reflective Hoodie',
    category: 'Outerwear',
    price: 599000,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Tech Runner V2',
    category: 'Footwear',
    price: 1299000,
    originalPrice: null,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop'
  }
];

// Logic
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const whatsappBase = '6285183077289';

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik membuat website E-Commerce dengan gaya "Urban Streetwear" seperti ini. Bisa diskusi harga?');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleProductInquiry = (product) => {
  // Karena ini landing page jasa, kita arahkan ke jasa pembuatan web, bukan beli baju
  const msg = encodeURIComponent(`Halo! Saya suka tampilan produk "${product.name}" di demo website Anda. Saya ingin fitur showcase produk seperti itu di website saya.`);
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style scoped>
/* Custom Utilities */
.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Stroke Text Effect for "SALE" */
.stroke-text {
  -webkit-text-stroke: 1px currentColor;
  color: transparent;
}
</style>