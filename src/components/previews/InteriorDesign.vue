<template>
  <div class="min-h-screen bg-[#FAFAF8] text-[#1A1A1A] font-sans selection:bg-[#9D8461] selection:text-white">
    
    <!-- Navigation -->
    <header 
      :class="[
        'fixed w-full z-50 transition-all duration-500', 
        isScrolled ? 'bg-[#FAFAF8]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      ]"
    >
      <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-2xl font-serif tracking-widest uppercase flex items-center gap-2" :class="isScrolled ? 'text-[#1A1A1A]' : 'text-white'">
          Lumina<span class="text-[#9D8461]">.</span>
        </a>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase font-medium" :class="isScrolled ? 'text-[#1A1A1A]' : 'text-white/90'">
          <a href="#about" class="hover:text-[#9D8461] transition-colors">Philosophy</a>
          <a href="#services" class="hover:text-[#9D8461] transition-colors">Services</a>
          <a href="#portfolio" class="hover:text-[#9D8461] transition-colors">Portfolio</a>
          <a href="#process" class="hover:text-[#9D8461] transition-colors">Process</a>
        </nav>

        <!-- CTA Button -->
        <button 
          @click="handleConsultation" 
          :class="[
            'hidden md:block px-6 py-2.5 transition-colors text-sm uppercase tracking-widest border',
            isScrolled ? 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1A1A1A]'
          ]"
        >
          Inquire
        </button>

        <!-- Mobile Toggle -->
        <button class="md:hidden text-2xl transition-colors" :class="isScrolled ? 'text-[#1A1A1A]' : 'text-white'" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-[#FAFAF8] border-t border-gray-100 shadow-xl p-8 flex flex-col gap-6 md:hidden">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-xl font-serif text-[#1A1A1A] hover:text-[#9D8461]">
            {{ link.text }}
          </a>
          <button @click="handleConsultation" class="w-full py-4 mt-4 bg-[#1A1A1A] text-white uppercase tracking-widest text-sm hover:bg-[#9D8461] transition-colors">
            Book Consultation
          </button>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- High Quality Background Image -->
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&auto=format&fit=crop" alt="Luxury Interior Design" class="w-full h-full object-cover origin-center transform scale-105" ref="heroBg">
        <!-- Soft gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white px-6 mt-16 max-w-5xl mx-auto" ref="heroContent">
        <span class="block text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-[#E6E2DB]">Design Studio & Architecture</span>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1]">
          Crafting Timeless <br/>
          <span class="italic font-light text-[#E6E2DB]">Sanctuaries</span>.
        </h1>
        <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Mengubah ruang fisik menjadi cerminan gaya hidup dan kepribadian Anda melalui estetika murni dan fungsionalitas elegan.
        </p>
        <button @click="scrollToSection('about')" class="mt-8 text-white/60 hover:text-white flex flex-col items-center gap-2 mx-auto transition-colors">
          <span class="text-xs tracking-widest uppercase">Discover More</span>
          <Icon icon="mdi:chevron-down" class="text-2xl animate-bounce" />
        </button>
      </div>
    </section>

    <!-- About / Philosophy Section -->
    <section id="about" class="py-24 md:py-32 bg-[#FAFAF8]">
      <div class="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        <div class="lg:w-1/2 section-fade">
          <h2 class="text-4xl md:text-5xl font-serif mb-8 leading-tight">Space is the breath of art. We design your lifestyle.</h2>
          <div class="w-12 h-0.5 bg-[#9D8461] mb-8"></div>
          <p class="text-[#5A5753] text-lg leading-relaxed mb-6 font-light">
            Di Lumina, kami percaya bahwa setiap ruang memiliki cerita yang menunggu untuk diungkapkan. Pendekatan kami merupakan perpaduan antara estetika kontemporer dan kehangatan material alami.
          </p>
          <p class="text-[#5A5753] text-lg leading-relaxed mb-8 font-light">
            Kami menciptakan harmoni antara detail presisi, pencahayaan, dan tekstur untuk menghadirkan ruang yang tidak hanya indah dipandang, namun memberikan kedamaian untuk dihuni selamanya.
          </p>
          <a href="#services" class="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#9D8461] transition-colors font-medium tracking-widest uppercase text-sm border-b border-[#1A1A1A] hover:border-[#9D8461] pb-1">
            Explore Our Services <Icon icon="mdi:arrow-right" class="text-lg" />
          </a>
        </div>
        <div class="lg:w-1/2 grid grid-cols-2 gap-4 section-fade">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop" alt="Interior Detail 1" class="w-full h-[400px] object-cover rounded-sm mt-12 hover:-translate-y-2 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop" alt="Interior Detail 2" class="w-full h-[400px] object-cover rounded-sm hover:-translate-y-2 transition-transform duration-500 delay-100">
        </div>
      </div>
    </section>

    <!-- Numbers / Highlight -->
    <section class="py-20 bg-[#1A1A1A] text-[#FAFAF8]">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-gray-800">
          <div v-for="(stat, idx) in stats" :key="idx" class="px-4 stat-item">
            <div class="text-5xl md:text-6xl font-serif text-[#9D8461] mb-4">{{ stat.number }}</div>
            <div class="text-xs tracking-widest uppercase text-gray-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 md:py-32 bg-[#E6E2DB]">
      <div class="container mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-20 section-fade">
          <span class="text-[#9D8461] text-sm tracking-[0.2em] uppercase block mb-4">Expertise</span>
          <h2 class="text-4xl md:text-5xl font-serif">Signature Services</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="(service, idx) in services" :key="idx" class="bg-[#FAFAF8] p-10 hover:shadow-xl transition-all duration-500 group section-fade">
            <Icon :icon="service.icon" class="text-4xl text-[#9D8461] mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 class="text-2xl font-serif mb-4">{{ service.title }}</h3>
            <p class="text-[#5A5753] leading-relaxed font-light mb-6">{{ service.desc }}</p>
            <div class="w-full h-[1px] bg-gray-200 group-hover:bg-[#9D8461] transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery -->
    <section id="portfolio" class="py-24 md:py-32 bg-[#FAFAF8]">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 section-fade">
          <div>
            <span class="text-[#9D8461] text-sm tracking-[0.2em] uppercase block mb-4">Selected Works</span>
            <h2 class="text-4xl md:text-5xl font-serif leading-tight">A Curation of <br/>Elegant Spaces</h2>
          </div>
          <button @click="handleConsultation" class="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase font-medium hover:text-[#9D8461] transition-colors border-b border-[#1A1A1A] pb-1">
            View All Projects <Icon icon="mdi:arrow-right" />
          </button>
        </div>

        <!-- Masonry-like Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(item, idx) in portfolio" :key="idx" :class="['group relative overflow-hidden cursor-pointer section-fade', item.vertical ? 'md:row-span-2' : '']">
            <div class="relative w-full h-[400px] md:h-full min-h-[400px] overflow-hidden">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span class="text-white/80 text-xs tracking-[0.2em] uppercase mb-2 block">{{ item.category }}</span>
              <h3 class="text-2xl font-serif text-white">{{ item.title }}</h3>
            </div>
          </div>
        </div>
        
        <button @click="handleConsultation" class="md:hidden mt-12 w-full py-4 border border-[#1A1A1A] text-sm tracking-widest uppercase font-medium">
          View All Projects
        </button>
      </div>
    </section>

    <!-- Process Flow -->
    <section id="process" class="py-24 bg-[#1A1A1A] text-[#FAFAF8]">
      <div class="container mx-auto px-6 md:px-12">
        <h2 class="text-4xl md:text-5xl font-serif text-center mb-20 section-fade">Our Design Process</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <!-- Desktop connecting line -->
          <div class="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gray-800 z-0"></div>
          
          <div v-for="(step, idx) in process" :key="idx" class="relative z-10 text-center section-fade group">
            <div class="w-20 h-20 mx-auto bg-[#1A1A1A] border border-gray-800 rounded-full flex items-center justify-center text-2xl font-serif mb-6 text-[#9D8461] transition-transform duration-300 group-hover:scale-110 group-hover:border-[#9D8461] group-hover:bg-[#9D8461]/10">
              {{ '0' + (idx + 1) }}
            </div>
            <h3 class="text-xl font-serif mb-4">{{ step.title }}</h3>
            <p class="text-gray-400 font-light text-sm">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / Contact -->
    <section class="py-32 bg-[#E6E2DB] relative">
      <div class="container mx-auto px-6 md:px-12 text-center max-w-3xl border border-[#9D8461]/30 bg-[#FAFAF8] p-12 md:p-20 shadow-xl section-fade relative z-10">
        <Icon icon="mdi:chandelier" class="text-5xl text-[#9D8461] mx-auto mb-6" />
        <h2 class="text-4xl md:text-6xl font-serif mb-6 leading-tight">Ready to Elevate <br/>Your Space?</h2>
        <p class="text-[#5A5753] text-lg mb-10 font-light">
          Mari diskusikan ide-ide Anda dengan lead designer kami dan lihat bagaimana kami bisa mentransformasi hunian atau ruang komersial Anda.
        </p>
        <button 
          @click="handleConsultation"
          class="inline-block bg-[#1A1A1A] text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#9D8461] transition-colors"
        >
          Schedule a Consultation
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#1A1A1A] pt-24 pb-10 text-gray-400">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16 mb-8">
          <div class="md:col-span-1">
            <h3 class="text-3xl font-serif text-white mb-6 uppercase tracking-widest">Lumina<span class="text-[#9D8461]">.</span></h3>
            <p class="font-light text-sm leading-relaxed">
              Premium interior design studio focusing on minimalist luxury and timeless spaces.
            </p>
          </div>
          
          <div>
            <h4 class="text-white uppercase tracking-widest text-sm mb-6">Studios</h4>
            <ul class="space-y-4 font-light text-sm">
              <li>Jakarta Selatan</li>
              <li>Jl. Senopati Raya No. 12</li>
              <li>Indonesia 12190</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white uppercase tracking-widest text-sm mb-6">Inquiries</h4>
            <ul class="space-y-4 font-light text-sm">
              <li>hello@luminainterior.com</li>
              <li>+62 851 8307 7289</li>
              <li>Open: 09.00 - 18.00</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white uppercase tracking-widest text-sm mb-6">Social</h4>
            <ul class="space-y-4 font-light text-sm">
              <li><a href="#" class="hover:text-[#9D8461] transition-colors">Instagram</a></li>
              <li><a href="#" class="hover:text-[#9D8461] transition-colors">Pinterest</a></li>
              <li><a href="#" class="hover:text-[#9D8461] transition-colors">Houzz</a></li>
            </ul>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide">
          <p>&copy; 2025 Lumina Interior Design. All rights reserved.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const heroBg = ref(null);
