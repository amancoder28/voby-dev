import { $, useSample } from "voby";
import { resizing } from "../state";

const html = String.raw;
const doc = html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <meta name="color-scheme" content="dark light" />
      <script>
        console.log(1);
      </script>
    </head>
    <body>
      Test
    </body>
  </html>`;

export const Preview = () => {
  const iframeEl = $<HTMLIFrameElement>();

  return (
    <div class="flex-1 flex flex-col">
      <button onClick={() => (useSample(iframeEl)!.srcdoc = doc)}>reload</button>
      <iframe
        style={() => `pointer-events:${resizing() ? "none" : "all"}`}
        class="border-0 h-100%"
        ref={iframeEl}
        title="Voby REPL"
        srcDoc={doc}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
      />
    </div>
  );
};
