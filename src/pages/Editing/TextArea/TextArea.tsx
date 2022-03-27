import { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./TextArea.module.scss";

interface Props {
  isEditing: boolean;
  contentToEdit: string;
  handleEditContent: (_: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ isEditing, contentToEdit, handleEditContent }: Props) {
  return (
    <textarea
      className={classNames(styles.TextArea, isEditing && styles.editing)}
      disabled={!isEditing}
      onChange={handleEditContent}
      value={contentToEdit}
    />
  );
}

export default TextArea;

/* 

The useEffect is there so that the content of the textarea changes if the current flashcard changes.
For some reason, just changing the currentFlashcard doesn't cause a rerender.
I also tried passing stuff in through props and that also didn't work.

*/
