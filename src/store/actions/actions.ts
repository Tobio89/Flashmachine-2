import { DefinitionPack, FlashPack } from "../../config/types";
import * as actionTypes from "./actionTypes";

export const setDefinitionsAction = (data: DefinitionPack[]) => {
  return { type: actionTypes.SET_DEFINITIONS, payload: { definitions: data } };
};
export const setFlashContentsAction = (data: FlashPack[] | null) => {
  return {
    type: actionTypes.SET_FLASHCONTENT,
    payload: { flashContent: data },
  };
};
export const setActiveWordAction = (data: FlashPack | null) => {
  console.log("Modify Active Word: ", data);
  return {
    type: actionTypes.SET_ACTIVE_WORD,
    payload: { activeWord: data },
  };
};
