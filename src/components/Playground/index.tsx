import { Editor } from "./Editor";
import { Preview } from "./Preview";

const Playground = () => {
  return (
    <div class="flex h-100% bg-white c-black">
      <Editor />
      <Preview />
    </div>
  );
};

export default Playground;
