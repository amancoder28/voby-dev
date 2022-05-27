import { For } from "voby";
import { strengths } from "./strengths";

export default function Hero() {
  return (
    <section>
      <div class="text-center mt-20 md:mt-[18.5vh] text-3xl md:text-7xl font-extrabold mx-3">
        <h1 class="mb-1 md:mb-4">A High Performance</h1>
        <h1 class="mb-4 md:mb-8 mx-2">Javascript Framework</h1>
      </div>

      <div class="text-center">
        <p class="font-normal text-gray-9 text-lg md:text-2xl mx-5">
          A fine grained observable based reactivity for building rich web
          applications.
        </p>
      </div>

      <div class="flex-center mt-8 mb-2 px-2">
        <button class="button green mx-1 md:mx-2">Why Voby</button>
        <button class="button gray text-center inline-flex items-center mx-1 md:mx-2">
          Get Started
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
        </button>

        <button class="button gray mx-1 md:mx-2">Install</button>
      </div>

      <div class="lg:my-2 px-0 lg:px-12 flex flex-col lg:py-10 md:pt-10">
        <section class="grid sm:grid-cols-2 lg:grid-cols-4 py-3 lg:py-0 lg:px-4 rounded-lg">
          <For values={strengths}>
            {({ icon, label, description }) => (
              <div class="px-10 py-4 mt-4 md:py-10 lg:ml-4 lg:mt-0 last:border-none">
                <img
                  class="w-12 mb-5 dark:brightness-150"
                  src={icon}
                  alt={label}
                />
                <h3 class="text-xl mb-2 font-semibold">{label}</h3>
                <p class="text-base">{description}</p>
              </div>
            )}
          </For>
        </section>
      </div>
    </section>
  );
}
