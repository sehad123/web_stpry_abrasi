import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import stuntingData from "../data/stuntingData";

const MapComponent = () => {
  return (
    <MapContainer center={[-2.5, 117.5]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stuntingData.map((location) => (
        <Marker key={location.id} position={location.coordinates}>
          <Popup>
            <strong>{location.province}</strong> <br />
            Kasus Stunting: {location.cases}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
