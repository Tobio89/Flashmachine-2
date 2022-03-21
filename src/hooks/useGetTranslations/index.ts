import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";

import useWordList from "../useWordList";

import { defsToFlash } from "./funcs";

import { TranslationResponse } from "../../types";

function useGetTranslations() {
  const { wordListAsArray } = useWordList();

  const { mutateAsync: requestWords, isLoading } = useMutation(
    "flashmachine-definitions",
    async () => {
      try {
        const wordList = wordListAsArray();
        const { data }: { data: TranslationResponse } =
          await axiosInstance.post("request_words/", {
            word_array: wordList,
          });
        return defsToFlash(data);
      } catch (e) {
        alert(e);
      }
    }
  );
  return { requestWords, isLoading };
}

export default useGetTranslations;
