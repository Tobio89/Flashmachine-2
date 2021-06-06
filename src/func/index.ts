import { Definition, DefinitionPack, FlashPack } from "../config/types";

export function defsToFlash(defResults: DefinitionPack[]) {
  const flash: FlashPack[] = defResults.map((defPack: DefinitionPack) => {
    const word = defPack.queryWord;
    const meaning =
      defPack.results
        .map((res: Definition) => {
          if (res.hanja) {
            return `[${res.hanja}] ${res.definition}`;
          }
          return res.definition;
        })
        .join("\n\n") || "No results";
    const hanjas =
      defPack.results.map((res: Definition) => res.hanja || null).join(" ") ||
      null;

    const out: FlashPack = {
      word: word,
      meaning: meaning,
    };
    if (hanjas && /\S/.test(hanjas)) {
      out.hanjas = hanjas.trimRight();
    }
    return out;
  });

  return flash;
}
