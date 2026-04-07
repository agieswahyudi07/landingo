import '@iconify/vue';
import { resolveComponent, mergeProps, ref, onMounted, onUnmounted, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
/* empty css                         */
import { _ as _export_sfc } from './_plugin-vue_export-helper_3u2nmVn1.mjs';

const whatsappBase = '6285183077289';

const _sfc_main = {
  __name: 'ProductLaunch',
  setup(__props, { expose: __expose }) {
  __expose();

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

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik dengan konsep "Dark Tech SaaS" ini. Saya ingin membuat landing page product launch dengan gaya futuristik seperti ini.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const __returned__ = { isMobileMenuOpen, countdown, benefits, get interval() { return interval }, set interval(v) { interval = v; }, updateCountdown, scrollToSection, whatsappBase, handleConsultation, ref, onMounted, onUnmounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-[#050505] text-slate-300 selection:bg-cyan-500 selection:text-black min-h-screen" }, _attrs))} data-v-6fdc53c1><div class="fixed inset-0 z-0 pointer-events-none" data-v-6fdc53c1><div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" data-v-6fdc53c1></div><div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" data-v-6fdc53c1></div></div><header class="fixed w-full top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl" data-v-6fdc53c1><div class="container mx-auto px-6 h-16 flex items-center justify-between" data-v-6fdc53c1><a href="#" class="flex items-center gap-2 group" data-v-6fdc53c1><div class="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center text-black font-bold text-lg relative overflow-hidden" data-v-6fdc53c1><span class="relative z-10" data-v-6fdc53c1>T</span><div class="absolute inset-0 bg-white/50 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" data-v-6fdc53c1></div></div><span class="font-bold text-white tracking-tight" data-v-6fdc53c1>TECH<span class="text-cyan-500" data-v-6fdc53c1>LAUNCH</span>_v1.0</span></a><nav class="hidden md:flex items-center gap-8 text-sm font-medium font-mono" data-v-6fdc53c1><a href="#features" class="hover:text-cyan-400 transition-colors" data-v-6fdc53c1>/FEATURES</a><a href="#specs" class="hover:text-cyan-400 transition-colors" data-v-6fdc53c1>/SPECS</a><a href="#pricing" class="hover:text-cyan-400 transition-colors" data-v-6fdc53c1>/PRE-ORDER</a></nav><div class="flex items-center gap-4" data-v-6fdc53c1><button class="hidden md:flex px-5 py-2 border border-white/20 hover:border-cyan-500 hover:text-cyan-400 text-xs font-mono rounded transition-all shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" data-v-6fdc53c1> JOIN_WAITLIST </button><button class="md:hidden text-white" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:menu",
    class: "text-2xl"
  }, null, _parent));
  _push(`</button></div></div></header><section class="relative pt-32 pb-20 overflow-hidden" data-v-6fdc53c1><div class="container mx-auto px-6 relative z-10 text-center" data-v-6fdc53c1><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-8 animate-fade-in-down" data-v-6fdc53c1><span class="relative flex h-2 w-2" data-v-6fdc53c1><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" data-v-6fdc53c1></span><span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" data-v-6fdc53c1></span></span> SYSTEM_ONLINE :: COUNTDOWN INITIATED </div><h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-none" data-v-6fdc53c1> THE FUTURE IS <br data-v-6fdc53c1><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient" data-v-6fdc53c1>PROGRAMMABLE</span></h1><p class="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed" data-v-6fdc53c1> Platform revolusioner yang mendefinisikan ulang batas produktivitas. <br data-v-6fdc53c1><span class="text-white font-mono bg-white/5 px-1" data-v-6fdc53c1>Dibuat untuk para visioner.</span></p><div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12" data-v-6fdc53c1><!--[-->`);
  ssrRenderList($setup.countdown, (time, index) => {
    _push(`<div class="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm group hover:border-cyan-500/50 transition-colors" data-v-6fdc53c1><div class="text-4xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors" data-v-6fdc53c1>${
      ssrInterpolate(time.value)
    }</div><div class="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-1" data-v-6fdc53c1>${
      ssrInterpolate(time.label)
    }</div></div>`);
  });
  _push(`<!--]--></div><div class="flex flex-col sm:flex-row justify-center gap-4" data-v-6fdc53c1><button class="px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:rocket-launch",
    class: "group-hover:-translate-y-1 transition-transform"
  }, null, _parent));
  _push(` SECURE ACCESS </button><button class="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:play-circle" }, null, _parent));
  _push(` WATCH DEMO </button></div></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" data-v-6fdc53c1></div></section><section id="demo" class="py-12 perspective-1000" data-v-6fdc53c1><div class="container mx-auto px-6" data-v-6fdc53c1><div class="relative max-w-5xl mx-auto transform rotate-x-12 shadow-2xl border border-white/10 rounded-xl bg-[#0F0F0F] overflow-hidden group" data-v-6fdc53c1><div class="h-8 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2" data-v-6fdc53c1><div class="w-3 h-3 rounded-full bg-red-500/50" data-v-6fdc53c1></div><div class="w-3 h-3 rounded-full bg-yellow-500/50" data-v-6fdc53c1></div><div class="w-3 h-3 rounded-full bg-green-500/50" data-v-6fdc53c1></div><div class="ml-4 text-[10px] text-slate-500 font-mono" data-v-6fdc53c1>dashboard.sys</div></div><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Dashboard" class="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" data-v-6fdc53c1><div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[100px] w-full animate-scan pointer-events-none" data-v-6fdc53c1></div></div></div></section><section id="features" class="py-24" data-v-6fdc53c1><div class="container mx-auto px-6" data-v-6fdc53c1><div class="flex flex-col md:flex-row justify-between items-end mb-16" data-v-6fdc53c1><div data-v-6fdc53c1><h2 class="text-3xl md:text-5xl font-bold text-white mb-2" data-v-6fdc53c1>SYSTEM <span class="text-cyan-500" data-v-6fdc53c1>CAPABILITIES</span></h2><p class="text-slate-400" data-v-6fdc53c1>Arsitektur tingkat lanjut untuk performa maksimal.</p></div><div class="font-mono text-xs text-cyan-500 mt-4 md:mt-0" data-v-6fdc53c1> // SCROLL_TO_EXPLORE </div></div><div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]" data-v-6fdc53c1><div class="md:col-span-2 md:row-span-2 bg-[#111] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors" data-v-6fdc53c1><div class="absolute top-0 right-0 p-4 opacity-20" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:cpu-64-bit",
    class: "text-9xl text-cyan-500"
  }, null, _parent));
  _push(`</div><div class="relative z-10 h-full flex flex-col justify-end" data-v-6fdc53c1><div class="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center mb-4" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:lightning-bolt",
    class: "text-2xl"
  }, null, _parent));
  _push(`</div><h3 class="text-2xl font-bold text-white mb-2" data-v-6fdc53c1>Quantum Processing</h3><p class="text-slate-400" data-v-6fdc53c1>Kecepatan pemrosesan data real-time dengan latensi nol. Menggunakan engine proprietary terbaru.</p></div></div><div class="bg-[#111] border border-white/10 rounded-2xl p-6 hover:bg-[#151515] transition-colors group" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:shield-lock",
    class: "text-3xl text-purple-500 mb-4 group-hover:animate-pulse"
  }, null, _parent));
  _push(`<h3 class="text-lg font-bold text-white mb-2" data-v-6fdc53c1>E2E Encryption</h3><p class="text-sm text-slate-400" data-v-6fdc53c1>Keamanan militer grade A.</p></div><div class="bg-[#111] border border-white/10 rounded-2xl p-6 hover:bg-[#151515] transition-colors" data-v-6fdc53c1>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:cloud-sync",
    class: "text-3xl text-blue-500 mb-4"
  }, null, _parent));
  _push(`<h3 class="text-lg font-bold text-white mb-2" data-v-6fdc53c1>Neural Sync</h3><p class="text-sm text-slate-400" data-v-6fdc53c1>Sinkronisasi data antar dimensi.</p></div><div class="md:col-span-2 bg-[#111] border border-white/10 rounded-2xl p-6 flex items-center gap-6 relative overflow-hidden" data-v-6fdc53c1><div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent" data-v-6fdc53c1></div><div class="relative z-10" data-v-6fdc53c1><h3 class="text-xl font-bold text-white mb-2" data-v-6fdc53c1>API First Architecture</h3><p class="text-sm text-slate-400 mb-4" data-v-6fdc53c1>Integrasikan dengan stack apapun. Python, Node, Go, Rust.</p><div class="font-mono text-xs bg-black p-3 rounded text-green-400 border border-white/10" data-v-6fdc53c1> \$ npm install @techlaunch/core </div></div></div></div></div></section><section id="pricing" class="py-24 relative overflow-hidden" data-v-6fdc53c1><div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none" data-v-6fdc53c1></div><div class="container mx-auto px-6 relative z-10" data-v-6fdc53c1><div class="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-1 md:p-1 relative" data-v-6fdc53c1><div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 blur-xl animate-gradient" data-v-6fdc53c1></div><div class="bg-[#0a0a0a] rounded-[22px] p-8 md:p-16 relative z-10 text-center" data-v-6fdc53c1><div class="inline-block bg-white text-black text-xs font-bold px-3 py-1 mb-6 uppercase tracking-wider" data-v-6fdc53c1> Limited Founder Edition </div><h2 class="text-4xl md:text-5xl font-black text-white mb-6" data-v-6fdc53c1>LIFETIME ACCESS</h2><div class="flex items-baseline justify-center gap-2 mb-8" data-v-6fdc53c1><span class="text-6xl font-mono text-cyan-400" data-v-6fdc53c1>Rp999k</span><span class="text-xl text-slate-600 line-through decoration-red-500" data-v-6fdc53c1>Rp2.5jt</span></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10" data-v-6fdc53c1><!--[-->`);
  ssrRenderList($setup.benefits, (item) => {
    _push(`<div class="flex items-center gap-3 text-slate-300" data-v-6fdc53c1>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:check-circle",
      class: "text-cyan-500"
    }, null, _parent));
    _push(`<span data-v-6fdc53c1>${ssrInterpolate(item)}</span></div>`);
  });
  _push(`<!--]--></div><button class="w-full md:w-auto px-12 py-5 bg-white text-black font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]" data-v-6fdc53c1> CLAIM YOUR SPOT </button><p class="mt-4 text-xs text-slate-500 font-mono" data-v-6fdc53c1>Hanya tersisa 14 slot untuk harga ini.</p></div></div></div></section><footer class="border-t border-white/10 bg-[#050505] pt-12 pb-6 font-mono text-xs" data-v-6fdc53c1><div class="container mx-auto px-6" data-v-6fdc53c1><div class="flex flex-col md:flex-row justify-between items-center gap-6" data-v-6fdc53c1><div class="flex items-center gap-2 text-white" data-v-6fdc53c1><div class="w-4 h-4 bg-cyan-500" data-v-6fdc53c1></div><span data-v-6fdc53c1>TECHLAUNCH INC. © 2025</span><span class="text-slate-500 ml-4" data-v-6fdc53c1>Built by <span class="font-semibold text-cyan-400" data-v-6fdc53c1>Landingo</span></span></div><div class="flex gap-8 text-slate-500" data-v-6fdc53c1><a href="#" class="hover:text-white" data-v-6fdc53c1>STATUS</a><a href="#" class="hover:text-white" data-v-6fdc53c1>CHANGELOG</a><a href="#" class="hover:text-white" data-v-6fdc53c1>LEGAL</a></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/previews/ProductLaunch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const ProductLaunch = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6fdc53c1"]]);

export { ProductLaunch as default };
//# sourceMappingURL=ProductLaunch_BjJdBuhg.mjs.map
