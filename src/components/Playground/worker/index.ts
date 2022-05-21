import { build, initialize } from "esbuild-wasm";
import wasmURL from "/node_modules/esbuild-wasm/esbuild.wasm?url";

const esbuildPromise = initialize({ wasmURL });

self.addEventListener("message", async ({ data }: { data: { file: string; value: string }[] }) => {
  data[0].value = 'import * as React from "voby";\n' + data[0].value;

  try {
    await esbuildPromise;
    const res = await build({
      entryPoints: ["index.tsx"],
      bundle: true,
      format: "esm",
      external: ["voby"],
      plugins: [
        {
          name: "virtual-files",
          setup(build) {
            build.onResolve({ filter: /.*/ }, (args) => {
              if (args.kind === "entry-point") {
                return { path: `/${args.path}` };
              }
              if (args.kind === "import-statement") {
                if (args.path.startsWith("./") || args.path.startsWith("/")) {
                  return { path: `/${args.path}` };
                }
              }
            });
            build.onLoad({ filter: /.*/ }, (args) => {
              const contents = data.find((d) => d.file === args.path.slice(1))?.value;
              if (contents) return { contents, loader: "tsx" };
            });
          },
        },
      ],
    });

    const code = res.outputFiles?.[0].text;
    if (code) self.postMessage({ code });
  } catch (error) {
    console.log(error);
  }
});
