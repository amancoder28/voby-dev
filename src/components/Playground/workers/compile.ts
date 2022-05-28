import { build, initialize } from "esbuild-wasm";
import wasmURL from "/node_modules/esbuild-wasm/esbuild.wasm?url";

const esbuildPromise = initialize({ wasmURL });

self.addEventListener("message", async ({ data }: { data: { file: string; value: string }[] }) => {
  data[0].value = 'import * as React from "voby";\n' + data[0].value;

  try {
    await esbuildPromise;
    const res = await build({
      entryPoints: ["index.tsx"],
      outdir: "/",
      bundle: true,
      format: "esm",
      external: ["voby"],
      plugins: [
        {
          name: "virtual-files",
          setup(build) {
            build.onResolve({ filter: /.*/ }, (args) => {
              if (import.meta.env.DEV) console.log("resolve", args);

              if (args.kind === "entry-point") {
                return { path: `/${args.path}` };
              }
              if (args.kind === "import-statement") {
                if (args.path.startsWith("./")) {
                  if (/\.css$|\.ts$|\.tsx$|\.js$|\.jsx$/.test(args.path)) return { path: args.path.slice(1) };
                  return { path: `${args.path.slice(1)}.tsx` };
                }
              }
            });
            build.onLoad({ filter: /.*/ }, (args) => {
              if (import.meta.env.DEV) console.log("load", args);

              const loader = /\.css$/.test(args.path) ? "css" : "tsx";
              const contents = data.find((d) => d.file === args.path.slice(1))?.value;
              if (contents) return { contents, loader };
            });
          },
        },
      ],
    });

    if (!res.outputFiles?.length) return;
    const js = res.outputFiles.find((file) => file.path === "/index.js")?.text;
    const css = res.outputFiles.find((file) => file.path === "/index.css")?.text;
    if (js) self.postMessage({ js, css });
  } catch (error) {
    console.log(error);
  }
});
