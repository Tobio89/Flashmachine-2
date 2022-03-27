import WordListElement from "./WordListElement";

import { Word } from "../../../types";

import styles from "./WordList.module.scss";

interface Props {
  wordList: Word[];
  removeWordFromList: (_: Word) => void;
  isLoadingTranslations: boolean;
}

function WordList({
  wordList,
  removeWordFromList,
  isLoadingTranslations,
}: Props) {
  const deleteHandler = (w: Word) => {
    if (!isLoadingTranslations) {
      removeWordFromList(w);
    }
  };

  return (
    <div className={styles.WordList}>
      {wordList.map((w) => (
        <WordListElement
          key={w.content}
          word={w}
          deleteHandler={() => deleteHandler(w)}
        />
      ))}
    </div>
  );
}

export default WordList;
