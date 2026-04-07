import '@iconify/vue';
import { resolveComponent, mergeProps, ref, onMounted, onUnmounted, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
/* empty css                         */
import { _ as _export_sfc } from './_plugin-vue_export-helper_3u2nmVn1.mjs';

const whatsappBase = '6285183077289';


const _sfc_main = {
  __name: 'TechProduct',
  setup(__props, { expose: __expose }) {
  __expose();

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

const __returned__ = { isMobileMenuOpen, isScrolled, navLinks, features, handleScroll, whatsappBase, handleConsultation, handleDemo, handleLogin, ref, onMounted, onUnmounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "font-sans antialiased text-slate-600 bg-slate-50 selection:bg-indigo-500 selection:text-white" }, _attrs))
  } data-v-47ff2b6e><header class="${
    ssrRenderClass([$setup.isScrolled ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5', "fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent"])
  }" data-v-47ff2b6e><div class="container mx-auto px-6 flex items-center justify-between" data-v-47ff2b6e><a href="#" class="flex items-center gap-2 group" data-v-47ff2b6e><div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:layers-triple",
    class: "text-xl"
  }, null, _parent));
  _push(`</div><span class="font-bold text-xl text-slate-900 tracking-tight" data-v-47ff2b6e>WorkFlow</span></a><nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" data-v-47ff2b6e><a href="#features" class="hover:text-indigo-600 transition-colors" data-v-47ff2b6e>Features</a><a href="#solutions" class="hover:text-indigo-600 transition-colors" data-v-47ff2b6e>Solutions</a><a href="#pricing" class="hover:text-indigo-600 transition-colors" data-v-47ff2b6e>Pricing</a><a href="#resources" class="hover:text-indigo-600 transition-colors" data-v-47ff2b6e>Resources</a></nav><div class="flex items-center gap-4" data-v-47ff2b6e><button class="hidden md:block text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" data-v-47ff2b6e> Sign In </button><button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5" data-v-47ff2b6e> Get Started Free </button><button class="md:hidden text-2xl text-slate-900" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: $setup.isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'
  }, null, _parent));
  _push(`</button></div></div>`);
  if ($setup.isMobileMenuOpen) {
    _push(`<div class="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden p-4 flex flex-col gap-2" data-v-47ff2b6e><!--[-->`);
    ssrRenderList($setup.navLinks, (link) => {
      _push(`<a${
        ssrRenderAttr("href", link.href)
      } class="block px-4 py-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700" data-v-47ff2b6e>${
        ssrInterpolate(link.text)
      }</a>`);
    });
    _push(`<!--]--><div class="border-t border-slate-100 my-2 pt-2" data-v-47ff2b6e><button class="w-full py-3 text-center font-medium text-slate-600" data-v-47ff2b6e>Sign In</button><button class="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold mt-2" data-v-47ff2b6e>Get Started</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header><section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white" data-v-47ff2b6e><div class="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] opacity-40" data-v-47ff2b6e></div><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl -z-10" data-v-47ff2b6e></div><div class="container mx-auto px-6 text-center relative z-10" data-v-47ff2b6e><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-8 animate-fade-in-up" data-v-47ff2b6e><span class="flex h-2 w-2 rounded-full bg-indigo-600" data-v-47ff2b6e></span> New: AI-Powered Automation v2.0 </div><h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1] animate-fade-in-up delay-100" data-v-47ff2b6e> Simplify work and <br data-v-47ff2b6e><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600" data-v-47ff2b6e>get more done.</span></h1><p class="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200" data-v-47ff2b6e> WorkFlow menghubungkan tim, alat, dan proses kerja Anda dalam satu platform cerdas. Tingkatkan produktivitas tim hingga 30% dalam minggu pertama. </p><div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300" data-v-47ff2b6e><button class="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2" data-v-47ff2b6e> Start Free Trial `);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:arrow-right" }, null, _parent));
  _push(`</button><button class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center justify-center gap-2" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:play-circle-outline",
    class: "text-xl"
  }, null, _parent));
  _push(` Watch Demo </button></div><p class="mt-6 text-sm text-slate-400" data-v-47ff2b6e>No credit card required • 14-day free trial</p><div class="mt-16 relative mx-auto max-w-5xl animate-fade-in-up delay-500 perspective-1000" data-v-47ff2b6e><div class="relative rounded-2xl border border-slate-200 bg-white/50 backdrop-blur shadow-2xl p-2 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700" data-v-47ff2b6e><div class="rounded-xl overflow-hidden bg-slate-100 aspect-[16/9] relative" data-v-47ff2b6e><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" class="w-full h-full object-cover" alt="Dashboard UI" data-v-47ff2b6e><div class="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 animate-float" data-v-47ff2b6e><div class="flex items-center gap-3" data-v-47ff2b6e><div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:check-bold" }, null, _parent));
  _push(`</div><div data-v-47ff2b6e><p class="text-xs text-slate-500 font-bold uppercase" data-v-47ff2b6e>Task Completed</p><p class="font-bold text-slate-900" data-v-47ff2b6e>Project Alpha</p></div></div></div></div></div></div></div></section><section class="py-12 bg-white border-b border-slate-100" data-v-47ff2b6e><div class="container mx-auto px-6 text-center" data-v-47ff2b6e><p class="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8" data-v-47ff2b6e>Trusted by 10,000+ companies worldwide</p><div class="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" data-v-47ff2b6e><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="flex items-center gap-2 text-2xl font-bold font-sans text-slate-800" data-v-47ff2b6e>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:checkbox-blank-circle",
      class: "text-indigo-600 text-xs"
    }, null, _parent));
    _push(` LOGO_IPSUM </div>`);
  });
  _push(`<!--]--></div></div></section><section id="features" class="py-24 bg-slate-50" data-v-47ff2b6e><div class="container mx-auto px-6" data-v-47ff2b6e><div class="text-center max-w-2xl mx-auto mb-20" data-v-47ff2b6e><h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4" data-v-47ff2b6e>Everything you need to run your business</h2><p class="text-lg text-slate-500" data-v-47ff2b6e>Powerful features built for modern teams.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-47ff2b6e><!--[-->`);
  ssrRenderList($setup.features, (feature, idx) => {
    _push(`<div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" data-v-47ff2b6e><div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors" data-v-47ff2b6e>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: feature.icon,
      class: "text-2xl"
    }, null, _parent));
    _push(`</div><h3 class="text-xl font-bold text-slate-900 mb-3" data-v-47ff2b6e>${
      ssrInterpolate(feature.title)
    }</h3><p class="text-slate-500 leading-relaxed" data-v-47ff2b6e>${
      ssrInterpolate(feature.desc)
    }</p></div>`);
  });
  _push(`<!--]--></div></div></section><section class="py-24 bg-white overflow-hidden" data-v-47ff2b6e><div class="container mx-auto px-6" data-v-47ff2b6e><div class="flex flex-col lg:flex-row items-center gap-16" data-v-47ff2b6e><div class="lg:w-1/2" data-v-47ff2b6e><div class="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4" data-v-47ff2b6e>Automation</div><h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6" data-v-47ff2b6e>Automate your busy work.</h2><p class="text-lg text-slate-500 mb-8 leading-relaxed" data-v-47ff2b6e> Stop wasting time on manual data entry. Create custom workflows that trigger automatically based on your rules. </p><ul class="space-y-4" data-v-47ff2b6e><li class="flex items-start gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check-circle",
    class: "text-green-500 text-xl mt-1"
  }, null, _parent));
  _push(`<span class="text-slate-700 font-medium" data-v-47ff2b6e>Trigger actions across 50+ apps</span></li><li class="flex items-start gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check-circle",
    class: "text-green-500 text-xl mt-1"
  }, null, _parent));
  _push(`<span class="text-slate-700 font-medium" data-v-47ff2b6e>No-code visual builder</span></li><li class="flex items-start gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check-circle",
    class: "text-green-500 text-xl mt-1"
  }, null, _parent));
  _push(`<span class="text-slate-700 font-medium" data-v-47ff2b6e>Real-time sync</span></li></ul></div><div class="lg:w-1/2 relative" data-v-47ff2b6e><div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl rotate-3 opacity-20 blur-lg" data-v-47ff2b6e></div><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" class="relative rounded-2xl shadow-2xl border border-slate-200 z-10" alt="Automation Interface" data-v-47ff2b6e></div></div></div></section><section id="pricing" class="py-24 bg-slate-900 text-white" data-v-47ff2b6e><div class="container mx-auto px-6" data-v-47ff2b6e><div class="text-center max-w-2xl mx-auto mb-16" data-v-47ff2b6e><h2 class="text-3xl lg:text-4xl font-extrabold mb-4" data-v-47ff2b6e>Simple, transparent pricing</h2><p class="text-slate-400" data-v-47ff2b6e>No hidden fees. Cancel anytime.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-v-47ff2b6e><div class="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors" data-v-47ff2b6e><h3 class="text-xl font-bold mb-2" data-v-47ff2b6e>Starter</h3><div class="text-4xl font-bold mb-1" data-v-47ff2b6e>\$29<span class="text-sm font-normal text-slate-400" data-v-47ff2b6e>/mo</span></div><p class="text-sm text-slate-400 mb-6" data-v-47ff2b6e>Perfect for small teams.</p><button class="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors" data-v-47ff2b6e>Choose Starter</button><ul class="mt-8 space-y-4 text-sm text-slate-300" data-v-47ff2b6e><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-indigo-400"
  }, null, _parent));
  _push(` 5 Team Members</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-indigo-400"
  }, null, _parent));
  _push(` Basic Analytics</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-indigo-400"
  }, null, _parent));
  _push(` 10GB Storage</li></ul></div><div class="bg-indigo-600 p-8 rounded-2xl border border-indigo-500 shadow-2xl transform scale-105 relative z-10" data-v-47ff2b6e><div class="absolute top-0 right-0 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg" data-v-47ff2b6e>POPULAR</div><h3 class="text-xl font-bold mb-2" data-v-47ff2b6e>Professional</h3><div class="text-4xl font-bold mb-1" data-v-47ff2b6e>\$79<span class="text-sm font-normal text-indigo-200" data-v-47ff2b6e>/mo</span></div><p class="text-sm text-indigo-200 mb-6" data-v-47ff2b6e>For growing businesses.</p><button class="w-full py-3 bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg font-bold transition-colors" data-v-47ff2b6e>Choose Pro</button><ul class="mt-8 space-y-4 text-sm text-white" data-v-47ff2b6e><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:check" }, null, _parent));
  _push(` Unlimited Members</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:check" }, null, _parent));
  _push(` Advanced Reporting</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:check" }, null, _parent));
  _push(` 1TB Storage</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:check" }, null, _parent));
  _push(` Priority Support</li></ul></div><div class="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors" data-v-47ff2b6e><h3 class="text-xl font-bold mb-2" data-v-47ff2b6e>Enterprise</h3><div class="text-4xl font-bold mb-1" data-v-47ff2b6e>Custom</div><p class="text-sm text-slate-400 mb-6" data-v-47ff2b6e>For large organizations.</p><button class="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors" data-v-47ff2b6e>Contact Sales</button><ul class="mt-8 space-y-4 text-sm text-slate-300" data-v-47ff2b6e><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-indigo-400"
  }, null, _parent));
  _push(` SSO &amp; SAML</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-indigo-400"
  }, null, _parent));
  _push(` Dedicated Manager</li><li class="flex gap-3" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-indigo-400"
  }, null, _parent));
  _push(` Custom SLA</li></ul></div></div></div></section><footer class="bg-white border-t border-slate-200 pt-16 pb-8" data-v-47ff2b6e><div class="container mx-auto px-6" data-v-47ff2b6e><div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12" data-v-47ff2b6e><div class="col-span-2" data-v-47ff2b6e><a href="#" class="flex items-center gap-2 mb-4" data-v-47ff2b6e><div class="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:layers-triple" }, null, _parent));
  _push(`</div><span class="font-bold text-lg text-slate-900" data-v-47ff2b6e>WorkFlow</span></a><p class="text-slate-500 text-sm leading-relaxed max-w-xs" data-v-47ff2b6e> Making work flow better for teams everywhere. Built with ❤️ in San Francisco. </p></div><div data-v-47ff2b6e><h4 class="font-bold text-slate-900 mb-4 text-sm" data-v-47ff2b6e>Product</h4><ul class="space-y-2 text-sm text-slate-500" data-v-47ff2b6e><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Features</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Integrations</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Pricing</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Changelog</a></li></ul></div><div data-v-47ff2b6e><h4 class="font-bold text-slate-900 mb-4 text-sm" data-v-47ff2b6e>Company</h4><ul class="space-y-2 text-sm text-slate-500" data-v-47ff2b6e><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>About</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Careers</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Blog</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Contact</a></li></ul></div><div data-v-47ff2b6e><h4 class="font-bold text-slate-900 mb-4 text-sm" data-v-47ff2b6e>Legal</h4><ul class="space-y-2 text-sm text-slate-500" data-v-47ff2b6e><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Privacy</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Terms</a></li><li data-v-47ff2b6e><a href="#" class="hover:text-indigo-600" data-v-47ff2b6e>Security</a></li></ul></div></div><div class="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400" data-v-47ff2b6e><p data-v-47ff2b6e>© 2025 WorkFlow Inc. <span class="text-slate-500" data-v-47ff2b6e>Built by <span class="font-semibold text-blue-600" data-v-47ff2b6e>Landingo</span></span></p><div class="flex gap-4 mt-4 md:mt-0" data-v-47ff2b6e><a href="#" class="hover:text-slate-600" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:twitter" }, null, _parent));
  _push(`</a><a href="#" class="hover:text-slate-600" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:github" }, null, _parent));
  _push(`</a><a href="#" class="hover:text-slate-600" data-v-47ff2b6e>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:linkedin" }, null, _parent));
  _push(`</a></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/previews/TechProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const TechProduct = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-47ff2b6e"]]);

export { TechProduct as default };
//# sourceMappingURL=TechProduct_DTAaHA-u.mjs.map
