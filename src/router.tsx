import { lazy } from "voby";
import { RouteDefinition } from "voby-router";

import Home from "./routes/index";
const PlaygroundPage = lazy(() => import("./routes/playground"));

export const routes: RouteDefinition[] = [
  {
    path: "/voby-dev/",
    component: () => <Home />,
  },
  {
    path: "/voby-dev/playground",
    component: () => <PlaygroundPage />,
  },
];
