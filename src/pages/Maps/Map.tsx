import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import Input from "../../components/Input";
import GoogleMapReact from "google-map-react";
import Marker from "../../components/currentMarker";
import { addMarker } from "../../redux/markerReducer/actions";
import { RootState } from "../../redux/reducers";

function Map() {
  const { markersData } = useSelector(
    (state: RootState) => state.markerReducer
  );

  const dispatch = useDispatch();

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
    const { formatted_address, geometry } = geocodedPrediction;
    const newMarker = {
      place: formatted_address,
      lat: geometry.viewport.Ab.g,
      lng: geometry.viewport.Ra.g,
    };
    dispatch(addMarker(newMarker));

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
                }}
                onSelectSuggest={handleSelectSuggest}
                textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                customRender={(prediction) => (
                  <div className="customWrapper">
                    <>
                      <p style={{ fontSize: "30px" }}>
                        {prediction?.description}
                      </p>

                      {/* 
                      Intentant que els caracters coincidents estiguin en negrita
  
                       {[prediction?.description].map((sentence: any, index) => {
                        if (sentence.slice(0, index) === state.value) {
                          return (
                            <p style={{ fontWeight: "blood" }}>
                              {sentence.slice(0, index)}
                            </p>
                          );
                        }
                      })}  */}
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
              <div style={{ height: "91vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyBf9nU8O65mgqqR2jACgDn03BMLHY7q_Ak",
                  }}
                  defaultCenter={{
                    lat: 59.95,
                    lng: 30.33,
                  }}
                  defaultZoom={zoom}
                >
                  {[...markersData].map((marker: any, index) => {
                    let lastElement = markersData.length - 1;
                    let dynamicClass;
                    if (index === lastElement) {
                      dynamicClass = "currentMarkerContainer";
                    } else {
                      dynamicClass = "markerContainer";
                    }

                    return (
                      <Marker
                        classString={dynamicClass}
                        key={index}
                        lat={marker.lat}
                        lng={marker.lng}
                        text={marker.place}
                      />
                    );
                  })}
                </GoogleMapReact>
              </div>
            </>
          )
        }
      />
    </>
  );
}

export default Map;
