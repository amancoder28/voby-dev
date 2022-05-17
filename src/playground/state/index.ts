import { $, useComputed } from "voby";
import { editor, Uri } from "monaco-editor";

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
    model: editor.createModel(
      `import { $, render } from 'voby';

const Counter = () => {
  const value = $(0);

  const increment = () => value((prev) => prev + 1);
  const decrement = () => value((prev) => prev - 1);

  return (
    <>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

render(<Counter />, document.body);
`,
      "typescript",
      Uri.file("index.tsx"),
    ),
  },
]);

export const activeTab = $(0);

export const activeModel = useComputed(() => {
  const activeTabId = activeTab();
  return editorData().find((tab) => tab.id === activeTabId)?.model;
});

export const resizing = $(false);
