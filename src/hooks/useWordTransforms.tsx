function useWordTransforms() {
  function splitAndClean(wordString: string) {
    return wordString.split("\n").filter((i) => {
      return /\w+/.test(i);
    });
  }

  const canSubmit = (wordString: string) => {
    const r = splitAndClean(wordString).length;
    return r > 0 && r <= 30;
  };
  return { canSubmit };
}

export default useWordTransforms;
