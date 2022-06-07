importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { googleFontsCache, imageCache, pageCache, staticResourceCache } = workbox.recipes;
const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { ExpirationPlugin } = workbox.expiration;

pageCache();
googleFontsCache();
imageCache();
staticResourceCache();

const UnpkgCache = "unpkg-cache";
const SkypackCache = "skypack-cache";
const maxAgeSeconds = 62 * 60 * 24 * 15;
const maxEntries = 30;

registerRoute(
  new RegExp("https://amancoder28.github.io/voby-dev/.*\\.(wasm|ttf|woff|woff2)"),
  new CacheFirst({ cacheName: "big-assets-cache" }),
);

registerRoute(
  ({ url }) => url.origin === "https://unpkg.com",
  new CacheFirst({
    cacheName: UnpkgCache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds,
        maxEntries,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === "https://cdn.skypack.dev",
  new CacheFirst({
    cacheName: SkypackCache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds,
        maxEntries,
      }),
    ],
  }),
);
