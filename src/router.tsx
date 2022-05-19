import { lazy, Suspense, Switch } from "voby";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import { route } from "./lib/route-helper";
import Home from "./routes";

const PlaygroundPage = lazy(() => import("./routes/playground"));

export default function SwitchRouter() {
  return (
    <>
      <Header />
      <Switch when={route}>
        <Switch.Case when={"/voby-dev/"}>
          <Home />
        </Switch.Case>
        <Switch.Case when={"/about"}>
          <PlaygroundPage />
        </Switch.Case>
        <Switch.Case when={"/playground"}>
          <Suspense fallback={<Spinner />}>
            <PlaygroundPage />
          </Suspense>
        </Switch.Case>
      </Switch>
      <section class={() => `${route() !== "/playground" ? "visible" : "hidden"}`}>
        <Footer />
      </section>
    </>
  );
}
