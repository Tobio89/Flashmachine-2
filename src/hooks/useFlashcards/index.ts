import useStore from "../../store";
import { FlashcardContents } from "../../types";

function useFlashcards() {
  const flashcardList = useStore((store) => store.flashcardList);
  const setFlashcardList = useStore((store) => store.setFlashcardList);
  const currentFlashcard = useStore((store) => store.currentFlashcard);
  const setCurrentFlashcard = useStore((store) => store.setCurrentFlashcard);

  function editFlashcard(newContent: FlashcardContents): void {
    setFlashcardList(
      flashcardList.map((f) => {
        if (f.word === newContent.word) {
          return {
            ...f,
            meaning: newContent.meaning,
          };
        }
        return f;
      })
    );
  }

  function removeFlashcard(flashToRemove: FlashcardContents): void {
    setFlashcardList(
      flashcardList.filter((f) => f.word !== flashToRemove.word)
    );
  }

  return {
    flashcardList,
    editFlashcard,
    removeFlashcard,
    currentFlashcard,
    setCurrentFlashcard,
  };
}

export default useFlashcards;
