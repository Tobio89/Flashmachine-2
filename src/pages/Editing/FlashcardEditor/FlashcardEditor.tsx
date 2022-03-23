import EditorHeader from "./EditorHeader";
import TextArea from "./TextArea";

import styles from "./FlashcardEditor.module.scss";

function FlashcardEditor() {
  return (
    <div className={styles.FlashcardEditor}>
      <EditorHeader />
      <TextArea />
    </div>
  );
}

export default FlashcardEditor;
