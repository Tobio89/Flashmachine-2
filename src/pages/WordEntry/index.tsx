import { useState, useEffect } from "react";
import WordListDisplay from "../../components/WordListDisplay";
import useWordTransforms from "../../hooks/useWordTransforms";

import style from "./WordEntry.module.scss";

function WordEntry() {
  const [wordInput, setWordInput] = useState<string>("");
  const [wordList, setWordList] = useState<string[] | null>(null);
  const [prevent, setPrevent] = useState<boolean>(false);

  const { isValidWord, canSubmit } = useWordTransforms();

  function addToList(newWord: string) {
    if (isValidWord(newWord)) {
      // Make sure word is a valid word

      if (wordList) {
        // Different logic if wordList already has words in it
        if (wordList.length >= 30) {
          //Handle length of list
          return;
        }

        if (wordList.indexOf(newWord) === -1) {
          // Allow word entry only if word isn't there already

          setWordList([newWord, ...wordList]);
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

  useEffect(() => {
    if (wordList && wordList.length >= 30) {
      setPrevent(true);
    } else {
      setPrevent(false);
    }
  }, [wordList]);

  return (
    <section className={style.main}>
      <input
        className={prevent ? style.prevent : undefined}
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
          className={style.submit}
          onClick={() => {
            if (wordList) {
              console.log(canSubmit(wordList));
            }
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default WordEntry;
