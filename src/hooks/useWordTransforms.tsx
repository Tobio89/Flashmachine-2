function useWordTransforms() {
  // function splitAndClean(wordString: string) {
  //   return wordString.split("\n").filter((i) => {
  //     return /\w+/.test(i);
  //   });
  // }

  function isValidWord(word: string) {
    return /\w+/.test(word) || /[\uAC00-\uD7AF]+/.test(word);
  }

  const canSubmit = (list: string[]) => {
    return list.length > 0 && list.length <= 30;
  };
  return { canSubmit, isValidWord };
}

export default useWordTransforms;
