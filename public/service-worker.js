importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js");

const { googleFontsCache, imageCache, pageCache, staticResourceCache } = workbox.recipes;

pageCache();
googleFontsCache();
imageCache();
staticResourceCache();
