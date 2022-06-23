import { defineConfig } from "vite";
import voby from "voby-vite";
import remarkFrontmatter from "remark-frontmatter";
import UnocssPlugin from "unocss/vite";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  base: "/voby-dev/",
  plugins: [
    voby(),
    UnocssPlugin({}),
    mdx({ jsxImportSource: "voby", format: "mdx", remarkPlugins: [remarkFrontmatter] }),
  ],
});
