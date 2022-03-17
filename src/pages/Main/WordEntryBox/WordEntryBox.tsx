import React from "react";

import { WORD_LIMIT } from "../../../const";

import styles from "./WordEntryBox.module.scss";

function WordEntryBox() {
  return (
    <div className={styles.WordEntryBox}>
      <input className={styles.Input} placeholder="Add words here!" />
      <div className={styles.Counter}>{`0 / ${WORD_LIMIT}`}</div>
    </div>
  );
}

export default WordEntryBox;
