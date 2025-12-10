<template>
  <div class="font-sans antialiased bg-[#050505] text-slate-300 selection:bg-cyan-500 selection:text-black min-h-screen">
    
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
    </div>

    <header class="fixed w-full top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div class="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center text-black font-bold text-lg relative overflow-hidden">
            <span class="relative z-10">T</span>
            <div class="absolute inset-0 bg-white/50 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </div>
          <span class="font-bold text-white tracking-tight">TECH<span class="text-cyan-500">LAUNCH</span>_v1.0</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium font-mono">
          <a href="#features" class="hover:text-cyan-400 transition-colors">/FEATURES</a>
          <a href="#specs" class="hover:text-cyan-400 transition-colors">/SPECS</a>
          <a href="#pricing" class="hover:text-cyan-400 transition-colors">/PRE-ORDER</a>
        </nav>

        <div class="flex items-center gap-4">
          <button @click="handleConsultation" class="hidden md:flex px-5 py-2 border border-white/20 hover:border-cyan-500 hover:text-cyan-400 text-xs font-mono rounded transition-all shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            JOIN_WAITLIST
          </button>
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-white">
            <Icon icon="mdi:menu" class="text-2xl" />
          </button>
        </div>
      </div>
    </header>

    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-8 animate-fade-in-down">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          SYSTEM_ONLINE :: COUNTDOWN INITIATED
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
          THE FUTURE IS <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">PROGRAMMABLE</span>
        </h1>

        <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Platform revolusioner yang mendefinisikan ulang batas produktivitas. <br/>
          <span class="text-white font-mono bg-white/5 px-1">Dibuat untuk para visioner.</span>
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div v-for="(time, index) in countdown" :key="index" class="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm group hover:border-cyan-500/50 transition-colors">
            <div class="text-4xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">{{ time.value }}</div>
            <div class="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-1">{{ time.label }}</div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            @click="handleConsultation"
            class="px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group"
          >
            <Icon icon="mdi:rocket-launch" class="group-hover:-translate-y-1 transition-transform" />
            SECURE ACCESS
          </button>
          <button 
            @click="scrollToSection('demo')"
            class="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:play-circle" />
            WATCH DEMO
          </button>
        </div>
      </div>
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>

    <section id="demo" class="py-12 perspective-1000">
      <div class="container mx-auto px-6">
        <div class="relative max-w-5xl mx-auto transform rotate-x-12 shadow-2xl border border-white/10 rounded-xl bg-[#0F0F0F] overflow-hidden group">
          <div class="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div class="ml-4 text-[10px] text-slate-500 font-mono">dashboard.sys</div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
            alt="Dashboard" 
            class="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[100px] w-full animate-scan pointer-events-none"></div>
        </div>
      </div>
    </section>

    <section id="features" class="py-24">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-2">SYSTEM <span class="text-cyan-500">CAPABILITIES</span></h2>
            <p class="text-slate-400">Arsitektur tingkat lanjut untuk performa maksimal.</p>
          </div>
          <div class="font-mono text-xs text-cyan-500 mt-4 md:mt-0">
            // SCROLL_TO_EXPLORE
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div class="md:col-span-2 md:row-span-2 bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
            <div class="absolute top-0 right-0 p-4 opacity-20">
              <Icon icon="mdi:cpu-64-bit" class="text-9xl text-cyan-500" />
            </div>
            <div class="relative z-10 h-full flex flex-col justify-end">
              <div class="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <Icon icon="mdi:lightning-bolt" class="text-2xl" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Quantum Processing</h3>
              <p class="text-slate-400">Kecepatan pemrosesan data real-time dengan latensi nol. Menggunakan engine proprietary terbaru.</p>
            </div>
          </div>

          <div class="bg-[#111] border border-white/10 rounded-2xl p-6 hover:bg-[#151515] transition-colors group">
            <Icon icon="mdi:shield-lock" class="text-3xl text-purple-500 mb-4 group-hover:animate-pulse" />
            <h3 class="text-lg font-bold text-white mb-2">E2E Encryption</h3>
            <p class="text-sm text-slate-400">Keamanan militer grade A.</p>
          </div>

          <div class="bg-[#111] border border-white/10 rounded-2xl p-6 hover:bg-[#151515] transition-colors">
            <Icon icon="mdi:cloud-sync" class="text-3xl text-blue-500 mb-4" />
            <h3 class="text-lg font-bold text-white mb-2">Neural Sync</h3>
            <p class="text-sm text-slate-400">Sinkronisasi data antar dimensi.</p>
          </div>

           <div class="md:col-span-2 bg-[#111] border border-white/10 rounded-2xl p-6 flex items-center gap-6 relative overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent"></div>
             <div class="relative z-10">
               <h3 class="text-xl font-bold text-white mb-2">API First Architecture</h3>
               <p class="text-sm text-slate-400 mb-4">Integrasikan dengan stack apapun. Python, Node, Go, Rust.</p>
               <div class="font-mono text-xs bg-black p-3 rounded text-green-400 border border-white/10">
                 $ npm install @techlaunch/core
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-1 md:p-1 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 blur-xl animate-gradient"></div>
          
          <div class="bg-[#0a0a0a] rounded-[22px] p-8 md:p-16 relative z-10 text-center">
            <div class="inline-block bg-white text-black text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider">
              Limited Founder Edition
            </div>
            
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6">LIFETIME ACCESS</h2>
            <div class="flex items-baseline justify-center gap-2 mb-8">
              <span class="text-6xl font-mono text-cyan-400">Rp999k</span>
              <span class="text-xl text-slate-600 line-through decoration-red-500">Rp2.5jt</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
              <div v-for="item in benefits" :key="item" class="flex items-center gap-3 text-slate-300">
                <Icon icon="mdi:check-circle" class="text-cyan-500" />
                <span>{{ item }}</span>
              </div>
            </div>

            <button 
              @click="handleConsultation"
              class="w-full md:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              CLAIM YOUR SPOT
            </button>
            <p class="mt-4 text-xs text-slate-500 font-mono">Hanya tersisa 14 slot untuk harga ini.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/10 bg-[#050505] pt-12 pb-6 font-mono text-xs">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-2 text-white">
            <div class="w-4 h-4 bg-cyan-500"></div>
            <span>TECHLAUNCH INC. © 2025</span>
            <span class="text-slate-500 ml-4">Built by <span class="font-semibold text-cyan-400">Landingo</span></span>
          </div>
          <div class="flex gap-8 text-slate-500">
            <a href="#" class="hover:text-white">STATUS</a>
            <a href="#" class="hover:text-white">CHANGELOG</a>
            <a href="#" class="hover:text-white">LEGAL</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const countdown = ref([
  { label: 'DAYS', value: '00' },
  { label: 'HRS', value: '14' },
  { label: 'MIN', value: '32' },
  { label: 'SEC', value: '45' }
]);

const benefits = [
  'Akses Seumur Hidup (Lifetime)',
  'Prioritas Support 24/7',
  'Akses Fitur Beta',
  'Private Discord Community',
  'API Key Unlimited',
  'Sertifikat Founder'
];

let interval;

const updateCountdown = () => {
  // Simple countdown simulation
  let sec = parseInt(countdown.value[3].value);
  if(sec > 0) {
    countdown.value[3].value = (sec - 1).toString().padStart(2, '0');
  } else {
    countdown.value[3].value = '59';
  }
};

onMounted(() => {
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const whatsappBase = '6285183077289';
const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik dengan konsep "Dark Tech SaaS" ini. Saya ingin membuat landing page product launch dengan gaya futuristik seperti ini.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style scoped>
/* Custom Animations not in standard Tailwind */
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
.animate-scan {
  animation: scan 3s linear infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.perspective-1000 {
  perspective: 1000px;
}
</style>