const heroContent = ref(null);

const navLinks = [
  { text: 'Philosophy', href: '#about' },
  { text: 'Expertise', href: '#services' },
  { text: 'Portfolio', href: '#portfolio' },
  { text: 'Our Process', href: '#process' }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '8', label: 'Years Experience' },
  { number: '12', label: 'Design Awards' },
  { number: '100%', label: 'Client Satisfaction' }
];

const services = [
  {
    icon: 'mdi:home-city-outline',
    title: 'Residential Design',
    desc: 'Desain ruang tinggal yang mencerminkan kepribadian Anda. Mulai dari apartemen hingga rumah mewah.'
  },
  {
    icon: 'mdi:storefront-outline',
    title: 'Commercial Spaces',
    desc: 'Interior kafe, restoran, dan butik yang mengundang interaksi dan meninggalkan kesan tak terlupakan bagi pengunjung.'
  },
  {
    icon: 'mdi:sofa-outline',
    title: 'Custom Furniture',
    desc: 'Furnitur yang dirancang dan diproduksi khusus (built-in/loose) untuk memastikan proporsi tepat di ruang Anda.'
  }
];

const portfolio = [
  {
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&auto=format&fit=crop',
    title: 'Modern Minimalist Penthouse',
    category: 'Residential',
    vertical: true
  },
  {
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&auto=format&fit=crop',
    title: 'The Artisan Bakery',
    category: 'Commercial',
    vertical: false
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop',
    title: 'Serenity Master Suite',
    category: 'Residential',
    vertical: false
  }
];

const process = [
  { title: 'Discovery', desc: 'Konsultasi awal untuk memahami visi, kebutuhan ruang, dan anggaran Anda.' },
  { title: 'Concept', desc: 'Pembuatan moodboard, layout plan, dan visualisasi 3D realistis.' },
  { title: 'Development', desc: 'Pemilihan material akhir, pembuatan gambar kerja, dan sourcing.' },
  { title: 'Execution', desc: 'Proses fit-out yang diawasi ketat diikuti dengan penataan interior.' }
];

// Logic
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollToSection = (id) => {
  isMobileMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleConsultation = () => {
  const whatsappBase = '6285183077289';
  const msg = encodeURIComponent('Halo Lumina Interior! Saya tertarik untuk konsultasi mengenai desain interior rumah/ruang usaha saya.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Initial Hero Parallax & Fade In
  gsap.to(heroBg.value, {
    scale: 1,
    duration: 3,
    ease: "power2.out"
  });

  gsap.from(heroContent.value, {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out"
  });

  // Reveal Animations on Scroll
  const fadeElements = document.querySelectorAll('.section-fade');
  fadeElements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Stat Counter Animation
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach((el, index) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out"
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
