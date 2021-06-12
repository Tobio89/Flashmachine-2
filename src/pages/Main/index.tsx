import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import useGetWords from "../../hooks/useGetWords";
import useWordTransforms from "../../hooks/useWordTransforms";

import { defsToFlash } from "../../func";

import { DefinitionPack, FlashPack } from "../../config/types";
import {
  setActiveWordAction,
  setDefinitionsAction,
  setFlashContentsAction,
} from "../../store/actions/actions";

import style from "./Main.module.scss";
import WordEntry from "./WordEntry";

function Main() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [wordList, setWordList] = useState<string[] | null>(null);
  const { isValidWord, canSubmit } = useWordTransforms();
  const { requestWords, isLoading } = useGetWords();

  // const definitionsList = useSelector((state: State) => state.definitions);

  // const flashContents = useSelector((state: State) => state.flashContent);

  const setDefinitionsList = (data: DefinitionPack[]) =>
    dispatch(setDefinitionsAction(data));
  const setFlashContents = (data: FlashPack[]) =>
    dispatch(setFlashContentsAction(data));
  const setActiveWord = (data: FlashPack) =>
    dispatch(setActiveWordAction(data));

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
      setDefinitionsList(data); // To enable a reset
      const toFlash = defsToFlash(data);
      setFlashContents(toFlash);
      setActiveWord(toFlash[0]);
      history.push("/editing");
    }
  };

  return (
    <section className={style.main}>
      <WordEntry
        wordList={wordList}
        addToList={addToList}
        removeWord={removeWord}
        requestWords={handleRequest}
        isLoading={isLoading}
      />
    </section>
  );
}

export default Main;
