import { Word } from "../../types";

const flashmachine_key = "flashmachine_words";

function useLocalStorage() {
  const store = (wordlist: Word[]) => {
    window.localStorage.setItem(flashmachine_key, JSON.stringify(wordlist));
  };

  const retrieve = () => {
    const dat = window.localStorage.getItem(flashmachine_key);
    if (dat) {
      return JSON.parse(dat);
    }
  };
  return { store, retrieve };
}
export default useLocalStorage;
