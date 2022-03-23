import WordEntryBox from "./WordEntryBox";
import WordList from "./WordList";
import SubmitButton from "./SubmitButton";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.Main}>
      <WordEntryBox />
      <WordList />
      <SubmitButton />
    </div>
  );
}

export default Main;
