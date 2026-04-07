import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_S1F7PBDs.mjs';
import 'piccolore';
import { d as designs, _ as _export_sfc, $ as $$Layout } from '../chunks/_plugin-vue_export-helper_3u2nmVn1.mjs';
import { D as DesignThumbnail, $ as $$Header, a as $$Footer } from '../chunks/DesignThumbnail_C75CJiLK.mjs';
import '@iconify/vue';
import { useSSRContext, ref, computed, Suspense, resolveComponent, mergeProps } from 'vue';
import { gsap } from 'gsap';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSuspense, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const _sfc_main = {
  __name: 'DesignGallery',
  setup(__props, { expose: __expose }) {
  __expose();

const activeCategory = ref('all');
const designs$1 = ref(designs);

const categories = [
  { id: 'all', name: 'Semua', icon: 'mdi:view-grid' },
  { id: 'ecommerce', name: 'E-Commerce', icon: 'mdi:cart' },
  { id: 'service', name: 'Jasa', icon: 'mdi:briefcase' },
  { id: 'product', name: 'Produk', icon: 'mdi:package-variant' },
  { id: 'education', name: 'Edukasi', icon: 'mdi:school' },
  { id: 'healthcare', name: 'Kesehatan', icon: 'mdi:medical-bag' },
  { id: 'food', name: 'F&B', icon: 'mdi:food' },
];

const filteredDesigns = computed(() => {
  if (activeCategory.value === 'all') {
    return designs$1.value;
  }
  return designs$1.value.filter(design => design.category === activeCategory.value);
});

const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : categoryId;
};

const onCardHover = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    duration: 0.3,
    scale: 1.02,
    ease: 'power2.out'
  });
};

const onCardLeave = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    duration: 0.3,
    scale: 1,
    ease: 'power2.out'
  });
};

const viewDesign = (design) => {
  // Bisa ditambahkan modal atau lightbox untuk melihat detail design
  console.log('View design:', design.name);
  // Untuk sekarang, redirect ke WhatsApp dengan info design
  redirectToWhatsApp(design);
};

