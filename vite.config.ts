import { defineConfig } from "vite";
import voby from "voby-vite";
import UnocssPlugin from "unocss/vite";

export default defineConfig({
  base: "/voby-dev/",
  plugins: [voby(), UnocssPlugin({})],
  build: {
    rollupOptions: {
      input: ["index.html", "404.html"],
    },
  },
});
