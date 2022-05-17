import { $, useComputed } from 'voby';
import { editor } from 'monaco-editor';

type EditorData = {
  id: number;
  name: string;
  fileType: 'ts' | 'tsx' | 'js' | 'jsx';
  model: editor.ITextModel;
};

export const editorData = $<EditorData[]>([
  {
    id: 0,
    name: 'index',
    fileType: 'tsx',
    model: editor.createModel("function hello() {\n  alert('Hello world!');\n}\n", 'typescript'),
  },
]);

export const activeTab = $(0);

export const activeModel = useComputed(() => {
  const activeTabId = activeTab();
  return editorData().find((tab) => tab.id === activeTabId)?.model;
});

export const resizing = $(false);
