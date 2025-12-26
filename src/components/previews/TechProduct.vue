<template>
  <div class="font-sans antialiased text-slate-600 bg-slate-50 selection:bg-indigo-500 selection:text-white">
    
    <header 
      class="fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent"
      :class="isScrolled ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
            <Icon icon="mdi:layers-triple" class="text-xl" />
          </div>
          <span class="font-bold text-xl text-slate-900 tracking-tight">WorkFlow</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" class="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#solutions" class="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#pricing" class="hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#resources" class="hover:text-indigo-600 transition-colors">Resources</a>
        </nav>

        <div class="flex items-center gap-4">
          <button @click="handleLogin" class="hidden md:block text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Sign In
          </button>
          <button @click="handleConsultation" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5">
            Get Started Free
          </button>
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-2xl text-slate-900">
            <Icon :icon="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'" />
          </button>
        </div>
      </div>

      <transition name="slide-fade">
        <div v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden p-4 flex flex-col gap-2">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isMobileMenuOpen = false" class="block px-4 py-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700">
            {{ link.text }}
          </a>
          <div class="border-t border-slate-100 my-2 pt-2">
            <button class="w-full py-3 text-center font-medium text-slate-600">Sign In</button>
            <button @click="handleConsultation" class="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold mt-2">Get Started</button>
          </div>
        </div>
      </transition>
    </header>

    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div class="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl -z-10"></div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-8 animate-fade-in-up">
          <span class="flex h-2 w-2 rounded-full bg-indigo-600"></span>
          New: AI-Powered Automation v2.0
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] animate-fade-in-up delay-100">
          Simplify work and <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">get more done.</span>
        </h1>
        
        <p class="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          WorkFlow menghubungkan tim, alat, dan proses kerja Anda dalam satu platform cerdas. Tingkatkan produktivitas tim hingga 30% dalam minggu pertama.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <button 
            @click="handleConsultation"
            class="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Start Free Trial
            <Icon icon="mdi:arrow-right" />
          </button>
          <button 
            @click="handleDemo"
            class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:play-circle-outline" class="text-xl" />
            Watch Demo
          </button>
        </div>

        <p class="mt-6 text-sm text-slate-400">No credit card required • 14-day free trial</p>

        <div class="mt-16 relative mx-auto max-w-5xl animate-fade-in-up delay-500 perspective-1000">
          <div class="relative rounded-2xl border border-slate-200 bg-white/50 backdrop-blur shadow-2xl p-2 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700">
            <div class="rounded-xl overflow-hidden bg-slate-100 aspect-[16/9] relative">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover" alt="Dashboard UI" />
               <div class="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 animate-float">
                 <div class="flex items-center gap-3">
                   <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                     <Icon icon="mdi:check-bold" />
                   </div>
                   <div>
                     <p class="text-xs text-slate-500 font-bold uppercase">Task Completed</p>
                     <p class="font-bold text-slate-900">Project Alpha</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-b border-slate-100">
      <div class="container mx-auto px-6 text-center">
        <p class="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by 10,000+ companies worldwide</p>
        <div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div v-for="i in 5" :key="i" class="flex items-center gap-2 text-2xl font-bold font-sans text-slate-800">
            <Icon icon="mdi:checkbox-blank-circle" class="text-indigo-600 text-xs" /> LOGO_IPSUM
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="py-24 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-20">
          <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Everything you need to run your business</h2>
          <p class="text-lg text-slate-500">Powerful features built for modern teams.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, idx) in features" :key="idx" class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Icon :icon="feature.icon" class="text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ feature.title }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <div class="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4">Automation</div>
            <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Automate your busy work.</h2>
            <p class="text-lg text-slate-500 mb-8 leading-relaxed">
              Stop wasting time on manual data entry. Create custom workflows that trigger automatically based on your rules.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Icon icon="mdi:check-circle" class="text-green-500 text-xl mt-1" />
                <span class="text-slate-700 font-medium">Trigger actions across 50+ apps</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon icon="mdi:check-circle" class="text-green-500 text-xl mt-1" />
                <span class="text-slate-700 font-medium">No-code visual builder</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon icon="mdi:check-circle" class="text-green-500 text-xl mt-1" />
                <span class="text-slate-700 font-medium">Real-time sync</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" class="relative rounded-2xl shadow-2xl border border-slate-200 z-10" alt="Automation Interface" />
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-extrabold mb-4">Simple, transparent pricing</h2>
          <p class="text-slate-400">No hidden fees. Cancel anytime.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
            <h3 class="text-xl font-bold mb-2">Starter</h3>
            <div class="text-4xl font-bold mb-1">$29<span class="text-sm font-normal text-slate-400">/mo</span></div>
            <p class="text-sm text-slate-400 mb-6">Perfect for small teams.</p>
            <button @click="handleConsultation" class="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors">Choose Starter</button>
            <ul class="mt-8 space-y-4 text-sm text-slate-300">
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-indigo-400" /> 5 Team Members</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-indigo-400" /> Basic Analytics</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-indigo-400" /> 10GB Storage</li>
            </ul>
          </div>

          <div class="bg-indigo-600 p-8 rounded-2xl border border-indigo-500 shadow-2xl transform scale-105 relative z-10">
            <div class="absolute top-0 right-0 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <h3 class="text-xl font-bold mb-2">Professional</h3>
            <div class="text-4xl font-bold mb-1">$79<span class="text-sm font-normal text-indigo-200">/mo</span></div>
            <p class="text-sm text-indigo-200 mb-6">For growing businesses.</p>
            <button @click="handleConsultation" class="w-full py-3 bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg font-bold transition-colors">Choose Pro</button>
            <ul class="mt-8 space-y-4 text-sm text-white">
              <li class="flex gap-3"><Icon icon="mdi:check" /> Unlimited Members</li>
              <li class="flex gap-3"><Icon icon="mdi:check" /> Advanced Reporting</li>
              <li class="flex gap-3"><Icon icon="mdi:check" /> 1TB Storage</li>
              <li class="flex gap-3"><Icon icon="mdi:check" /> Priority Support</li>
            </ul>
          </div>

          <div class="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
            <h3 class="text-xl font-bold mb-2">Enterprise</h3>
            <div class="text-4xl font-bold mb-1">Custom</div>
            <p class="text-sm text-slate-400 mb-6">For large organizations.</p>
            <button @click="handleConsultation" class="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors">Contact Sales</button>
            <ul class="mt-8 space-y-4 text-sm text-slate-300">
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-indigo-400" /> SSO & SAML</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-indigo-400" /> Dedicated Manager</li>
              <li class="flex gap-3"><Icon icon="mdi:check" class="text-indigo-400" /> Custom SLA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-white border-t border-slate-200 pt-16 pb-8">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div class="col-span-2">
            <a href="#" class="flex items-center gap-2 mb-4">
              <div class="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs">
                <Icon icon="mdi:layers-triple" />
              </div>
              <span class="font-bold text-lg text-slate-900">WorkFlow</span>
            </a>
            <p class="text-slate-500 text-sm leading-relaxed max-w-xs">
              Making work flow better for teams everywhere. Built with ❤️ in San Francisco.
            </p>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 mb-4 text-sm">Product</h4>
            <ul class="space-y-2 text-sm text-slate-500">
              <li><a href="#" class="hover:text-indigo-600">Features</a></li>
              <li><a href="#" class="hover:text-indigo-600">Integrations</a></li>
              <li><a href="#" class="hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" class="hover:text-indigo-600">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 mb-4 text-sm">Company</h4>
            <ul class="space-y-2 text-sm text-slate-500">
              <li><a href="#" class="hover:text-indigo-600">About</a></li>
              <li><a href="#" class="hover:text-indigo-600">Careers</a></li>
              <li><a href="#" class="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" class="hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-slate-900 mb-4 text-sm">Legal</h4>
            <ul class="space-y-2 text-sm text-slate-500">
              <li><a href="#" class="hover:text-indigo-600">Privacy</a></li>
              <li><a href="#" class="hover:text-indigo-600">Terms</a></li>
              <li><a href="#" class="hover:text-indigo-600">Security</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2025 WorkFlow Inc. <span class="text-slate-500">Built by <span class="font-semibold text-blue-600">Landingo</span></span></p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-slate-600"><Icon icon="mdi:twitter" /></a>
            <a href="#" class="hover:text-slate-600"><Icon icon="mdi:github" /></a>
            <a href="#" class="hover:text-slate-600"><Icon icon="mdi:linkedin" /></a>
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

