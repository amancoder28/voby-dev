import { openMenu } from ".";
import { RouterLink } from "../../router";

export default function Links() {
  return (
    <div
      class={() =>
        `${
          openMenu() ? "visible" : "hidden"
        } z-40 bg-white w-full h-screen md:h-full overflow-hidden transition-all w-full md:block md:w-auto`}
    >
      <ul class="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
        <li class="px-8 md:px-4">
          <a
            href="#"
            class="block text-base font-bold py-3 pr-4 pl-3 text-gray-700 text-white rounded md:bg-transparent md:text-emerald-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            Docs
          </a>
        </li>
        <li class="px-8 md:px-4">
          <a
            href="#"
            class="block text-base font-bold font-medium py-3 pr-4 pl-3 text-gray-700 border-b border-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            API
          </a>
        </li>
        <li class="px-8 md:px-4" onClick={() => openMenu(false)}>
          <RouterLink
            href="/voby-dev/playground"
            class="block text-base font-bold font-medium py-3 pr-4 pl-3 text-gray-700 border-b border-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Playground
          </RouterLink>
        </li>
        <li class="px-8 md:px-4">
          <a
            href="#"
            class="block text-base font-bold font-medium py-3 pr-4 pl-3 text-gray-700 border-b border-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Ecosystem
          </a>
        </li>
        <section class="pl-0 md:pl-2 py-5 md:py-0 flex-center">
          <li class="px-2">
            <a
              target="_blank"
              rel="noopener"
              href="https://twitter.com/vobyjs"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-6 h-6"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
              </svg>
            </a>
          </li>
          <li class="px-2">
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/vobyjs"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                >
                </path>
              </svg>
            </a>
          </li>
          <li class="px-2">
            <a
              target="_blank"
              rel="noopener"
              href="https://discord.com/invite/E6pK7VpnjC"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M20.3483 4.4015a.0612.0612 0 0 0-.0312-.0286 19.7986 19.7986 0 0 0-4.8852-1.5145.0741.0741 0 0 0-.0785.0371 13.774 13.774 0 0 0-.6081 1.249 18.2796 18.2796 0 0 0-5.4868 0 12.6344 12.6344 0 0 0-.6178-1.249.0771.0771 0 0 0-.0785-.0371A19.7425 19.7425 0 0 0 3.6769 4.373a.0699.0699 0 0 0-.0321.0276C.5334 9.047-.319 13.5792.0992 18.0553a.0823.0823 0 0 0 .0312.0562 19.9048 19.9048 0 0 0 5.9929 3.028.0776.0776 0 0 0 .0842-.0275 14.2123 14.2123 0 0 0 1.226-1.9936.076.076 0 0 0-.0416-.1056 13.1091 13.1091 0 0 1-1.8722-.892.077.077 0 0 1-.0075-.1275c.1258-.0943.2517-.1923.3718-.2914a.0742.0742 0 0 1 .0775-.0104c3.9278 1.7925 8.18 1.7925 12.0613 0a.074.074 0 0 1 .0785.0095c.1202.099.246.198.3728.2923a.0769.0769 0 0 1-.0067.1275 12.3024 12.3024 0 0 1-1.873.891.0765.0765 0 0 0-.0408.1066 15.9615 15.9615 0 0 0 1.225 1.9925.076.076 0 0 0 .0842.0286 19.8388 19.8388 0 0 0 6.0026-3.028.0768.0768 0 0 0 .0312-.0552c.5006-5.1749-.838-9.67-3.5483-13.6548ZM8.02 15.3299c-1.1826 0-2.157-1.0852-2.157-2.418 0-1.3327.9555-2.418 2.157-2.418 1.2108 0 2.1757 1.0947 2.1568 2.418 0 1.3328-.9555 2.418-2.1568 2.418Zm7.9747 0c-1.1825 0-2.1569-1.0852-2.1569-2.418 0-1.3327.9555-2.418 2.1569-2.418 1.2109 0 2.1758 1.0947 2.1569 2.418 0 1.3328-.946 2.418-2.157 2.418Z"
                >
                </path>
              </svg>
            </a>
          </li>
        </section>
      </ul>
    </div>
  );
}
