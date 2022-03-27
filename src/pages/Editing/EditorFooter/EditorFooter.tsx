import Button from "../../../components/ui/Button";

import styles from "./EditorFooter.module.scss";

interface Props {
  selectPreviousCard: () => void;
  selectNextCard: () => void;
  handleMakeFile: () => void;
}

function EditorFooter({
  selectPreviousCard,
  selectNextCard,
  handleMakeFile,
}: Props) {
  return (
    <div className={styles.EditorFooter}>
      <Button className={styles.NavButton} onClick={selectPreviousCard}>
        <i className="fas fa-arrow-circle-left"></i>
      </Button>
      <Button className={styles.SubmitButton} onClick={handleMakeFile}>
        <i className="fas fa-file-download"></i>
      </Button>
      <Button className={styles.NavButton} onClick={selectNextCard}>
        <i className="fas fa-arrow-circle-right"></i>
      </Button>
    </div>
  );
}

export default EditorFooter;
