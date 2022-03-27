import { FlashcardContents } from "../../../types";
import SideCell from "./SideCell";

import styles from "./SideList.module.scss";

interface Props {
  currentFlashcard: FlashcardContents;
  flashcardList: FlashcardContents[];
  handleChangeFlashcard: (f: FlashcardContents) => void;
}

function SideList({
  currentFlashcard,
  flashcardList,
  handleChangeFlashcard,
}: Props) {
  return (
    <div className={styles.SideList}>
      {flashcardList.map((f) => (
        <SideCell
          flashcard={f}
          isCurrent={currentFlashcard?.word === f.word}
          setCurrent={() => handleChangeFlashcard(f)}
        />
      ))}
    </div>
  );
}

export default SideList;
