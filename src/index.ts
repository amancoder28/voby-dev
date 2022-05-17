/* @refresh reload */
import { render } from "voby";

import "./styles/global.css";
import "uno.css";
import "@unocss/reset/tailwind.css";
import App from "./App";
import { Playground } from "./playground";

let app = App;
switch (location.pathname) {
  case "/playground":
    app = Playground;
  default:
}

render(app, document.body);
