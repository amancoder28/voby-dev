import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  theme: {
    fontFamily: {
      body: "Inter, sans-serif",
      code: "source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",
    },
  },
  shortcuts: {
    button:
      "focus-ring-4 font-medium text-sm md:text-base rounded-lg px-5 py-2.5 mr-2 mb-2",
    blue:
      "bg-blue-500 hover:bg-blue-600 font-medium focus:outline-none focus:ring-blue-700 transition-all",
    green:
      "text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-emerald-700",
    gray:
      "text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-gray-500",
    footer: "bottom-0 relative",
    "flex-center": "flex items-center justify-center",
  },
  transformers: [transformerVariantGroup()],
});
