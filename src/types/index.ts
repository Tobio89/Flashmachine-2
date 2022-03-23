export type InitialState = {
  isEditing: boolean;
  setEditing: (state: boolean) => void;
  hasChanges: boolean;
  setHasChanges: (state: boolean) => void;
  wordList: Word[];
  setWordList: (state: Word[]) => void;
  flashcardList: FlashcardContents[];
  setFlashcardList: (state: FlashcardContents[]) => void;
  currentFlashcard: FlashcardContents | null;
  setCurrentFlashcard: (state: FlashcardContents | null) => void;
  edits: string;
  setEdits: (state: string) => void;
};

export interface Word {
  content: string;
}

export type Language = "English" | "Korean";
export type ResultType = "wordIdiom" | "meaning";
export interface Translation {
  id: number;
  definition: string;
  hanja: string | null;
  language: Language;
  resultType: ResultType;
  searchedTerm: string;
}

export interface TranslationPack {
  queryWord: string;
  results: Translation[];
}

export type TranslationResponse = TranslationPack[];

export type FlashcardContents = {
  word: string;
  meaning: string;
  hanjas: string;
};
