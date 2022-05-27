// import { useEffect } from "voby";
import useScrollObserver from "../../lib/scroll";

export default function Sections() {
  const position = useScrollObserver(() => window);

  // useEffect(() => {
  //   console.log(position());
  // });

  return (
    <section
      class={() =>
        `${
          position() >= 300 ? "fixed w-full top-5 bg-white" : ""
        } mt-8 mb-6 h-55px flex-center border-t-2 border-b-2 border-gray-300`}
    >
      <main class="space-x-10 md:space-x-14 font-normal text-base md:text-lg">
        <a href="#benefits">Benefits</a>
        <a href="#usecases">Use cases</a>
        <a href="#comparisions">Comparisions</a>
      </main>
    </section>
  );
}
