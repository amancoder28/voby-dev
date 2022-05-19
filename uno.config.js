import { defineConfig } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { presetMini } from "@unocss/preset-mini";

export default defineConfig({
  presets: [presetMini()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
