import { $, useComputed } from "voby";
import { editor, Uri } from "monaco-editor";
import { decompressFromURL } from "@amoutonbrady/lz-string";
import { EditorDataJson, getEditorDataFromJson } from "../parsers";
import demoCode from "./playgroundDemo?raw";

export interface EditorData {
  id: number;
  name: string;
  fileType: "ts" | "tsx" | "js" | "jsx";
  model: editor.ITextModel;
}

let rawEditorData: EditorData[];
try {
  const editorDataJson = JSON.parse(decompressFromURL(location.hash.slice(1))!) as EditorDataJson[];
  for (const editorData of editorDataJson) {
    if (typeof editorData.file !== "string" || typeof editorData.value !== "string") throw Error();
  }
  rawEditorData = getEditorDataFromJson(editorDataJson);
} catch (_) {
  rawEditorData = [
    {
      id: 0,
      name: "index",
      fileType: "tsx",
      model: editor.createModel(demoCode, "typescript", Uri.file("index.tsx")),
    },
  ];
}

export const editorData = $(rawEditorData);

export const activeTab = $(0);

export const activeModel = useComputed(() => {
  const activeTabId = activeTab();
  return editorData().find((tab) => tab.id === activeTabId)?.model;
});

export const resizing = $(false);

import CompilerWorker from "../workers/compile?worker";
export const compiler = new CompilerWorker();

import FormatterWorker from "../workers/format?worker";
export const formatter = new FormatterWorker();
