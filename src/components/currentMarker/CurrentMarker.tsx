import React from "react";
import "./markerStyle.css";
function CurrentMarker(props: { text: String; lat: Number; lng: Number }) {
  return (
    <div className="markerContainer">
      <p>{props.text}</p>;
    </div>
  );
}
export default CurrentMarker;
