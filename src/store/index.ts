import create from "zustand";

import { FlashcardContents, InitialState, Word } from "../types";

const useStore = create<InitialState>((set) => ({
  isEditing: false,
  setEditing: (state: boolean) => set({ isEditing: state }),
  hasChanges: false,
  setHasChanges: (state: boolean) => set({ hasChanges: state }),
  wordList: [],
  setWordList: (state: Word[]) => set({ wordList: state }),
  flashcardList: [],
  setFlashcardList: (state: FlashcardContents[]) =>
    set({ flashcardList: state }),
  currentFlashcard: null,
  setCurrentFlashcard: (state: FlashcardContents | null) =>
    set({ currentFlashcard: state }),
}));

export default useStore;
