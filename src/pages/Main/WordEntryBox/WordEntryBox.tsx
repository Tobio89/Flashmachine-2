import { useRef } from "react";

import { useWordList } from "../../../hooks";
import styles from "./WordEntryBox.module.scss";

function WordEntryBox() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { wordCount, addWordToList } = useWordList();

  const submitWord = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      if (inputRef?.current?.value) {
        const newWord = {
          content: inputRef?.current?.value,
        };
        addWordToList(newWord);
        inputRef.current.value = "";
      }
    }
  };
  return (
    <div className={styles.WordEntryBox}>
      <input
        className={styles.Input}
        ref={inputRef}
        onKeyDown={submitWord}
        placeholder="Add words here!"
      />
      <div className={styles.Counter}>{wordCount.asString}</div>
    </div>
  );
}

export default WordEntryBox;
