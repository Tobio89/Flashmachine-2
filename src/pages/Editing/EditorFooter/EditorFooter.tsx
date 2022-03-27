import Button from "../../../components/ui/Button";

import styles from "./EditorFooter.module.scss";

interface Props {
  selectPreviousCard: () => void;
  selectNextCard: () => void;
}

function EditorFooter({ selectPreviousCard, selectNextCard }: Props) {
  return (
    <div className={styles.EditorFooter}>
      <Button className={styles.NavButton} onClick={selectPreviousCard}>
        &lt;
      </Button>
      <Button className={styles.SubmitButton}>Make Cards</Button>
      <Button className={styles.NavButton} onClick={selectNextCard}>
        &gt;
      </Button>
    </div>
  );
}

export default EditorFooter;
