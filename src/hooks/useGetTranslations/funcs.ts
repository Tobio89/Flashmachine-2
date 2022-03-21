import {
  TranslationResponse,
  TranslationPack,
  Translation,
  FlashcardContents,
} from "../../types";

function parseMeanings(t: TranslationPack): string {
  return (
    t.results
      .map((r: Translation) => {
        if (r.hanja) {
          return `${r.hanja}: ${r.definition}`;
        }
        return r.definition;
      })
      .join("\n\n") || "No results"
  );
}

function parseHanja(t: TranslationPack): string {
  return (
    t.results
      .map((t: Translation) => t.hanja || null)
      .join(" ")
      .trimEnd() || ""
  );
}

export function defsToFlash(
  translationPacks: TranslationResponse
): FlashcardContents[] {
  const flashcardContents = translationPacks.map((t: TranslationPack) => {
    return {
      word: t.queryWord,
      meaning: parseMeanings(t),
      hanjas: parseHanja(t),
    };
  });
  return flashcardContents;
}
