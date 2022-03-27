import { useState } from "react";

import { useFlashcards } from "../../hooks";

import { FlashcardContents } from "../../types";

function useEditor() {
  const {
    isEditing,
    toggleEditMode,
    currentFlashcard,
    flashcardList,
    setCurrentFlashcard,
    removeCurrentFlashcard,
    updateCurrentFlashcard,
  } = useFlashcards();

  const [contentToEdit, setContentToEdit] = useState<string>(
    currentFlashcard?.meaning || ""
  );

  const handleChangeFlashcard = (f: FlashcardContents) => {
    setCurrentFlashcard(f);
    setContentToEdit(f.meaning);
  };

  const handleEditContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentToEdit(e.target.value);
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      updateCurrentFlashcard(contentToEdit);
    }
    toggleEditMode();
  };

  const selectNextCard = () => {
    const currentIndex = flashcardList.indexOf(currentFlashcard!);
    if (currentIndex === flashcardList.length - 1) {
      handleChangeFlashcard(flashcardList[0]);
    } else {
      handleChangeFlashcard(flashcardList[currentIndex + 1]);
    }
  };

  const selectPreviousCard = () => {
    const currentIndex = flashcardList.indexOf(currentFlashcard!);
    if (currentIndex === 0) {
      handleChangeFlashcard(flashcardList[flashcardList.length - 1]);
    } else {
      handleChangeFlashcard(flashcardList[currentIndex - 1]);
    }
  };

  function flashToTxt(flashcardSource: FlashcardContents[]) {
    const cardArray: string[] = flashcardSource?.map(
      (flashContent: FlashcardContents) => {
        let flashAsString = `${flashContent.word}; ${flashContent.meaning}`;
        if (flashContent.hanjas) {
          flashAsString += `; ${flashContent.hanjas}`;
        } else {
          flashAsString += "; ";
        }
        return flashAsString;
      }
    );
    return cardArray.join("\n");
  }

  const handleMakeFile = () => {
    if (flashcardList) {
      const element = document.createElement("a");
      const file = new Blob([flashToTxt(flashcardList)], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "flashmachine_anki_flashcards.txt";
      document.body.appendChild(element);
      element.click();
    }
  };

  return {
    currentFlashcard,
    flashcardList,
    isEditing,
    contentToEdit,
    handleChangeFlashcard,
    handleEditContent,
    handleToggleEdit,
    selectNextCard,
    selectPreviousCard,
    handleMakeFile,
    removeCurrentFlashcard,
  };
}

export default useEditor;
