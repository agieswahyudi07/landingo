import '@iconify/vue';
import { resolveComponent, mergeProps, ref, onMounted, onUnmounted, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
/* empty css                         */
import { _ as _export_sfc } from './_plugin-vue_export-helper_3u2nmVn1.mjs';

const whatsappBase = '6285183077289';


const _sfc_main = {
  __name: 'TechProductV2',
  setup(__props, { expose: __expose }) {
  __expose();

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
const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik dengan VeloCity (Tech Product). Ingin diskusi tentang pembuatan landing page SaaS seperti ini.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleDemo = () => {
  const msg = encodeURIComponent('Halo! Saya ingin melihat demo lebih lanjut dari template SaaS VeloCity.');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const __returned__ = { isMobileMenuOpen, isScrolled, navLinks, handleScroll, whatsappBase, handleConsultation, handleDemo, ref, onMounted, onUnmounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden" }, _attrs))
  } data-v-d299bd49><div class="fixed inset-0 z-0 pointer-events-none" data-v-d299bd49><div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" data-v-d299bd49></div><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" data-v-d299bd49></div></div><header class="${
    ssrRenderClass([$setup.isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl' : 'bg-transparent', "fixed w-full top-0 z-50 transition-all duration-300 border-b border-white/5"])
  }" data-v-d299bd49><div class="container mx-auto px-6 h-20 flex items-center justify-between" data-v-d299bd49><a href="#" class="flex items-center gap-3 group" data-v-d299bd49><div class="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:flash",
    class: "text-xl"
  }, null, _parent));
  _push(`</div><span class="text-xl font-bold text-white tracking-tight" data-v-d299bd49>Velo<span class="text-emerald-500" data-v-d299bd49>City</span></span></a><nav class="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md" data-v-d299bd49><!--[-->`);
  ssrRenderList($setup.navLinks, (link) => {
    _push(`<a${
      ssrRenderAttr("href", link.href)
    } class="px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" data-v-d299bd49>${
      ssrInterpolate(link.text)
    }</a>`);
  });
  _push(`<!--]--></nav><div class="flex items-center gap-4" data-v-d299bd49><a href="#" class="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" data-v-d299bd49>Sign In</a><button class="bg-white text-zinc-950 hover:bg-zinc-200 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center gap-2" data-v-d299bd49> Get Started `);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:arrow-right" }, null, _parent));
  _push(`</button><button class="md:hidden text-white text-2xl" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: $setup.isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'
  }, null, _parent));
  _push(`</button></div></div>`);
  if ($setup.isMobileMenuOpen) {
    _push(`<div class="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden" data-v-d299bd49><!--[-->`);
    ssrRenderList($setup.navLinks, (link) => {
      _push(`<a${
        ssrRenderAttr("href", link.href)
      } class="text-zinc-300 hover:text-emerald-400 py-2 border-b border-zinc-800/50" data-v-d299bd49>${
        ssrInterpolate(link.text)
      }</a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header><section id="home" class="relative pt-32 pb-20 overflow-hidden" data-v-d299bd49><div class="container mx-auto px-6 relative z-10" data-v-d299bd49><div class="text-center max-w-4xl mx-auto" data-v-d299bd49><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 animate-fade-in-up" data-v-d299bd49><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" data-v-d299bd49></span> v2.0 is now live </div><h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100" data-v-d299bd49> Accelerate your <br data-v-d299bd49><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400" data-v-d299bd49>development workflow</span></h1><p class="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200" data-v-d299bd49> Platform manajemen proyek yang didesain untuk kecepatan. Tanpa loading, tanpa gangguan. Fokus pada apa yang penting: pengiriman kode. </p><div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300" data-v-d299bd49><button class="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2" data-v-d299bd49> Start Building Free `);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:lightning-bolt" }, null, _parent));
  _push(`</button><button class="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:play-circle",
    class: "text-zinc-500 group-hover:text-emerald-400 transition-colors"
  }, null, _parent));
  _push(` Watch Demo </button></div><div class="mt-20 relative animate-fade-in-up delay-500" data-v-d299bd49><div class="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10 rounded-full" data-v-d299bd49></div><div class="bg-zinc-900 border border-white/10 rounded-xl p-2 shadow-2xl" data-v-d299bd49><div class="bg-zinc-950 rounded-lg overflow-hidden border border-white/5 aspect-video relative flex items-center justify-center group cursor-default" data-v-d299bd49><div class="absolute top-0 left-0 w-full h-8 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2" data-v-d299bd49><div class="w-3 h-3 rounded-full bg-red-500/50" data-v-d299bd49></div><div class="w-3 h-3 rounded-full bg-yellow-500/50" data-v-d299bd49></div><div class="w-3 h-3 rounded-full bg-green-500/50" data-v-d299bd49></div></div><div class="text-center" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:view-dashboard-variant",
    class: "text-6xl text-zinc-800 mb-4 group-hover:text-emerald-500/50 transition-colors duration-500"
  }, null, _parent));
  _push(`<p class="text-zinc-700 font-mono text-sm" data-v-d299bd49>Dashboard Interface Preview</p></div></div></div></div></div></div></section><section class="py-10 border-y border-white/5 bg-white/[0.02]" data-v-d299bd49><div class="container mx-auto px-6 text-center" data-v-d299bd49><p class="text-xs text-zinc-500 uppercase tracking-widest mb-8" data-v-d299bd49>Trusted by engineering teams at</p><div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500" data-v-d299bd49><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="flex items-center gap-2 text-zinc-300 font-bold text-xl" data-v-d299bd49>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:checkbox-blank-circle",
      class: "text-emerald-500 text-xs"
    }, null, _parent));
    _push(` COMPANY_${ssrInterpolate(i)}</div>`);
  });
  _push(`<!--]--></div></div></section><section id="features" class="py-24" data-v-d299bd49><div class="container mx-auto px-6" data-v-d299bd49><div class="max-w-2xl mb-16" data-v-d299bd49><h2 class="text-3xl md:text-4xl font-bold text-white mb-6" data-v-d299bd49>Designed for Focus</h2><p class="text-zinc-400 text-lg" data-v-d299bd49>Hilangkan noise. VeloCity memberikan alat yang Anda butuhkan tanpa kerumitan yang tidak perlu.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]" data-v-d299bd49><div class="md:col-span-2 row-span-1 bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group relative overflow-hidden" data-v-d299bd49><div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:rocket-launch",
    class: "text-9xl text-emerald-500"
  }, null, _parent));
  _push(`</div><div class="relative z-10 h-full flex flex-col justify-end" data-v-d299bd49><div class="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-emerald-400" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:speedometer",
    class: "text-2xl"
  }, null, _parent));
  _push(`</div><h3 class="text-xl font-bold text-white mb-2" data-v-d299bd49>Real-time Performance</h3><p class="text-zinc-400 max-w-sm" data-v-d299bd49>Sinkronisasi data instan di seluruh perangkat. Tidak ada tombol refresh, semua terjadi secara real-time.</p></div></div><div class="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:keyboard-variant",
    class: "text-4xl text-zinc-500 group-hover:text-emerald-400 mb-6 transition-colors"
  }, null, _parent));
  _push(`<h3 class="text-xl font-bold text-white mb-2" data-v-d299bd49>Keyboard First</h3><p class="text-zinc-400 text-sm" data-v-d299bd49>Navigasi seluruh aplikasi tanpa menyentuh mouse. Shortcuts untuk segalanya.</p></div><div class="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:shield-check",
    class: "text-4xl text-zinc-500 group-hover:text-emerald-400 mb-6 transition-colors"
  }, null, _parent));
  _push(`<h3 class="text-xl font-bold text-white mb-2" data-v-d299bd49>Enterprise Security</h3><p class="text-zinc-400 text-sm" data-v-d299bd49>SSO, Audit Logs, dan enkripsi end-to-end standar industri.</p></div><div class="md:col-span-2 bg-gradient-to-br from-emerald-900/20 to-zinc-900/50 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-emerald-500/50 transition-colors" data-v-d299bd49><div class="flex-1" data-v-d299bd49><h3 class="text-xl font-bold text-white mb-2" data-v-d299bd49>Automated Workflows</h3><p class="text-zinc-400 mb-6" data-v-d299bd49>Biarkan bot mengerjakan tugas repetitif. Integrasi dengan GitHub, GitLab, dan Slack.</p><div class="flex gap-2" data-v-d299bd49><span class="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-white/5" data-v-d299bd49>GitHub</span><span class="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-white/5" data-v-d299bd49>Slack</span><span class="px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-300 border border-white/5" data-v-d299bd49>Discord</span></div></div><div class="w-full md:w-1/3 bg-zinc-950 rounded-xl border border-white/10 p-4 font-mono text-xs text-emerald-400 shadow-xl group-hover:translate-x-2 transition-transform" data-v-d299bd49> &gt; init workflow...<br data-v-d299bd49> &gt; connecting hooks...<br data-v-d299bd49> &gt; success! </div></div></div></div></section><section id="pricing" class="py-24 relative" data-v-d299bd49><div class="container mx-auto px-6" data-v-d299bd49><div class="text-center mb-16" data-v-d299bd49><h2 class="text-3xl md:text-4xl font-bold text-white mb-4" data-v-d299bd49>Simple, transparent pricing</h2><p class="text-zinc-400" data-v-d299bd49>Mulai gratis, upgrade saat tim Anda berkembang.</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-v-d299bd49><div class="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-colors" data-v-d299bd49><h3 class="text-lg font-medium text-white mb-2" data-v-d299bd49>Starter</h3><div class="text-3xl font-bold text-white mb-6" data-v-d299bd49>\$0 <span class="text-sm font-normal text-zinc-500" data-v-d299bd49>/bulan</span></div><ul class="space-y-4 mb-8 text-zinc-400 text-sm" data-v-d299bd49><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Up to 5 members</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Community Support</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Basic Features</li></ul><button class="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors font-medium" data-v-d299bd49>Start Free</button></div><div class="p-8 rounded-2xl bg-zinc-900 border border-emerald-500/50 shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] relative" data-v-d299bd49><div class="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl" data-v-d299bd49>POPULAR</div><h3 class="text-lg font-medium text-white mb-2" data-v-d299bd49>Pro</h3><div class="text-3xl font-bold text-white mb-6" data-v-d299bd49>\$29 <span class="text-sm font-normal text-zinc-500" data-v-d299bd49>/bulan</span></div><ul class="space-y-4 mb-8 text-zinc-300 text-sm" data-v-d299bd49><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Unlimited members</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Priority Support</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Advanced Analytics</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Custom Workflows</li></ul><button class="w-full py-3 rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors font-bold" data-v-d299bd49>Get Started</button></div><div class="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-colors" data-v-d299bd49><h3 class="text-lg font-medium text-white mb-2" data-v-d299bd49>Enterprise</h3><div class="text-3xl font-bold text-white mb-6" data-v-d299bd49>Custom</div><ul class="space-y-4 mb-8 text-zinc-400 text-sm" data-v-d299bd49><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` Dedicated Success Manager</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` SLA Guarantee</li><li class="flex gap-3" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:check",
    class: "text-emerald-500"
  }, null, _parent));
  _push(` SSO &amp; Audit Logs</li></ul><button class="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors font-medium" data-v-d299bd49>Contact Sales</button></div></div></div></section><section class="py-24 relative overflow-hidden" data-v-d299bd49><div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent" data-v-d299bd49></div><div class="container mx-auto px-6 text-center relative z-10" data-v-d299bd49><h2 class="text-4xl md:text-5xl font-bold text-white mb-6" data-v-d299bd49>Ready to speed up?</h2><p class="text-zinc-400 mb-10 max-w-xl mx-auto" data-v-d299bd49>Bergabunglah dengan ribuan developer yang membangun masa depan dengan VeloCity.</p><button class="px-10 py-4 bg-white text-zinc-950 font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto" data-v-d299bd49>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:whatsapp",
    class: "text-xl"
  }, null, _parent));
  _push(` Talk to Sales </button></div></section><footer class="border-t border-white/10 py-12 bg-zinc-950" data-v-d299bd49><div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6" data-v-d299bd49><div class="flex items-center gap-2" data-v-d299bd49><div class="w-6 h-6 bg-emerald-500 rounded" data-v-d299bd49></div><span class="font-bold text-white" data-v-d299bd49>VeloCity Inc.</span></div><div class="flex gap-8 text-sm text-zinc-500" data-v-d299bd49><a href="#" class="hover:text-white transition-colors" data-v-d299bd49>Documentation</a><a href="#" class="hover:text-white transition-colors" data-v-d299bd49>API</a><a href="#" class="hover:text-white transition-colors" data-v-d299bd49>Privacy</a><a href="#" class="hover:text-white transition-colors" data-v-d299bd49>Terms</a></div><div class="text-zinc-600 text-sm" data-v-d299bd49> © 2025. All systems operational. <span class="text-zinc-500" data-v-d299bd49>Built by <span class="font-semibold text-cyan-400" data-v-d299bd49>Landingo</span></span></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/previews/TechProductV2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const TechProductV2 = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-d299bd49"]]);

export { TechProductV2 as default };
//# sourceMappingURL=TechProductV2_DCaI-Bdi.mjs.map
