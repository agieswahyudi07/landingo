<template>
  <div class="font-sans text-slate-300 bg-[#0a0a0a] selection:bg-amber-500 selection:text-black min-h-screen">
    
    <div class="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
         style="background-image: url('https://grainy-gradients.vercel.app/noise.svg')">
    </div>

    <header 
      class="fixed w-full top-0 z-50 transition-all duration-500 border-b border-white/5"
      :class="isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a href="#" class="font-serif text-2xl font-bold text-white tracking-wider">
          MASTER<span class="text-amber-500">MIND</span>.
        </a>

        <div class="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
          <a href="#syllabus" class="hover:text-white transition-colors">Syllabus</a>
          <a href="#mentor" class="hover:text-white transition-colors">The Mentor</a>
          <a href="#reviews" class="hover:text-white transition-colors">Stories</a>
        </div>

        <button 
          @click="handleConsultation"
          class="border border-white/20 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Join Waitlist
        </button>
      </div>
    </header>

    <section class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
          class="w-full h-full object-cover opacity-60 grayscale"
          alt="Masterclass Background"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block border border-amber-500/50 text-amber-500 px-4 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 animate-fade-in">
          Signature Class Series
        </div>
        
        <h1 class="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-8 leading-none animate-fade-in-up">
          DIGITAL <br/> <i class="font-light text-slate-400">ALCHEMY</i>
        </h1>
        
        <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up delay-100">
          Bukan sekadar marketing. Ini adalah seni mengubah audiens menjadi loyalis. 
          Pelajari strategi di balik brand-brand terbesar dunia langsung dari ahlinya.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-200">
          <button 
            @click="scrollToSection('pricing')"
            class="bg-amber-600 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors w-full sm:w-auto"
          >
            Start Learning
          </button>
          <button class="flex items-center gap-3 text-white hover:text-amber-500 transition-colors group uppercase text-xs font-bold tracking-widest">
            <div class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-amber-500 transition-colors">
              <Icon icon="mdi:play" class="text-xl ml-1" />
            </div>
            Watch Trailer
          </button>
        </div>
      </div>
    </section>

    <section class="border-y border-white/5 py-12 bg-white/[0.02]">
      <div class="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="font-serif text-3xl md:text-4xl text-white mb-2">{{ stat.value }}</div>
          <div class="text-[10px] uppercase tracking-widest text-slate-500">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section id="mentor" class="py-32">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div class="lg:w-1/2 relative">
            <div class="absolute inset-0 border border-white/10 translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop" 
              class="w-full grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl"
              alt="Mentor"
            />
          </div>
          <div class="lg:w-1/2">
            <span class="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Meet Your Instructor</span>
            <h2 class="font-serif text-4xl md:text-5xl text-white mb-8">Sarah "The Strategist" Jenkins</h2>
            <div class="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
              <p>
                "Marketing bukan tentang berteriak paling keras. Ini tentang berbisik kepada orang yang tepat."
              </p>
              <p>
                Dengan pengalaman 15 tahun memimpin kampanye untuk Fortune 500, Sarah mendekonstruksi kerumitan algoritma menjadi prinsip-prinsip psikologi manusia yang abadi.
              </p>
            </div>
            <div class="mt-10 flex gap-4">
               <img v-for="i in 4" :key="i" :src="`https://logo.clearbit.com/${['google.com','spotify.com','nike.com','airbnb.com'][i-1]}`" class="h-6 grayscale opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="syllabus" class="py-24 bg-[#0F0F0F]">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="font-serif text-3xl md:text-5xl text-white mb-4">Course Curriculum</h2>
          <p class="text-slate-500">20 Lessons • 4 Hours • 1 Masterpiece</p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(module, index) in curriculum" 
            :key="index"
            class="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors overflow-hidden"
          >
            <button 
              @click="toggleModule(index)"
              class="w-full px-8 py-6 flex items-center justify-between text-left"
            >
              <div class="flex items-baseline gap-6">
                <span class="font-mono text-2xl text-white/20 group-hover:text-amber-500 transition-colors">{{ (index + 1).toString().padStart(2, '0') }}</span>
                <div>
                  <h3 class="text-xl text-white font-serif italic">{{ module.title }}</h3>
                  <span class="text-xs text-slate-500 uppercase tracking-wider mt-1 block">{{ module.duration }}</span>
                </div>
              </div>
              <Icon :icon="expandedModule === index ? 'mdi:minus' : 'mdi:plus'" class="text-white/50 text-xl" />
            </button>
            
            <div 
              v-show="expandedModule === index"
              class="px-8 pb-8 pl-20"
            >
              <ul class="space-y-3 border-l border-white/10 pl-6">
                <li v-for="(lesson, lIdx) in module.lessons" :key="lIdx" class="text-slate-400 flex items-center gap-3 text-sm">
                  <Icon icon="mdi:play-circle-outline" class="text-amber-500" />
                  {{ lesson }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-32 relative">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-2xl mx-auto bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 p-1 md:p-1">
          <div class="bg-[#0f0f0f] border border-white/5 p-12 md:p-16 text-center">
            <Icon icon="mdi:ticket-confirmation-outline" class="text-5xl text-amber-500 mb-6 mx-auto" />
            <h2 class="font-serif text-3xl md:text-4xl text-white mb-4">All-Access Pass</h2>
            <p class="text-slate-400 mb-8">Bergabunglah dengan kohort eksklusif ini. Akses seumur hidup, materi premium, dan komunitas privat.</p>
            
            <div class="flex justify-center items-baseline gap-2 mb-10">
              <span class="text-5xl font-serif text-white">Rp 999k</span>
              <span class="text-slate-600 line-through decoration-amber-500">Rp 2.5jt</span>
            </div>

            <button 
              @click="handleConsultation"
              class="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-white transition-all duration-300 mb-6"
            >
              Secure Your Spot
            </button>
            
            <p class="text-xs text-slate-600 uppercase tracking-widest">30-Day Money Back Guarantee</p>
          </div>
        </div>
      </div>
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-amber-500/10 blur-[120px] pointer-events-none z-0"></div>
    </section>

    <section id="reviews" class="py-24 border-t border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="(review, i) in reviews" :key="i" class="text-center md:text-left">
            <Icon icon="mdi:format-quote-open" class="text-4xl text-amber-900 mb-6" />
            <p class="text-lg text-slate-300 font-serif italic mb-6 leading-relaxed">"{{ review.text }}"</p>
            <div class="flex items-center justify-center md:justify-start gap-4">
              <img :src="`https://i.pravatar.cc/100?img=${i+30}`" class="w-10 h-10 rounded-full grayscale" />
              <div>
                <div class="text-white font-bold text-sm uppercase tracking-wider">{{ review.name }}</div>
                <div class="text-slate-500 text-xs">{{ review.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-12 border-t border-white/5 text-center md:text-left">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="font-serif text-xl font-bold text-white tracking-wider">
          MASTER<span class="text-amber-500">MIND</span>.
        </div>
        <div class="text-xs text-slate-600 uppercase tracking-widest">
          &copy; 2025 Mastermind Inc. Crafted for Excellence. <span class="text-slate-500 normal-case">Built by <span class="font-semibold text-amber-500">Landingo</span></span>
        </div>
        <div class="flex gap-6 text-slate-500">
           <a href="#" class="hover:text-white transition-colors"><Icon icon="mdi:instagram" /></a>
           <a href="#" class="hover:text-white transition-colors"><Icon icon="mdi:twitter" /></a>
           <a href="#" class="hover:text-white transition-colors"><Icon icon="mdi:youtube" /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const expandedModule = ref(0);

const stats = [
  { value: '15k+', label: 'Students' },
  { value: '4.9', label: 'Rating' },
  { value: '20+', label: 'Awards' },
  { value: '100%', label: 'Quality' },
];

const curriculum = [
  {
    title: 'The Philosophy of Digital Connection',
    duration: '45 Min',
    lessons: ['Why We Buy: The Psychology', 'The Digital Landscape Shift', 'Building Trust at Scale']
  },
  {
    title: 'Crafting Your Narrative',
    duration: '60 Min',
    lessons: ['Storytelling Frameworks', 'Visual Identity System', 'Tone of Voice Masterclass']
  },
  {
    title: 'The Distribution Engine',
    duration: '90 Min',
    lessons: ['Organic vs Paid Strategies', 'The Viral Coefficient', 'Community Building']
  },
  {
    title: 'Monetization & Scale',
    duration: '55 Min',
    lessons: ['Pricing Psychology', 'Funnel Architecture', 'Retention Mastery']
  }
];

const reviews = [
  {
    name: 'Alexandra Chen',
    role: 'Creative Director',
    text: 'Ini bukan kursus biasa. Ini adalah dekonstruksi jenius tentang bagaimana market bekerja. Visual dan penyampaiannya setara film dokumenter Netflix.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Agency Owner',
    text: 'Sarah mengubah cara pandang saya terhadap branding. ROI dari kursus ini tidak ternilai. Wajib untuk siapa saja yang serius di industri ini.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CMO at TechFlow',
    text: 'Saya sudah mengambil puluhan kursus marketing. Mastermind berada di level yang berbeda. Elegan, mendalam, dan sangat actionable.'
  }
];

const toggleModule = (index) => {
  expandedModule.value = expandedModule.value === index ? null : index;
};

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
  const msg = encodeURIComponent('Halo! Saya tertarik membuat website kursus online dengan gaya "Cinematic Masterclass" seperti ini.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style>
/* Import Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
.font-sans {
  font-family: 'Inter', sans-serif;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.delay-100 { animation-delay: 0.2s; }
.delay-200 { animation-delay: 0.4s; }
</style>