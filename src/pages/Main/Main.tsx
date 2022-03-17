import React from "react";

import WordEntryBox from "./WordEntryBox";
import WordList from "./WordList";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.Main}>
      <WordEntryBox />
      <WordList />
    </div>
  );
}

export default Main;
