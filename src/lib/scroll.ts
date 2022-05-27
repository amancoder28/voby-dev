import { $, useCleanup, useEffect } from "voby";

/**
 * Create a primitive for monitoring scrolling.
 *
 * @param target - Element or window to target, defaults to window
 *
 * @example
 * ```ts
 * let ref;
 * const position = useScrollObserver(() => ref)
 * ```
 */
const useScrollObserver = <T extends HTMLElement>(
  target: () => T | Window = () => window,
): (() => number | null) => {
  const getPosition = (): number | null =>
    // @ts-ignore
    target && typeof target() !== "undefined"
      //@ts-ignore
      ? target().pageYOffset ?? target().scrollTop
      : null;
  const position = $<number | null>(getPosition());
  const handleScroll = () => position(getPosition());
  const remove = () =>
    target() && target().removeEventListener("scroll", handleScroll);

  useEffect(() => {
    if (!target()) {
      return;
    } else if (target()) {
      remove();
    }
    target().addEventListener("scroll", handleScroll);
  });

  useCleanup(remove);

  return position;
};

export default useScrollObserver;
