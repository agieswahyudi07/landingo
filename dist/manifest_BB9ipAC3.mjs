import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_S1F7PBDs.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/AGIES/Projects/production/landingo-landing-page/","cacheDir":"file:///D:/AGIES/Projects/production/landingo-landing-page/node_modules/.astro/","outDir":"file:///D:/AGIES/Projects/production/landingo-landing-page/dist/","srcDir":"file:///D:/AGIES/Projects/production/landingo-landing-page/src/","publicDir":"file:///D:/AGIES/Projects/production/landingo-landing-page/public/","buildClientDir":"file:///D:/AGIES/Projects/production/landingo-landing-page/dist/client/","buildServerDir":"file:///D:/AGIES/Projects/production/landingo-landing-page/dist/server/","adapterName":"","routes":[{"file":"file:///D:/AGIES/Projects/production/landingo-landing-page/dist/gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/AGIES/Projects/production/landingo-landing-page/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://landingo.id","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/AGIES/Projects/production/landingo-landing-page/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["D:/AGIES/Projects/production/landingo-landing-page/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/AGIES/Projects/production/landingo-landing-page/src/pages/preview/[designId].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/preview/[designId]@_@astro":"pages/preview/_designid_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BB9ipAC3.mjs","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/BasePreview.vue":"_astro/BasePreview.D7B6EH9E.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/Consulting.vue":"_astro/Consulting.Dh9Exk8u.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/DesignPreview.vue":"_astro/DesignPreview.CoS-AROw.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/EcommerceModern.vue":"_astro/EcommerceModern.BrdAlD0M.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/FashionStore.vue":"_astro/FashionStore.BUPXPQDN.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/Healthcare.vue":"_astro/Healthcare.kNR7jU9O.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/OnlineCourse.vue":"_astro/OnlineCourse.B9VQ1g1c.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/ProductLaunch.vue":"_astro/ProductLaunch.wE24AjWs.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/Restaurant.vue":"_astro/Restaurant.D00bB6mS.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/ServiceBusiness.vue":"_astro/ServiceBusiness.BnoiSapF.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/TechProduct.vue":"_astro/TechProduct.Bd3b6aIQ.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/previews/TechProductV2.vue":"_astro/TechProductV2.BT-5UODh.js","D:/AGIES/Projects/production/landingo-landing-page/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CybuY-j4.mjs","D:/AGIES/Projects/production/landingo-landing-page/src/pages/_old/DesignGallery.vue":"_astro/DesignGallery.B2ReoTeH.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/section/DesignShowcase.vue":"_astro/DesignShowcase.CcW4Wzwr.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Pricing.vue":"_astro/Pricing.DO7iqLp1.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/navigation/FloatingBackButton.vue":"_astro/FloatingBackButton.C6a3L9A9.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.CaxM7hmQ.js","D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Cta.astro?astro&type=script&index=0&lang.ts":"_astro/Cta.astro_astro_type_script_index_0_lang.CaRaNsuz.js","@astrojs/vue/client.js":"_astro/client.CaTggSOr.js","@iconify/vue":"_astro/vue.DwFMqAR0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Hero.astro?astro&type=script&index=0&lang.ts","const a=()=>{const s=\"6285183077289\",e=encodeURIComponent(\"Halo! Saya tertarik dengan layanan landing page profesional Landingo. Bisa minta informasi lebih detail tentang paket dan prosesnya?\"),i=`https://api.whatsapp.com/send?phone=${s}&text=${e}`;window.open(i,\"_blank\")};document.getElementById(\"cta-button-1\")?.addEventListener(\"click\",a);document.getElementById(\"cta-button-2\")?.addEventListener(\"click\",a);class n{constructor(){this.hero=document.getElementById(\"hero\"),this.items=document.querySelectorAll(\".parallax-item\"),this.spotlight=document.getElementById(\"hero-spotlight\"),this.imageWrapper=document.getElementById(\"hero-image-wrapper\"),this.imageGlint=document.getElementById(\"hero-glint\"),this.mouse={x:0,y:0},this.target={x:0,y:0},this.current={x:0,y:0},this.lerpFactor=.08,this.maxTilt=8,this.maxMove=30,this.init()}lerp(t,e,i){return t+(e-t)*i}init(){this.hero&&(window.addEventListener(\"mousemove\",t=>{this.target.x=t.clientX/window.innerWidth*2-1,this.target.y=t.clientY/window.innerHeight*2-1,this.mouse.x=t.clientX,this.mouse.y=t.clientY}),this.animate())}animate(){if(this.current.x=this.lerp(this.current.x,this.target.x,this.lerpFactor),this.current.y=this.lerp(this.current.y,this.target.y,this.lerpFactor),this.items.forEach(t=>{const e=parseFloat(t.getAttribute(\"data-speed\")||\"0.05\"),i=this.current.x*this.maxMove*e*2,r=this.current.y*this.maxMove*e*2;t.style.transform=`translate3d(${i}px, ${r}px, 0)`}),this.imageWrapper){const t=this.current.x*this.maxTilt,e=this.current.y*-this.maxTilt;if(this.imageWrapper.style.transform=`\n          perspective(1000px)\n          rotateX(${e}deg)\n          rotateY(${t}deg)\n          scale3d(1.02, 1.02, 1.02)\n        `,this.imageGlint){const i=Math.abs(this.current.x)+Math.abs(this.current.y);this.imageGlint.style.opacity=(i*.5).toString(),this.imageGlint.style.transform=`translate(${this.current.x*20}px, ${this.current.y*20}px)`}}if(this.spotlight){const t=this.hero.getBoundingClientRect(),e=this.mouse.x-t.left,i=this.mouse.y-t.top;this.spotlight.style.setProperty(\"--x\",`${e}px`),this.spotlight.style.setProperty(\"--y\",`${i}px`),this.spotlight.style.opacity=\"1\"}requestAnimationFrame(this.animate.bind(this))}}window.requestIdleCallback?window.requestIdleCallback(()=>new n):setTimeout(()=>new n,100);\n//# sourceMappingURL=Hero.astro_astro_type_script_index_0_lang.CaxM7hmQ.js.map"],["D:/AGIES/Projects/production/landingo-landing-page/src/components/section/Cta.astro?astro&type=script&index=0&lang.ts","const t=()=>{const e=\"6285183077289\",a=encodeURIComponent(\"Halo! Saya siap untuk upgrade bisnis saya dengan landing page profesional dari Landingo. Bisa kita diskusikan lebih detail?\"),n=`https://api.whatsapp.com/send?phone=${e}&text=${a}`;window.open(n,\"_blank\")};document.getElementById(\"cta-whatsapp-button\")?.addEventListener(\"click\",t);\n//# sourceMappingURL=Cta.astro_astro_type_script_index_0_lang.CaRaNsuz.js.map"]],"assets":["/file:///D:/AGIES/Projects/production/landingo-landing-page/dist/gallery/index.html","/file:///D:/AGIES/Projects/production/landingo-landing-page/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"FGVWXNFKhToGVeiNBl9jjRo+MN/kn1JGpjIdsIPgy+o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
//# sourceMappingURL=manifest_BB9ipAC3.mjs.map
