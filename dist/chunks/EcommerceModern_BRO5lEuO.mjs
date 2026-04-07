import '@iconify/vue';
import { resolveComponent, mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
/* empty css                         */
import { _ as _export_sfc } from './_plugin-vue_export-helper_3u2nmVn1.mjs';

const whatsappBase = '6285183077289';


const _sfc_main = {
  __name: 'EcommerceModern',
  setup(__props, { expose: __expose }) {
  __expose();

const isMobileMenuOpen = ref(false);

const navLinks = [
  { text: 'New Drops', href: '#products' },
  { text: 'Men', href: '#products' },
  { text: 'Women', href: '#products' },
  { text: 'Accessories', href: '#products' },
];

const features = [
  {
    icon: 'mdi:truck-fast-outline',
    title: 'Fast Shipping',
    desc: 'Pengiriman kilat ke seluruh kota besar di Indonesia dengan tracking real-time.'
  },
  {
    icon: 'mdi:shield-check-outline',
    title: 'Authentic Gear',
    desc: 'Jaminan 100% produk original atau uang kembali 2x lipat.'
  },
  {
    icon: 'mdi:headphones',
    title: '24/7 Support',
    desc: 'Tim support kami siap membantu pertanyaan ukuran dan styling kapan saja.'
  }
];

const products = [
  {
    name: 'Oversized Tee Black',
    category: 'T-Shirts',
    price: 249000,
    originalPrice: null,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Urban Cargo Pants',
    category: 'Bottoms',
    price: 499000,
    originalPrice: 650000,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Reflective Hoodie',
    category: 'Outerwear',
    price: 599000,
    originalPrice: null,
    badge: null,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Tech Runner V2',
    category: 'Footwear',
    price: 1299000,
    originalPrice: null,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop'
  }
];

// Logic
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const handleConsultation = () => {
  const msg = encodeURIComponent('Halo! Saya tertarik membuat website E-Commerce dengan gaya "Urban Streetwear" seperti ini. Bisa diskusi harga?');
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const handleProductInquiry = (product) => {
  // Karena ini landing page jasa, kita arahkan ke jasa pembuatan web, bukan beli baju
  const msg = encodeURIComponent(`Halo! Saya suka tampilan produk "${product.name}" di demo website Anda. Saya ingin fitur showcase produk seperti itu di website saya.`);
  window.open(`https://wa.me/${whatsappBase}?text=${msg}`, '_blank');
};

const __returned__ = { isMobileMenuOpen, navLinks, features, products, scrollToSection, whatsappBase, handleConsultation, handleProductInquiry, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");

  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white text-zinc-900 selection:bg-lime-400 selection:text-black" }, _attrs))} data-v-706f876a><div class="bg-black text-white py-2 overflow-hidden whitespace-nowrap relative z-50" data-v-706f876a><div class="animate-marquee inline-block" data-v-706f876a><span class="mx-4 text-xs font-bold tracking-widest uppercase" data-v-706f876a>Gratis Ongkir Seluruh Indonesia</span> • <span class="mx-4 text-xs font-bold tracking-widest uppercase" data-v-706f876a>Diskon 20% Pengguna Baru</span> • <span class="mx-4 text-xs font-bold tracking-widest uppercase" data-v-706f876a>Garansi 30 Hari Pengembalian</span> • <span class="mx-4 text-xs font-bold tracking-widest uppercase" data-v-706f876a>Gratis Ongkir Seluruh Indonesia</span> • <span class="mx-4 text-xs font-bold tracking-widest uppercase" data-v-706f876a>Diskon 20% Pengguna Baru</span> • </div></div><header class="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-zinc-200 transition-all duration-300" data-v-706f876a><div class="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between" data-v-706f876a><button class="md:hidden p-2 -ml-2" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:menu",
    class: "text-2xl"
  }, null, _parent));
  _push(`</button><a href="#" class="flex items-center gap-1 group" data-v-706f876a><div class="font-black text-2xl tracking-tighter italic group-hover:text-lime-600 transition-colors" data-v-706f876a> URBAN<span class="text-lime-500" data-v-706f876a>PULSE</span>. </div></a><nav class="hidden md:flex items-center gap-8" data-v-706f876a><!--[-->`);
  ssrRenderList($setup.navLinks, (link) => {
    _push(`<a${
      ssrRenderAttr("href", link.href)
    } class="text-sm font-bold uppercase tracking-wide hover:text-lime-600 hover:underline underline-offset-4 transition-all" data-v-706f876a>${
      ssrInterpolate(link.text)
    }</a>`);
  });
  _push(`<!--]--></nav><div class="flex items-center gap-4" data-v-706f876a><button class="hidden sm:block hover:text-lime-600 transition-colors" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:magnify",
    class: "text-2xl"
  }, null, _parent));
  _push(`</button><button class="relative hover:text-lime-600 transition-colors group" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:cart-outline",
    class: "text-2xl"
  }, null, _parent));
  _push(`<span class="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 text-black text-[10px] font-bold flex items-center justify-center rounded-full group-hover:scale-110 transition-transform" data-v-706f876a>2</span></button><button class="hidden md:flex bg-black text-white px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-lime-400 hover:text-black transition-colors items-center gap-2" data-v-706f876a> Buat Toko `);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:arrow-right" }, null, _parent));
  _push(`</button></div></div></header>`);
  if ($setup.isMobileMenuOpen) {
    _push(`<div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden" data-v-706f876a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([$setup.isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full', "fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 md:hidden"])}" data-v-706f876a><div class="p-6 h-full flex flex-col justify-between" data-v-706f876a><div data-v-706f876a><div class="flex justify-between items-center mb-8" data-v-706f876a><span class="font-black text-xl" data-v-706f876a>MENU</span><button data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:close",
    class: "text-2xl"
  }, null, _parent));
  _push(`</button></div><nav class="flex flex-col gap-6" data-v-706f876a><!--[-->`);
  ssrRenderList($setup.navLinks, (link) => {
    _push(`<a${
      ssrRenderAttr("href", link.href)
    } class="text-lg font-bold uppercase tracking-wide border-b border-zinc-100 pb-2" data-v-706f876a>${
      ssrInterpolate(link.text)
    }</a>`);
  });
  _push(`<!--]--></nav></div><button class="w-full bg-lime-400 text-black py-4 font-bold uppercase tracking-wider" data-v-706f876a> Konsultasi Website </button></div></div><section id="home" class="relative bg-zinc-100 overflow-hidden" data-v-706f876a><div class="container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28 flex flex-col md:flex-row items-center gap-12" data-v-706f876a><div class="md:w-1/2 z-10 relative" data-v-706f876a><div class="inline-block bg-black text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest animate-pulse" data-v-706f876a> New Collection 2025 </div><h1 class="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-zinc-900" data-v-706f876a> WEAR <br data-v-706f876a> YOUR <br data-v-706f876a><span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500" data-v-706f876a>ATTITUDE</span></h1><p class="text-lg text-zinc-600 max-w-md mb-10 font-medium" data-v-706f876a> Koleksi streetwear premium dengan desain eksklusif. Dibuat untuk mereka yang berani tampil beda. </p><div class="flex gap-4" data-v-706f876a><button class="px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-lg shadow-black/20" data-v-706f876a> Belanja Sekarang </button><button class="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors" data-v-706f876a> Buat Web Ini </button></div></div><div class="md:w-1/2 relative" data-v-706f876a><div class="absolute inset-0 bg-lime-300 rounded-full blur-[100px] opacity-40 transform translate-x-1/4" data-v-706f876a></div><img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Hero Model" class="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 transform rotate-2 shadow-2xl border-4 border-white" data-v-706f876a></div></div></section><section id="features" class="border-y border-zinc-200" data-v-706f876a><div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200" data-v-706f876a><!--[-->`);
  ssrRenderList($setup.features, (feat, idx) => {
    _push(`<div class="p-10 group hover:bg-zinc-50 transition-colors text-center md:text-left" data-v-706f876a>`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: feat.icon,
      class: "text-4xl mb-4 text-zinc-400 group-hover:text-lime-600 transition-colors"
    }, null, _parent));
    _push(`<h3 class="text-xl font-black uppercase tracking-tight mb-2" data-v-706f876a>${
      ssrInterpolate(feat.title)
    }</h3><p class="text-sm text-zinc-500 leading-relaxed" data-v-706f876a>${
      ssrInterpolate(feat.desc)
    }</p></div>`);
  });
  _push(`<!--]--></div></section><section id="products" class="py-24 bg-white" data-v-706f876a><div class="container mx-auto px-4 sm:px-6" data-v-706f876a><div class="flex justify-between items-end mb-12" data-v-706f876a><div data-v-706f876a><h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2" data-v-706f876a>Selected <span class="text-lime-500" data-v-706f876a>Drops</span></h2><p class="text-zinc-500 font-medium" data-v-706f876a>Produk terlaris minggu ini.</p></div><a href="#" class="hidden md:flex items-center gap-2 font-bold uppercase tracking-wide border-b-2 border-black pb-1 hover:text-lime-600 hover:border-lime-600 transition-colors" data-v-706f876a> Lihat Semua `);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:arrow-right" }, null, _parent));
  _push(`</a></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6" data-v-706f876a><!--[-->`);
  ssrRenderList($setup.products, (product, index) => {
    _push(`<div class="group relative cursor-pointer" data-v-706f876a><div class="aspect-[3/4] bg-zinc-100 relative overflow-hidden mb-4" data-v-706f876a><img${ssrRenderAttr("src", product.image)} class="w-full h-full object-cover" alt="Product Front" data-v-706f876a><div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" data-v-706f876a></div>`);
    if (product.badge) {
      _push(`<div class="absolute top-2 left-2 bg-lime-400 text-black text-xs font-bold px-2 py-1 uppercase tracking-wider" data-v-706f876a>${ssrInterpolate(product.badge)}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<button class="absolute bottom-0 left-0 w-full bg-black text-white py-3 font-bold uppercase text-sm tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-lime-500 hover:text-black" data-v-706f876a>`);
    _push(ssrRenderComponent(_component_Icon, { icon: "mdi:whatsapp" }, null, _parent));
    _push(` Tanya Stok </button></div><div data-v-706f876a><h3 class="text-lg font-bold uppercase tracking-tight mb-1 group-hover:text-lime-600 transition-colors" data-v-706f876a>${
      ssrInterpolate(product.name)
    }</h3><p class="text-sm text-zinc-500 mb-2" data-v-706f876a>${
      ssrInterpolate(product.category)
    }</p><div class="flex items-center gap-3" data-v-706f876a><span class="font-black text-lg" data-v-706f876a>Rp ${
      ssrInterpolate(product.price.toLocaleString('id-ID'))
    }</span>`);
    if (product.originalPrice) {
      _push(`<span class="text-sm text-zinc-400 line-through decoration-1" data-v-706f876a> Rp ${ssrInterpolate(product.originalPrice.toLocaleString('id-ID'))}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div><div class="mt-12 text-center md:hidden" data-v-706f876a><button class="w-full py-4 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors" data-v-706f876a> Lihat Semua Produk </button></div></div></section><section class="py-24 bg-black text-white relative overflow-hidden" data-v-706f876a><div class="absolute inset-0 opacity-20 bg-[url(&#39;https://www.transparenttextures.com/patterns/carbon-fibre.png&#39;)]" data-v-706f876a></div><div class="container mx-auto px-6 text-center relative z-10" data-v-706f876a><h2 class="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6" data-v-706f876a> Summer <span class="text-lime-400 stroke-text" data-v-706f876a>Sale</span></h2><p class="text-xl text-zinc-400 mb-10 max-w-xl mx-auto" data-v-706f876a> Diskon hingga 50% untuk item terpilih. Jangan lewatkan kesempatan untuk upgrade style Anda. </p><button class="bg-lime-400 text-black px-10 py-5 font-black uppercase text-xl tracking-widest hover:bg-white transition-colors transform hover:-translate-y-1 shadow-xl shadow-lime-900/50" data-v-706f876a> Get Access </button></div></section><section id="contact" class="py-24 bg-zinc-50 border-t border-zinc-200" data-v-706f876a><div class="container mx-auto px-6" data-v-706f876a><div class="bg-white border border-zinc-200 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group" data-v-706f876a><div class="absolute -right-20 -top-20 w-64 h-64 bg-lime-100 rounded-full blur-3xl opacity-50 group-hover:bg-lime-200 transition-colors" data-v-706f876a></div><div class="relative z-10 max-w-3xl mx-auto" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:store-cog",
    class: "text-6xl mb-6 text-zinc-300"
  }, null, _parent));
  _push(`<h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-zinc-900" data-v-706f876a> Ingin Toko Online Seperti Ini? </h2><p class="text-lg text-zinc-600 mb-10 leading-relaxed" data-v-706f876a> Kami membangun website e-commerce yang cepat, responsif, dan didesain untuk konversi penjualan. Jangan biarkan bisnis Anda terlihat biasa saja. </p><div class="flex flex-col sm:flex-row justify-center gap-4" data-v-706f876a><button class="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-lime-500 hover:text-black transition-all" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, {
    icon: "mdi:whatsapp",
    class: "text-xl"
  }, null, _parent));
  _push(` Konsultasi Gratis </button><button class="px-8 py-4 border-2 border-zinc-200 text-zinc-600 font-bold uppercase tracking-wider hover:border-black hover:text-black transition-colors" data-v-706f876a> Lihat Paket Harga </button></div></div></div></div></section><footer class="bg-black text-white pt-20 pb-10 border-t border-zinc-800" data-v-706f876a><div class="container mx-auto px-6" data-v-706f876a><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" data-v-706f876a><div class="md:col-span-2" data-v-706f876a><h3 class="text-3xl font-black italic tracking-tighter mb-6" data-v-706f876a>URBAN<span class="text-lime-500" data-v-706f876a>PULSE</span>.</h3><p class="text-zinc-500 max-w-sm mb-8" data-v-706f876a> Platform fashion streetwear terdepan. Kami mengkurasi style terbaik untuk Anda yang berani tampil beda. </p><div class="flex gap-4" data-v-706f876a><a href="#" class="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:instagram" }, null, _parent));
  _push(`</a><a href="#" class="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:tiktok" }, null, _parent));
  _push(`</a><a href="#" class="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-lime-500 hover:text-black hover:border-lime-500 transition-all" data-v-706f876a>`);
  _push(ssrRenderComponent(_component_Icon, { icon: "mdi:youtube" }, null, _parent));
  _push(`</a></div></div><div data-v-706f876a><h4 class="font-bold uppercase tracking-wider mb-6 text-zinc-400" data-v-706f876a>Shop</h4><ul class="space-y-4 text-zinc-500 text-sm" data-v-706f876a><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>New Arrivals</a></li><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>Hoodies &amp; Sweatshirts</a></li><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>Accessories</a></li><li data-v-706f876a><a href="#" class="hover:text-white transition-colors text-lime-400" data-v-706f876a>Sale</a></li></ul></div><div data-v-706f876a><h4 class="font-bold uppercase tracking-wider mb-6 text-zinc-400" data-v-706f876a>Support</h4><ul class="space-y-4 text-zinc-500 text-sm" data-v-706f876a><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>Track Order</a></li><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>Returns &amp; Exchanges</a></li><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>Size Guide</a></li><li data-v-706f876a><a href="#" class="hover:text-white transition-colors" data-v-706f876a>FAQs</a></li></ul></div></div><div class="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs uppercase tracking-widest" data-v-706f876a><p data-v-706f876a>© 2025 UrbanPulse Store. Built by Landingo.</p><div class="flex gap-6 mt-4 md:mt-0" data-v-706f876a><a href="#" class="hover:text-white" data-v-706f876a>Privacy</a><a href="#" class="hover:text-white" data-v-706f876a>Terms</a></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/previews/EcommerceModern.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const EcommerceModern = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-706f876a"]]);

export { EcommerceModern as default };
//# sourceMappingURL=EcommerceModern_BRO5lEuO.mjs.map
