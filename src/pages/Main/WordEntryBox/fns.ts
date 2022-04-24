import { WORD_LIMIT } from "../../../const";

export function toLabel(wordCount: number) {
  return `${wordCount} / ${WORD_LIMIT}`;
}
