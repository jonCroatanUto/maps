import React, { useEffect } from "react";
import "./markerStyle.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
function Marker(props: {
  classString: string;
  text: String;
  lat: Number;
  lng: Number;
  key: number;
}) {
  const { classString, text } = props;

  return (
    <div className={classString}>
      <p>{text}</p>;
    </div>
  );
}
export default Marker;
