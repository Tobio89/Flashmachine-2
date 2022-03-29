import { useMutation } from "react-query";

import useStore from "../../store";

import useWordList from "../useWordList";

import { defsToFlash } from "./funcs";

import { useHistory } from "react-router-dom";
import { APIPREFIX } from "../../const";

function useGetTranslations() {
  const { wordListAsArray } = useWordList();
  const setHasChanges = useStore((store) => store.setHasChanges);
  const setFlashcardList = useStore((store) => store.setFlashcardList);
  const setCurrentFlashcard = useStore((store) => store.setCurrentFlashcard);

  const history = useHistory();

  const { mutateAsync: requestWords, isLoading } = useMutation(
    "flashmachine-definitions",
    async () => {
      try {
        const wordList = wordListAsArray();
        const response = await fetch(
          APIPREFIX + "request_words/?nocache=" + new Date().getTime(),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({
              word_array: wordList,
            }),
          }
        );
        const data = await response.json();
        // Transform returned data
        const flashcards = defsToFlash(data);

        // Set global state - user no longer has edited changes.
        setHasChanges(false);
        // Place flashcard content directly into store
        setFlashcardList(flashcards);
        // Set the current flashcard as first flashcard here
        setCurrentFlashcard(flashcards[0]);
        history.push("/editing");
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  );
  return { requestWords, isLoading };
}

export default useGetTranslations;
