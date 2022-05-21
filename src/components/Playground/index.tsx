import { Editor } from "./Editor";
import { Preview } from "./Preview";

const Playground = () => {
  return (
    <div class="flex flex-1 bg-white c-black relative z-41">
      <Editor />
      <Preview />
    </div>
  );
};

export default Playground;
