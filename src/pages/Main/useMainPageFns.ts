import { useWordList, useNaverDict } from "../../hooks";

function useMainPageFns() {
  const { wordCount, wordList, addWordToList, removeWordFromList } =
    useWordList();
  // const { requestWords, isLoading: isLoadingTranslations } =
  //   useGetTranslations();
  const { requestWords, isLoading: isLoadingTranslations } = useNaverDict();

  const submitWordRequest = () => {
    if (!isLoadingTranslations && !!wordCount) {
      requestWords();
    }
  };

  // const handleCtrlEnterSubmission = useCallback(
  //   (e: KeyboardEvent) => {
  //     if (e.ctrlKey && e.code === "Enter") {
  //       submitWordRequest();
  //     }
  //   },
  //   [submitWordRequest]
  // );

  return {
    wordCount,
    wordList,
    addWordToList,
    removeWordFromList,
    submitWordRequest,
    isLoadingTranslations,
  };
}

export default useMainPageFns;
