<template>
  <div class="font-sans text-slate-800 bg-white selection:bg-slate-900 selection:text-white">
    
    <div class="bg-slate-900 text-white text-[10px] py-3 border-b border-slate-800">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <div class="flex gap-6 uppercase tracking-widest font-semibold">
          <span>Jakarta</span>
          <span class="text-slate-600">|</span>
          <span>Singapore</span>
          <span class="text-slate-600">|</span>
          <span>London</span>
        </div>
        <div class="hidden md:flex gap-4">
          <a href="#" class="hover:text-amber-500 transition-colors">Careers</a>
          <a href="#" class="hover:text-amber-500 transition-colors">Client Portal</a>
        </div>
      </div>
    </div>

    <header 
      class="fixed w-full top-[38px] z-50 transition-all duration-500 bg-white border-b border-slate-100"
      :class="isScrolled ? 'py-4 shadow-sm' : 'py-8'"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a href="#" class="font-serif text-2xl font-bold tracking-tight text-slate-900">
          STRATA<span class="text-amber-600">.</span>
        </a>

        <nav class="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <a href="#expertise" class="hover:text-amber-600 transition-colors">EXPERTISE</a>
          <a href="#industries" class="hover:text-amber-600 transition-colors">INDUSTRIES</a>
          <a href="#insights" class="hover:text-amber-600 transition-colors">INSIGHTS</a>
          <a href="#firm" class="hover:text-amber-600 transition-colors">THE FIRM</a>
        </nav>

        <button 
          @click="handleConsultation"
          class="hidden md:block border border-slate-900 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
        >
          Contact Us
        </button>

        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl">
          <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
        </button>
      </div>
    </header>

    <section class="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-16 items-start">
          
          <div class="lg:w-5/12 pt-8 animate-fade-in-up">
            <span class="block w-12 h-1 bg-amber-600 mb-8"></span>
            <h1 class="font-serif text-5xl lg:text-7xl text-slate-900 leading-[1.1] mb-8">
              Navigating <br/> Complexity. <br/>
              <i class="text-slate-400">Delivering Impact.</i>
            </h1>
            <p class="text-lg text-slate-600 mb-10 leading-relaxed max-w-md">
              Kami bermitra dengan para pemimpin visioner untuk mengatasi tantangan strategis terbesar mereka dan menangkap peluang terbesar mereka.
            </p>
            <div class="flex gap-6">
              <button @click="handleConsultation" class="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-amber-600 transition-colors group">
                Mulai Diskusi
                <Icon icon="mdi:arrow-right" class="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div class="lg:w-7/12 relative animate-fade-in-up delay-100">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                alt="Corporate Architecture" 
                class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-[1.5s]"
              />
              <div class="absolute bottom-0 left-0 bg-white p-8 max-w-sm border-t-4 border-amber-600 hidden md:block">
                <span class="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2 block">Latest Insight</span>
                <h3 class="font-serif text-xl mb-2">The Future of AI in Banking</h3>
                <a href="#" class="text-xs underline underline-offset-4 decoration-slate-300 hover:decoration-amber-600">Read Report</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="expertise" class="py-24 bg-white border-t border-slate-200">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 class="font-serif text-4xl text-slate-900 mb-4">Our Capabilities</h2>
            <p class="text-slate-500 max-w-lg">Pendekatan multidisiplin untuk memecahkan masalah bisnis yang kompleks.</p>
          </div>
          <a href="#" class="hidden md:inline-block text-sm font-bold border-b border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">View All Capabilities</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200">
          <div v-for="(service, idx) in services" :key="idx" class="p-8 md:p-12 hover:bg-slate-50 transition-colors group cursor-pointer">
            <Icon :icon="service.icon" class="text-4xl text-slate-300 mb-6 group-hover:text-amber-600 transition-colors" />
            <h3 class="text-xl font-bold mb-4 font-serif">{{ service.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-6">{{ service.desc }}</p>
            <ul class="space-y-2">
              <li v-for="item in service.items" :key="item" class="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400 group-hover:text-slate-700">
                <span class="w-1 h-1 bg-amber-600 rounded-full"></span> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-900 text-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-5xl font-serif mb-2 text-amber-500">{{ stat.value }}</div>
            <div class="text-xs uppercase tracking-widest text-slate-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="insights" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="font-serif text-4xl text-slate-900 mb-12">Perspectives</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="group cursor-pointer">
            <div class="aspect-[16/9] overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              <span class="text-amber-600">Technology</span>
              <span>•</span>
              <span>5 Min Read</span>
            </div>
            <h3 class="text-3xl font-serif font-bold mb-4 group-hover:text-amber-700 transition-colors">Generative AI: A New Era of Corporate Strategy</h3>
            <p class="text-slate-500 leading-relaxed mb-4">Bagaimana AI generatif akan mengubah struktur biaya dan model operasi perusahaan dalam dekade mendatang.</p>
            <span class="text-sm font-bold underline underline-offset-4 decoration-amber-600">Read Analysis</span>
          </div>

          <div class="flex flex-col justify-between">
            <div v-for="article in articles" :key="article.title" class="group cursor-pointer border-t border-slate-100 py-8 first:pt-0">
              <div class="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">{{ article.category }}</div>
              <h3 class="text-xl font-serif font-bold mb-2 group-hover:text-slate-600 transition-colors">{{ article.title }}</h3>
              <p class="text-sm text-slate-500">{{ article.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 border-t border-slate-100">
      <div class="container mx-auto px-6">
        <p class="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">Trusted by Global Leaders</p>
        <div class="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
           <span class="text-2xl font-serif font-bold">Acme Corp</span>
           <span class="text-2xl font-serif font-bold">GlobalBank</span>
           <span class="text-2xl font-serif font-bold">TechGiant</span>
           <span class="text-2xl font-serif font-bold">FutureEnergy</span>
           <span class="text-2xl font-serif font-bold">HealthPlus</span>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-slate-50 border-t border-slate-200">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="md:w-1/2">
          <h2 class="font-serif text-4xl text-slate-900 mb-6">Partner with Strata.</h2>
          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            Apakah Anda siap untuk mengubah lintasan bisnis Anda? Mari diskusikan bagaimana keahlian kami dapat membantu Anda mencapai hasil yang luar biasa.
          </p>
          <div class="flex flex-col gap-4 text-sm text-slate-500">
            <div class="flex items-center gap-3">
              <Icon icon="mdi:email-outline" class="text-xl" /> inquiry@strata.consulting
            </div>
            <div class="flex items-center gap-3">
              <Icon icon="mdi:phone-outline" class="text-xl" /> +62 21 555 0199
            </div>
          </div>
        </div>
        
        <div class="md:w-1/3 w-full bg-white p-8 shadow-xl border-t-4 border-slate-900">
          <h3 class="font-bold text-lg mb-6 uppercase tracking-wider">Request Consultation</h3>
          <div class="space-y-4">
            <input type="text" placeholder="Full Name" class="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-amber-600 transition-colors" />
            <input type="email" placeholder="Work Email" class="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-amber-600 transition-colors" />
            <input type="text" placeholder="Company" class="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-amber-600 transition-colors" />
            <button 
              @click="handleConsultation"
              class="w-full bg-slate-900 text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-amber-700 transition-colors mt-4"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-slate-900 text-slate-400 py-16 text-xs">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <span class="font-serif text-xl text-white font-bold block mb-6">STRATA.</span>
            <p>Jakarta • Singapore • London • New York</p>
          </div>
          <div>
            <h4 class="text-white font-bold uppercase tracking-widest mb-4">Firm</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Leadership</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Alumni</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold uppercase tracking-widest mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Strategy</a></li>
              <li><a href="#" class="hover:text-white">Digital</a></li>
              <li><a href="#" class="hover:text-white">Transformation</a></li>
              <li><a href="#" class="hover:text-white">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold uppercase tracking-widest mb-4">Legal</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white">Terms of Use</a></li>
              <li><a href="#" class="hover:text-white">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 pt-8 flex justify-between items-center">
          <p>&copy; 2025 Strata Consulting Group. All rights reserved. <span class="text-slate-500">Built by <span class="font-semibold text-indigo-400">Landingo</span></span></p>
          <div class="flex gap-4 text-lg">
            <a href="#" class="hover:text-white"><Icon icon="mdi:linkedin" /></a>
            <a href="#" class="hover:text-white"><Icon icon="mdi:twitter" /></a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const stats = [
  { value: '$10B+', label: 'Value Created' },
  { value: '500+', label: 'Engagements' },
  { value: '50+', label: 'Countries' },
  { value: '250+', label: 'Experts' },
];

const services = [
  {
    icon: 'mdi:chess-king',
    title: 'Strategy & Finance',
    desc: 'Mendefinisikan ulang arah perusahaan untuk pertumbuhan berkelanjutan dan profitabilitas jangka panjang.',
    items: ['Corporate Strategy', 'M&A', 'Value Creation']
  },
  {
    icon: 'mdi:chart-donut',
    title: 'Digital & Analytics',
    desc: 'Memanfaatkan data dan teknologi untuk mengubah operasi inti dan pengalaman pelanggan.',
    items: ['Digital Transformation', 'Data Science', 'AI Implementation']
  },
  {
    icon: 'mdi:leaf',
    title: 'Sustainability (ESG)',
    desc: 'Mengintegrasikan keberlanjutan ke dalam strategi inti untuk dampak sosial dan ekonomi.',
    items: ['Decarbonization', 'Green Finance', 'Social Impact']
  }
];

const articles = [
  {
    category: 'Sustainability',
    title: 'Net Zero: The Trillion Dollar Opportunity',
    excerpt: 'Mengapa transisi hijau bukan biaya, melainkan peluang investasi terbesar abad ini.'
  },
  {
    category: 'Leadership',
    title: 'The CEO Agenda for 2025',
    excerpt: 'Lima prioritas utama yang harus dimiliki setiap pemimpin bisnis di era ketidakpastian.'
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

const whatsappBase = '6285183077289';
const handleConsultation = () => {
  const msg = encodeURIComponent('Halo Strata Consulting, saya ingin mendiskusikan potensi kerjasama strategis untuk perusahaan saya.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style>
/* Load Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
.font-sans {
  font-family: 'Inter', sans-serif;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}
.delay-100 { animation-delay: 0.2s; }
</style>