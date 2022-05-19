import { $, Ternary } from "voby";
import { routeTo } from "../../lib/route-helper";
import Logo from "../Logo";
import Links from "./Links";

export const openMenu = $(false);

export default function Header() {
  return (
    <nav class="z-40 shadow-lg bg-white border-gray-200 px-3 md:px-7 sm:px-4 py-2.5 md:py-4">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a
          href="/voby-dev/"
          onClick={(evt) => routeTo("/voby-dev/", evt)}
          class="flex items-center"
        >
          <div class="mr-3 h-6 sm:h-9">
            <Logo />
          </div>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Voby
          </span>
        </a>
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => openMenu(!openMenu())}
        >
          <span class="sr-only hidden">open main menu</span>
          <Ternary when={openMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </Ternary>
        </button>

        <Links />
      </div>
    </nav>
  );
}
