import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  
  const center = getCenter(coordinates);
  
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/johnvsjohn86/cl4youkqd000214tdm3gpp54e"
      mapboxAccessToken={process.env.REACT_MAPBOX_KEY}
      {...viewport}
      onMove={(e) => setViewport(e.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat} offsetTop={-10}>
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-pulse"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {
            selectedLocation && selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation()}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )
          }
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
