import classNames from "classnames";
import { useState } from "react";

import { useFlashcards } from "../../../hooks";

import styles from "./TextArea.module.scss";

function TextArea() {
  const { currentFlashcard, isEditing, handleEditing } = useFlashcards();
  const [content, setContent] = useState(currentFlashcard?.meaning);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    handleEditing(e);
  };

  return (
    <textarea
      className={classNames(styles.TextArea, isEditing && styles.editing)}
      disabled={!isEditing}
      onChange={handleChange}
      value={content}
    />
  );
}

export default TextArea;
