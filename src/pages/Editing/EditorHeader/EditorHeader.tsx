import Button from "../../../components/ui/Button";

import styles from "./EditorHeader.module.scss";

interface Props {
  title: string;
  isEditing: boolean;
  handleToggleEdit: () => void;
  removeCurrentFlashcard: () => void;
}

function EditorHeader({
  title,
  isEditing,
  handleToggleEdit,
  removeCurrentFlashcard,
}: Props) {
  return (
    <div className={styles.EditorHeader}>
      <h1>{title}</h1>
      <div className={styles.Controls}>
        <Button className={styles.Button} onClick={handleToggleEdit}>
          {isEditing ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-italic"></i>
          )}
        </Button>
        <Button className={styles.Button} onClick={removeCurrentFlashcard}>
          <i className="fas fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  );
}

export default EditorHeader;
