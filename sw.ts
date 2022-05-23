import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

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
  new RegExp("https://cdn.skypack.dev/-/.*\\.(js)"),
  new CacheFirst({ cacheName: "skypack-cache" }),
);

registerRoute(
  new RegExp("https://unpkg.com/.*\\.(js)"),
  new CacheFirst({ cacheName: "unpkg-cache" }),
);

precacheAndRoute(self.__WB_MANIFEST);
