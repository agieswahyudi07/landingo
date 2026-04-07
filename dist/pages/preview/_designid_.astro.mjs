import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_S1F7PBDs.mjs';
import 'piccolore';
import { _ as _export_sfc, $ as $$Layout, d as designs } from '../../chunks/_plugin-vue_export-helper_3u2nmVn1.mjs';
import DesignPreview from '../../chunks/DesignPreview_CV1QLvXJ.mjs';
import { Icon } from '@iconify/vue';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const _sfc_main = {
  __name: 'FloatingBackButton',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { get Icon() { return Icon } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "/gallery",
    class: "cursor-pointer fixed bottom-8 right-8 z-50 group flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-white overflow-hidden",
    "aria-label": "Kembali ke Gallery"
  }, _attrs))} data-v-22010621><div class="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-sky-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" data-v-22010621></div><div class="absolute inset-0 bg-gray-900/80 opacity-100 group-hover:opacity-0 transition-opacity duration-300 -z-10" data-v-22010621></div>`);
  _push(ssrRenderComponent($setup["Icon"], {
    icon: "mdi:arrow-left",
    class: "text-xl group-hover:-translate-x-1 transition-transform duration-300"
  }, null, _parent));
  _push(`<span class="font-medium text-sm" data-v-22010621>Kembali ke Gallery</span></a>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/navigation/FloatingBackButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const FloatingBackButton = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-22010621"]]);

const $$Astro = createAstro("https://landingo.id");
async function getStaticPaths() {
  return designs.map((design) => ({
    params: { designId: design.slug || design.id },
    props: { design }
  }));
}
const $$designId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$designId;
  const { design } = Astro2.props;
  const designId = design.slug || design.id;
  const title = `Preview ${design.name} - Landingo`;
  const description = `${design.description} - Lihat preview design landing page profesional untuk ${design.category}.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": `https://landingo.id${design.image || "/assets/images/seo.webp"}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DesignPreview", DesignPreview, { "client:load": true, "designId": designId, "client:component-hydration": "load", "client:component-path": "D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/DesignPreview.vue", "client:component-export": "default" })} ${renderComponent($$result2, "FloatingBackButton", FloatingBackButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/AGIES/Projects/production/landingo-landing-page/src/components/navigation/FloatingBackButton.vue", "client:component-export": "default" })} ` })}`;
}, "D:/AGIES/Projects/production/landingo-landing-page/src/pages/preview/[designId].astro", void 0);

const $$file = "D:/AGIES/Projects/production/landingo-landing-page/src/pages/preview/[designId].astro";
const $$url = "/preview/[designId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$designId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_designid_.astro.mjs.map
