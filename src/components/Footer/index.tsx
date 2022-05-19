import Logo from "../Logo";

export default function Footer() {
  return (
    <footer class="bottom-0 absolute w-screen p-4 bg-white shadow md:px-6 md:py-8">
      <div class="flex-center">
        <a href="https://github.com/vobyjs" class="flex items-center mb-4 sm:mb-0">
          <div class="mr-3 h-8">
            <Logo />
          </div>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Voby
          </span>
        </a>
      </div>
      <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <span class="block flex-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <p class="mr-1">©2022</p>
        <a href="https://github.com/vobyjs" target="_blank" rel="noopener" class="hover:underline">
          Voby™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
