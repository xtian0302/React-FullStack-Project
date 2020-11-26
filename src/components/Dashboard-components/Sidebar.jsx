import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "../Dashboard-components/Sidebar.css";
import Link from "react-router-dom/Link";
import logo from "../../logo.svg";

const Sidebar = ({ setSideState, sideState }) => {
  const handleClick = () => {
    setSideState(false);
  };
  return (
    <>
      <div className="sidebar-heading">Your Dashboard</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={logo}
          className="App-logo "
          alt="logo"
          style={{
            width: 150,
            height: 150,
            margin: "auto",
          }}
        />
      </div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-tachometer-alt "></i>&nbsp; Dashboard
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-link "></i>&nbsp; Shortcuts
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-calendar-day "></i>&nbsp; Events
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-user "></i>&nbsp; Profile
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-light">
          <i className="fas fa-question-circle "></i>&nbsp; Status
        </a>
      </div>
      <div style={{ margin: 50, display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleClick}
          className="btn btn-outline-dark"
          style={{
            margin: 10,
            margin: "auto",
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
    </>
  );
};
export default Sidebar;
