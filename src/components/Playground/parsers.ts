import { editor, Uri } from "monaco-editor";
import { useSample } from "voby";
import { EditorData, editorData } from "./shared";

export interface EditorDataJson {
  file: string;
  value: string;
}

export const editorDataAsJson = () => {
  return useSample(editorData).map<EditorDataJson>((tab) => ({
    file: `${tab.name}.${tab.fileType}`,
    value: tab.model.getValue(),
  }));
};

const fileTypeToTypeMap: Record<string, string> = { tsx: "typescript" };
export const getEditorDataFromJson = (json: EditorDataJson[]) => {
  return json.map<EditorData>(({ file, value }, index) => {
    const [name, fileType] = file.split(".");
    return {
      id: index,
      name,
      fileType: fileType as EditorData["fileType"],
      model: editor.createModel(value, fileTypeToTypeMap[fileType] || "typescript", Uri.file(file)),
    };
  });
};
