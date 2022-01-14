import { combineReducers } from "redux";
import markerReducer from "./markerReducer/reducer";
import modalReducer from "./modalReducer/reducer";

// import tvShowsReducer from "./tvShowsReducer/reducer";
// import switchReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  markerReducer: markerReducer,
  modalReducer: modalReducer,
});
export type RootState = ReturnType<typeof reducers>;
