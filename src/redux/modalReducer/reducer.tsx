import initialState from "./state";
import { DISPLAY_MODAL } from "./types";

interface Action {
  type: typeof DISPLAY_MODAL;
  payload: boolean;
}

const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return { ...state, diplayAddToListModal: action.payload };

    default:
      return state;
  }
};

export default modalReducer;
