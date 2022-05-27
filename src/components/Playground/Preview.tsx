import { $, If, useSample } from "voby";
import { compressToURL } from "@amoutonbrady/lz-string";
import { editorDataAsJson } from "./parsers";
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
        <script async src="https://unpkg.com/es-module-shims@0.10.1/dist/es-module-shims.min.js"></script>
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

  const share = () => {
    location.hash = compressToURL(JSON.stringify(editorDataAsJson()));
    navigator.clipboard.writeText(location.href);
  };

  return (
    <div class="flex-1 flex flex-col">
      <div class="shadow-md flex z-20 h-[40px] md:h-[48px]">
        <button class="p-x-2" onClick={() => (useSample(iframeEl)!.srcdoc = useSample(doc))}>
          <svg viewBox="0 0 24 24" width="20" height="20" style="fill: none; stroke: currentcolor;">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
        </button>
        <button class="p-x-2" onClick={share}>
          <svg aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M15.815 0C17.575 0 19 1.45 19 3.235s-1.424 3.234-3.185 3.234a3.155 3.155 0 0 1-2.378-1.084l-6.284 3.44c.14.364.216.76.216 1.175c0 .542-.13 1.052-.363 1.501l6.008 3.725a3.177 3.177 0 0 1 2.801-1.695c1.76 0 3.185 1.45 3.185 3.234C19 18.55 17.576 20 15.815 20c-1.76 0-3.184-1.45-3.184-3.235l.003-.138l-6.53-4.046a3.138 3.138 0 0 1-1.92.654C2.425 13.235 1 11.785 1 10s1.424-3.235 3.185-3.235c.852 0 1.626.34 2.197.893l6.382-3.493a3.282 3.282 0 0 1-.133-.93C12.63 1.45 14.055 0 15.815 0Zm0 14.926c-.992 0-1.8.822-1.8 1.84c0 1.017.808 1.839 1.8 1.839c.993 0 1.8-.822 1.8-1.84c0-1.017-.807-1.839-1.8-1.839ZM4.185 8.161c-.993 0-1.8.822-1.8 1.839s.807 1.84 1.8 1.84c.992 0 1.8-.823 1.8-1.84c0-1.017-.808-1.84-1.8-1.84Zm11.63-6.766c-.992 0-1.8.822-1.8 1.84c0 1.017.808 1.839 1.8 1.839c.993 0 1.8-.822 1.8-1.84c0-1.017-.807-1.839-1.8-1.839Z"
            ></path>
          </svg>
        </button>
      </div>

      <If when={doc} fallback={<h1 class="flex-center font-normal text-xl mt-30% md:mt-50%">Loading Playground...</h1>}>
        <iframe
          style={() => `pointer-events:${resizing() ? "none" : "all"}`}
          class="border-0 flex-1"
          ref={iframeEl}
          title="Voby REPL"
          srcDoc={doc}
          sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
        />
      </If>
    </div>
  );
};
