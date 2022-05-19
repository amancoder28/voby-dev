/* @refresh reload */
import { render } from "voby";

import "uno.css";
import "@unocss/reset/tailwind.css";
import "./styles/global.css";
import SwitchRouter from "./router";

render(<SwitchRouter />, document.body);
