import WordEntryBox from "./WordEntryBox";
import WordList from "./WordList";
import SubmitButton from "./SubmitButton";

import useMainPageFns from "./useMainPageFns";

import styles from "./Main.module.scss";

function Main() {
  const {
    wordCount,
    wordList,
    removeWordFromList,
    addWordToList,
    submitWordRequest,
    isLoadingTranslations,
  } = useMainPageFns();

  return (
    <div className={styles.Main}>
      <WordEntryBox
        wordCount={wordCount}
        addWordToList={addWordToList}
        isLoadingTranslations={isLoadingTranslations}
      />
      <WordList
        wordList={wordList}
        removeWordFromList={removeWordFromList}
        isLoadingTranslations={isLoadingTranslations}
      />
      <SubmitButton
        submitWordRequest={submitWordRequest}
        isLoadingTranslations={isLoadingTranslations}
        isWordlistEmpty={!wordCount}
      />
    </div>
  );
}

export default Main;
