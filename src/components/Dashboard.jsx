import React from "react";
import Link from "react-router-dom/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard-components/Sidebar.css";
import Sidebar from "./Dashboard-components/Sidebar";
import MiniCard from "./Dashboard-components/MiniCard";
import { Container } from "react-bootstrap";
import ChartBar from "./Dashboard-components/ChartBar";
const Dashboard = ({ setSideState, sideState }) => {
  const handleClick = () => {
    setSideState(!sideState);
  };
  return (
    <div className="d-flex" id="wrapper">
      <Row>
        <Col
          xs={3.5}
          id="sidebar-wrapper"
          className={`bg-light border-right ${!sideState ? "fadeout" : ""} ${
            !sideState ? "hidden" : ""
          }`}
        >
          <Sidebar setSideState={setSideState} sideState={sideState} />
        </Col>
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
              <ChartBar />
              <MiniCard />
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
