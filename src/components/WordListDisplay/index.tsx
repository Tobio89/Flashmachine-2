import { useState } from "react";
import style from "./WordList.module.scss";

type Props = {
  words: string[] | null;
  removeWord: (_: string) => void;
};

type CellProps = {
  word: string;
  remove: () => void;
};

function WordCell({ word, remove }: CellProps) {
  const [showDelete, setShow] = useState<boolean>(false);

  return (
    <div
      className={style.wordCell}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className={style.word}>{word}</span>
      <span
        className={showDelete ? style.delete : style.hidden}
        onClick={() => remove()}
      >
        X
      </span>
    </div>
  );
}

function WordListDisplay({ words, removeWord }: Props) {
  return (
    <div className={style.WordList}>
      {words?.map((word) => (
        <WordCell word={word} key={word} remove={() => removeWord(word)} />
      ))}
    </div>
  );
}
export default WordListDisplay;
