/* @refresh reload */
import { render } from "voby";
import { Router } from "voby-router";
import App from "./App";

import "uno.css";
import "@unocss/reset/tailwind.css";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("app"),
);
