import { useEffect, useState } from "react";

import WordListDisplay from "./WordListDisplay";

import style from "./WordEntry.module.scss";
import Loader from "../../../components/Loader";
import Button from "../../../components/Button";

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.ctrlKey && !isLoading) {
        requestWords();
      } else {
        addToList(wordInput);
        setWordInput("");
      }
    } else if (e.key === "Backspace" && e.ctrlKey) {
      if (wordList && wordList.length > 0) {
        removeWord(wordList[0]);
      }
    }
  };

  return (
    <>
      <input
        className={preventInput ? style.prevent : undefined}
        placeholder="Add Words Here!"
        value={wordInput}
        onChange={(e) => setWordInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <WordListDisplay words={wordList} removeWord={removeWord} />
      <div className={style.buttons}>
        <Button
          className={isLoading ? style.loadingSubmit : style.submit}
          onClick={() => {
            if (!isLoading) requestWords();
          }}
        >
          {isLoading ? <Loader /> : "Get Definitions!"}
        </Button>
      </div>
    </>
  );
}
export default WordEntry;
