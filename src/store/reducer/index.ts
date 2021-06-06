import * as actionTypes from "../actions/actionTypes";

import { FlashPack, DefinitionPack, State } from "../../config/types";

type Action =
  | {
      type: typeof actionTypes.SET_DEFINITIONS;
      payload: { definitions: DefinitionPack[] };
    }
  | {
      type: typeof actionTypes.SET_FLASHCONTENT;
      payload: { flashContent: FlashPack[] };
    }
  | {
      type: typeof actionTypes.SET_ACTIVE_WORD;
      payload: { activeWord: FlashPack };
    };

const initialState: State = {
  definitions: null,
  flashContent: null,
  activeWord: null,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_DEFINITIONS:
      if (!action.payload) {
        return state;
      }

      return {
        ...state,
        definitions: action.payload.definitions,
      };
    case actionTypes.SET_FLASHCONTENT:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        flashContent: action.payload.flashContent,
      };

    case actionTypes.SET_ACTIVE_WORD:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        activeWord: action.payload.activeWord,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
