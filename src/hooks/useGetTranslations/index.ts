import { useMutation } from "react-query";

import axiosInstance from "../../axiosInstance";
import useStore from "../../store";

import useWordList from "../useWordList";

import { defsToFlash } from "./funcs";

import { TranslationResponse } from "../../types";

function useGetTranslations() {
  const { wordListAsArray } = useWordList();
  const setHasChanges = useStore((store) => store.setHasChanges);
  const setFlashcardList = useStore((store) => store.setFlashcardList);

  const { mutateAsync: requestWords, isLoading } = useMutation(
    "flashmachine-definitions",
    async () => {
      try {
        const wordList = wordListAsArray();
        const { data }: { data: TranslationResponse } =
          await axiosInstance.post("request_words/", {
            word_array: wordList,
          });
        // Set global state - user no longer has edited changes.
        setHasChanges(false);
        // Place flashcard content directly into store
        setFlashcardList(defsToFlash(data));
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  );
  return { requestWords, isLoading };
}

export default useGetTranslations;
