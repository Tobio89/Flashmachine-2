import { WORD_LIMIT } from "../../const";
import useStore from "../../store";
import { Word } from "../../types";

function useWordList() {
  const wordList = useStore((store) => store.wordList);
  const setWordList = useStore((store) => store.setWordList);

  function addWordToList(newWord: Word): Boolean {
    if (wordList.length < WORD_LIMIT) {
      if (!wordList.find((w) => w.content === newWord.content)) {
        setWordList([newWord, ...wordList]);
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
