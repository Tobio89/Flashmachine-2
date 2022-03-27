import { FlashcardContents } from "../types";

export function flashToTxt(flashcardSource: FlashcardContents[]) {
  const cardArray: string[] = flashcardSource?.map(
    (flashContent: FlashcardContents) => {
      let flashAsString = `${flashContent.word}; ${flashContent.meaning}`;
      if (flashContent.hanjas) {
        flashAsString += `; ${flashContent.hanjas}`;
      } else {
        flashAsString += "; ";
      }
      return flashAsString;
    }
  );
  return cardArray.join("\n");
}
