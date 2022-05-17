import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

export const Playground = () => {
  return (
    <div class="flex h-100% bg-dark c-white">
      <Editor />
      <Preview />
    </div>
  );
};

export default Playground;
