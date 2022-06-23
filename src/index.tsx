/* @refresh reload */
import * as voby from "voby";

const { lazy, render, Suspense } = voby;

import "uno.css";
import "@unocss/reset/tailwind.css";
import { path, Router } from "./router";
import Home from "./routes";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import Header from "./components/Header";
const PlaygroundPage = lazy(() => import("./routes/playground"));
import GettingStarted from "./docs/getting-started.mdx";

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
        {
          path: "/voby-dev/getting-started",
          component: (
            <section class="mt-14 px-2 w-full text-base prose xl:text-xl mx-auto prose-cyan">
              <GettingStarted
                components={{
                  h1: (props) => <h1 class="text-emerald-600" {...props} />,
                }}
              />
            </section>
          ),
        },
      ]}
    />
    <section class={() => `${path() !== "/voby-dev/playground" ? "visible" : "hidden"}`}>
      <Footer />
    </section>
  </>,
  document.body,
);
