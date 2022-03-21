import { useRef } from "react";

import classNames from "classnames";

import { WORD_LIMIT } from "../../../const";

import { useWordList, useGetTranslations } from "../../../hooks";

import styles from "./WordEntryBox.module.scss";

function toLabel(wordCount: number) {
  return `${wordCount} / ${WORD_LIMIT}`;
}

function WordEntryBox() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { wordCount, addWordToList, wordList, wordListAsArray } = useWordList();
  const { requestWords } = useGetTranslations();

  const handleKeyEntry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      if (e.ctrlKey) {
        submitWordRequest();
      } else {
        if (inputRef?.current?.value) {
          const newWord = {
            content: inputRef?.current?.value,
          };
          if (addWordToList(newWord)) {
            inputRef.current.value = "";
          }
        }
      }
    }
  };

  const submitWordRequest = () => {
    if (wordList.length) {
      requestWords();
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
