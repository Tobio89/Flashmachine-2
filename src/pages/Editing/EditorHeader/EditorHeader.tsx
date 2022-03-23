import Button from "../../../components/ui/Button";

import { useFlashcards } from "../../../hooks";

import styles from "./EditorHeader.module.scss";

function EditorHeader() {
  const {
    currentFlashcard,
    removeCurrentFlashcard,
    toggleEditMode,
    isEditing,
    submitEdits,
  } = useFlashcards();

  const handleEditSubmit = () => {
    if (isEditing) {
      submitEdits();
    }
    toggleEditMode();
  };

  return (
    <div className={styles.EditorHeader}>
      <h1>{currentFlashcard?.word || ""}</h1>
      <div className={styles.Controls}>
        <Button className={styles.Button} onClick={handleEditSubmit}>
          {isEditing ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-italic"></i>
          )}
        </Button>
        <Button className={styles.Button} onClick={removeCurrentFlashcard}>
          <i className="fas fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  );
}

export default EditorHeader;
