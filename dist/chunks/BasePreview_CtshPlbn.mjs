import '@iconify/vue';
import { resolveComponent, mergeProps, withCtx, createTextVNode, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_3u2nmVn1.mjs';

const _sfc_main = {
  __name: 'BasePreview',
  props: {
  showBanner: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  }
},
  setup(__props, { expose: __expose }) {
  __expose();



const showBanner = ref(true);

const __returned__ = { showBanner, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_router_link = resolveComponent("router-link");

  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white" }, _attrs))}>`);
  if ($setup.showBanner) {
    _push(`<div class="bg-indigo-600 text-white py-2 px-4 text-center text-xs font-medium relative"><div class="container mx-auto flex items-center justify-center gap-2">`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:information",
      class: "text-sm"
    }, null, _parent));
    _push(`<span>Preview Design - Dapat dikustomisasi sesuai kebutuhan</span><button class="ml-4 hover:bg-white/20 rounded p-1 transition-colors" aria-label="Tutup banner">`);
    _push(ssrRenderComponent(_component_Icon, {
      icon: "mdi:close",
      class: "text-sm"
    }, null, _parent));
    _push(`</button></div>`);
    _push(ssrRenderComponent(_component_router_link, {
      to: "/gallery",
      class: "absolute right-4 top-1/2 -translate-y-1/2 text-xs underline hover:no-underline opacity-80 hover:opacity-100"
    }, {
      default: withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(` ← Gallery `);
        } else {
          return [
            createTextVNode(" ← Gallery ")
          ]
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($props.showFooter) {
    _push(`<footer class="bg-gray-900 text-white py-8"><div class="container px-5 mx-auto text-center"><p class="text-gray-400 text-sm">Design oleh <span class="font-semibold">Landingo</span></p></div></footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/previews/BasePreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const BasePreview = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { BasePreview as default };
//# sourceMappingURL=BasePreview_CtshPlbn.mjs.map
