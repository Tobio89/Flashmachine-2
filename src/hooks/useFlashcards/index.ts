import useStore from "../../store";
import { FlashcardContents } from "../../types";

function useFlashcards() {
  const flashcardList = useStore((store) => store.flashcardList);
  const setFlashcardList = useStore((store) => store.setFlashcardList);

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

  return { editFlashcard, removeFlashcard };
}

export default useFlashcards;
