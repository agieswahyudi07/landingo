<template>
  <div class="min-h-screen bg-[#F4F4F0] text-[#1a1a1a] font-sans selection:bg-orange-600 selection:text-white border-x-4 border-[#1a1a1a]">
    
    <header 
      class="fixed w-[calc(100%-8px)] top-0 z-50 transition-all duration-300 border-b-2 border-[#1a1a1a] bg-[#F4F4F0]"
    >
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center text-white font-black text-xl hover:bg-orange-600 transition-colors">
            V.
          </div>
          <span class="text-xl font-black tracking-tighter uppercase">Vantage<span class="text-orange-600">.</span></span>
        </a>

        <nav class="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
          <a href="#services" class="hover:text-orange-600 hover:underline decoration-2 underline-offset-4 transition-all">Services</a>
          <a href="#work" class="hover:text-orange-600 hover:underline decoration-2 underline-offset-4 transition-all">Selected Work</a>
          <a href="#process" class="hover:text-orange-600 hover:underline decoration-2 underline-offset-4 transition-all">Process</a>
        </nav>

        <div class="flex items-center gap-4">
          <button @click="handleConsultation" class="hidden md:flex bg-[#1a1a1a] text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-orange-600 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1 border-2 border-transparent">
            Start Project
          </button>
          
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl">
            <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
          </button>
        </div>
      </div>

      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-[#1a1a1a] text-white border-b-2 border-[#1a1a1a] p-8 flex flex-col gap-6 md:hidden">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-2xl font-black uppercase hover:text-orange-500">
            {{ link.text }}
          </a>
          <button @click="handleConsultation" class="w-full py-4 bg-orange-600 text-white font-bold uppercase border-2 border-white">
            Start Project
          </button>
        </div>
      </transition>
    </header>

    <section id="home" class="relative pt-32 pb-20 border-b-2 border-[#1a1a1a] overflow-hidden">
      <div class="absolute inset-0 opacity-5 pointer-events-none" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="lg:w-3/4">
            <div class="inline-block bg-orange-600 text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest border border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a]">
              Strategic Creative Partner
            </div>
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              BUILDING <br/>
              DIGITAL <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 stroke-text">EMPIRES</span>
            </h1>
            <p class="text-xl font-medium text-gray-600 max-w-2xl mb-10 leading-relaxed border-l-4 border-orange-600 pl-6">
              Kami membantu brand visioner mengubah ide kompleks menjadi produk digital yang fungsional, estetis, dan profitable.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="handleConsultation"
                class="px-8 py-4 bg-[#1a1a1a] text-white font-bold text-lg uppercase tracking-wider border-2 border-[#1a1a1a] hover:bg-white hover:text-[#1a1a1a] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Book Consultation
              </button>
              <button 
                @click="scrollToSection('work')"
                class="px-8 py-4 bg-transparent text-[#1a1a1a] font-bold text-lg uppercase tracking-wider border-2 border-[#1a1a1a] hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all"
              >
                View Work
              </button>
            </div>
          </div>
          
          <div class="hidden lg:block lg:w-1/4 relative">
             <div class="w-full aspect-square border-2 border-[#1a1a1a] bg-white relative shadow-[8px_8px_0px_0px_#1a1a1a]">
               <div class="absolute inset-0 flex items-center justify-center">
                 <Icon icon="mdi:arrow-top-right" class="text-9xl text-[#1a1a1a] transform rotate-0 hover:rotate-45 transition-transform duration-500" />
               </div>
             </div>
             <div class="mt-4 flex justify-between font-mono text-xs font-bold uppercase">
               <span>Est. 2025</span>
               <span>JKT — IND</span>
             </div>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-[#1a1a1a] text-white py-4 border-b-2 border-[#1a1a1a] overflow-hidden whitespace-nowrap">
      <div class="animate-marquee inline-block font-mono text-sm font-bold uppercase tracking-widest">
        <span class="mx-8">Web Development</span> +
        <span class="mx-8">UI/UX Design</span> +
        <span class="mx-8">Branding Strategy</span> +
        <span class="mx-8">Mobile Apps</span> +
        <span class="mx-8">Web Development</span> +
        <span class="mx-8">UI/UX Design</span> +
        <span class="mx-8">Branding Strategy</span> +
        <span class="mx-8">Mobile Apps</span> +
      </div>
    </div>

    <section id="services" class="bg-white">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-12 border-b-2 border-r-2 border-[#1a1a1a] bg-[#F4F4F0]">
          <h2 class="text-4xl font-black uppercase mb-4">Our <br/>Expertise</h2>
          <p class="font-medium text-gray-600">Solusi end-to-end untuk kebutuhan digital bisnis Anda.</p>
        </div>

        <div v-for="(service, index) in services" :key="index" class="p-12 border-b-2 md:border-r-2 border-[#1a1a1a] group hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer relative overflow-hidden">
          <div class="absolute top-4 right-4 font-mono font-bold text-sm text-gray-400 group-hover:text-gray-600">0{{ index + 1 }}</div>
          <Icon :icon="service.icon" class="text-4xl mb-6 text-orange-600 group-hover:text-white transition-colors" />
          <h3 class="text-2xl font-bold uppercase mb-3 group-hover:text-white transition-colors">{{ service.title }}</h3>
          <p class="text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">{{ service.description }}</p>
          <div class="mt-6 w-8 h-1 bg-orange-600 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    </section>

    <section id="work" class="py-24 border-b-2 border-[#1a1a1a]">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
          <h2 class="text-5xl font-black uppercase tracking-tight">Selected Work</h2>
          <a href="#" class="hidden md:block font-bold uppercase border-b-2 border-[#1a1a1a] hover:text-orange-600 hover:border-orange-600 transition-colors">View All Projects</a>
        </div>

        <div class="space-y-16">
          <div v-for="(project, i) in projects" :key="i" class="group">
            <div class="border-2 border-[#1a1a1a] shadow-[8px_8px_0px_0px_#1a1a1a] bg-white p-2 mb-6 hover:shadow-[12px_12px_0px_0px_#ea580c] hover:-translate-y-1 transition-all duration-300">
              <div class="aspect-video bg-gray-200 overflow-hidden relative">
                <img :src="project.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div class="absolute inset-0 bg-[#1a1a1a]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 class="text-3xl font-bold uppercase mb-1">{{ project.title }}</h3>
                <p class="font-mono text-sm text-gray-500">{{ project.category }}</p>
              </div>
              <button @click="handlePortfolioInquiry" class="mt-4 md:mt-0 flex items-center gap-2 font-bold uppercase hover:text-orange-600 transition-colors">
                Case Study <Icon icon="mdi:arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b-2 border-[#1a1a1a] bg-[#1a1a1a] text-white">
      <div class="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-gray-800">
        <div class="p-12 text-center">
          <div class="text-5xl font-black text-orange-600 mb-2">5+</div>
          <div class="font-mono text-xs uppercase">Years Experience</div>
        </div>
        <div class="p-12 text-center">
          <div class="text-5xl font-black text-orange-600 mb-2">100+</div>
          <div class="font-mono text-xs uppercase">Projects Done</div>
        </div>
        <div class="p-12 text-center">
          <div class="text-5xl font-black text-orange-600 mb-2">20+</div>
          <div class="font-mono text-xs uppercase">Team Members</div>
        </div>
        <div class="p-12 text-center">
          <div class="text-5xl font-black text-orange-600 mb-2">98%</div>
          <div class="font-mono text-xs uppercase">Retention Rate</div>
        </div>
      </div>
    </section>

    <section class="py-24 border-b-2 border-[#1a1a1a] bg-[#F4F4F0]">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-black uppercase mb-16 text-center">Client Words</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(testi, i) in testimonials" :key="i" class="bg-white border-2 border-[#1a1a1a] p-8 shadow-[6px_6px_0px_0px_#1a1a1a] relative">
            <Icon icon="mdi:format-quote-open" class="text-4xl text-gray-200 absolute top-4 right-4" />
            <p class="font-medium text-lg mb-6 leading-relaxed">"{{ testi.text }}"</p>
            <div class="flex items-center gap-4 border-t-2 border-gray-100 pt-4">
              <div class="w-10 h-10 bg-orange-600 rounded-none border border-[#1a1a1a] flex items-center justify-center text-white font-bold">
                {{ testi.name.charAt(0) }}
              </div>
              <div>
                <div class="font-bold uppercase text-sm">{{ testi.name }}</div>
                <div class="text-xs font-mono text-gray-500">{{ testi.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-32 bg-orange-600 text-white relative overflow-hidden">
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
          Ready to <br/> Scale Up?
        </h2>
        <p class="text-xl font-medium mb-10 max-w-2xl mx-auto">
          Jangan biarkan ide besar Anda hanya menjadi wacana. Mari bangun sesuatu yang hebat bersama.
        </p>
        <button 
          @click="handleConsultation"
          class="bg-white text-[#1a1a1a] px-10 py-5 font-black text-xl uppercase tracking-widest border-4 border-[#1a1a1a] shadow-[8px_8px_0px_0px_#1a1a1a] hover:shadow-[12px_12px_0px_0px_#1a1a1a] hover:-translate-y-1 transition-all"
        >
          Book Free Strategy Call
        </button>
      </div>
      <Icon icon="mdi:asterisk" class="absolute top-10 left-10 text-9xl text-orange-700 animate-spin-slow opacity-50" />
      <Icon icon="mdi:shape-outline" class="absolute bottom-10 right-10 text-9xl text-orange-700 opacity-50" />
    </section>

    <footer class="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div class="max-w-xs">
            <h3 class="text-3xl font-black uppercase mb-6">Vantage.</h3>
            <p class="text-gray-400">Strategic Design & Development Studio based in Jakarta, Indonesia.</p>
          </div>
          <div class="flex gap-12 md:gap-24 font-bold uppercase tracking-wider text-sm">
            <div class="flex flex-col gap-4">
              <a href="#" class="hover:text-orange-500">Work</a>
              <a href="#" class="hover:text-orange-500">Services</a>
              <a href="#" class="hover:text-orange-500">About</a>
            </div>
            <div class="flex flex-col gap-4">
              <a href="#" class="hover:text-orange-500">Instagram</a>
              <a href="#" class="hover:text-orange-500">LinkedIn</a>
              <a href="#" class="hover:text-orange-500">Twitter</a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500 uppercase">
          <p>&copy; 2025 Vantage Studio. All rights reserved.</p>
          <p>Built by Landingo.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'Services', href: '#services' },
  { text: 'Work', href: '#work' },
  { text: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: 'mdi:monitor-shimmer',
    title: 'Web Development',
    description: 'Custom websites built with Vue, React, and Laravel. Fast, secure, and scalable.'
  },
  {
    icon: 'mdi:vector-curve',
    title: 'Brand Identity',
    description: 'Logo, typography, and visual systems that make your brand impossible to ignore.'
  },
  {
    icon: 'mdi:rocket-launch-outline',
    title: 'Growth Strategy',
    description: 'Data-driven marketing strategies to increase your ROI and market presence.'
  },
  {
    icon: 'mdi:cellphone-link',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: 'mdi:pencil-ruler',
    title: 'UI/UX Design',
    description: 'User-centric interfaces that provide seamless and enjoyable experiences.'
  }
];

const projects = [
  {
    title: 'FinTech Revolution',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Urban Coffee Co.',
    category: 'Branding & Web',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'EcoLogistics',
    category: 'System Platform',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop'
  }
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechStart',
    text: 'Vantage didn\'t just build a website, they built a conversion machine. Our leads increased by 200% in the first month.'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GreenEarth',
    text: 'Bold, professional, and on time. The branding guidelines they created have become our bible.'
  },
  {
    name: 'David Miller',
    role: 'Director, RetailPlus',
    text: 'The best agency experience we\'ve had. They understood our vision perfectly and executed flawlessly.'
  }
];

// Logic
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

const whatsappBase = '6285183077289';

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo Vantage Studio! Saya ingin diskusi tentang project baru (Web/App/Branding).');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handlePortfolioInquiry = () => {
  const msg = encodeURIComponent('Halo, saya melihat portfolio Anda dan tertarik membuat sesuatu yang serupa.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style scoped>
.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.stroke-text {
  -webkit-text-stroke: 1px transparent;
}

.animate-spin-slow {
  animation: spin 10s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>