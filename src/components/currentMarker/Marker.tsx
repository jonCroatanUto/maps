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
  // let dynamicClass: string = "currentMarkerContainer";
  // const { markersData } = useSelector(
  //   (state: RootState) => state.markerReducer
  // );
  // const index = markersData.length - 1;
  // useEffect(() => {
  //   console.log(position, "this is position");
  //   console.log(index, "this is index");
  //   // if (position === index) {
  //   //   dynamicClass = "currentMarkerContainer";
  //   // } else {
  //   //   dynamicClass = "markerContainer";
  //   // }
  // }, []);
  return (
    <div className={classString}>
      <p>{text}</p>;
    </div>
  );
}
export default Marker;