const navLinks = [
  { text: 'Features', href: '#features' },
  { text: 'Solutions', href: '#solutions' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'Resources', href: '#resources' },
];

const features = [
  {
    icon: 'mdi:lightning-bolt',
    title: 'Lightning Fast',
    desc: 'Optimized for speed. Load large projects in milliseconds, not seconds.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Bank-Grade Security',
    desc: 'SOC2 Type II certified. Your data is encrypted at rest and in transit.'
  },
  {
    icon: 'mdi:view-dashboard-variant',
    title: 'Custom Workflows',
    desc: 'Build workflows that match exactly how your team operates.'
  },
  {
    icon: 'mdi:chart-box-outline',
    title: 'Real-time Analytics',
    desc: 'Visualize your team\'s performance with beautiful, interactive charts.'
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Team Collaboration',
    desc: 'Comment, tag, and discuss right within the context of your work.'
  },
  {
    icon: 'mdi:api',
    title: 'Robust API',
    desc: 'Extend functionality with our well-documented developer API.'
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
  const msg = encodeURIComponent('Halo! Saya tertarik dengan WorkFlow SaaS. Bisa diskusi soal enterprise plan atau fitur custom?');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleDemo = () => {
  const msg = encodeURIComponent('Halo, saya ingin request demo untuk platform WorkFlow.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleLogin = () => {
  alert('Redirecting to login page...');
};
</script>

<style scoped>
/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; }

.perspective-1000 {
  perspective: 1000px;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>