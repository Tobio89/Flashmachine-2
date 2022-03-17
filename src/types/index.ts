export type InitialState = {
  wordList: Word[];
  setWordList: (state: Word[]) => void;
};

export type Word = {
  content: string;
};
