import { editor, languages, Uri } from "monaco-editor";
// @ts-ignore
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// @ts-ignore
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
(window as any).MonacoEnvironment = {
  getWorker(_moduleId: unknown, label: string) {
    switch (label) {
      case "typescript":
      case "javascript":
        return new tsWorker();
      default:
        return new editorWorker();
    }
  },
};
let vobyFiles = import.meta.globEager("/node_modules/voby/dist/**/*", { as: "raw" });
Object.assign(vobyFiles, import.meta.globEager("/node_modules/voby/package.json", { as: "raw" }));
Object.assign(vobyFiles, import.meta.globEager("/node_modules/oby/dist/**/*", { as: "raw" }));
Object.assign(vobyFiles, import.meta.globEager("/node_modules/oby/package.json", { as: "raw" }));
for (const path in vobyFiles) {
  editor.createModel(vobyFiles[path] as any as string, "typescript", Uri.parse(`file://${path}`));
}
languages.typescript.typescriptDefaults.setEagerModelSync(true);
languages.typescript.typescriptDefaults.setCompilerOptions({
  strict: true,
  target: languages.typescript.ScriptTarget.ESNext,
  module: languages.typescript.ModuleKind.ESNext,
  moduleResolution: languages.typescript.ModuleResolutionKind.NodeJs,
  jsx: languages.typescript.JsxEmit.Preserve,
  jsxImportSource: "voby",
  allowNonTsExtensions: true,
});

import { $, useEffect, useSample } from "voby";
import { activeModel } from "../state";

export const MonacoEditor = () => {
  const editorEl = $<HTMLElement>();
  let mEditor: editor.IStandaloneCodeEditor;
  let resizeObserver: ResizeObserver;

  useEffect(() => {
    const el = editorEl();
    if (!el || mEditor) {
      resizeObserver?.disconnect();
      return;
    }

    mEditor = editor.create(el, {
      model: useSample(activeModel),
      language: "javascript",
      theme: "vs-dark",
      minimap: { enabled: false },
    });

    mEditor.onDidChangeModelContent(() => {
      console.log(mEditor.getValue());
    });

    resizeObserver = new ResizeObserver(([entry]) => {
      const size = entry.contentBoxSize[0];
      if (size) mEditor.layout({ width: size.inlineSize, height: size.blockSize });
    });
    resizeObserver.observe(el);
  });

  useEffect(() => {
    const model = activeModel();
    if (model && mEditor && mEditor.getModel() !== model) mEditor.setModel(model);
  });

  return <div class="absolute w-100% h-100%" ref={editorEl} />;
};
