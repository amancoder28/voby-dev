// @ts-ignore
import { formatWithCursor } from "prettier";
// @ts-ignore
import parserBabel from "prettier/esm/parser-babel.mjs";
import prettierConfig from "../../../../.prettierrc?raw";

self.addEventListener("message", ({ data }: { data: { code: string; cursorOffset: number } }) => {
  const res = formatWithCursor(data.code, {
    parser: "babel-ts",
    plugins: [parserBabel],
    cursorOffset: data.cursorOffset,
    ...JSON.parse(prettierConfig),
  });
  self.postMessage({ code: res.formatted, cursorOffset: res.cursorOffset });
});
