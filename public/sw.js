if (!self.define) {
  let e,
    s = {};
  const c = (c, a) => (
    (c = new URL(c + ".js", a).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let f = {};
    const n = (e) => c(e, t),
      d = { module: { uri: t }, exports: f, require: n };
    s[t] = Promise.all(a.map((e) => d[e] || n(e))).then((e) => (i(...e), f));
  };
}
define(["./workbox-da8774b7"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/ZBNyW3_QibHZjdP-KpqV6/_buildManifest.js",
          revision: "ab4c613c1fd1d9ff8ce39354b8d86586",
        },
        {
          url: "/_next/static/ZBNyW3_QibHZjdP-KpqV6/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/550-ee42ce3f6fb0d4e6.js",
          revision: "ee42ce3f6fb0d4e6",
        },
        {
          url: "/_next/static/chunks/framework-fda0a023b274c574.js",
          revision: "fda0a023b274c574",
        },
        {
          url: "/_next/static/chunks/main-7d1b05a47937503f.js",
          revision: "7d1b05a47937503f",
        },
        {
          url: "/_next/static/chunks/pages/_app-3d13d80d12705ed7.js",
          revision: "3d13d80d12705ed7",
        },
        {
          url: "/_next/static/chunks/pages/_error-4bf0fa2aa8b3e975.js",
          revision: "4bf0fa2aa8b3e975",
        },
        {
          url: "/_next/static/chunks/pages/index-72c37820c580036a.js",
          revision: "72c37820c580036a",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",
          revision: "8fa1640cc84ba8fe",
        },
        {
          url: "/_next/static/css/b0a25138cfaed99c.css",
          revision: "b0a25138cfaed99c",
        },
        {
          url: "/_next/static/css/e3040af655f682be.css",
          revision: "e3040af655f682be",
        },
        {
          url: "/_next/static/media/26a46d62cd723877-s.woff2",
          revision: "befd9c0fdfa3d8a645d5f95717ed6420",
        },
        {
          url: "/_next/static/media/55c55f0601d81cf3-s.woff2",
          revision: "43828e14271c77b87e3ed582dbff9f74",
        },
        {
          url: "/_next/static/media/581909926a08bbc8-s.woff2",
          revision: "f0b86e7c24f455280b8df606b89af891",
        },
        {
          url: "/_next/static/media/6d93bde91c0c2823-s.woff2",
          revision: "621a07228c8ccbfd647918f1021b4868",
        },
        {
          url: "/_next/static/media/97e0cb1ae144a2a9-s.woff2",
          revision: "e360c61c5bd8d90639fd4503c829c2dc",
        },
        {
          url: "/_next/static/media/a34f9d1faa5f3315-s.p.woff2",
          revision: "d4fe31e6a2aebc06b8d6e558c9141119",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c-s.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        { url: "/avatar.webp", revision: "c89058ac8835a69e66d24e4bcba2c310" },
        { url: "/favicon.ico", revision: "86d888b66ce850ac5ee005f02ab3c51d" },
        { url: "/gov.webp", revision: "4b983472af8945686c4557faef7c57ab" },
        { url: "/lightxi.webp", revision: "04aa8e5edc7e5440169bcc2c2c7bbd01" },
        { url: "/rakuyou.webp", revision: "ab12eaa33d0787d3c589104890e20023" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(css|js)$/i,
      new e.CacheFirst({ cacheName: "static-assets", plugins: [] }),
      "GET",
    ),
    e.registerRoute(
      /\.(png|jpg|jpeg|svg|gif|webp)$/i,
      new e.CacheFirst({ cacheName: "images", plugins: [] }),
      "GET",
    ),
    e.registerRoute(
      /\.(woff|woff2|eot|ttf|otf)$/i,
      new e.CacheFirst({ cacheName: "fonts", plugins: [] }),
      "GET",
    );
});
