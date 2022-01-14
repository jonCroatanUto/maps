import React from "react";
import "./home.css";
import { Loader } from "@googlemaps/js-api-loader";
function Home() {
  let map: google.maps.Map;
  const loader = new Loader({
    apiKey: "AIzaSyBf9nU8O65mgqqR2jACgDn03BMLHY7q_Ak",
    version: "weekly",
  });
  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });
  return <div id="map"></div>;
}
export default Home;
