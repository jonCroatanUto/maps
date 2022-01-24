import { combineReducers } from "redux";
import markerReducer from "./markerReducer/reducer";

// import tvShowsReducer from "./tvShowsReducer/reducer";
// import switchReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  markerReducer: markerReducer,
});
export type RootState = ReturnType<typeof reducers>;
