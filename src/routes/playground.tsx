import { Suspense } from "voby";
import Spinner from "../components/Spinner";
import Playground from "../components/Playground";

export default function PlaygroundPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <Playground />
    </Suspense>
  );
}
