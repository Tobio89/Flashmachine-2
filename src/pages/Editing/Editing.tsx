import EditorFooter from "./EditorFooter";
import EditorHeader from "./EditorHeader";
import TextArea from "./TextArea";
import SideList from "./SideList";

import useEditor from "./useEditor";

import styles from "./Editing.module.scss";

function Editing() {
  const {
    currentFlashcard,
    isEditing,
    flashcardList,
    contentToEdit,
    handleChangeFlashcard,
    handleEditContent,
    handleToggleEdit,
    selectNextCard,
    selectPreviousCard,
    handleMakeFile,
    removeCurrentFlashcard,
  } = useEditor();

  if (!currentFlashcard) {
    return (
      <div className={styles.Editing}>
        <h3 className={styles.EmptyMessage}>There's nothing to edit!</h3>
      </div>
    );
  }

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
        handleMakeFile={handleMakeFile}
      />
    </div>
  );
}

export default Editing;
