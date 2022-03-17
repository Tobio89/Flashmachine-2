import React from "react";

import { Word } from "../../../../types";

import styles from "./WordListElement.module.scss";

interface Props {
  word: Word;
}

function WordListElement({ word }: Props) {
  return <div className={styles.WordListElement}>{word.content}</div>;
}

export default WordListElement;
