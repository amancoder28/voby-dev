import "./main.css";
import { $, render, Observable } from "voby";

/* HELPERS */

const EMOJIS = ["👌", "☝️", "✌️", "🤘", "🖖", "🖐️"];
const MINUS = "➖";

/* MAIN */

const Emojis = ({ value }: { value: Observable<number> }) => {
  const value2sign = (value: number) => (Math.sign(value) < 0 ? MINUS : "");
  const value2chunks = (value: number): number[] => (value <= 5 ? [value] : [...value2chunks(value - 5), 5]);
  const chunk2emoji = (chunk: number) => EMOJIS[chunk];

  const sign = () => value2sign(value());
  const emojis = () => value2chunks(Math.abs(value())).map(chunk2emoji).join("");

  return (
    <div class="emojis">
      {sign}
      {emojis}
    </div>
  );
};

const EmojiCounter = () => {
  const value = $(2);

  const increment = () => value((prev) => prev + 1);
  const decrement = () => value((prev) => prev - 1);

  return (
    <div class="main">
      <Emojis value={value} />
      <button class="button" onClick={increment}>
        +
      </button>
      <button class="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

render(<EmojiCounter />, document.body);
