import EditorHeader from "./EditorHeader";
import TextArea from "./TextArea";
import SideList from "./SideList";

import { useFlashcards } from "../../hooks";

import styles from "./Editing.module.scss";

function Editing() {
  const { currentFlashcard } = useFlashcards();

  if (!currentFlashcard) {
    return (
      <div className={styles.Editing}>
        <h3 className={styles.EmptyMessage}>There's nothing to edit!</h3>
      </div>
    );
  }

  return (
    <div className={styles.Editing}>
      <SideList />
      <EditorHeader />
      <TextArea />
    </div>
  );
}

export default Editing;
