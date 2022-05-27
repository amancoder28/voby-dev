import { $, useComputed } from "voby";
import { editor, Uri } from "monaco-editor";
import demoCode from "./playgroundDemo?raw";

type EditorData = {
  id: number;
  name: string;
  fileType: "ts" | "tsx" | "js" | "jsx";
  model: editor.ITextModel;
};

export const editorData = $<EditorData[]>([
  {
    id: 0,
    name: "index",
    fileType: "tsx",
    model: editor.createModel(demoCode, "typescript", Uri.file("index.tsx")),
  },
]);

export const activeTab = $(0);

export const activeModel = useComputed(() => {
  const activeTabId = activeTab();
  return editorData().find((tab) => tab.id === activeTabId)?.model;
});

export const resizing = $(false);

import Worker from "../worker?worker";
export const compiler = new Worker();
