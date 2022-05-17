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

import { $, useEffect, useSample } from "voby";
import { editor } from "monaco-editor";
import { activeModel } from "../state";

export const MonacoEditor = () => {
  const editorEl = $<HTMLElement>();
  let mEditor: editor.IStandaloneCodeEditor;

  useEffect(() => {
    const el = editorEl();
    if (!el || mEditor) return;

    mEditor = editor.create(el, {
      model: useSample(activeModel),
      language: "javascript",
      theme: "vs-dark",
      minimap: { enabled: false },
    });

    new ResizeObserver(([entry]) => {
      const size = entry.contentBoxSize[0];
      if (size) mEditor.layout({ width: size.inlineSize, height: size.blockSize });
    }).observe(el);
  });

  useEffect(() => {
    const model = activeModel();
    if (model && mEditor && mEditor.getModel() !== model) mEditor.setModel(model);
  });

  return <div class="absolute w-100% h-100%" ref={editorEl} />;
};

export default MonacoEditor;
