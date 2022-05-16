import { defineConfig } from "vite";
import voby from "voby-vite";
import UnocssPlugin from "unocss/vite";
import { presetMini } from "@unocss/preset-mini";

export default defineConfig({
  plugins: [
    voby(),
    UnocssPlugin({
      presets: [presetMini()],
    }),
  ],
});
