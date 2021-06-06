export type Definition = {
  language: "Korean" | "English";
  searchedTerm: string;
  resultType: "word_idiom" | "meaning";
  resultWord: string;
  hanja: string;
  definition: string;
  id: number;
};

export type DefinitionPack = {
  queryWord: string;
  results: Definition[];
};

export type FlashPack = {
  word: string;
  meaning: string;
  hanjas?: string;
};

export type State = {
  definitions: DefinitionPack[] | null;
  flashContent: FlashPack[] | null;
  activeWord: FlashPack | null;
};
