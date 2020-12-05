import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Spinner } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const [posData, setPosData] = useState({});

  useEffect(() => {
    getPosData();
  }, []);

  const getPosData = async () => {
    await axios({
      method: "GET",
      url: "/getMapPosition",
    }).then((res) => {
      setPosData({
        zoom: res.data.zoom,
        position: res.data.position,
        label: res.data.label,
      });
    });
  };
  if (Object.keys(posData).length !== 0) {
    return (
      <Col>
        <Card>
          <Card.Header>Leaflet JS</Card.Header>
          <Card.Body>
            <MapContainer
              center={posData.position}
              zoom={posData.zoom}
              scrollWheelZoom={true}
              style={{ height: 250 }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={posData.position}>
                <Popup>{posData.label}</Popup>
              </Marker>
            </MapContainer>
          </Card.Body>
        </Card>
      </Col>
    );
  } else {
    return (
      <Col>
        <Card>
          <Card.Header>Leaflet JS</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Col>
    );
  }
};

export default Map;
