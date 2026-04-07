import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, a as renderTemplate, e as addAttribute } from '../chunks/astro/server_S1F7PBDs.mjs';
import 'piccolore';
import { d as designs, _ as _export_sfc, $ as $$Layout } from '../chunks/_plugin-vue_export-helper_3u2nmVn1.mjs';
import { b as $$Image, D as DesignThumbnail, $ as $$Header, a as $$Footer } from '../chunks/DesignThumbnail_C75CJiLK.mjs';
import { Icon } from '@iconify/vue';
/* empty css                                 */
import { useSSRContext, ref, computed, onMounted, Suspense, mergeProps, resolveComponent, withCtx, createVNode } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderSuspense, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const seoImage = new Proxy({"src":"/_astro/seo.MIiuIn2n.webp","width":4000,"height":2660,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/AGIES/Projects/production/landingo-landing-page/src/assets/seo.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/AGIES/Projects/production/landingo-landing-page/src/assets/seo.webp");
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero" role="main" data-astro-cid-txibpiox> <!-- Modern gradient background --> <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 z-0" data-astro-cid-txibpiox></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(83,86,255,0.1),transparent_50%)] z-0" data-astro-cid-txibpiox></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] z-0" data-astro-cid-txibpiox></div> <!-- Spotlight Effect (Subtle) --> <div id="hero-spotlight" class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0" style="background: radial-gradient(800px circle at var(--x) var(--y), rgba(99, 102, 241, 0.07), transparent 40%);" data-astro-cid-txibpiox></div> <!-- Animated background elements --> <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" data-astro-cid-txibpiox></div> <div class="absolute top-40 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" data-astro-cid-txibpiox></div> <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" data-astro-cid-txibpiox></div> <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center xl:px-20 z-10 relative" data-astro-cid-txibpiox> <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-astro-cid-txibpiox> <!-- Badge --> <div data-speed="0.02" class="parallax-item inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold" data-astro-cid-txibpiox> <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse" data-astro-cid-txibpiox></span>
Promo Launching Terbatas
</div> <!-- Main Headline --> <h1 data-speed="0.04" class="parallax-item text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-gray-900 font-extrabold leading-tight" data-astro-cid-txibpiox> <span class="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent" data-astro-cid-txibpiox>
Landing Page Profesional
</span> <br class="hidden lg:inline-block" data-astro-cid-txibpiox> <span class="text-gray-900" data-astro-cid-txibpiox>untuk Bisnismu</span> </h1> <!-- Subheadline --> <p data-speed="0.06" class="parallax-item text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl" data-astro-cid-txibpiox>
Transformasi bisnis UMKM Anda dengan landing page yang <strong class="text-gray-900" data-astro-cid-txibpiox>mengkonversi visitor menjadi customer</strong>. Desain modern, loading cepat, dan siap untuk iklan digital.
</p> <!-- Trust indicators --> <div data-speed="0.08" class="parallax-item flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 text-sm text-gray-600" data-astro-cid-txibpiox> <div class="flex items-center gap-2" data-astro-cid-txibpiox> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:check-circle", "class": "text-green-500 text-xl", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-txibpiox": true })} <span data-astro-cid-txibpiox>Mobile-First Design</span> </div> <div class="flex items-center gap-2" data-astro-cid-txibpiox> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:check-circle", "class": "text-green-500 text-xl", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-txibpiox": true })} <span data-astro-cid-txibpiox>SEO Optimized</span> </div> <div class="flex items-center gap-2" data-astro-cid-txibpiox> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:check-circle", "class": "text-green-500 text-xl", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-txibpiox": true })} <span data-astro-cid-txibpiox>WhatsApp Integration</span> </div> </div> <!-- CTA Buttons --> <div data-speed="0.1" class="parallax-item flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto" data-astro-cid-txibpiox> <button id="cta-button-1" class="cursor-pointer px-8 py-2 text-base font-semibold rounded-full bg-[#2563EB] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" data-astro-cid-txibpiox> <span class="flex items-center justify-center gap-2" data-astro-cid-txibpiox> <span class="text-sm font-medium opacity-90" data-astro-cid-txibpiox>Mulai dari</span> <span class="text-2xl font-bold" data-astro-cid-txibpiox>Rp 1,5jt</span> </span> </button> <button id="cta-button-2" class="cursor-pointer px-8 py-2 text-base font-semibold rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300" data-astro-cid-txibpiox> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:whatsapp", "class": "text-xl mr-2 text-green-500 inline", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-txibpiox": true })}
Konsultasi Gratis
</button> </div> </div> <!-- Hero Image --> <div class="hidden lg:block lg:w-1/2 perspective-container" data-astro-cid-txibpiox> <div id="hero-image-wrapper" class="relative transition-transform duration-100 ease-out will-change-transform transform-style-3d" data-astro-cid-txibpiox> <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-400 rounded-3xl blur-2xl opacity-30 transform rotate-6 pointer-events-none" data-astro-cid-txibpiox></div> ${renderComponent($$result, "Image", $$Image, { "id": "hero-3d-image", "class": "relative object-cover object-center rounded-3xl max-w-[500px] xl:max-w-[600px] shadow-2xl", "fetchpriority": "high", "alt": "Ilustrasi Optimasi SEO dan Performa Website - Jasa Pembuatan Landing Page Google Friendly", "loading": "eager", "width": 720, "height": 600, "src": seoImage, "data-astro-cid-txibpiox": true })} <!-- Premium Glint Effect --> <div id="hero-glint" class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none z-10 mix-blend-overlay" data-astro-cid-txibpiox></div> </div> </div> </div> </main>  ${renderScript($$result, "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Hero.astro", void 0);

const $$ValueProposition = createComponent(($$result, $$props, $$slots) => {
  const list = [
    {
      icon: "mdi:rocket-launch",
      title: "Launch Cepat",
      text: "Landing page siap online dalam 2-5 hari kerja. Tidak perlu menunggu berminggu-minggu untuk mulai jualan.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "mdi:cellphone-link",
      title: "Mobile-First",
      text: "Optimized untuk semua device. 70%+ traffic dari mobile, landing page Anda akan tampil sempurna di smartphone.",
      color: "from-sky-500 to-cyan-500"
    },
    {
      icon: "mdi:whatsapp",
      title: "WhatsApp Ready",
      text: "Leads langsung masuk ke WhatsApp Anda. Tidak ada form yang ribet, customer langsung chat dan closing lebih cepat.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "mdi:shield-check",
      title: "All-In-One",
      text: "Domain, hosting, SSL certificate, dan email bisnis sudah termasuk. Tidak perlu repot setup sendiri.",
      color: "from-blue-500 to-blue-500"
    },
    {
      icon: "mdi:google",
      title: "SEO Optimized",
      text: "Siap tampil di Google Search. Struktur yang SEO-friendly membantu bisnis Anda ditemukan calon customer.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "mdi:trending-up",
      title: "Tingkatkan Kredibilitas",
      text: "Tampil profesional meningkatkan kepercayaan customer. Brand Anda terlihat lebih established dan terpercaya.",
      color: "from-violet-500 to-sky-500"
    },
    {
      icon: "mdi:autorenew",
      title: "Renewal Terjangkau",
      text: "Sistem renewal transparan dengan harga tetap. Tidak ada kenaikan harga, layanan berkelanjutan dengan biaya yang terjangkau.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: "mdi:bullseye-arrow",
      title: "Fokus Konversi",
      text: "Desain yang diarahkan untuk mengubah pengunjung menjadi pembeli. Struktur konten psikologis yang mendorong closing lebih tinggi.",
      color: "from-rose-500 to-orange-500"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="value-proposition" class="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white py-24"> <div class="container px-5 mx-auto relative z-10"> <div class="text-center mb-16"> <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold"> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:star", "class": "text-yellow-500", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon" })}
Mengapa Memilih Landingo?
</div> <h2 class="sm:text-4xl text-3xl font-extrabold text-center title-font text-gray-900 mb-4">
Semua yang Dibutuhkan untuk
<span class="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent"> Sukses Online</span> </h2> <p class="text-lg text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
Solusi lengkap untuk UMKM yang ingin berkembang di era digital. Dari desain profesional hingga optimasi performa, semuanya sudah kami handle.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"> ${list.map((item) => renderTemplate`<div class="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"> <div${addAttribute(`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`, "class")}> ${renderComponent($$result, "Icon", Icon, { "icon": item.icon, "class": "text-white w-6 h-6", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon" })} </div> <h3 class="text-xl font-bold text-gray-900 mb-2">${item.title}</h3> <p class="text-gray-600 leading-relaxed">${item.text}</p> </div>`)} </div> </div> </section>`;
}, "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/ValueProposition.astro", void 0);

