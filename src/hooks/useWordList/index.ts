import { WORD_LIMIT } from "../../const";
import useStore from "../../store";
import { Word } from "../../types";

function useWordList() {
  const wordList = useStore((store) => store.wordList);
  const setWordList = useStore((store) => store.setWordList);

  function addWordToList(newWord: Word) {
    if (wordList.length < WORD_LIMIT) {
      setWordList([newWord, ...wordList]);
    }
  }

  function removeWordFromList(wordToRemove: Word) {
    const newWordList = wordList.filter(
      (w) => w.content !== wordToRemove.content
    );
    setWordList(newWordList);
  }

  const wordCount = {
    asNumber: wordList.length,
    asString: `${wordList.length} / ${WORD_LIMIT}`,
  };
  return {
    addWordToList,
    removeWordFromList,
    wordCount,
  };
}

export default useWordList;
