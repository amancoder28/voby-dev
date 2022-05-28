import { editor, Uri } from "monaco-editor";
import { For, If } from "voby";
import { activeTab, editorData } from "./shared";

export const EditorTabs = () => {
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
      <For values={editorData}>
        {(data) => (
          <div
            class={() =>
              `flex gap-1 p-2.5 border-y-2 border-y-transparent cursor-pointer ${
                activeTab() === data.id ? " border-b-emerald-700" : ""
              }`
            }
            onClick={() => activeTab(data.id)}
          >
            {data.name}.{data.fileType}
            <If when={data.id !== 0}>
              <button onClick={(e) => (e.stopImmediatePropagation(), deleteTab(data.id))}>×</button>
            </If>
          </div>
        )}
      </For>
      <button class="p-2" onClick={createNewTab}>
        +
      </button>
    </>
  );
};
