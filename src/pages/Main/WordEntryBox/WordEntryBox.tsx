import { useRef } from "react";

import classNames from "classnames";

import { toLabel } from "./fns";

import styles from "./WordEntryBox.module.scss";

interface Props {
  wordCount: number;
  addWordToList: (_: { content: string }) => boolean;
  isLoadingTranslations: boolean;
}

function WordEntryBox({
  wordCount,
  addWordToList,
  isLoadingTranslations,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyEntry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isLoadingTranslations) return;

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
        disabled={wordCount >= 30 || isLoadingTranslations}
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
