import initialState from "./state";
import { FETCH_DATA_MARKER } from "./types";
interface Action {
  newMarker: { lat: number; lng: number };
  type: string;
}

const markerReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_MARKER:
      return {
        ...state,
        markersData: [...state.markersData, action.newMarker],
      };

    default:
      return state;
  }
};

export default markerReducer;
