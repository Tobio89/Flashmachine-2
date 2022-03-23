import React from "react";

import { useFlashcards } from "../../../../hooks";

import styles from "./TextArea.module.scss";

function TextArea() {
  const { currentFlashcard, isEditing } = useFlashcards();

  return (
    <textarea
      className={styles.TextArea}
      disabled={!isEditing}
      value={currentFlashcard?.meaning || ""}
    />
  );
}

export default TextArea;
