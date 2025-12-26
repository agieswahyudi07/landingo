<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
    
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
    </div>

    <header 
      class="fixed w-full top-0 z-50 transition-all duration-300 border-b border-white/5"
      :class="isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl' : 'bg-transparent'"
    >
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Icon icon="mdi:flash" class="text-xl" />
          </div>
          <span class="text-xl font-bold text-white tracking-tight">Velo<span class="text-emerald-500">City</span></span>
        </a>

        <nav class="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
            {{ link.text }}
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <a href="#" class="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">Sign In</a>
          <button @click="handleConsultation" class="bg-white text-zinc-950 hover:bg-zinc-200 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
            Get Started <Icon icon="mdi:arrow-right" />
          </button>
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-white text-2xl">
            <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
          </button>
        </div>
      </div>

      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-800/50">
            {{ link.text }}
          </a>
        </div>
      </transition>
    </header>

    <section id="home" class="relative pt-32 pb-20 overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 animate-fade-in-up">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            v2.0 is now live
          </div>

          <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100">
            Accelerate your <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">development workflow</span>
          </h1>

          <p class="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Platform manajemen proyek yang didesain untuk kecepatan. 
            Tanpa loading, tanpa gangguan. Fokus pada apa yang penting: pengiriman kode.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <button @click="handleConsultation" class="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2">
              Start Building Free
              <Icon icon="mdi:lightning-bolt" />
            </button>
            <button @click="handleDemo" class="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group">
              <Icon icon="mdi:play-circle" class="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              Watch Demo
            </button>
          </div>

          <div class="mt-20 relative animate-fade-in-up delay-500">
            <div class="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10 rounded-full"></div>
            <div class="bg-zinc-900 border border-white/10 rounded-xl p-2 shadow-2xl">
              <div class="bg-zinc-950 rounded-lg overflow-hidden border border-white/5 aspect-video relative flex items-center justify-center group cursor-default">
                <div class="absolute top-0 left-0 w-full h-8 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div class="text-center">
                  <Icon icon="mdi:view-dashboard-variant" class="text-6xl text-zinc-800 mb-4 group-hover:text-emerald-500/50 transition-colors duration-500" />
                  <p class="text-zinc-700 font-mono text-sm">Dashboard Interface Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 border-y border-white/5 bg-white/[0.02]">
      <div class="container mx-auto px-6 text-center">
        <p class="text-xs text-zinc-500 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div v-for="i in 5" :key="i" class="flex items-center gap-2 text-zinc-300 font-bold text-xl">
            <Icon icon="mdi:checkbox-blank-circle" class="text-emerald-500 text-xs" /> COMPANY_{{ i }}
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Designed for Focus</h2>
          <p class="text-zinc-400 text-lg">Hilangkan noise. VeloCity memberikan alat yang Anda butuhkan tanpa kerumitan yang tidak perlu.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <div class="md:col-span-2 row-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
            <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <Icon icon="mdi:rocket-launch" class="text-9xl text-emerald-500" />
            </div>
            <div class="relative z-10 h-full flex flex-col justify-end">
              <div class="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                <Icon icon="mdi:speedometer" class="text-2xl" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Real-time Performance</h3>
              <p class="text-zinc-400 max-w-sm">Sinkronisasi data instan di seluruh perangkat. Tidak ada tombol refresh, semua terjadi secara real-time.</p>
            </div>
          </div>

          <div class="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group">
            <Icon icon="mdi:keyboard-variant" class="text-4xl text-zinc-500 group-hover:text-emerald-400 mb-6 transition-colors" />
            <h3 class="text-xl font-bold text-white mb-2">Keyboard First</h3>
            <p class="text-zinc-400 text-sm">Navigasi seluruh aplikasi tanpa menyentuh mouse. Shortcuts untuk segalanya.</p>
          </div>

          <div class="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group">
            <Icon icon="mdi:shield-check" class="text-4xl text-zinc-500 group-hover:text-emerald-400 mb-6 transition-colors" />
            <h3 class="text-xl font-bold text-white mb-2">Enterprise Security</h3>
            <p class="text-zinc-400 text-sm">SSO, Audit Logs, dan enkripsi end-to-end standar industri.</p>
          </div>

          <div class="md:col-span-2 bg-gradient-to-br from-emerald-900/20 to-zinc-900/50 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-emerald-500/50 transition-colors">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-2">Automated Workflows</h3>
              <p class="text-zinc-400 mb-6">Biarkan bot mengerjakan tugas repetitif. Integrasi dengan GitHub, GitLab, dan Slack.</p>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-white/5">GitHub</span>
                <span class="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-white/5">Slack</span>
                <span class="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-white/5">Discord</span>
              </div>
            </div>
            <div class="w-full md:w-1/3 bg-zinc-950 rounded-xl border border-white/10 p-4 font-mono text-xs text-emerald-400 shadow-xl group-hover:translate-x-2 transition-transform">
              > init workflow...<br/>
              > connecting hooks...<br/>
              > success!
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <p class="text-zinc-400">Mulai gratis, upgrade saat tim Anda berkembang.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-colors">
            <h3 class="text-lg font-medium text-white mb-2">Starter</h3>
            <div class="text-3xl font-bold text-white mb-6">$0 <span class="text-sm font-normal text-zinc-500">/bulan</span></div>
            <ul class="space-y-4 mb-8 text-zinc-400 text-sm">
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Up to 5 members</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Community Support</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Basic Features</li>
            </ul>
            <button @click="handleConsultation" class="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors font-medium">Start Free</button>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900 border border-emerald-500/50 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] relative">
            <div class="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
            <h3 class="text-lg font-medium text-white mb-2">Pro</h3>
            <div class="text-3xl font-bold text-white mb-6">$29 <span class="text-sm font-normal text-zinc-500">/bulan</span></div>
            <ul class="space-y-4 mb-8 text-zinc-300 text-sm">
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Unlimited members</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Priority Support</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Advanced Analytics</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Custom Workflows</li>
            </ul>
            <button @click="handleConsultation" class="w-full py-3 rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors font-bold">Get Started</button>
          </div>

          <div class="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-colors">
            <h3 class="text-lg font-medium text-white mb-2">Enterprise</h3>
            <div class="text-3xl font-bold text-white mb-6">Custom</div>
            <ul class="space-y-4 mb-8 text-zinc-400 text-sm">
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> Dedicated Success Manager</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> SLA Guarantee</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-emerald-500" /> SSO & Audit Logs</li>
            </ul>
            <button @click="handleConsultation" class="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors font-medium">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to speed up?</h2>
        <p class="text-zinc-400 mb-10 max-w-xl mx-auto">Bergabunglah dengan ribuan developer yang membangun masa depan dengan VeloCity.</p>
        <button @click="handleConsultation" class="px-10 py-4 bg-white text-zinc-950 font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto">
          <Icon icon="mdi:whatsapp" class="text-xl" />
          Talk to Sales
        </button>
      </div>
    </section>

    <footer class="border-t border-white/10 py-12 bg-zinc-950">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-emerald-500 rounded"></div>
          <span class="font-bold text-white">VeloCity Inc.</span>
        </div>
        <div class="flex gap-8 text-sm text-zinc-500">
          <a href="#" class="hover:text-white transition-colors">Documentation</a>
          <a href="#" class="hover:text-white transition-colors">API</a>
          <a href="#" class="hover:text-white transition-colors">Privacy</a>
          <a href="#" class="hover:text-white transition-colors">Terms</a>
        </div>
        <div class="text-zinc-600 text-sm">
          &copy; 2025. All systems operational. <span class="text-zinc-500">Built by <span class="font-semibold text-cyan-400">Landingo</span></span>
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
  { text: 'Features', href: '#features' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'Changelog', href: '#' },
  { text: 'Docs', href: '#' },
];

// Logic Scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// WA Integration
const whatsappBase = '6285183077289';

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik dengan VeloCity (Tech Product). Ingin diskusi tentang pembuatan landing page SaaS seperti ini.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleDemo = () => {
  const msg = encodeURIComponent('Halo! Saya ingin melihat demo lebih lanjut dari template SaaS VeloCity.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};
</script>

<style scoped>
/* Utility animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
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

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; }

/* Mobile Menu Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>