import { FETCH_DATA_MARKER } from "./types";
export const addMarker = (marker: {
  place: string;
  lat: number;
  lng: number;
}) => ({
  type: FETCH_DATA_MARKER,
  newMarker: marker,
});
