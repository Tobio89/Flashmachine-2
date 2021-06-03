import { useEffect, useState } from "react";

import WordListDisplay from "./WordListDisplay";

import style from "./WordEntry.module.scss";

type Props = {
  wordList: string[] | null;
  addToList: (_: string) => void;
  removeWord: (_: string) => void;
  requestWords: () => void;
  isLoading: boolean;
};

function WordEntry({
  wordList,
  addToList,
  removeWord,
  requestWords,
  isLoading,
}: Props) {
  const [wordInput, setWordInput] = useState<string>("");
  const [preventInput, setPreventInput] = useState<boolean>(false);

  useEffect(() => {
    if (wordList && wordList.length >= 30) {
      setPreventInput(true);
    } else {
      setPreventInput(false);
    }
  }, [wordList]);

  return (
    <>
      <input
        className={preventInput ? style.prevent : undefined}
        placeholder="Add Words Here!"
        value={wordInput}
        onChange={(e) => setWordInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addToList(wordInput);
            setWordInput("");
          }
        }}
      />
      <WordListDisplay words={wordList} removeWord={removeWord} />
      <div className={style.buttons}>
        <button
          className={isLoading ? style.loadingSubmit : style.submit}
          onClick={() => {
            if (!isLoading) requestWords();
          }}
        >
          Get Definitions!
        </button>
      </div>
    </>
  );
}
export default WordEntry;
