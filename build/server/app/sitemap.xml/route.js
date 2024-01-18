"use strict";
(() => {
var exports = {};
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 50411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/sitemap.ts
var sitemap_namespaceObject = {};
__webpack_require__.r(sitemap_namespaceObject);
__webpack_require__.d(sitemap_namespaceObject, {
  "default": () => (sitemap)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=1!./src/app/sitemap.ts?__next_metadata_route__
var sitemap_next_metadata_route_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_route_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./src/utils/index.ts
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.chavalittsao.com";

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(21340);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/utils/api.ts

function apiFetch(url, options = {}) {
    const defaultOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const mergedOptions = {
        ...defaultOptions,
        ...options,
        next: {
            revalidate: 30,
            ...options.next
        }
    };
    return fetch(url, mergedOptions).then((res)=>{
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Error fetching from Payload API: ${res.statusText} (${res.status})`);
    });
}
async function getColl(endpoint, query, fetchOptions) {
    const stringifiedQuery = lib_default().stringify({
        limit: 1000,
        ...query
    }, {
        addQueryPrefix: true
    });
    const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api${endpoint}${stringifiedQuery}`;
    const data = await apiFetch(url, fetchOptions ?? {});
    return data;
}
async function getGlob(endpoint, query, fetchOptions) {
    const stringifiedQuery = lib_default().stringify({
        limit: 1000,
        ...query
    }, {
        addQueryPrefix: true
    });
    const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals${endpoint}${stringifiedQuery}`;
    const data = await apiFetch(url, fetchOptions ?? {});
    return data;
}

;// CONCATENATED MODULE: ./src/app/sitemap.ts


function addForwardSlash(url) {
    return url.endsWith("/") ? url : `${url}/`;
}
async function sitemap() {
    const { mainNavigation } = await getGlob("/navigation");
    const { docs: books } = await getColl("/books");
    const { docs: podcasts } = await getColl("/podcasts-list");
    const mainLinks = [
        {
            url: addForwardSlash(appUrl),
            lastModified: new Date()
        }
    ];
    (mainNavigation ?? [])?.filter(({ type })=>type !== "dropdown").forEach(({ url })=>{
        mainLinks.push({
            url: addForwardSlash(`${appUrl}${url.startsWith("/") ? url : `/${url}`}`),
            lastModified: new Date()
        });
    });
    const bookLinks = books.map(({ slug, updatedAt })=>({
            url: addForwardSlash(`${appUrl}/book/${slug}`),
            lastModified: new Date(Date.parse(updatedAt))
        }));
    const podcastLinks = podcasts.map(({ slug, updatedAt })=>({
            url: addForwardSlash(`${appUrl}/podcast/${slug}`),
            lastModified: new Date(Date.parse(updatedAt))
        }));
    return [
        ...mainLinks,
        ...bookLinks,
        ...podcastLinks
    ];
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
var resolve_route_data = __webpack_require__(54031);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&isDynamic=1!./src/app/sitemap.ts?__next_metadata_route__




const sitemapModule = { ...sitemap_namespaceObject }
const handler = sitemapModule.default
const generateSitemaps = sitemapModule.generateSitemaps
const contentType = "application/xml"
const fileType = "sitemap"

async function GET(_, ctx) {
  const { __metadata_id__ = [], ...params } = ctx.params || {}
  const targetId = __metadata_id__[0]
  let id = undefined
  const sitemaps = generateSitemaps ? await generateSitemaps() : null

  if (sitemaps) {
    id = sitemaps.find((item) => {
      if (false) {}
      return item.id.toString() === targetId
    })?.id
    if (id == null) {
      return new server.NextResponse('Not Found', {
        status: 404,
      })
    }
  }

  const data = await handler({ id })
  const content = (0,resolve_route_data.resolveRouteData)(data, fileType)

  return new server.NextResponse(content, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.ts&appDir=C%3A%5Cprojects%5Cchavalittsao%5Csrc%5Capp&appPaths=%2Fsitemap&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/sitemap.xml/route",
        pathname: "/sitemap.xml",
        filename: "sitemap",
        bundlePath: "app/sitemap.xml/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!C:\\projects\\chavalittsao\\src\\app\\sitemap.ts?__next_metadata_route__",
    nextConfigOutput,
    userland: sitemap_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/sitemap.xml/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,565,501,514,63], () => (__webpack_exec__(50411)));
module.exports = __webpack_exports__;

})();