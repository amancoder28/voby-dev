import { $ } from "voby";
import banner from "/banner.svg";

function App(): JSX.Element {
  const count = $(0);
  const increment = () => count((value) => value + 1);

  return (
    <main class="bg-[#fff6db] text-[#2f2f2f] w-full min-h-[100vh] flex-col text-center">
      <img src={banner} class="h-[60vmin] pointer-events-none" alt="logo" />
      <div class="mt-4 space-y-4">
        <section>
          <button
            class="py-2 px-4 rounded-lg shadow-lg text-center text-white text-lg font-normal bg-emerald-700 hover:focus:ring-4 hover:focus:ring-emerald-400 transition-all"
            style="border: none"
            onClick={increment}
          >
            count is: {count}
          </button>
        </section>
        <p class="text-2xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <section>
          <a
            class="text-[#2f2f2f] text-2xl font-normal underline underline-offset-2"
            href="https://github.com/vobyjs/voby"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Voby
          </a>
        </section>
      </div>
    </main>
  );
}

export default App;
