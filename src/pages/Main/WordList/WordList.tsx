import WordListElement from "./WordListElement";

import { useWordList } from "../../../hooks";

import styles from "./WordList.module.scss";

function WordList() {
  const { wordList, removeWordFromList } = useWordList();

  return (
    <div className={styles.WordList}>
      {wordList.map((w) => (
        <WordListElement
          key={w.content}
          word={w}
          deleteHandler={() => removeWordFromList(w)}
        />
      ))}
    </div>
  );
}

export default WordList;
