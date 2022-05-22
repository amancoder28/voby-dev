import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      body: "Inter, sans-serif",
      code: "source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace"
    }
  },
  shortcuts: {
    button: "focus:ring-4 focus:ring-blue-300 font-medium text-sm md:text-base rounded-lg px-5 py-2.5 mr-2 mb-2",
    blue: "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 font-medium dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
    green: "text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none dark:focus:ring-emerald-800",
    gray: "text-black bg-gray-300 hover:bg-gray-500 dark:bg-gray-500 dark:hover:bg-gray-500 focus:outline-none dark:focus:ring-gray-500",
    footer: "bottom-0 relative",
    "flex-center": "flex items-center justify-center"
  }
});
