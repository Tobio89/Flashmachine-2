import { useMutation } from "react-query";

import axios from "../config/axiosinst";

function useGetWords() {
  const { mutateAsync: requestWords, isLoading } = useMutation(
    "flashmachine-definitions",
    async (wordList: any) => {
      const response = await axios.post("", { word_array: wordList });
      return response.data;
    }
  );
  return { requestWords, isLoading };
}

export default useGetWords;
