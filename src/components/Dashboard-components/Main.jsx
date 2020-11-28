import React from "react";
import MiniCard from "./MiniCard";
import { Container } from "react-bootstrap";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";
import ChartRadar from "./ChartRadar";
import Map from "./Map";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Main = ({ handleClick }) => {
  return (
    <Col id="page-content-wrapper">
      <button
        className="btn btn-outline-dark"
        style={{ margin: 5 }}
        onClick={handleClick}
      >
        <i className="fas fa-bars"></i>
      </button>
      <span className="m-3">Welcome to your Dashboard</span>
      <button
        className="btn btn-outline-dark float-right"
        style={{ margin: 5 }}
      >
        Generate Report&nbsp;
        <i className="far fa-chart-bar"></i>
      </button>
      <hr />
      <Container fluid>
        <Row>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </Row>
        <br />
        <Row>
          <ChartBar lg={8} />
          <ChartPie lg={4} />
        </Row>
        <hr />
        <Row>
          <Map />
          <ChartRadar />
        </Row>
        <hr />
        <Row></Row>
      </Container>
    </Col>
  );
};
export default Main;
