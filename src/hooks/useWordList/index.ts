import { useEffect } from "react";

import useLocalStorage from "../useLocalStorage";

import useStore from "../../store";

import { WORD_LIMIT } from "../../const";

import { Word } from "../../types";

function useWordList() {
  const wordList = useStore((store) => store.wordList);
  const setWordList = useStore((store) => store.setWordList);

  const { store, retrieve } = useLocalStorage();

  useEffect(() => {
    if (wordList.length === 0) {
      const storedWords = retrieve();
      if (storedWords?.length) {
        setWordList(storedWords);
      }
    }
  }, []); //eslint-disable-line

  function addWordToList(newWord: Word): Boolean {
    if (wordList.length < WORD_LIMIT) {
      if (!wordList.find((w) => w.content === newWord.content)) {
        setWordList([newWord, ...wordList]);
        store([newWord, ...wordList]);
        return true;
      }
    }
    return false;
  }

  function removeWordFromList(wordToRemove: Word): void {
    const newWordList = wordList.filter(
      (w) => w.content !== wordToRemove.content
    );
    setWordList(newWordList);
    store(newWordList);
  }

  const wordCount = {
    asNumber: wordList.length,
    asString: `${wordList.length} / ${WORD_LIMIT}`,
  };
  return {
    addWordToList,
    removeWordFromList,
    wordList,
    wordCount,
  } as const;
}

export default useWordList;
