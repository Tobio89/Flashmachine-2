import { useState } from "react";
import { DefinitionPack } from "../../config/types";
import useGetWords from "../../hooks/useGetWords";

import useWordTransforms from "../../hooks/useWordTransforms";
import CardEditing from "./CardEditing";

import style from "./Main.module.scss";
import WordEntry from "./WordEntry";

function Main() {
  const [wordList, setWordList] = useState<string[] | null>(null);
  const [definitionsList, setDefinitionsList] =
    useState<DefinitionPack[] | null>(null);

  const { isValidWord, canSubmit } = useWordTransforms();
  const { requestWords, isLoading } = useGetWords();

  const addToList = (newWord: string) => {
    if (isValidWord(newWord)) {
      // Make sure word is a valid word

      if (wordList) {
        // Different logic if wordList already has words in it
        if (wordList.length >= 30) {
          //Handle length of list
          return;
        }

        if (wordList.indexOf(newWord) === -1) {
          // Allow word entry only if word isn't there already

          setWordList([newWord, ...wordList]);
        }
      } else {
        setWordList([newWord]);
      }
    }
  };

  const removeWord = (word: string) => {
    if (wordList && wordList.length > 0) {
      setWordList(wordList.filter((w) => w !== word));
    }
  };

  const handleRequest = async () => {
    if (wordList && canSubmit(wordList)) {
      const data = await requestWords(wordList);
      setDefinitionsList(data);
    }
  };

  return (
    <section className={style.main}>
      {definitionsList ? (
        <CardEditing definitions={definitionsList} />
      ) : (
        <WordEntry
          wordList={wordList}
          addToList={addToList}
          removeWord={removeWord}
          requestWords={handleRequest}
          isLoading={isLoading}
        />
      )}
    </section>
  );
}

export default Main;
