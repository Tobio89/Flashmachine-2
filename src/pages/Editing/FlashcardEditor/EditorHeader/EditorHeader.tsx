import Button from "../../../../components/ui/Button";
import { useFlashcards } from "../../../../hooks";

import styles from "./EditorHeader.module.scss";

function EditorHeader() {
  const { currentFlashcard } = useFlashcards();
  return (
    <div className={styles.EditorHeader}>
      <h1>{currentFlashcard?.word || ""}</h1>
      <div className={styles.Controls}>
        <Button>E</Button>
        <Button>D</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
