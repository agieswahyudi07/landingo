<template>
  <div class="font-sans text-stone-900 bg-white selection:bg-stone-900 selection:text-white">
    
    <div class="bg-stone-900 text-white text-[10px] md:text-xs py-2 text-center uppercase tracking-[0.2em] font-medium">
      Gratis Ongkir Seluruh Indonesia • Garansi 30 Hari Pengembalian
    </div>

    <header 
      class="fixed w-full top-0 z-50 transition-all duration-500"
      :class="isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'"
    >
      <div class="container mx-auto px-6 grid grid-cols-3 items-center">
        <div class="flex items-center">
          <button @click="isMobileMenuOpen = true" class="md:hidden">
            <Icon icon="mdi:menu" class="text-2xl" />
          </button>
          <nav class="hidden md:flex gap-6 text-sm font-medium tracking-wide">
            <a href="#new" class="hover:underline underline-offset-4 decoration-1">NEW ARRIVALS</a>
            <a href="#collection" class="hover:underline underline-offset-4 decoration-1">COLLECTION</a>
            <a href="#lookbook" class="hover:underline underline-offset-4 decoration-1">CAMPAIGN</a>
          </nav>
        </div>

        <div class="text-center">
          <a href="#" class="font-serif text-3xl font-bold tracking-tight">VELOUR<span class="text-stone-400">.</span></a>
        </div>

        <div class="flex items-center justify-end gap-5">
          <button class="hidden sm:block hover:text-stone-500 transition-colors">
            <Icon icon="mdi:magnify" class="text-xl" />
          </button>
          <button class="relative hover:text-stone-500 transition-colors">
            <Icon icon="mdi:shopping-outline" class="text-xl" />
            <span class="absolute -top-1 -right-2 bg-stone-900 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </button>
        </div>
      </div>
    </header>

    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60] bg-white transform transition-transform duration-300 flex flex-col">
      <div class="flex justify-between items-center p-6 border-b border-stone-100">
        <span class="font-serif text-2xl font-bold">VELOUR.</span>
        <button @click="isMobileMenuOpen = false"><Icon icon="mdi:close" class="text-2xl" /></button>
      </div>
      <nav class="flex flex-col p-6 gap-6 text-xl font-serif">
        <a href="#new" @click="isMobileMenuOpen = false">New Arrivals</a>
        <a href="#collection" @click="isMobileMenuOpen = false">Collections</a>
        <a href="#lookbook" @click="isMobileMenuOpen = false">Lookbook</a>
        <button @click="handleConsultation" class="mt-8 py-4 bg-stone-900 text-white text-base font-sans uppercase tracking-widest">
          Konsultasi Bisnis
        </button>
      </nav>
    </div>

    <section id="home" class="relative h-screen min-h-[700px] w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
        class="absolute inset-0 w-full h-full object-cover object-center"
        alt="Fashion Editorial"
      />
      <div class="absolute inset-0 bg-black/10"></div>
      
      <div class="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <p class="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">Spring / Summer 2025</p>
        <h1 class="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 animate-fade-in-up delay-100 leading-none">
          TIMELESS <br/> ELEGANCE
        </h1>
        <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
          <button @click="scrollToSection('new')" class="bg-white text-stone-900 px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-stone-100 transition-colors">
            Shop Collection
          </button>
          <button @click="handleConsultation" class="border border-white text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-colors">
            Build This Site
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(cat, idx) in categories" :key="idx" class="group relative aspect-[3/4] overflow-hidden cursor-pointer">
            <img :src="cat.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <h3 class="font-serif text-3xl italic mb-2">{{ cat.name }}</h3>
              <span class="text-xs font-bold uppercase tracking-widest underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">Discover</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="new" class="py-24 bg-stone-50">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="font-serif text-4xl text-stone-900 mb-2">New Arrivals</h2>
            <p class="text-stone-500 text-sm tracking-wide">Curated pieces for the modern individual.</p>
          </div>
          <a href="#" class="hidden md:inline-block text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1">View All</a>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <div v-for="(product, idx) in products" :key="idx" class="group cursor-pointer">
            <div class="relative aspect-[3/4] bg-stone-200 mb-4 overflow-hidden">
              <img :src="product.image1" class="absolute inset-0 w-full h-full object-cover z-10" />
              <img :src="product.image2" class="absolute inset-0 w-full h-full object-cover z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span v-if="product.tag" class="absolute top-2 left-2 z-30 bg-white text-stone-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                {{ product.tag }}
              </span>

              <button 
                @click.stop="handleProductInquiry(product)"
                class="absolute bottom-0 left-0 w-full bg-stone-900 text-white py-3 text-xs uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30"
              >
                + Quick Add
              </button>
            </div>
            
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-medium text-stone-900 text-base mb-1">{{ product.name }}</h3>
                <p class="text-stone-500 text-xs">{{ product.category }}</p>
              </div>
              <span class="font-serif italic">Rp{{ (product.price / 1000).toFixed(0) }}k</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="lookbook" class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 relative">
             <div class="relative z-10">
               <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop" class="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
             </div>
             <div class="absolute -bottom-10 -right-10 w-full h-full border border-stone-200 -z-0 hidden lg:block"></div>
          </div>
          
          <div class="lg:w-1/2 text-center lg:text-left">
            <span class="text-stone-400 font-serif italic text-2xl mb-4 block">The Campaign</span>
            <h2 class="text-4xl lg:text-6xl font-serif leading-tight mb-8">
              Redefining <br/> Modern Luxury
            </h2>
            <p class="text-stone-600 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              Koleksi ini terinspirasi dari arsitektur brutalism dan kelembutan alam. Menggabungkan struktur tegas dengan material organik seperti linen, sutra, dan katun premium.
            </p>
            <div class="space-y-6">
              <div class="flex items-center gap-4 group cursor-pointer" @click="handleProductInquiry({name: 'Oversized Blazer'})">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200&auto=format&fit=crop" class="w-16 h-16 object-cover" />
                <div class="text-left">
                  <p class="font-bold text-sm uppercase tracking-wider group-hover:text-stone-500 transition-colors">The Oversized Blazer</p>
                  <p class="text-xs text-stone-400">Rp 1.299.000</p>
                </div>
              </div>
              <div class="flex items-center gap-4 group cursor-pointer" @click="handleProductInquiry({name: 'Pleated Trousers'})">
                <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200&auto=format&fit=crop" class="w-16 h-16 object-cover" />
                <div class="text-left">
                  <p class="font-bold text-sm uppercase tracking-wider group-hover:text-stone-500 transition-colors">Pleated Trousers</p>
                  <p class="text-xs text-stone-400">Rp 899.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-stone-100 bg-stone-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          <div class="py-12 px-6 text-center">
            <Icon icon="mdi:truck-outline" class="text-3xl mb-4 mx-auto text-stone-400" />
            <h3 class="font-serif text-lg mb-2">Global Shipping</h3>
            <p class="text-xs text-stone-500 uppercase tracking-wider">Free on orders over $200</p>
          </div>
          <div class="py-12 px-6 text-center">
            <Icon icon="mdi:refresh" class="text-3xl mb-4 mx-auto text-stone-400" />
            <h3 class="font-serif text-lg mb-2">Easy Returns</h3>
            <p class="text-xs text-stone-500 uppercase tracking-wider">30 Days Guarantee</p>
          </div>
          <div class="py-12 px-6 text-center">
            <Icon icon="mdi:shield-check-outline" class="text-3xl mb-4 mx-auto text-stone-400" />
            <h3 class="font-serif text-lg mb-2">Secure Payment</h3>
            <p class="text-xs text-stone-500 uppercase tracking-wider">100% Secure Checkout</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-stone-900 text-white text-center">
      <div class="container mx-auto px-6 max-w-2xl">
        <span class="text-stone-400 font-serif italic text-xl mb-4 block">For Business Owners</span>
        <h2 class="text-3xl md:text-5xl font-serif mb-6">Ingin Website Fashion Seperti Ini?</h2>
        <p class="text-stone-300 mb-10 leading-relaxed font-light">
          Tingkatkan brand fashion Anda dengan website yang estetis, cepat, dan fungsional. Kami membangun pengalaman belanja digital yang premium.
        </p>
        <button 
          @click="handleConsultation"
          class="bg-white text-stone-900 px-10 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-stone-200 transition-colors"
        >
          Mulai Projek Anda
        </button>
      </div>
    </section>

    <footer class="bg-white pt-20 pb-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="md:col-span-1">
            <a href="#" class="font-serif text-2xl font-bold tracking-tight block mb-6">VELOUR.</a>
            <div class="flex gap-4">
              <a href="#" class="text-stone-400 hover:text-stone-900"><Icon icon="mdi:instagram" /></a>
              <a href="#" class="text-stone-400 hover:text-stone-900"><Icon icon="mdi:pinterest" /></a>
              <a href="#" class="text-stone-400 hover:text-stone-900"><Icon icon="mdi:twitter" /></a>
            </div>
          </div>
          
          <div>
            <h4 class="font-bold text-xs uppercase tracking-widest mb-6">Shop</h4>
            <ul class="space-y-4 text-sm text-stone-500">
              <li><a href="#" class="hover:text-stone-900 hover:underline">New Arrivals</a></li>
              <li><a href="#" class="hover:text-stone-900 hover:underline">Best Sellers</a></li>
              <li><a href="#" class="hover:text-stone-900 hover:underline">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-xs uppercase tracking-widest mb-6">Care</h4>
            <ul class="space-y-4 text-sm text-stone-500">
              <li><a href="#" class="hover:text-stone-900 hover:underline">Contact Us</a></li>
              <li><a href="#" class="hover:text-stone-900 hover:underline">Shipping & Returns</a></li>
              <li><a href="#" class="hover:text-stone-900 hover:underline">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-xs uppercase tracking-widest mb-6">Newsletter</h4>
            <p class="text-sm text-stone-500 mb-4">Subscribe for exclusive offers and news.</p>
            <div class="flex border-b border-stone-300 pb-2">
              <input type="email" placeholder="Email Address" class="w-full outline-none text-stone-900 placeholder-stone-400 text-sm" />
              <button class="uppercase text-xs font-bold text-stone-900 hover:text-stone-500">Join</button>
            </div>
          </div>
        </div>
        
        <div class="text-center text-[10px] text-stone-400 uppercase tracking-widest">
          &copy; 2025 Velour Studio. Built by Landingo.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const categories = [
  { name: 'Woman', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Man', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
];

const products = [
  {
    name: 'Silk Blend Shirt',
    category: 'Tops',
    price: 899000,
    tag: 'New',
    image1: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1589465885857-44edb59ef9f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Structured Coat',
    category: 'Outerwear',
    price: 2499000,
    tag: null,
    image1: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Minimalist Tote',
    category: 'Bags',
    price: 1299000,
    tag: 'Bestseller',
    image1: 'https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image2: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Linen Trousers',
    category: 'Bottoms',
    price: 799000,
    tag: null,
    image1: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=800&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1584370848010-d7cc31f2c75a?q=80&w=800&auto=format&fit=crop'
  }
];

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
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const whatsappBase = '6285183077289';

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya ingin membuat website fashion dengan gaya editorial minimalis seperti "Velour". Bisa diskusi harga?');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleProductInquiry = (product) => {
  const msg = encodeURIComponent(`Halo, saya tertarik dengan design product page untuk item "${product.name}". Saya ingin website saya punya fitur Quick Add seperti ini.`);
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style>
/* Simulate fonts since we can't load Google Fonts directly in this block without HTML header */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}
.font-serif {
  font-family: 'Playfair Display', serif;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
</style>