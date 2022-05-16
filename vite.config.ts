import { defineConfig } from "vite";
import voby from "voby-vite";
import UnocssPlugin from "unocss/vite";
import transformerDirectives from '@unocss/transformer-directives';
import { presetMini } from "@unocss/preset-mini";

export default defineConfig({
  plugins: [
    voby(),
    UnocssPlugin({
      presets: [presetMini()],
      transformers: [
        transformerDirectives()
      ]
    }),
  ],
});
