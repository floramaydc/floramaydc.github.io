import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, t as decodeKey } from './chunks/astro/server_D37m5tNR.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///private/tmp/flora-component-build/","cacheDir":"file:///private/tmp/flora-component-build/node_modules/.astro/","outDir":"file:///private/tmp/flora-component-build/dist/","srcDir":"file:///private/tmp/flora-component-build/src/","publicDir":"file:///private/tmp/flora-component-build/public/","buildClientDir":"file:///private/tmp/flora-component-build/dist/client/","buildServerDir":"file:///private/tmp/flora-component-build/dist/server/","adapterName":"","routes":[{"file":"file:///private/tmp/flora-component-build/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/dark-pattern-detector-privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dark-pattern-detector-privacy","isIndex":false,"type":"page","pattern":"^\\/dark-pattern-detector-privacy\\/?$","segments":[[{"content":"dark-pattern-detector-privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dark-pattern-detector-privacy.astro","pathname":"/dark-pattern-detector-privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/mai/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mai","isIndex":false,"type":"page","pattern":"^\\/mai\\/?$","segments":[[{"content":"mai","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mai.astro","pathname":"/mai","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/play/art/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/play/art","isIndex":false,"type":"page","pattern":"^\\/play\\/art\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}],[{"content":"art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/play/art.astro","pathname":"/play/art","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/play/no-dream-is-too-big/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/play/no-dream-is-too-big","isIndex":false,"type":"page","pattern":"^\\/play\\/no-dream-is-too-big\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}],[{"content":"no-dream-is-too-big","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/play/no-dream-is-too-big.astro","pathname":"/play/no-dream-is-too-big","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/play/pale-and-bright/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/play/pale-and-bright","isIndex":false,"type":"page","pattern":"^\\/play\\/pale-and-bright\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}],[{"content":"pale-and-bright","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/play/pale-and-bright.astro","pathname":"/play/pale-and-bright","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/play/tabulas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/play/tabulas","isIndex":false,"type":"page","pattern":"^\\/play\\/tabulas\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}],[{"content":"tabulas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/play/tabulas.astro","pathname":"/play/tabulas","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/play/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/play","isIndex":true,"type":"page","pattern":"^\\/play\\/?$","segments":[[{"content":"play","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/play/index.astro","pathname":"/play","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/toybox/prototypes/demo-days-0-reference/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/toybox/prototypes/demo-days-0-reference","isIndex":false,"type":"page","pattern":"^\\/toybox\\/prototypes\\/demo-days-0-reference\\/?$","segments":[[{"content":"toybox","dynamic":false,"spread":false}],[{"content":"prototypes","dynamic":false,"spread":false}],[{"content":"demo-days-0-reference","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toybox/prototypes/demo-days-0-reference.astro","pathname":"/toybox/prototypes/demo-days-0-reference","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/toybox/prototypes/fluent-theme-toggle/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/toybox/prototypes/fluent-theme-toggle","isIndex":false,"type":"page","pattern":"^\\/toybox\\/prototypes\\/fluent-theme-toggle\\/?$","segments":[[{"content":"toybox","dynamic":false,"spread":false}],[{"content":"prototypes","dynamic":false,"spread":false}],[{"content":"fluent-theme-toggle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toybox/prototypes/fluent-theme-toggle.astro","pathname":"/toybox/prototypes/fluent-theme-toggle","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/toybox/prototypes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/toybox/prototypes","isIndex":true,"type":"page","pattern":"^\\/toybox\\/prototypes\\/?$","segments":[[{"content":"toybox","dynamic":false,"spread":false}],[{"content":"prototypes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toybox/prototypes/index.astro","pathname":"/toybox/prototypes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/toybox/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/toybox","isIndex":true,"type":"page","pattern":"^\\/toybox\\/?$","segments":[[{"content":"toybox","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/toybox/index.astro","pathname":"/toybox","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":true,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/index.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/writing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/writing","isIndex":true,"type":"page","pattern":"^\\/writing\\/?$","segments":[[{"content":"writing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/writing/index.astro","pathname":"/writing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///private/tmp/flora-component-build/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.floramaydc.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/private/tmp/flora-component-build/src/pages/mai.astro",{"propagation":"none","containsHead":true}],["/private/tmp/flora-component-build/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/dark-pattern-detector-privacy.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/play/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/play/art.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/play/index.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/play/no-dream-is-too-big.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/play/pale-and-bright.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/play/tabulas.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/toybox/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/toybox/index.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/toybox/prototypes/demo-days-0-reference.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/toybox/prototypes/fluent-theme-toggle.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/toybox/prototypes/index.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/work/index.astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/writing/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/private/tmp/flora-component-build/src/pages/writing/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/private/tmp/flora-component-build/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/dark-pattern-detector-privacy@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/play/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/play/art@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/play/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/play/no-dream-is-too-big@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/play/pale-and-bright@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/play/tabulas@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/toybox/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/toybox/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/toybox/prototypes/demo-days-0-reference@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/toybox/prototypes/fluent-theme-toggle@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/toybox/prototypes/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/writing/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/writing/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/private/tmp/flora-component-build/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/dark-pattern-detector-privacy@_@astro":"pages/dark-pattern-detector-privacy.astro.mjs","\u0000@astro-page:src/pages/mai@_@astro":"pages/mai.astro.mjs","\u0000@astro-page:src/pages/play/art@_@astro":"pages/play/art.astro.mjs","\u0000@astro-page:src/pages/play/no-dream-is-too-big@_@astro":"pages/play/no-dream-is-too-big.astro.mjs","\u0000@astro-page:src/pages/play/pale-and-bright@_@astro":"pages/play/pale-and-bright.astro.mjs","\u0000@astro-page:src/pages/play/tabulas@_@astro":"pages/play/tabulas.astro.mjs","\u0000@astro-page:src/pages/play/index@_@astro":"pages/play.astro.mjs","\u0000@astro-page:src/pages/play/[...slug]@_@astro":"pages/play/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/toybox/prototypes/demo-days-0-reference@_@astro":"pages/toybox/prototypes/demo-days-0-reference.astro.mjs","\u0000@astro-page:src/pages/toybox/prototypes/fluent-theme-toggle@_@astro":"pages/toybox/prototypes/fluent-theme-toggle.astro.mjs","\u0000@astro-page:src/pages/toybox/prototypes/index@_@astro":"pages/toybox/prototypes.astro.mjs","\u0000@astro-page:src/pages/toybox/index@_@astro":"pages/toybox.astro.mjs","\u0000@astro-page:src/pages/toybox/[...slug]@_@astro":"pages/toybox/_---slug_.astro.mjs","\u0000@astro-page:src/pages/work/index@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/writing/index@_@astro":"pages/writing.astro.mjs","\u0000@astro-page:src/pages/writing/[...slug]@_@astro":"pages/writing/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B343u3pi.mjs","/private/tmp/flora-component-build/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/private/tmp/flora-component-build/.astro/content-modules.mjs":"chunks/content-modules_DDn3GU1d.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CxeD_um1.mjs","/private/tmp/flora-component-build/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cdr5tkYw.mjs","/private/tmp/flora-component-build/src/content/work/mindelf.mdx?astroPropagatedAssets":"chunks/mindelf_nOjLtr0G.mjs","/private/tmp/flora-component-build/src/content/work/vera.mdx?astroPropagatedAssets":"chunks/vera_CyL0qKU3.mjs","/private/tmp/flora-component-build/src/content/work/ebbc.mdx?astroPropagatedAssets":"chunks/ebbc_CY-JmMoB.mjs","/private/tmp/flora-component-build/src/content/play/art.mdx?astroPropagatedAssets":"chunks/art_bKHzWzZV.mjs","/private/tmp/flora-component-build/src/content/play/pale-and-bright.mdx?astroPropagatedAssets":"chunks/pale-and-bright_D9YRWnDe.mjs","/private/tmp/flora-component-build/src/content/play/no-dream-is-too-big.mdx?astroPropagatedAssets":"chunks/no-dream-is-too-big_CMEvAVuA.mjs","/private/tmp/flora-component-build/src/content/play/tabulas.mdx?astroPropagatedAssets":"chunks/tabulas_BbZpDDik.mjs","/private/tmp/flora-component-build/src/content/work/mindelf.mdx":"chunks/mindelf_D5CwfKZo.mjs","/private/tmp/flora-component-build/src/content/work/vera.mdx":"chunks/vera_BHMK-2Pd.mjs","/private/tmp/flora-component-build/src/content/work/ebbc.mdx":"chunks/ebbc_HQcfbs4A.mjs","/private/tmp/flora-component-build/src/content/play/art.mdx":"chunks/art_BF8tsgHb.mjs","/private/tmp/flora-component-build/src/content/play/pale-and-bright.mdx":"chunks/pale-and-bright_ChQb8X_k.mjs","/private/tmp/flora-component-build/src/content/play/no-dream-is-too-big.mdx":"chunks/no-dream-is-too-big_BRV8bpsQ.mjs","/private/tmp/flora-component-build/src/content/play/tabulas.mdx":"chunks/tabulas_DpaHyu9Z.mjs","/private/tmp/flora-component-build/src/components/FluentShowcase.tsx":"assets/FluentShowcase.COHkBqM4.js","@astrojs/react/client.js":"assets/client.C6b8Aq8U.js","/private/tmp/flora-component-build/src/components/PlaybookActions.astro?astro&type=script&index=0&lang.ts":"assets/PlaybookActions.astro_astro_type_script_index_0_lang.0X3b-VJX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/private/tmp/flora-component-build/src/components/PlaybookActions.astro?astro&type=script&index=0&lang.ts","const k=\"fmdc-playbook-unlocked\",p=\"fmdc-playbook-email\";function a(e,t={}){try{window.dispatchEvent(new CustomEvent(\"site:track\",{detail:{name:e,params:t}}))}catch{}}function m(){try{return localStorage.getItem(k)===\"true\"}catch{return!1}}function b(e){try{localStorage.setItem(k,\"true\"),e&&localStorage.setItem(p,e)}catch{}}function u(e){const t=e.querySelector(\".locked\"),o=e.querySelector(\".unlocked\");!t||!o||(m()?(t.classList.add(\"hidden\"),o.classList.remove(\"hidden\")):(t.classList.remove(\"hidden\"),o.classList.add(\"hidden\")))}function y(e){const t=document.querySelector(`template.playbook-raw[data-for=\"${CSS.escape(e)}\"]`);return t?t.innerHTML.replace(/&lt;/g,\"<\").replace(/&gt;/g,\">\").replace(/&amp;/g,\"&\"):\"\"}function c(e,t,o){const r=e.querySelector(t);r&&(r.textContent=o)}function f(e,t){const o=new Blob([t],{type:\"text/markdown;charset=utf-8\"}),r=URL.createObjectURL(o),n=document.createElement(\"a\");n.href=r,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function w(e){const t=e.dataset.slug||\"\",o=e.dataset.endpoint||\"\",r=e.dataset.filename||`${t}.md`;u(e);const n=e.querySelector(\".unlock-form\");n?.addEventListener(\"submit\",async l=>{l.preventDefault();const s=n.querySelector(\"input[type=email]\").value.trim();if(s){if(a(\"playbook_unlock_submit\",{slug:t}),c(e,\".form-status\",\"Saving…\"),o)try{const d=await fetch(o,{method:\"POST\",mode:\"cors\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({email:s,source:`playbook:${t}`})});if(!d.ok){const i=await d.json().catch(()=>({}));if(i.error===\"invalid_email\"){a(\"playbook_unlock_error\",{slug:t,error:\"invalid_email\"}),c(e,\".form-status\",\"That email looks off — check the address and try again.\");return}if(i.error===\"rate_limited\"){a(\"playbook_unlock_error\",{slug:t,error:\"rate_limited\"}),c(e,\".form-status\",\"Too many tries — wait a bit and retry.\");return}a(\"playbook_unlock_error\",{slug:t,error:\"server_error\"}),console.warn(\"subscribe failed\",d.status,i)}}catch(d){a(\"playbook_unlock_error\",{slug:t,error:\"network_error\"}),console.warn(\"subscribe network error\",d)}b(s),a(\"playbook_unlock_success\",{slug:t}),u(e),c(e,\".action-status\",`Unlocked. Welcome, ${s}.`)}}),e.querySelector(\".copy-btn\")?.addEventListener(\"click\",async()=>{const l=y(t);try{await navigator.clipboard.writeText(l),a(\"playbook_copy_markdown\",{slug:t}),c(e,\".action-status\",\"Markdown copied to clipboard.\")}catch{a(\"playbook_copy_markdown_error\",{slug:t,error:\"clipboard_blocked\"}),c(e,\".action-status\",\"Copy blocked by browser. Use the download instead.\")}}),e.querySelector(\".download-btn\")?.addEventListener(\"click\",()=>{const l=y(t);f(r,l),a(\"playbook_download_markdown\",{slug:t,filename:r}),c(e,\".action-status\",`Downloaded ${r}.`)})}document.querySelectorAll(\".playbook-actions\").forEach(e=>w(e));"]],"assets":["/file:///private/tmp/flora-component-build/dist/404.html","/file:///private/tmp/flora-component-build/dist/about/index.html","/file:///private/tmp/flora-component-build/dist/dark-pattern-detector-privacy/index.html","/file:///private/tmp/flora-component-build/dist/mai/index.html","/file:///private/tmp/flora-component-build/dist/play/art/index.html","/file:///private/tmp/flora-component-build/dist/play/no-dream-is-too-big/index.html","/file:///private/tmp/flora-component-build/dist/play/pale-and-bright/index.html","/file:///private/tmp/flora-component-build/dist/play/tabulas/index.html","/file:///private/tmp/flora-component-build/dist/play/index.html","/file:///private/tmp/flora-component-build/dist/rss.xml","/file:///private/tmp/flora-component-build/dist/toybox/prototypes/demo-days-0-reference/index.html","/file:///private/tmp/flora-component-build/dist/toybox/prototypes/fluent-theme-toggle/index.html","/file:///private/tmp/flora-component-build/dist/toybox/prototypes/index.html","/file:///private/tmp/flora-component-build/dist/toybox/index.html","/file:///private/tmp/flora-component-build/dist/work/index.html","/file:///private/tmp/flora-component-build/dist/writing/index.html","/file:///private/tmp/flora-component-build/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"V3Ry1yXfinajiZy+tL/cCO7FVlYJA7kB8iPPUOV9X8o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
