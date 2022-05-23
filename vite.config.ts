import { defineConfig } from "vite";
import voby from "voby-vite";
import UnocssPlugin from "unocss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/voby-dev/",
  plugins: [
    voby(),
    UnocssPlugin({}),
    VitePWA({
      includeAssets: ["/voby-dev/robots.txt", "/voby-dev/assets/esbuild.243b0c1f.wasm"],
      strategies: "injectManifest",
      registerType: "autoUpdate",
      injectRegister: "inline",
      srcDir: "./",
      filename: "sw.ts",
      manifest: {
        name: "Voby",
        short_name: "Voby",
        description: "Voby - A High Performance Javascript Framework",
        theme_color: "#FFF6DB",
        start_url: "/voby-dev/?source=pwa",
        icons: [
          {
            src: "/voby-dev/pwa-logos/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/voby-dev/pwa-logos/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/voby-dev/pwa-logos/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