const _sfc_main$1 = {
  __name: 'DesignShowcase',
  setup(__props, { expose: __expose }) {
  __expose();

gsap.registerPlugin(ScrollTrigger);
const sectionRef = ref(null);
const headerRef = ref(null);
const cardsRef = ref(null);

// Ambil 3 design teratas untuk featured
const featuredDesigns = computed(() => {
  if (!designs || designs.length === 0) {
    return [];
  }
  return designs.slice(0, 3);
});

const getCategoryLabel = (category) => {
  const labels = {
    'ecommerce': 'E-Commerce',
    'service': 'Jasa',
    'product': 'Produk',
    'education': 'Edukasi',
    'healthcare': 'Kesehatan',
    'food': 'F&B'
  };
  return labels[category] || category;
};

const getCategoryGradient = (category) => {
  const gradients = {
    'ecommerce': 'from-blue-500 to-sky-500',
    'service': 'from-blue-500 to-cyan-500',
    'product': 'from-sky-500 to-cyan-500',
    'education': 'from-green-500 to-teal-500',
    'healthcare': 'from-blue-500 to-cyan-500',
    'food': 'from-orange-500 to-red-500'
  };
  return gradients[category] || 'from-gray-500 to-gray-600';
};

const navigateToGallery = () => {
  window.location.href = '/gallery';
};

const viewDesign = (design) => {
  if (design.previewPath) {
    window.location.href = design.previewPath;
  } else {
    navigateToGallery();
  }
};

// Simple hover animations for cards
const onCardEnter = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    y: -4,
    duration: 0.3,
    ease: 'power2.out'
  });
};

