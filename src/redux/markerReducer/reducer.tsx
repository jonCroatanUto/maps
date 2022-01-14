import initialState from "./state";
import { FETCH_DATA_MARKER } from "./types";
interface Action {
  payload: {
    data: string;
  };
  type: string;
}

const markerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_MARKER:
      return { ...state, markerData: action.payload };

    default:
      return state;
  }
};

export default markerReducer;
