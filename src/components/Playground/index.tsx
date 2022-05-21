import { $, useEffect } from "voby";
import { Editor } from "./Editor";
import { Preview } from "./Preview";

export const horizontal = $(true);
export const playgroundSize = $(0);
export const playgroundTop = $(0);
const Playground = () => {
  const playgroundEl = $<HTMLDivElement>();
  let resizeObserver: ResizeObserver;

  useEffect(() => {
    const el = playgroundEl();
    if (!el) return resizeObserver?.disconnect();

    resizeObserver = new ResizeObserver(([entry]) => {
      const size = entry.contentBoxSize[0];
      if (size) {
        const res = size.inlineSize >= size.blockSize;
        horizontal(res);
        playgroundSize(res ? size.inlineSize : size.blockSize);
        playgroundTop(el.offsetTop);
      }
    });
    resizeObserver.observe(el);
  });

  return (
    <div
      class={() => `flex-1 flex${horizontal() ? "" : " flex-col"} bg-white c-black relative z-41`}
      ref={playgroundEl}
    >
      <Editor />
      <Preview />
    </div>
  );
};

export default Playground;
