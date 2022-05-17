/* @refresh reload */
import { render, lazy } from "voby";

import "./styles/global.css";
import "uno.css";
import "@unocss/reset/tailwind.css";
import { default as _App } from "./App";
import { LazyComponent } from "voby/dist/types";

const Playground = lazy(() => import("./playground"));

let App: JSX.Element | LazyComponent = _App;
switch (location.pathname) {
  case "/playground":
    App = Playground;
  default:
}

render(<App />, document.body);
