import { Icon } from '@iconify/vue';
import { createVNode, resolveDynamicComponent, computed, defineAsyncComponent, useSSRContext } from 'vue';
import { _ as _export_sfc, d as designs } from './_plugin-vue_export-helper_3u2nmVn1.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';

const _sfc_main = {
  __name: 'DesignPreview',
  props: {
  designId: {
    type: String,
    required: true
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const designId = props.designId;

// Find design by slug/id
const design = computed(() => {
  return designs.find(d => d.slug === designId || d.id === designId);
});

// Map design to preview component
const previewComponent = computed(() => {
  if (!design.value) return null;
  
  const componentMap = {
    'ecommerce-modern': () => import('./EcommerceModern_BRO5lEuO.mjs'),
    'service-business': () => import('./ServiceBusiness_c-IQXc4o.mjs'),
    'product-launch': () => import('./ProductLaunch_BjJdBuhg.mjs'),
    'online-course': () => import('./OnlineCourse_BgbAwoD1.mjs'),
    'healthcare': () => import('./Healthcare_D3BAljtw.mjs'),
    'restaurant': () => import('./Restaurant_BY2dtJjn.mjs'),
    'fashion-store': () => import('./FashionStore_D2jGV1dM.mjs'),
    'consulting': () => import('./Consulting_k-S2MVXw.mjs'),
    'tech-product': () => import('./TechProduct_DTAaHA-u.mjs'),
    'tech-product-v2': () => import('./TechProductV2_DCaI-Bdi.mjs'),
  };
  
  const componentLoader = componentMap[design.value.slug] || componentMap[design.value.id];
  if (componentLoader) {
    return defineAsyncComponent(componentLoader);
  }
  return null;
});

const __returned__ = { props, designId, design, previewComponent, computed, defineAsyncComponent, get designs() { return designs }, get Icon() { return Icon } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.previewComponent) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.previewComponent), null, null), _parent);
      } else {
        _push(`<div class="min-h-screen flex items-center justify-center"><div class="text-center">`);
        _push(ssrRenderComponent($setup["Icon"], {
          icon: "mdi:alert-circle",
          class: "text-6xl text-gray-400 mb-4 mx-auto"
        }, null, _parent));
        _push(`<h2 class="text-2xl font-bold text-gray-900 mb-2">Design tidak ditemukan</h2><p class="text-gray-600 mb-4">Design yang Anda cari tidak tersedia atau preview belum tersedia.</p><a href="/gallery" class="text-indigo-600 hover:text-indigo-700 font-semibold"> Kembali ke Gallery </a></div></div>`);
      }
    },
    fallback: () => {
      _push(`<div class="min-h-screen flex items-center justify-center"><div class="text-center">`);
      _push(ssrRenderComponent($setup["Icon"], {
        icon: "mdi:loading",
        class: "text-6xl text-indigo-500 mb-4 mx-auto animate-spin"
      }, null, _parent));
      _push(`<p class="text-gray-600">Memuat preview...</p></div></div>`);
    },
    _: 1
  });
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/previews/DesignPreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const DesignPreview = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { DesignPreview as default };
//# sourceMappingURL=DesignPreview_CV1QLvXJ.mjs.map
