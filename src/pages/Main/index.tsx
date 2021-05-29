import { useState } from "react";

import axios from "../../config/axiosinst";
import { DefinitionPack } from "../../config/types";

import useWordTransforms from "../../hooks/useWordTransforms";
import CardEditing from "./CardEditing";

import style from "./Main.module.scss";
import WordEntry from "./WordEntry";

function Main() {
  const [wordList, setWordList] = useState<string[] | null>(null);
  const [definitionsList, setDefinitionsList] =
    useState<DefinitionPack[] | null>(null);

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

  function requestWords() {
    if (wordList && canSubmit(wordList)) {
      axios
        .post("", { word_array: wordList })
        .then((resp) => setDefinitionsList(resp.data))
        .catch((e) => console.log(e));
    }
  }

  return (
    <section className={style.main}>
      {definitionsList ? (
        <CardEditing definitions={definitionsList} />
      ) : (
        <WordEntry
          wordList={wordList}
          addToList={addToList}
          removeWord={removeWord}
          requestWords={requestWords}
        />
      )}
    </section>
  );
}

export default Main;
