import React, { useState } from "react";

// import { Loader } from "@googlemaps/js-api-loader";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import Input from "../Input";
import GoogleMapReact from "google-map-react";

// import ReactGoogleMap from "react-google-map";
function Map() {
  const [predictionLine, setPredictionLine] = useState();
  const [zoom, setZoom] = useState(4);
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

  return (
    <>
      <ReactGoogleMapLoader
        params={{
          key: "AIzaSyBf9nU8O65mgqqR2jACgDn03BMLHY7q_Ak",
          libraries: "places,geocode",
        }}
        render={(googleMaps) =>
          googleMaps && (
            <>
              <ReactGooglePlacesSuggest
                googleMaps={googleMaps}
                autocompletionRequest={{
                  input: state.search,
                  // Optional options
                  // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                }}
                // Optional props

                onSelectSuggest={handleSelectSuggest}
                textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                customRender={(prediction) => (
                  <div className="customWrapper">
                    <>
                      <p style={{ fontSize: "20px" }}>
                        {prediction?.description}
                      </p>

                      {/* 
                      Intentant que els caracters coincidents estiguin en negrita
    
                      {[prediction?.description].map((sentence: any, index) => {
                        if (sentence.slice(0, index) === state.value) {
                          return (
                            <p style={{ fontWeight: "blood" }}>
                              sentence.slice(0, index)
                            </p>
                          );
                        }
                      })} */}
                    </>
                  </div>
                )}
                // customContainerRender={(
                //   items => <CustomWrapper>{items.map(item => <ItemWrapper>{item.description}</ItemWrapper>))}
                // )}
              >
                <Input
                  type="text"
                  id="searcherPlace"
                  label="Search a location"
                  value={state.value}
                  placeholder="Search a location"
                  handleChange={handleInputChange}
                />
              </ReactGooglePlacesSuggest>
              <div style={{ height: "85vh", width: "100%" }}>
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
            </>
          )
        }
      />
    </>
  );
}

export default Map;
