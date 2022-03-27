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
