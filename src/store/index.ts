import create from "zustand";

import { InitialState, Word } from "../types";

const useStore = create<InitialState>((set) => ({
  wordList: [],
  setWordList: (state: Word[]) => set({ wordList: state }),
}));

export default useStore;
