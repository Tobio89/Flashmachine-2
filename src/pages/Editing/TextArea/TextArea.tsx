import { useState, useEffect } from "react";
import classNames from "classnames";

import { useFlashcards } from "../../../hooks";

import styles from "./TextArea.module.scss";

function TextArea() {
  const { currentFlashcard, isEditing, handleEditing } = useFlashcards();
  const [content, setContent] = useState(currentFlashcard?.meaning);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    handleEditing(e);
  };

  useEffect(() => {
    setContent(currentFlashcard?.meaning);
  }, [currentFlashcard]);

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

/* 

The useEffect is there so that the content of the textarea changes if the current flashcard changes.
For some reason, just changing the currentFlashcard doesn't cause a rerender.
I also tried passing stuff in through props and that also didn't work.

*/
