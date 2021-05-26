function useWordTransforms() {
  function splitAndClean(wordString: string) {
    return wordString.split("\n").filter((i) => {
      return /\w+/.test(i);
    });
  }

  function isValidWord(word: string) {
    return /\w+/.test(word);
  }

  const canSubmit = (wordString: string) => {
    const r = splitAndClean(wordString).length;
    return r > 0 && r <= 30;
  };
  return { canSubmit, isValidWord };
}

export default useWordTransforms;
