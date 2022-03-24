import SideCell from "./SideCell";

import { useFlashcards } from "../../../hooks";

import styles from "./SideList.module.scss";

function SideList() {
  const { currentFlashcard, flashcardList, setCurrentFlashcard } =
    useFlashcards();

  return (
    <div className={styles.SideList}>
      {flashcardList.map((f) => (
        <SideCell
          flashcard={f}
          isCurrent={currentFlashcard?.word === f.word}
          setCurrent={() => setCurrentFlashcard(f)}
        />
      ))}
    </div>
  );
}

export default SideList;
