import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";

import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

const UnpkgCache = "unpkg-cache";
const SkypackCache = "skypack-cache";
const maxAgeSeconds = 62 * 60 * 24 * 15;
const maxEntries = 30;

import { googleFontsCache, imageCache, pageCache, staticResourceCache } from "workbox-recipes";

pageCache();
googleFontsCache();
imageCache();
staticResourceCache();

registerRoute(
  new RegExp("http://localhost:5000/voby-dev/.*\\.(wasm|ttf|woff|woff2)"),
  new CacheFirst({ cacheName: "big-assets-cache" }),
);

registerRoute(
  ({ url }) => url.origin === "https://unpkg.com/",
  new NetworkFirst({
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
  ({ url }) => url.origin === "https://cdn.skypack.dev/",
  new NetworkFirst({
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
