import { useRef } from "react";

import classNames from "classnames";

import { WORD_LIMIT } from "../../../const";

import { useWordList } from "../../../hooks";

import styles from "./WordEntryBox.module.scss";

function toLabel(wordCount: number) {
  return `${wordCount} / ${WORD_LIMIT}`;
}

function WordEntryBox() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { wordCount, addWordToList } = useWordList();

  const handleKeyEntry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      if (inputRef?.current?.value) {
        const newWord = {
          content: inputRef?.current?.value,
        };
        if (addWordToList(newWord)) {
          inputRef.current.value = "";
        }
      }
    }
  };

  return (
    <div className={styles.WordEntryBox}>
      <input
        className={styles.Input}
        ref={inputRef}
        onKeyDown={handleKeyEntry}
        placeholder={wordCount >= 30 ? "Max words reached" : "Add words here!"}
        disabled={wordCount >= 30}
      />
      <div
        className={classNames(styles.Counter, [
          wordCount >= 30 && styles.limit,
        ])}
      >
        {toLabel(wordCount)}
      </div>
    </div>
  );
}

export default WordEntryBox;
