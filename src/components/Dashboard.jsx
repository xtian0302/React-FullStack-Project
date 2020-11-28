import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard-components/Sidebar.css";
import Sidebar from "./Dashboard-components/Sidebar";
import Main from "./Dashboard-components/Main";
import Events from "./Dashboard-components/Events";

const Dashboard = ({ setSideState, sideState }) => {
  const [page, setPage] = useState("main");
  const handleClick = () => {
    setSideState(!sideState);
  };
  return (
    <div className="d-flex" id="wrapper">
      <Row>
        <Col
          xs={3.5}
          id="sidebar-wrapper"
          className={`bg-light border-right  ${!sideState ? "hidden" : ""}`}
        >
          <Sidebar
            setSideState={setSideState}
            sideState={sideState}
            setPage={setPage}
          />
        </Col>
        {(() => {
          switch (page) {
            case "main":
              return <Main handleClick={handleClick} />;
            case "shortcuts":
              return (
                <Col id="page-content-wrapper">
                  <button
                    className="btn btn-outline-dark"
                    style={{ margin: 5 }}
                    onClick={handleClick}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <h1>Shortcuts</h1>
                </Col>
              );
            case "events":
              return <Events handleClick={handleClick} />;
            case "profile":
              return (
                <Col id="page-content-wrapper">
                  <button
                    className="btn btn-outline-dark"
                    style={{ margin: 5 }}
                    onClick={handleClick}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <h1>Profile</h1>
                </Col>
              );
            case "status":
              return (
                <Col id="page-content-wrapper">
                  <button
                    className="btn btn-outline-dark"
                    style={{ margin: 5 }}
                    onClick={handleClick}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <h1>Status</h1>
                </Col>
              );
            default:
              return <Main handleClick={handleClick} />;
          }
        })()}
      </Row>
    </div>
  );
};

export default Dashboard;
