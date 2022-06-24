import { useResolvedPath, useRoutes } from "voby-router";
import { routes } from "./router";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const Routes = useRoutes(routes);
  const path = useResolvedPath(() => new URL(location.href).pathname);

  return (
    <>
      <Header />
      <Routes />
      <section class={() => `${path() !== "/voby-dev/playground" ? "visible" : "hidden"}`}>
        <Footer />
      </section>
    </>
  );
}