const redirectToWhatsApp = (design = null) => {
  const phoneNumber = '6285183077289';
  let message = 'Halo! Saya tertarik dengan referensi design landing page. Bisa konsultasi lebih lanjut?';
  
  if (design) {
    message = `Halo! Saya tertarik dengan design "${design.name}". Bisa minta informasi lebih detail dan konsultasi untuk customisasi design ini?`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

const __returned__ = { activeCategory, designs: designs$1, categories, filteredDesigns, getCategoryName, onCardHover, onCardLeave, viewDesign, redirectToWhatsApp, ref, computed, Suspense, get gsap() { return gsap }, get designsData() { return designs }, DesignThumbnail };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 pb-16" }, _attrs))} data-v-dec2e6f0><section class="container px-5 mx-auto mb-12" data-v-dec2e6f0><div class="text-center max-w-3xl mx-auto" data-v-dec2e6f0><div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold" data-v-dec2e6f0>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:palette",
    class: "text-blue-500"
  }, null, _parent));
  _push(` Referensi Design Landing Page </div><h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4" data-v-dec2e6f0> Koleksi Design <span class="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent" data-v-dec2e6f0> Profesional </span></h1><p class="text-lg text-gray-600 mb-8" data-v-dec2e6f0> Jelajahi berbagai referensi design landing page yang bisa kami buatkan untuk bisnis Anda. Setiap design dapat dikustomisasi sesuai kebutuhan dan branding Anda. </p></div><div class="flex flex-wrap justify-center gap-3 mb-12" data-v-dec2e6f0><!--[-->`);
  ssrRenderList($setup.categories, (category) => {
    _push(`<button class="${ssrRenderClass([
            'cursor-pointer px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300',
            $setup.activeCategory === category.id
              ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600'
          ])}" data-v-dec2e6f0>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: category.icon,
      class: "inline mr-2"
    }, null, _parent));
    _push(` ${ssrInterpolate(category.name)}</button>`);
  });
  _push(`<!--]--></div></section><section class="container px-5 mx-auto" data-v-dec2e6f0><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-v-dec2e6f0><!--[-->`);
  ssrRenderList($setup.filteredDesigns, (design) => {
    _push(`<div class="design-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" data-v-dec2e6f0><div class="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200" data-v-dec2e6f0>`);
    ssrRenderSuspense(_push, {
      default: () => {
        _push(ssrRenderComponent($setup["DesignThumbnail"], {
          key: `thumbnail-${design.id}-${$setup.activeCategory}`,
          "component-name": design.previewComponent,
          width: 400,
          height: 288,
          class: "w-full h-full"
        }, null, _parent));
      },
      fallback: () => {
        _push(`<div class="w-full h-full flex items-center justify-center" data-v-dec2e6f0><div class="text-center p-6" data-v-dec2e6f0>`);
        _push(ssrRenderComponent(_component_Icon, {
          icon: "mdi:loading",
          class: "text-6xl text-gray-400 mb-4 mx-auto animate-spin"
        }, null, _parent));
        _push(`<p class="text-sm text-gray-500 font-medium" data-v-dec2e6f0>Loading preview...</p></div></div>`);
      },
      _: 2
    });
    _push(`<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end" data-v-dec2e6f0><div class="p-4 w-full transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 flex gap-2" data-v-dec2e6f0>`);
    if (design.previewPath) {
      _push(`<a${ssrRenderAttr("href", design.previewPath)} target="_blank" rel="noopener" class="cursor-pointer flex-1 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2" data-v-dec2e6f0>`);
      _push(ssrRenderComponent(_component_Icon, { icon: "mdi:eye" }, null, _parent));
      _push(` Lihat Preview </a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<button class="cursor-pointer flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2" data-v-dec2e6f0>`);
    _push(ssrRenderComponent(_component_Icon, { icon: "mdi:information" }, null, _parent));
    _push(` Info </button></div></div><div class="absolute top-4 left-4" data-v-dec2e6f0><span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700" data-v-dec2e6f0>${
      ssrInterpolate($setup.getCategoryName(design.category))
    }</span></div></div><div class="p-6" data-v-dec2e6f0><h3 class="text-xl font-bold text-gray-900 mb-2" data-v-dec2e6f0>${
      ssrInterpolate(design.name)
    }</h3><p class="text-sm text-gray-600 mb-4 line-clamp-2" data-v-dec2e6f0>${
      ssrInterpolate(design.description)
    }</p><div class="flex flex-wrap gap-2 mb-4" data-v-dec2e6f0><!--[-->`);
    ssrRenderList(design.features.slice(0, 5), (feature, idx) => {
      _push(`<span class="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium" data-v-dec2e6f0>${ssrInterpolate(feature)}</span>`);
    });
    _push(`<!--]--></div><button class="cursor-pointer w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-sky-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg" data-v-dec2e6f0>`);
    _push(ssrRenderComponent(_component_Icon, { icon: "mdi:whatsapp" }, null, _parent));
    _push(` Konsultasi Design Ini </button></div></div>`);
  });
  _push(`<!--]--></div>`);
  if ($setup.filteredDesigns.length === 0) {
    _push(`<div class="text-center py-16" data-v-dec2e6f0>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:image-off-outline",
      class: "text-6xl text-gray-300 mb-4 mx-auto"
    }, null, _parent));
    _push(`<p class="text-gray-500 text-lg" data-v-dec2e6f0>Tidak ada design untuk kategori ini</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section><section class="container px-5 mx-auto mt-16" data-v-dec2e6f0><div class="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden" data-v-dec2e6f0><div class="absolute inset-0 cta-pattern opacity-20" data-v-dec2e6f0></div><div class="relative z-10" data-v-dec2e6f0><h2 class="text-3xl sm:text-4xl font-extrabold mb-4" data-v-dec2e6f0>Siap Membuat Landing Page Profesional?</h2><p class="text-lg mb-6 opacity-90" data-v-dec2e6f0>Konsultasikan kebutuhan design Anda dengan tim kami. Gratis!</p><button class="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" data-v-dec2e6f0>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:whatsapp",
    class: "text-2xl"
  }, null, _parent));
  _push(` Konsultasi Gratis via WhatsApp </button></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/pages/_old/DesignGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const DesignGallery = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-dec2e6f0"]]);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Referensi Design Landing Page - Landingo", "description": "Lihat koleksi design landing page profesional kami. Setiap design dibuat dengan fokus pada konversi dan user experience yang optimal. Pilih design yang sesuai dengan brand Anda." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "DesignGallery", DesignGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/AGIES/Projects/production/landingo-landing-page/src/pages/_old/DesignGallery.vue", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/AGIES/Projects/production/landingo-landing-page/src/pages/gallery.astro", void 0);

const $$file = "D:/AGIES/Projects/production/landingo-landing-page/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=gallery.astro.mjs.map