const onCardLeave = (e) => {
  const card = e.currentTarget;
  gsap.to(card, {
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  });
};

onMounted(() => {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    if (!sectionRef.value) return;

    // Ensure cards are visible first
    if (cardsRef.value) {
      const cards = cardsRef.value.querySelectorAll('.design-card');
      cards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    });

    if (headerRef.value && headerRef.value.children.length > 0) {
      tl.from(headerRef.value.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
      });
    }

    if (cardsRef.value) {
      const cards = cardsRef.value.querySelectorAll('.design-card');
      if (cards.length > 0) {
        // Simple fade in animation
        gsap.set(cards, { 
          opacity: 0, 
          y: 30
        });
        
        tl.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1
        }, '-=0.3');
      }
    }
    
    // Animate CTA button - ensure it's visible
    const ctaButton = sectionRef.value?.querySelector('.cta-button');
    if (ctaButton) {
      gsap.set(ctaButton, { opacity: 1, visibility: 'visible' });
      tl.from(ctaButton, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out'
      }, '-=0.2');
    }
  }, 100);
});

const __returned__ = { sectionRef, headerRef, cardsRef, featuredDesigns, getCategoryLabel, getCategoryGradient, navigateToGallery, viewDesign, onCardEnter, onCardLeave, ref, onMounted, computed, Suspense, get gsap() { return gsap }, get ScrollTrigger() { return ScrollTrigger }, get Icon() { return Icon }, get allDesigns() { return designs }, DesignThumbnail };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    ref: "sectionRef",
    id: "design-showcase",
    class: "relative py-24 bg-gradient-to-b from-white via-[#DFF5FF]/20 to-white overflow-hidden"
  }, _attrs))} data-v-9fb2da15><div class="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-3xl opacity-5" data-v-9fb2da15></div><div class="absolute bottom-0 left-0 w-96 h-96 bg-[#378CE7] rounded-full mix-blend-multiply filter blur-3xl opacity-5" data-v-9fb2da15></div><div class="container px-5 mx-auto relative z-10" data-v-9fb2da15><div class="text-center max-w-3xl mx-auto mb-16" data-v-9fb2da15><div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#DFF5FF] border border-[#67C6E3]/30" data-v-9fb2da15>`);
  _push(ssrRenderComponent($setup["Icon"], {
    icon: "mdi:palette",
    class: "text-[#2563EB]"
  }, null, _parent));
  _push(`<span class="text-sm font-semibold text-[#2563EB]" data-v-9fb2da15>Portfolio Design</span></div><h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-v-9fb2da15> Pilih Design yang <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#378CE7]" data-v-9fb2da15> Sesuai Brand Anda </span></h2><p class="text-lg text-gray-600 leading-relaxed" data-v-9fb2da15> Lihat koleksi design landing page profesional kami. Setiap design dibuat dengan fokus pada konversi dan user experience yang optimal. </p></div>`);
  if ($setup.featuredDesigns.length > 0) {
    _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto" data-v-9fb2da15><!--[-->`);
    ssrRenderList($setup.featuredDesigns, (design) => {
      _push(`<div class="design-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer" style="${ssrRenderStyle({"opacity":"1","visibility":"visible"})}" data-v-9fb2da15><div class="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200" data-v-9fb2da15><div class="thumbnail-wrapper w-full h-full" data-v-9fb2da15>`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent($setup["DesignThumbnail"], {
            key: `thumbnail-${design.id}`,
            "component-name": design.previewComponent,
            width: 400,
            height: 192,
            class: "w-full h-full"
          }, null, _parent));
        },
        fallback: () => {
          _push(`<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200" data-v-9fb2da15><div class="text-center" data-v-9fb2da15>`);
          _push(ssrRenderComponent($setup["Icon"], {
            icon: "mdi:loading",
            class: "text-4xl text-gray-400 mb-2 mx-auto animate-spin"
          }, null, _parent));
          _push(`<p class="text-xs text-gray-500" data-v-9fb2da15>Loading preview...</p></div></div>`);
        },
        _: 2
      });
      _push(`</div><div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 z-10" data-v-9fb2da15>${
        ssrInterpolate($setup.getCategoryLabel(design.category))
      }</div><div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" data-v-9fb2da15> Preview </div></div><div class="p-6" data-v-9fb2da15><h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors" data-v-9fb2da15>${
        ssrInterpolate(design.name)
      }</h3><p class="text-sm text-gray-600 mb-4 line-clamp-2" data-v-9fb2da15>${
        ssrInterpolate(design.description)
      }</p><div class="flex flex-wrap gap-2 mb-4" data-v-9fb2da15><!--[-->`);
      ssrRenderList(design.features.slice(0, 2), (feature, idx) => {
        _push(`<span class="px-2 py-1 rounded-md bg-[#DFF5FF] text-[#2563EB] text-xs font-medium" data-v-9fb2da15>${ssrInterpolate(feature)}</span>`);
      });
      _push(`<!--]--></div><button class="w-full px-4 py-2 rounded-lg bg-[#DFF5FF] text-[#2563EB] font-semibold text-sm hover:bg-[#2563EB] hover:text-white transition-all duration-300 flex items-center justify-center gap-2" data-v-9fb2da15><span data-v-9fb2da15>Lihat Preview</span>`);
      _push(ssrRenderComponent($setup["Icon"], {
        icon: "mdi:arrow-right",
        class: "text-lg"
      }, null, _parent));
      _push(`</button></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div class="text-center py-12" data-v-9fb2da15><p class="text-gray-500" data-v-9fb2da15>Loading designs...</p></div>`);
  }
  _push(`<div class="text-center" data-v-9fb2da15><button class="cta-button inline-flex items-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#378CE7] text-white rounded-full font-bold text-lg shadow-xl shadow-[#2563EB]/20 hover:shadow-[#2563EB]/40 transition-all duration-300 transform hover:-translate-y-1" style="${ssrRenderStyle({"opacity":"1","visibility":"visible"})}" data-v-9fb2da15>`);
  _push(ssrRenderComponent($setup["Icon"], {
    icon: "mdi:view-grid-outline",
    class: "text-2xl"
  }, null, _parent));
  _push(`<span data-v-9fb2da15>Lihat Semua Design</span>`);
  _push(ssrRenderComponent($setup["Icon"], {
    icon: "mdi:arrow-right",
    class: "text-xl"
  }, null, _parent));
  _push(`</button><p class="text-sm text-gray-500 mt-10" data-v-9fb2da15> Lebih dari 10+ design template siap pakai untuk berbagai jenis bisnis </p></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/section/DesignShowcase.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const DesignShowcase = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1],['__scopeId',"data-v-9fb2da15"]]);

const title = "Pilih Paket yang Tepat untuk Bisnis Anda";


const _sfc_main = {
  __name: 'Pricing',
  setup(__props, { expose: __expose }) {
  __expose();

gsap.registerPlugin(ScrollTrigger);

const pricingHeader = ref(null);
const pricingContainer = ref(null);

const discountCalculation = (price, discount) => {
  const discounted = price - price * (discount / 100);
  return Math.round(discounted);
};

const formatRupiah = (amount) => {
  return amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

const redirectToWhatsApp = (message) => {
  const phoneNumber = "6285183077289";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

const common_features = ref([
    { icon: 'mdi:circle-small', text: 'Website SSL (Aman & Terenkripsi)' },
    { icon: 'mdi:circle-small', text: 'Penulisan Konten Website' },
    { icon: 'mdi:circle-small', text: 'Akses Statistik Kunjungan Website' },
    { icon: 'mdi:circle-small', text: 'Integrasi Google Maps' },
    { icon: 'mdi:circle-small', text: 'Integrasi Sosial Media' },
    { icon: 'mdi:circle-small', text: 'Tombol WhatsApp' }
]);

const package_list = ref([
    {
        name:'LANDINGO LITE',
        realPrice: 3000000,
        discount: 50,
        price: 1500000,
        renewalPrice: 800000,
        billingCycle: 'Per Tahun',
        description:'Untuk kamu yang baru mulai online dan butuh halaman rapi yang bikin bisnis terlihat profesional - tanpa ribet.',
        tag: { status: true, desc: 'Paling Hemat' },
        quickMessage: 'Halo! Saya tertarik dengan paket LANDINGO LITE. Bisa minta informasi lebih detail?',
        popular: false,
        list:[
            { icon:'mdi:monitor', text:'1 Halaman Website' },
            { icon:'mdi:server', text:'Gratis Domain & Hosting' },
            { icon:'mdi:wrench', text:'Gratis Update Konten & Maintenance' },
            { icon:'mdi:cellphone', text:'Website Mobile Friendly & SEO Basic' },
            { icon:'mdi:lightbulb-on-outline', text:'Desain Modern & Sesuai Karakter Bisnis Kamu' },
        ]
    },
    {
        name:'LANDINGO PRO',
        realPrice: 10000000,
        discount: 55,
        price: 4500000,
        renewalPrice: 1500000,
        billingCycle: 'Per Tahun',
        description:'Untuk UMKM yang mau mulai beriklan dan butuh landing page yang stabil, cepat, dan lebih meyakinkan pembeli.',
        tag: { status: true, desc: 'Paling Laris' },
        quickMessage: 'Halo! Saya tertarik dengan paket LANDINGO PRO. Bisa minta informasi lebih detail?',
        popular: true,
        list:[
            { icon:'mdi:check-circle', text:'Semua di Paket LITE' },
            { icon:'mdi:monitor', text:'5 Halaman Website' },
            { icon:'mdi:email-outline', text:'Gratis 1 Akun Email Bisnis' },
            { icon:'mdi:auto-fix', text:'Desain Modern & Sesuai Karakter Bisnis Kamu' },
            { icon:'mdi:image-multiple-outline', text:'Halaman Produk, Layanan, Galeri, atau Portofolio' },
            { icon:'mdi:text-box-outline', text:'Fitur Tambahan seperti Form Kontak' },
        ]
    },
    {
        name:'LANDINGO FUNNEL',
        realPrice: 15000000,
        discount: 45,
        price: 8500000,
        renewalPrice: 2500000,
        billingCycle: 'Per Tahun',
        description:'Website super lengkap dengan struktur dan fitur lebih lengkap, eksklusif dan premium.',
        tag: { status: true, desc: 'Siap Scale!' },
        quickMessage: 'Halo! Saya tertarik dengan paket LANDINGO FUNNEL. Bisa minta informasi lebih detail?',
        popular: false,
        list:[
            { icon:'mdi:check-circle', text:'Semua di Paket PRO' },
            { icon:'mdi:monitor', text:'10 Halaman Website' },
            { icon:'mdi:email-outline', text:'Gratis 3 Akun Email Bisnis' },
            { icon:'mdi:diamond-stone', text:'Desain Lebih Eksklusif & Premium' },
            { icon:'mdi:puzzle-outline', text:'Fitur Tambahan seperti Booking, Katalog, atau Integrasi Lainnya' },
            { icon:'mdi:magnify', text:'Optimasi SEO Lebih Maksimal' },
            { icon:'mdi:headset', text:'Layanan Bantuan Prioritas' },
        ]
    },
]);

const onCardHover = (e, isFeatured) => {
    const card = e.currentTarget;
    const innerCard = card.querySelector('div');
    const shineElement = document.createElement('div');
    shineElement.className = 'shine-effect';
    innerCard.appendChild(shineElement);

    const scaleValue = isFeatured ? 1.05 : 1.03;

    gsap.to(card, {
        duration: 0.5,
        ease: 'power2.out',
        scale: scaleValue,
        y: -10,
        boxShadow: '0px 15px 30px -10px rgba(0,0,0,0.15)',
    });

    gsap.fromTo(shineElement,
        { left: '-100px', top: '0', width: '70px' },
        {
            duration: 0.8,
            left: 'calc(100% + 100px)',
            ease: 'power2.out'
        }
    );
};

const onCardLeave = (e) => {
    const card = e.currentTarget;
    const innerCard = card.querySelector('div');
    const shineElement = innerCard.querySelector('.shine-effect');
    if (shineElement) {
        innerCard.removeChild(shineElement);
    }

    gsap.to(card, {
        duration: 0.6,
        ease: 'power2.out',
        scale: 1,
        y: 0,
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
    });
};

const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
let timerInterval = null;

const initCountdown = () => {
    // Buat timer evergreen 3 hari menggunakan localStorage
    let endTime = localStorage.getItem('landingo_promo_endtime');
    if (!endTime || new Date().getTime() > parseInt(endTime)) {
        endTime = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
        localStorage.setItem('landingo_promo_endtime', endTime);
    } else {
        endTime = parseInt(endTime);
    }

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            clearInterval(timerInterval);
            return;
        }

        countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdown.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    };

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
};

onMounted(() => {
    initCountdown();
    gsap.from(pricingHeader.value.children, {
        scrollTrigger: {
            trigger: pricingHeader.value,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
    });

    const cards = gsap.utils.toArray('.pricing-card');
    cards.forEach(card => {
        gsap.from(card, {
            autoAlpha: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    });
});

const __returned__ = { pricingHeader, pricingContainer, discountCalculation, formatRupiah, redirectToWhatsApp, title, common_features, package_list, onCardHover, onCardLeave, countdown, get timerInterval() { return timerInterval }, set timerInterval(v) { timerInterval = v; }, initCountdown, ref, onMounted, get gsap() { return gsap }, get ScrollTrigger() { return ScrollTrigger } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_n_button = resolveComponent("n-button");

  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "pricing",
    class: "relative min-h-screen text-gray-600 body-font overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24"
  }, _attrs))}><div class="container px-5 mx-auto"><div class="flex flex-col text-center w-full mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mx-auto">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:tag",
    class: "text-blue-500"
  }, null, _parent));
  _push(` Harga Transparan, Tanpa Hidden Cost </div><h2 class="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-gray-900">${ssrInterpolate($setup.title)}</h2><p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8"> Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk domain, hosting, dan support teknis. </p><div class="inline-flex flex-col items-center mx-auto bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100 rounded-2xl px-6 sm:px-10 py-5 sm:py-6 shadow-sm"><p class="text-sm sm:text-base font-bold text-blue-900 mb-4 flex items-center gap-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:alarm",
    class: "text-xl text-red-500 animate-pulse"
  }, null, _parent));
  _push(` PROMO TERBATAS! DISKON BERAKHIR DALAM: </p><div class="flex items-start gap-3 sm:gap-5 text-center"><div class="flex flex-col items-center"><div class="text-2xl sm:text-4xl font-black text-blue-700 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">${
    ssrInterpolate(String($setup.countdown.days).padStart(2, '0'))
  }</div><span class="text-[10px] sm:text-xs font-bold text-blue-400 mt-2 uppercase tracking-wider">Hari</span></div><span class="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">:</span><div class="flex flex-col items-center"><div class="text-2xl sm:text-4xl font-black text-blue-700 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">${
    ssrInterpolate(String($setup.countdown.hours).padStart(2, '0'))
  }</div><span class="text-[10px] sm:text-xs font-bold text-blue-400 mt-2 uppercase tracking-wider">Jam</span></div><span class="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">:</span><div class="flex flex-col items-center"><div class="text-2xl sm:text-4xl font-black text-blue-700 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">${
    ssrInterpolate(String($setup.countdown.minutes).padStart(2, '0'))
  }</div><span class="text-[10px] sm:text-xs font-bold text-blue-400 mt-2 uppercase tracking-wider">Menit</span></div><span class="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">:</span><div class="flex flex-col items-center"><div class="text-2xl sm:text-4xl font-black text-red-600 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">${
    ssrInterpolate(String($setup.countdown.seconds).padStart(2, '0'))
  }</div><span class="text-[10px] sm:text-xs font-bold text-red-400 mt-2 uppercase tracking-wider">Detik</span></div></div></div></div><div class="flex flex-col lg:flex-row flex-nowrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto" style="${
    ssrRenderStyle({"perspective":"1200px"})
  }"><!--[-->`);
  ssrRenderList($setup.package_list, (item, index) => {
    _push(`<div class="w-full lg:w-1/3 pricing-card"><div class="${ssrRenderClass([
                            'h-full rounded-2xl border-2 flex flex-col relative justify-between bg-white transition-all duration-300 shadow-lg overflow-hidden',
                            item.popular ? 'border-gray-200' : 'border-gray-200 hover:border-blue-300'
                        ])}">`);
    if (item.popular) {
      _push(`<div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 z-20"></div>`);
    } else {
      _push(`<!---->`);
    }
    if (item.tag.status) {
      _push(`<span class="${
        ssrRenderClass([
                              'absolute right-0 top-2 px-3 py-1.5 rounded-bl-xl z-30 text-xs font-semibold text-white whitespace-nowrap',
                              item.popular ? 'bg-gradient-to-r from-blue-600 to-sky-600' : (item.name === 'Professional' ? 'bg-blue-600' : 'bg-blue-500')
                          ])
      }">${
        ssrInterpolate(item.tag.desc)
      }</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="p-6 sm:p-8 flex flex-col h-full relative z-10"><div class="pt-6 sm:pt-8 md:pt-10 mb-8 border-b border-gray-100 pb-8"><h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 pr-12">${
      ssrInterpolate(item.name)
    }</h3><p class="text-sm text-gray-500 leading-relaxed mb-6 h-12">${
      ssrInterpolate(item.description)
    }</p><div class="flex flex-col">`);
    if (item.discount > 0) {
      _push(`<div class="mb-1"><span class="text-base font-medium text-gray-400 line-through">${ssrInterpolate($setup.formatRupiah(item.realPrice))}</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="flex items-center flex-wrap gap-2 sm:gap-3 mb-2"><span class="text-3xl sm:text-4xl text-blue-500 font-extrabold leading-none">${ssrInterpolate($setup.formatRupiah(item.price))}</span>`);
    if (item.discount > 0) {
      _push(`<span class="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600"> Diskon ${ssrInterpolate(item.discount)}% </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (item.renewalPrice) {
      _push(`<div class="mt-2 inline-flex items-center self-start gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 border-dashed rounded-md text-xs sm:text-sm text-gray-500">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: "mdi:calendar-sync",
        class: "text-gray-400 text-sm"
      }, null, _parent));
      _push(`<span>Renewal: <strong class="font-semibold text-gray-700">${ssrInterpolate($setup.formatRupiah(item.renewalPrice))}</strong>/thn</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="flex-grow mb-8"><ul class="space-y-3 sm:space-y-4 mb-6"><!--[-->`);
    ssrRenderList(item.list, (list, idx) => {
      _push(`<li class="flex items-start text-gray-900 font-medium"><span class="mr-3 mt-0.5 flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: list.icon,
        class: "text-blue-500 text-xl"
      }, null, _parent));
      _push(`</span><span class="text-sm leading-relaxed">${ssrInterpolate(list.text)}</span></li>`);
    });
    _push(`<!--]--></ul><details class="group border-t border-gray-200 pt-4"><summary class="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-gray-600 hover:text-blue-600 outline-none select-none [&amp;::-webkit-details-marker]:hidden"><span>Lihat Selengkapnya</span><span class="transition group-open:rotate-180">`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:chevron-down",
      class: "text-lg"
    }, null, _parent));
    _push(`</span></summary><ul class="space-y-3 mt-4"><!--[-->`);
    ssrRenderList($setup.common_features, (feature, fIdx) => {
      _push(`<li class="flex items-start text-gray-500"><span class="mr-3 mt-0.5 flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        icon: feature.icon,
        class: "text-gray-400 text-lg"
      }, null, _parent));
      _push(`</span><span class="text-sm leading-relaxed">${ssrInterpolate(feature.text)}</span></li>`);
    });
    _push(`<!--]--></ul></details></div><div class="mt-auto">`);
    _push(ssrRenderComponent(_component_n_button, {
      type: item.popular ? 'primary' : 'default',
      size: "large",
      color: item.popular ? '#2563EB' : undefined,
      class: [
                                    'w-full justify-center font-semibold transition-all duration-300 text-sm sm:text-base py-6 rounded-xl',
                                    item.popular ? 'shadow-md hover:shadow-lg' : 'border-2 border-gray-300 hover:border-blue-500 bg-white text-gray-700 hover:text-blue-600'
                                ],
      onClick: $event => ($setup.redirectToWhatsApp(item.quickMessage))
    }, {
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<div class="flex flex-row items-center justify-center"${
            _scopeId
          }><span${
            _scopeId
          }>Pilih Paket Ini</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            icon: "mdi:arrow-right",
            class: "ml-2 text-lg"
          }, null, _parent, _scopeId));
          _push(`</div>`);
        } else {
          return [
            createVNode("div", { class: "flex flex-row items-center justify-center" }, [
              createVNode("span", null, "Pilih Paket Ini"),
              createVNode(_component_Icon, {
                icon: "mdi:arrow-right",
                class: "ml-2 text-lg"
              })
            ])
          ]
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="mt-12 text-center"><p class="text-sm text-gray-500">`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:shield-check",
    class: "inline text-green-500 mr-2"
  }, null, _parent));
  _push(` Semua paket termasuk setup lengkap. Harga transparan, tidak ada biaya tersembunyi. </p><p class="text-xs text-gray-400 mt-2"> *Domain .com gratis untuk tahun pertama. Hosting renewal wajib diperpanjang setiap tahun. </p></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/section/Pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Pricing = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cta" class="relative min-h-screen flex flex-col text-white body-font justify-center overflow-hidden" data-astro-cid-mzttnwfd> <!-- Modern gradient background --> <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-600 z-0" data-astro-cid-mzttnwfd></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] z-0" data-astro-cid-mzttnwfd></div> <!-- Animated background elements --> <div class="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob" data-astro-cid-mzttnwfd></div> <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" data-astro-cid-mzttnwfd></div> <!-- Wave divider --> <div class="custom-shape-divider-top-1758725921" data-astro-cid-mzttnwfd> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-mzttnwfd> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" data-astro-cid-mzttnwfd></path> </svg> </div> <div class="relative z-10 container px-5 py-12 sm:py-16 md:py-24 mx-auto mt-16 sm:mt-20 md:mt-0" data-astro-cid-mzttnwfd> <div class="flex flex-col text-center w-full max-w-4xl mx-auto" data-astro-cid-mzttnwfd> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mx-auto" data-astro-cid-mzttnwfd> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:rocket-launch", "class": "text-yellow-300", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-mzttnwfd": true })}
