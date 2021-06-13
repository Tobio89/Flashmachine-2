import { useMutation } from "react-query";

import axios from "../config/axiosinst";
import { APIPREFIX } from "../config/const";

function useGetWords() {
  const {
    mutateAsync: requestWords,
    isLoading,
    isError,
  } = useMutation("flashmachine-definitions", async (wordList: any) => {
    alert("Query going out");
    try {
      const response = await fetch(
        APIPREFIX + "request_words/" + "?nocache=" + new Date().getTime(),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({ word_array: wordList }),
        }
      );

      console.log(response);

      const res = await response.json();
      console.log(res);

      // const response = await axios("?nocache=" + new Date().getTime(), {
      //   method: "post",
      //   data: { word_array: wordList },
      //   withCredentials: true,

      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      // });
      alert("Response");
      return res;
    } catch (e) {
      alert(e);
    }
  });
  return { requestWords, isLoading };
}

export default useGetWords;

/*

    const req = new Request(APIPREFIX, {
      method: "POST",
      headers: { word_array: wordList },
    });
    const response = await fetch(req);
    const res = await response.json();
    console.log(res);
    return res.data;
    */
