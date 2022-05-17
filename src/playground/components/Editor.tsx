import { editor, Uri } from "monaco-editor";
import { $, For, If } from "voby";
import { activeTab, editorData, resizing } from "../state";
import { MonacoEditor } from "./MonacoEditor";

export const Editor = () => {
  const editorWidth = $(50);

  const startResizing = () => {
    resizing(true);
    const onResize = ({ x }: MouseEvent) => editorWidth((x / window.innerWidth) * 100);
    window.addEventListener("mousemove", onResize);
    window.addEventListener(
      "mouseup",
      () => (window.removeEventListener("mousemove", onResize), resizing(false)),
    );
  };

  const createNewTab = () => {
    let id: number;
    editorData((data) => [
      ...data,
      {
        id: (id = data.length),
        name: `tab-${id}`,
        fileType: "tsx",
        model: editor.createModel("\n", "typescript", Uri.file(`tab-${id}.tsx`)),
      },
    ]);
    activeTab(id!);
  };

  const deleteTab = (id: number) => {
    let newActiveId: number;
    editorData((data) => {
      const index = data.findIndex((tab) => tab.id === id);
      if (index > -1) {
        data.splice(index, 1);
        newActiveId = (data[index - 1] || data[index + 1]).id;
      }
      return [...data];
    });
    activeTab(newActiveId!);
  };

  return (
    <>
      <div class="flex flex-col" style={() => `width:clamp(25%, ${editorWidth()}%, 75%)`}>
        <div class="flex">
          <For values={editorData}>
            {(data) => (
              <div class="flex gap-1 p-2" onClick={() => activeTab(data.id)}>
                {data.name}.{data.fileType}
                <If when={data.id !== 0}>
                  <button onClick={() => deleteTab(data.id)}>×</button>
                </If>
              </div>
            )}
          </For>
          <button class="p-2" onClick={createNewTab}>
            +
          </button>
        </div>
        <div class="flex-1 relative">
          <MonacoEditor />
        </div>
      </div>
      <div class="w-2 bg-gray cursor-col-resize" onMouseDown={startResizing} />
    </>
  );
};
