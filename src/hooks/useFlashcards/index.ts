import useStore from "../../store";
import { FlashcardContents } from "../../types";

function useFlashcards() {
  const flashcardList = useStore((store) => store.flashcardList);
  const setFlashcardList = useStore((store) => store.setFlashcardList);
  const currentFlashcard = useStore((store) => store.currentFlashcard);
  const setCurrentFlashcard = useStore((store) => store.setCurrentFlashcard);
  const isEditing = useStore((store) => store.isEditing);
  const setEditing = useStore((store) => store.setEditing);

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

  function removeCurrentFlashcard() {
    if (!currentFlashcard) return;
    setEditing(false);
    const index = flashcardList.indexOf(currentFlashcard);
    removeFlashcard(currentFlashcard);
    if (flashcardList.length > 1) {
      if (index === 0) {
        setCurrentFlashcard(flashcardList[1]);
      } else {
        setCurrentFlashcard(flashcardList[index - 1]);
      }
    } else {
      setCurrentFlashcard(null);
    }
  }

  function updateCurrentFlashcard(newContent: string) {
    if (!currentFlashcard) return;
    const newCard = { ...currentFlashcard, meaning: newContent };
    editFlashcard({ ...newCard });
    setCurrentFlashcard(newCard);
  }

  function toggleEditMode() {
    setEditing(!isEditing);
  }

  return {
    flashcardList,
    editFlashcard,
    removeFlashcard,
    currentFlashcard,
    setCurrentFlashcard,
    removeCurrentFlashcard,
    updateCurrentFlashcard,
    isEditing,
    toggleEditMode,
  };
}

export default useFlashcards;
