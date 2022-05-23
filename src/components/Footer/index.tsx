import Logo from "../Logo";

export default function Footer() {
  return (
    <footer class="mt-4 w-screen p-4 bg-white shadow md:px-6">
      <div class="flex-center md:mb-8">
        <a href="https://github.com/vobyjs" class="flex items-center mb-4 sm:mb-0">
          <div class="mr-3 h-8">
            <Logo />
          </div>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Voby
          </span>
        </a>
      </div>
      <hr class="mb-4 border-gray-300 sm:mx-auto" />
      <p class="mb-2 text-center text-sm text-gray-500">
        <p class="mr-1">
          Copyright © 2022{" "}
          <a
            href="https://github.com/vobyjs"
            target="_blank"
            rel="noopener"
            class="hover:underline"
          >
            Voby Community.
          </a>
          .
        </p>
      </p>
    </footer>
  );
}
