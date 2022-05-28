// @ts-ignore
import { formatWithCursor } from "prettier";
// @ts-ignore
import parserBabel from "prettier/esm/parser-babel.mjs";
// @ts-ignore
import parserPostCss from "prettier/esm/parser-postcss.mjs";
import prettierConfig from "../../../../.prettierrc?raw";

self.addEventListener("message", ({ data }: { data: { code: string; cursorOffset: number; isCss?: boolean } }) => {
  const res = formatWithCursor(data.code, {
    parser: data.isCss ? "css" : "babel-ts",
    plugins: [data.isCss ? parserPostCss : parserBabel],
    cursorOffset: data.cursorOffset,
    ...JSON.parse(prettierConfig),
  });
  self.postMessage({ code: res.formatted, cursorOffset: res.cursorOffset });
});
