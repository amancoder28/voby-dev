import { $, useSample } from "voby";
import { compiler, resizing } from "./shared";

const html = String.raw;

const getHtml = (code: string) => {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <meta name="color-scheme" content="dark light" />
        <script type="importmap">
          {
            "imports": {
              "voby": "https://cdn.skypack.dev/voby"
            }
          }
        </script>
        <script defer type="module">
          ${code};
        </script>
      </head>
      <body></body>
    </html>`;
};

export const Preview = () => {
  const doc = $("");
  const iframeEl = $<HTMLIFrameElement>();

  compiler.onmessage = ({ data }: { data: { code: string } }) => {
    if (data.code) doc(getHtml(data.code));
  };

  return (
    <div class="flex-1 flex flex-col">
      <button
        class="shadow-md z-20 h-[52px] mb-3"
        onClick={() => (useSample(iframeEl)!.srcdoc = useSample(doc))}
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
