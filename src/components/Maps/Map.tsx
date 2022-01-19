import React, { useState } from "react";

import { Loader } from "@googlemaps/js-api-loader";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import GoogleMapReact from "google-map-react";

// import ReactGoogleMap from "react-google-map";
function Map() {
  const [zoom, setZoom] = useState(3);
  const [state, setState] = useState({
    search: "",
    value: "",
  });
  function handleInputChange(e: any) {
    setState({ search: e.target.value, value: e.target.value });
  }

  function handleSelectSuggest(
    geocodedPrediction: any,
    originalPrediction: any
  ) {
    console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
    setState({
      search: "",
      value: geocodedPrediction.formatted_address,
    });
  }

  function handleNoResult() {
    console.log("No results for ", state.search);
  }

  function handleStatusUpdate(status: any) {
    console.log(status);
  }
  // let map: google.maps.Map;
  // // let libraries: google.maps.places.PlacesService;
  // const loader = new Loader({
  //   apiKey: "AIzaSyBf9nU8O65mgqqR2jACgDn03BMLHY7q_Ak",
  //   version: "weekly",
  // });
  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });
  return (
    <>
      {/* <div style={{ width: "500px", height: "500px" }} id="map"></div> */}
      <ReactGoogleMapLoader
        params={{
          key: "AIzaSyBf9nU8O65mgqqR2jACgDn03BMLHY7q_Ak",
          libraries: "places,geocode",
        }}
        render={(googleMaps) =>
          googleMaps && (
            <>
              <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyBf9nU8O65mgqqR2jACgDn03BMLHY7q_Ak",
                  }}
                  defaultCenter={{
                    lat: 59.95,
                    lng: 30.33,
                  }}
                  defaultZoom={zoom}
                ></GoogleMapReact>
              </div>
              <ReactGooglePlacesSuggest
                googleMaps={googleMaps}
                autocompletionRequest={{
                  input: state.search,
                  // Optional options
                  // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                }}
                // Optional props
                // onNoResult={handleNoResult}
                onSelectSuggest={handleSelectSuggest}
                // onStatusUpdate={handleStatusUpdate}
                textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                customRender={(prediction) => (
                  <div className="customWrapper">
                    {prediction
                      ? prediction.description
                      : "My custom no results text"}
                  </div>
                )}
              >
                <input
                  type="text"
                  value={state.value}
                  placeholder="Search a location"
                  onChange={handleInputChange}
                />
              </ReactGooglePlacesSuggest>
            </>
          )
        }
      />
    </>
  );
}

export default Map;
