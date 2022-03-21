import React from "react";

import Button from "../../../../components/ui/Button";

import { Word } from "../../../../types";

import styles from "./WordListElement.module.scss";

interface Props {
  word: Word;
  deleteHandler: () => void;
}

function WordListElement({ word, deleteHandler }: Props) {
  return (
    <div className={styles.WordListElement}>
      <span className={styles.Content}>{word.content}</span>
      <Button className={styles.Delete} onClick={deleteHandler}>
        X
      </Button>
    </div>
  );
}

export default WordListElement;
