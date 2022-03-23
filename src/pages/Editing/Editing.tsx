import FlashcardEditor from "./FlashcardEditor";

import { useFlashcards } from "../../hooks";

import styles from "./Editing.module.scss";

function Editing() {
  const { currentFlashcard } = useFlashcards();

  if (!currentFlashcard) {
    return <div className={styles.Editing}>There's nothing here yet!</div>;
  }

  return (
    <div className={styles.Editing}>
      <FlashcardEditor />
    </div>
  );
}

export default Editing;
