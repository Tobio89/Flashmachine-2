import { useMutation } from "react-query";

import { APIPREFIX } from "../config/const";

function useGetWords() {
  const { mutateAsync: requestWords, isLoading } = useMutation(
    "flashmachine-definitions",
    async (wordList: any) => {
      try {
        const response = await fetch(
          APIPREFIX + "request_words/?nocache=" + new Date().getTime(),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({ word_array: wordList }),
          }
        );
        const res = await response.json();
        return res;
      } catch (e) {
        alert(e);
      }
    }
  );
  return { requestWords, isLoading };
}

export default useGetWords;
