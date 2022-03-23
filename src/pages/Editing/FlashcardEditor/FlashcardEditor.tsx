import React from "react";

import EditorHeader from "./EditorHeader";

import styles from "./FlashcardEditor.module.scss";

function FlashcardEditor() {
  return (
    <div className={styles.FlashcardEditor}>
      <EditorHeader />
    </div>
  );
}

export default FlashcardEditor;