Mulai Hari Ini, Online Besok
</div> <h2 class="sm:text-5xl text-4xl font-extrabold title-font mb-6 leading-tight" data-astro-cid-mzttnwfd>
Siap Transformasi Bisnis Anda?
</h2> <p class="lg:w-3/4 mx-auto text-lg leading-relaxed text-white/90 mb-4" data-astro-cid-mzttnwfd>
Jangan biarkan kompetitor mendahului Anda. Landing page profesional adalah investasi pertama untuk sukses online.
<strong class="text-white" data-astro-cid-mzttnwfd>Mulai dari Rp 1.500.000</strong>, bisnis Anda bisa tampil profesional dan mulai jualan online.
</p> <!-- Benefits list --> <div class="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/80" data-astro-cid-mzttnwfd> <div class="flex items-center gap-2" data-astro-cid-mzttnwfd> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:check-circle", "class": "text-green-300 text-xl", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-mzttnwfd": true })} <span data-astro-cid-mzttnwfd>Konsultasi Gratis</span> </div> <div class="flex items-center gap-2" data-astro-cid-mzttnwfd> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:check-circle", "class": "text-green-300 text-xl", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-mzttnwfd": true })} <span data-astro-cid-mzttnwfd>Setup Lengkap</span> </div> <div class="flex items-center gap-2" data-astro-cid-mzttnwfd> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:check-circle", "class": "text-green-300 text-xl", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-mzttnwfd": true })} <span data-astro-cid-mzttnwfd>Support Terpercaya</span> </div> </div> <div class="mt-6" data-astro-cid-mzttnwfd> <div class="flex flex-col items-center" data-astro-cid-mzttnwfd> <button id="cta-whatsapp-button" class="cursor-pointer cta-button w-full sm:w-auto px-8 py-2 rounded-full bg-[#25D366] text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" aria-label="Konsultasi gratis via WhatsApp untuk pembuatan landing page" data-astro-cid-mzttnwfd> <span class="flex items-center justify-center gap-2 px-4" data-astro-cid-mzttnwfd> <span class="text-base sm:text-lg font-semibold" data-astro-cid-mzttnwfd>Konsultasi Gratis via WhatsApp</span> ${renderComponent($$result, "Icon", Icon, { "icon": "mdi:whatsapp", "width": "24", "class": "flex-shrink-0", "client:load": true, "client:component-hydration": "load", "client:component-path": "@iconify/vue", "client:component-export": "Icon", "data-astro-cid-mzttnwfd": true })} </span> </button> <p class="mt-4 text-sm text-white/70 text-center px-4 max-w-md" data-astro-cid-mzttnwfd>
Respon cepat dalam 1 jam kerja • Tanpa komitmen
</p> </div> </div> </div> </div> </section>  ${renderScript($$result, "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Cta.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Cta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landingo - Landing Page Profesional untuk UMKM | Mulai dari Rp 1,5 Juta | SEO Optimized", "description": "Transformasi bisnis UMKM Anda dengan landing page yang mengkonversi visitor menjadi customer. Desain modern, loading cepat, SEO optimized, dan siap untuk iklan digital. Mulai dari Rp 1,5 Juta dengan diskon promo. Siap online dalam 2-5 hari kerja." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ValueProposition", $$ValueProposition, {})} ${renderComponent($$result2, "DesignShowcase", DesignShowcase, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/DesignShowcase.vue", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", Pricing, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Pricing.vue", "client:component-export": "default" })} ${renderComponent($$result2, "Cta", $$Cta, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/AGIES/Projects/production/landingo-landing-page/src/pages/index.astro", void 0);

const $$file = "D:/AGIES/Projects/production/landingo-landing-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map
