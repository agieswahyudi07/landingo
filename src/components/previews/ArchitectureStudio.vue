<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#ff4500] selection:text-white overflow-x-hidden">
    
    <!-- Navigation -->
    <header class="fixed w-full z-50 transition-all duration-300 mix-blend-difference py-6 top-0">
      <div class="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-3xl font-black tracking-tighter uppercase flex items-center gap-1 group">
          ARCH<span class="text-[#ff4500] group-hover:text-white transition-colors">BOLD</span>
        </a>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#about" class="hover:text-[#ff4500] transition-colors">Manifesto</a>
          <a href="#projects" class="hover:text-[#ff4500] transition-colors">Projects</a>
          <a href="#services" class="hover:text-[#ff4500] transition-colors">Expertise</a>
          <a href="#contact" class="hover:text-[#ff4500] transition-colors">Contact</a>
        </nav>

        <!-- CTA Button -->
        <button 
          @click="handleConsultation" 
          class="hidden md:block px-6 py-3 bg-[#ff4500] hover:bg-white text-white hover:text-[#0a0a0a] transition-colors text-xs font-bold uppercase tracking-[0.2em]"
        >
          Start Project
        </button>

        <!-- Mobile Toggle -->
        <button class="md:hidden text-3xl text-white" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-[#111] border-t border-gray-800 p-8 flex flex-col gap-6 md:hidden">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-3xl font-black uppercase tracking-tighter text-white hover:text-[#ff4500]">
            {{ link.text }}
          </a>
          <button @click="handleConsultation" class="w-full py-4 mt-8 bg-[#ff4500] text-white uppercase font-black tracking-[0.2em] hover:bg-white hover:text-[#0a0a0a] transition-colors">
            Start Project
          </button>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section class="relative h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 overflow-hidden mx-auto max-w-[1920px]">
      <!-- Background Video/Image Concept -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&auto=format&fit=crop" 
          alt="Brutalist Architecture" 
          class="w-full h-full object-cover origin-bottom transform scale-105" 
          ref="heroBg"
        >
        <!-- Gradients for text legibility and edge blending -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/30"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 w-full" ref="heroContent">
        <div class="flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <span class="inline-block px-3 py-1 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-[#ff4500]">Est. 2025 // Architecture Studio</span>
            <h1 class="text-6xl md:text-[8rem] lg:text-[11rem] font-black leading-[0.85] tracking-tighter uppercase" style="text-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              Shape<br/> 
              <span class="text-transparent stroke-text bg-clip-text bg-gradient-to-br from-white to-gray-500">The</span> Space
            </h1>
          </div>
          <div class="md:text-right max-w-sm pb-4">
            <p class="text-gray-400 font-medium leading-relaxed mb-6">
              Kami mendesain fasad, interior, dan ruang komersial dengan pendekatan utilitarian. Fungsi mendikte bentuk, material menceritakan waktu.
            </p>
            <button @click="scrollToSection('about')" class="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#ff4500] hover:border-[#ff4500] transition-colors md:ml-auto">
              <Icon icon="mdi:arrow-down" class="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Marquee Banner -->
    <div class="bg-[#ff4500] text-[#0a0a0a] py-4 md:py-6 overflow-hidden border-y border-white/10 relative z-20">
      <div class="animate-marquee whitespace-nowrap flex items-center">
        <span class="text-2xl md:text-4xl font-black uppercase tracking-tighter mx-8">Radical Architecture</span>
        <Icon icon="mdi:asterisk" class="text-xl mx-4" />
        <span class="text-2xl md:text-4xl font-black uppercase tracking-tighter mx-8">Industrial Interior</span>
        <Icon icon="mdi:asterisk" class="text-xl mx-4" />
        <span class="text-2xl md:text-4xl font-black uppercase tracking-tighter mx-8">Urban Planning</span>
        <Icon icon="mdi:asterisk" class="text-xl mx-4" />
        <span class="text-2xl md:text-4xl font-black uppercase tracking-tighter mx-8">Radical Architecture</span>
        <Icon icon="mdi:asterisk" class="text-xl mx-4" />
        <span class="text-2xl md:text-4xl font-black uppercase tracking-tighter mx-8">Industrial Interior</span>
        <Icon icon="mdi:asterisk" class="text-xl mx-4" />
      </div>
    </div>

    <!-- About Manifesto -->
    <section id="about" class="py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a] relative">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto text-center section-fade">
          <Icon icon="mdi:format-quote-open" class="text-6xl text-[#ff4500] mx-auto mb-10 opacity-50" />
          <h2 class="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-12">
            Kami tidak mendekorasi. <br/> Kami <span class="text-[#ff4500]">membangun struktur</span> yang memancarkan kejujuran material.
          </h2>
          <p class="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            ArchBold didirikan atas dasar keyakinan bahwa desain yang baik adalah desain yang memperlihatkan tulangnya. Beton ekspos, struktur baja grid, dan efisiensi ruang adalah bahasa yang kami bicarakan.
          </p>
        </div>
      </div>
    </section>

    <!-- Services / Expertise -->
    <section id="services" class="py-24 bg-[#111] border-y border-white/5">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 section-fade">
          <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Core<br/>Expertise</h2>
          <p class="text-gray-400 max-w-sm mt-6 md:mt-0 font-medium">Biro arsitektur yang menguasai eksekusi presisi dari tahap fondasi hingga furnitur kustom.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-800">
          <div v-for="(service, idx) in services" :key="idx" class="p-10 md:p-14 border border-gray-800 hover:bg-[#1a1a1a] transition-colors group section-fade relative overflow-hidden">
            <div class="absolute top-0 right-0 p-6 text-6xl font-black text-gray-800 opacity-20 group-hover:text-[#ff4500] group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              0{{ idx + 1 }}
            </div>
            <Icon :icon="service.icon" class="text-5xl mb-12 text-white group-hover:text-[#ff4500] transition-colors relative z-10" />
            <h3 class="text-2xl font-black uppercase tracking-tight mb-4 relative z-10">{{ service.title }}</h3>
            <p class="text-gray-400 font-medium leading-relaxed relative z-10">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Portfolio -->
    <section id="projects" class="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div class="container mx-auto">
        <div class="text-center mb-24 section-fade">
          <span class="text-[#ff4500] text-xs font-bold uppercase tracking-[0.2em] block mb-4">// Selected Works</span>
          <h2 class="text-5xl md:text-7xl font-black uppercase tracking-tighter">Brutalist<br/>Portfolio</h2>
        </div>

        <div class="space-y-24 md:space-y-48">
          <div v-for="(project, idx) in projects" :key="idx" class="project-item flex flex-col md:flex-row items-center gap-10 md:gap-20" :class="idx % 2 !== 0 ? 'md:flex-row-reverse' : ''">
            <!-- Image with Parallax trigger -->
            <div class="w-full md:w-2/3 h-[50vh] md:h-[80vh] overflow-hidden relative group cursor-pointer">
              <div class="absolute inset-0 bg-[#ff4500] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 mix-blend-overlay opacity-80"></div>
              <img :src="project.image" :alt="project.title" class="parallax-img w-full h-[120%] object-cover absolute top-[-10%] grayscale group-hover:grayscale-0 transition-all duration-700">
              
              <!-- Info overlay on hover -->
              <div class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex justify-between items-end">
                <span class="font-bold border-b border-white pb-1">View Case Study</span>
                <Icon icon="mdi:arrow-top-right" class="text-3xl" />
              </div>
            </div>
            
            <!-- Project Text -->
            <div class="w-full md:w-1/3">
              <div class="text-gray-600 font-bold mb-4 uppercase tracking-[0.2em] text-sm">{{ project.year }} // {{ project.location }}</div>
              <h3 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">{{ project.title }}</h3>
              <p class="text-gray-400 font-medium leading-relaxed mb-8">{{ project.desc }}</p>
              <ul class="space-y-2 mb-10 border-l-2 border-[#ff4500] pl-4">
                <li v-for="tag in project.tags" :key="tag" class="text-sm font-bold uppercase tracking-widest text-gray-300">{{ tag }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats / Process Counter -->
    <section class="py-24 bg-[#ff4500] text-[#0a0a0a]">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-2 divide-[#0a0a0a]">
          <div v-for="(stat, idx) in stats" :key="idx" class="px-4 section-fade">
            <div class="text-5xl md:text-7xl font-black tracking-tighter mb-2">{{ stat.number }}</div>
            <div class="text-xs font-bold uppercase tracking-[0.2em]">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <footer id="contact" class="bg-[#111] pt-32 pb-12 border-t border-white/10">
      <div class="container mx-auto px-6 md:px-12">
        
        <div class="text-center mb-32 section-fade">
          <h2 class="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 max-w-5xl mx-auto leading-none">
            Mulai Proyek <br/> Konstruksi Anda.
          </h2>
          <button 
            @click="handleConsultation"
            class="group relative inline-flex items-center justify-center px-12 py-6 font-black text-xl uppercase tracking-[0.2em] text-white bg-[#0a0a0a] border border-[#333] hover:border-[#ff4500] overflow-hidden transition-all"
          >
            <!-- Hover sweep effect -->
            <div class="absolute inset-0 w-0 bg-[#ff4500] transition-all duration-[250ms] ease-out group-hover:w-full z-0"></div>
            <span class="relative z-10 flex items-center gap-4">
              Schedule Meeting <Icon icon="mdi:arrow-right" class="text-2xl transform group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-800 pt-16 mb-12">
          <div class="lg:col-span-1">
            <a href="#" class="text-3xl font-black tracking-tighter uppercase mb-6 block text-white">
              ARCH<span class="text-[#ff4500]">BOLD</span>
            </a>
            <p class="text-gray-500 font-medium text-sm">Concrete, Steel, and Functionality.</p>
          </div>
          
          <div>
            <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 text-[#ff4500]">Headquarters</h4>
            <ul class="space-y-4 text-gray-400 font-medium text-sm">
              <li>Sudirman CBD, Distrik 8</li>
              <li>Jakarta Selatan, 12190</li>
              <li>DKI Jakarta, Indonesia</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 text-[#ff4500]">Contact</h4>
            <ul class="space-y-4 text-gray-400 font-medium text-sm">
              <li>build@archbold.studio</li>
              <li>+62 851 8307 7289</li>
              <li>Mon - Fri (09:00 - 18:00)</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 text-[#ff4500]">Network</h4>
            <ul class="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="#" class="hover:text-white transition-colors">Instagram / @archbold</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Behance / archbold</a></li>
              <li><a href="#" class="hover:text-white transition-colors">LinkedIn / /archbold</a></li>
            </ul>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-600 uppercase tracking-widest border-t border-gray-800 pt-8">
          <p>&copy; 2025 ARCHBOLD STUDIO. ALL RIGHTS RESERVED.</p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy</a>
            <a href="#" class="hover:text-white transition-colors">Terms</a>
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
const heroBg = ref(null);
const heroContent = ref(null);

const navLinks = [
  { text: 'Manifesto', href: '#about' },
  { text: 'Projects', href: '#projects' },
  { text: 'Expertise', href: '#services' },
  { text: 'Contact', href: '#contact' }
];

const stats = [
  { number: '45+', label: 'Built Spaces' },
  { number: '12', label: 'Years Arch' },
  { number: '18', label: 'Struct Awards' },
  { number: '0.0', label: 'Compromise' }
];

const services = [
  {
    icon: 'mdi:domain',
    title: 'Architecture',
    desc: 'Pembuatan konsep fasad dan struktur bangunan komersial maupun residensial dengan geometri tegas dan material mentah yang terekspos.'
  },
  {
    icon: 'mdi:room-preferences',
    title: 'Interior Space',
    desc: 'Perancangan tata letak interior bernuansa industrial. Memaksimalkan sirkulasi udara luar dan pencahayaan dramatis dari bukaan alam.'
  },
  {
    icon: 'mdi:wall-sconce',
    title: 'Custom Fixtures',
    desc: 'Pabrikasi furnitur kustom menggunakan dominasi pelat baja, besi hollow, dan beton cor untuk mempertahankan konsistensi visual ruangan.'
  }
];

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop',
    title: 'The Concrete Monolith',
    category: 'Architecture',
    year: '2023',
    location: 'Bandung',
    desc: 'Rumah tinggal pribadi yang dibangun sepenuhnya dengan beton cetak expose (exposed concrete). Tampil brutal di luar, namun efisien dan protektif di dalam.',
    tags: ['Architecture', 'Residential', 'Concrete Structure']
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop',
    title: 'Steel Framework Office',
    category: 'Interior Commercial',
    year: '2024',
    location: 'Jakarta Selatan',
    desc: 'Renovasi ruko 4 lantai menjadi biro kreatif. Menggunakan struktur tangga baja ringan yang digantung, dan mempertahankan batu bata asli asli bangunan.',
    tags: ['Commercial Interior', 'Workspace', 'Steel Fabrication']
  },
  {
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=1000&auto=format&fit=crop',
    title: 'Void Cafe & Roastery',
    category: 'Architecture',
    year: '2024',
    location: 'Yogyakarta',
    desc: 'Eksperimen spasial pencahayaan langit. Minimnya jendela pinggir digantikan dengan skylight raksasa yang menerangi meja bar utama berbalut stainless steel.',
    tags: ['F&B Architecture', 'Light Study', 'Minimalist']
  }
];

// Logic
const scrollToSection = (id) => {
  isMobileMenuOpen.value = false;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleConsultation = () => {
  const whatsappBase = '6285183077289';
  const msg = encodeURIComponent('Halo ArchBold Studio! Saya tertarik untuk konsultasi mengenai desain arsitektur/interior industrial untuk lahan/bangunan saya.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

onMounted(() => {
  // Hero Entry Animation
  gsap.to(heroBg.value, {
    scale: 1,
    duration: 2.5,
    ease: "power2.out"
  });

  gsap.from(heroContent.value, {
    opacity: 0,
    y: 100,
    duration: 1.2,
    delay: 0.3,
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
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Parallax Effect for Project Images
  const parallaxImages = document.querySelectorAll('.parallax-img');
  parallaxImages.forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: "20%",
      ease: "none"
    });
  });
});

</script>

<style scoped>
.stroke-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
  color: transparent;
}

.animate-marquee {
  animation: marquee 15s linear infinite;
  display: inline-flex;
  min-width: 200%;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
