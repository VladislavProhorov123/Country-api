import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface ICountryMapProps {
  latlng: number[];
  name: string;
}

export default function CountryMap({ latlng, name }: ICountryMapProps) {
  return (
    <MapContainer
      center={[latlng[0], latlng[1]]}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%",  }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[latlng[0], latlng[1]]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}
