import React from "react";
import { Card, Col } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const position = [51.505, -0.09];
  return (
    <Col>
      <Card>
        <Card.Header>Leaflet JS</Card.Header>
        <Card.Body>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: 250 }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Map;
