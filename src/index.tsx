/* @refresh reload */
import { lazy, render, Suspense } from "voby";

import "uno.css";
import "@unocss/reset/tailwind.css";
import "./styles/global.css";
import { path, Router } from "./router";
import Home from "./routes";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import Header from "./components/Header";
const PlaygroundPage = lazy(() => import("./routes/playground"));

render(
  <>
    <Header />
    <Router
      routes={[
        {
          path: "/voby-dev",
          component: Home,
        },
        {
          path: "/voby-dev/playground",
          component: (
            <Suspense fallback={<Spinner />}>
              <PlaygroundPage />
            </Suspense>
          ),
        },
      ]}
    />
    {/* <section class={() => `${path() !== "/voby-dev/playground" ? "visible" : "hidden"}`}>
      <Footer />
    </section> */}
  </>,
  document.body,
);
