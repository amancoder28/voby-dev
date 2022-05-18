import { $, Switch } from "voby";
import banner from "/voby-dev/banner.svg";

function App(): JSX.Element {
  const route = $("/");

  return (
    <main class="bg-[#fff6db] text-[#2f2f2f] w-screen h-screen flex-col flex-center">
      <img src={banner} class="h-[60vmin] pointer-events-none" alt="logo" />
      <div class="mt-4 flex-center flex-col py-4">
        <Switch when={route}>
          <Switch.Case when={"/"}>
            <h1 class="text-2xl">
              Home Page
            </h1>
          </Switch.Case>
          <Switch.Case when={"/playground"}>
            <h1 class="text-2xl">
              Playground Page
            </h1>
          </Switch.Case>
        </Switch>
        <section class="mt-8"> 
          <button class="py-2 px-4 rounded-lg shadow-lg text-center text-white text-lg font-normal bg-emerald-700 hover:focus:(ring-4 ring-emerald-400) transition-all"
            style="border: none" onClick={() => route() === "/" ? route("/playground") : route("/")}>
              Route to {() => route() === "/" ? "/playground" : "/"}
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
