import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

const UnpkgCache = 'unpkg-cache';
const SkypackCache = 'skypack-cache';
const maxAgeSeconds = 62 * 60 * 24 * 15;
const maxEntries = 30;

import { googleFontsCache, imageCache, pageCache, staticResourceCache } from "workbox-recipes";

declare let self: ServiceWorkerGlobalScope;

pageCache();
googleFontsCache();
imageCache();
staticResourceCache();

registerRoute(
  new RegExp("https://amancoder28.github.io/voby-dev/.*\\.(wasm|ttf|woff|woff2)"),
  new CacheFirst({ cacheName: "big-assets-cache" }),
);

registerRoute(
  ({ url }) => url.origin === 'https://unpkg.com',
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
  })
);

registerRoute(
  ({ url }) => url.origin === 'https://cdn.skypack.dev',
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
  })
);

precacheAndRoute(self.__WB_MANIFEST);
