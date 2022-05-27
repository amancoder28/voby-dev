import { editor, Uri } from "monaco-editor";
import { $, For, If, useSample } from "voby";
import { activeModel, activeTab, editorData, formatter, resizing } from "./shared";
import { MonacoEditor } from "./MonacoEditor";
import { horizontal, playgroundSize, playgroundTop } from ".";

export const Editor = () => {
  const editorSize = $(50);
  const cursorPosition = $(0);

  const format = () => {
    const model = useSample(activeModel);
    if (!model) return;
    formatter.addEventListener(
      "message",
      ({ data }: { data: { code: string; cursorOffset: number } }) => {
        model.setValue(data.code);
        cursorPosition(data.cursorOffset);
      },
      { once: true },
    );
    formatter.postMessage({ code: model.getValue(), cursorOffset: useSample(cursorPosition) });
  };

  const startResizing = () => {
    resizing(true);
    const onResize = (event: MouseEvent | TouchEvent) => {
      let x, y;
      if (event.type === "touchmove") {
        const changedTouch = (event as TouchEvent).changedTouches[0];
        x = changedTouch.clientX;
        y = changedTouch.clientY;
      } else {
        x = (event as MouseEvent).x;
        y = (event as MouseEvent).y;
      }
      editorSize(((useSample(horizontal) ? x : y - useSample(playgroundTop)) / useSample(playgroundSize)) * 100);
    };
    const end = () => {
      window.removeEventListener("mousemove", onResize);
      window.removeEventListener("touchmove", onResize);
      resizing(false);
    };
    window.addEventListener("mousemove", onResize);
    window.addEventListener("touchmove", onResize);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
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
        <div class="flex h-[40px] md:h-[48px] px-3 shadow-md z-20">
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
          <button class="ml-a p-x-3" onClick={format}>
            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm17.143-3.429H16a.571.571 0 0 0 0 1.143h3.429a.571.571 0 0 0 0-1.143zM9.143 14.857h4.571a.571.571 0 0 0 0-1.143H9.143a.571.571 0 0 0 0 1.143zm-6.857 0h4.571a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM20.57 11.43h-9.14a.571.571 0 0 0 0 1.142h9.142a.571.571 0 0 0 0-1.142zM9.714 12a.571.571 0 0 0-.571-.571H5.714a.571.571 0 0 0 0 1.142h3.429A.571.571 0 0 0 9.714 12zm-7.428.571h1.143a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm19.428-3.428H16a.571.571 0 0 0 0 1.143h5.714a.571.571 0 0 0 0-1.143zM2.286 10.286H8a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm13.143-2.857A.57.57 0 0 0 16 8h5.714a.571.571 0 0 0 0-1.143H16a.571.571 0 0 0-.571.572zm-8.572-.572a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143H6.857zM2.286 8H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm16.571-2.857c0 .315.256.571.572.571h1.142a.571.571 0 0 0 0-1.143H19.43a.571.571 0 0 0-.572.572zm-1.143 0a.571.571 0 0 0-.571-.572H12.57a.571.571 0 0 0 0 1.143h4.572a.571.571 0 0 0 .571-.571zm-15.428.571h8a.571.571 0 0 0 0-1.143h-8a.571.571 0 0 0 0 1.143zm5.143-2.857c0 .316.255.572.571.572h11.429a.571.571 0 0 0 0-1.143H8a.571.571 0 0 0-.571.571zm-5.143.572h3.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0-2.286H16A.571.571 0 0 0 16 0H2.286a.571.571 0 0 0 0 1.143z" />
            </svg>
          </button>
        </div>
        <div class="flex-1 relative">
          <MonacoEditor position$={cursorPosition} />
        </div>
      </div>
      <div
        class={() =>
          `${horizontal() ? "w-2 cursor-col-resize" : "h-2 cursor-row-resize"} bg-gray-300 hover:(bg-emerald-700)`
        }
        onMouseDown={startResizing}
        onTouchStart={startResizing}
      />
    </>
  );
};
