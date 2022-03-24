import classNames from "classnames";
import Button from "../../../../components/ui/Button";

import { FlashcardContents } from "../../../../types";

import styles from "./SideCell.module.scss";

interface Props {
  flashcard: FlashcardContents;
  isCurrent: boolean;
  setCurrent: () => void;
}

function SideCell({ flashcard, isCurrent, setCurrent }: Props) {
  return (
    <Button
      className={classNames(styles.SideCell, isCurrent && styles.isCurrent)}
      onClick={setCurrent}
    >
      <div>{flashcard.word}</div>
    </Button>
  );
}

export default SideCell;
