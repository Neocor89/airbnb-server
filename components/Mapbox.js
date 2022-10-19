import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Mapbox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    width: "100%",
    height: "100%",
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    initialViewState: {
      width: "100%",
      height: "100%",
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 11,
      container: "body",
    },
  });

  return (
    <Map
      mapStyle="mapbox://styles/bendevweb/cl9c1n8pb001l14numgpq9v21"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults.map((result) => (
        <div className="max-h-100%" key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            onDrag={false}
            position={result.long}
            offsetLeft={200}
            offsetRight={0}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="text-xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              className="bg-white"
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

export default Mapbox;
