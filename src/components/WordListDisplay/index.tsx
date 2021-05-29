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
  return (
    <div className={style.wordCell}>
      <span className={style.word}>{word}</span>
      <button className={style.delete} onClick={() => remove()}>
        X
      </button>
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
