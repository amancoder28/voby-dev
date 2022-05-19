import { $, useSample } from "voby";
import { resizing } from "./state";

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
      <button
        class="shadow-md z-20 h-[52px] mb-3"
        onClick={() => (useSample(iframeEl)!.srcdoc = doc)}
      >
        <svg class="h-5 pl-3" viewBox="0 0 24 24" style="fill: none; stroke: currentcolor;">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </button>
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
