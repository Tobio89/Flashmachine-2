import { useState } from "react";
import WordListDisplay from "../../components/WordListDisplay";
import useWordTransforms from "../../hooks/useWordTransforms";

import style from "./Main.module.scss";

function WordEntry() {
  const [wordInput, setWordInput] = useState<string>("");
  const [wordList, setWordList] = useState<string[] | null>(null);

  const { isValidWord, canSubmit } = useWordTransforms();

  function addToList(newWord: string) {
    if (isValidWord(newWord)) {
      // Make sure word is a valid word

      if (wordList) {
        // Different logic if wordList already has words in it

        if (wordList.indexOf(newWord) === -1) {
          // Allow word entry only if word isn't there already

          setWordList([...wordList, newWord]);
        }
      } else {
        setWordList([newWord]);
      }
    }
  }

  function removeWord(word: string) {
    if (wordList && wordList.length > 0) {
      setWordList(wordList.filter((w) => w !== word));
    }
  }

  return (
    <section className={style.main}>
      <input
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
      <button
        onClick={() => {
          addToList(wordInput);
          setWordInput("");
        }}
      >
        Submit
      </button>
    </section>
  );
}

export default WordEntry;
