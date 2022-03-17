import React from "react";

import styles from "./WordEntryBox.module.scss";

function WordEntryBox() {
  return (
    <div className={styles.WordEntryBox}>
      <input className={styles.Input} placeholder="Add words here!" />
    </div>
  );
}

export default WordEntryBox;
