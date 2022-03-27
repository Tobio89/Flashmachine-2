import { useState } from "react";

import EditorFooter from "./EditorFooter";
import EditorHeader from "./EditorHeader";
import TextArea from "./TextArea";
import SideList from "./SideList";

import { useFlashcards } from "../../hooks";

import styles from "./Editing.module.scss";
import { FlashcardContents } from "../../types";

function Editing() {
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

  if (!currentFlashcard) {
    return (
      <div className={styles.Editing}>
        <h3 className={styles.EmptyMessage}>There's nothing to edit!</h3>
      </div>
    );
  }

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
    const currentIndex = flashcardList.indexOf(currentFlashcard);
    if (currentIndex === flashcardList.length - 1) {
      handleChangeFlashcard(flashcardList[0]);
    } else {
      handleChangeFlashcard(flashcardList[currentIndex + 1]);
    }
  };

  const selectPreviousCard = () => {
    const currentIndex = flashcardList.indexOf(currentFlashcard);
    if (currentIndex === 0) {
      handleChangeFlashcard(flashcardList[flashcardList.length - 1]);
    } else {
      handleChangeFlashcard(flashcardList[currentIndex - 1]);
    }
  };

  return (
    <div className={styles.Editing}>
      <EditorHeader
        title={currentFlashcard.word}
        isEditing={isEditing}
        handleToggleEdit={handleToggleEdit}
        removeCurrentFlashcard={removeCurrentFlashcard}
      />
      <SideList
        currentFlashcard={currentFlashcard}
        flashcardList={flashcardList}
        handleChangeFlashcard={handleChangeFlashcard}
      />
      <TextArea
        isEditing={isEditing}
        contentToEdit={contentToEdit}
        handleEditContent={handleEditContent}
      />
      <EditorFooter
        selectNextCard={selectNextCard}
        selectPreviousCard={selectPreviousCard}
      />
    </div>
  );
}

export default Editing;
