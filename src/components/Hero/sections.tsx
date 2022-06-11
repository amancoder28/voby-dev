export default function Sections() {
  return (
    <section
      style="z-index: 998;"
      class={`sticky top-13 z-10 mb-6 h-55px flex-center border-t-2 border-b-2 border-gray-200`}
    >
      <main class="space-x-10 md:space-x-14 font-normal text-base md:text-lg transition-all">
        <a href="#benefits">Benefits</a>
        <a href="#usecases">Use cases</a>
        <a href="#comparisions">Comparisions</a>
      </main>
    </section>
  );
}
