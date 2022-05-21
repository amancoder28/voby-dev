import { editor, Uri } from "monaco-editor";
import { $, For, If, useSample } from "voby";
import { activeTab, editorData, resizing } from "./shared";
import { MonacoEditor } from "./MonacoEditor";
import { horizontal, playgroundSize, playgroundTop } from ".";

export const Editor = () => {
  const editorSize = $(50);

  const startResizing = () => {
    resizing(true);
    const onResize = ({ x, y }: MouseEvent) => {
      editorSize(
        ((useSample(horizontal) ? x : y - useSample(playgroundTop)) / useSample(playgroundSize)) *
          100,
      );
    };
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
        data[index].model.dispose();
        data.splice(index, 1);
        newActiveId = (data[index - 1] || data[index + 1]).id;
      }
      return [...data];
    });
    activeTab(newActiveId!);
  };

  return (
    <>
      <div
        class="flex flex-col"
        style={() => `${horizontal() ? "width" : "height"}: clamp(25%, ${editorSize()}%, 75%)`}
      >
        <div class="flex px-3 shadow-md z-20">
          <For values={editorData}>
            {(data) => (
              <div class="flex gap-1 p-3" onClick={() => activeTab(data.id)}>
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
      <div
        class={() =>
          `${
            horizontal() ? "w-2 cursor-col-resize" : "h-2 cursor-row-resize"
          } bg-gray-300 hover:(bg-emerald-700)`
        }
        onMouseDown={startResizing}
      />
    </>
  );
};
