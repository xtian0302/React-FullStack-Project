import React from "react";
import "../Dashboard-components/Sidebar.css";
import logo from "../../logo.svg";

const Sidebar = ({ setSideState, sideState, setPage }) => {
  const handleClick = () => {
    setSideState(false);
  };
  const mainClick = () => {
    setPage("main");
  };
  const profileClick = () => {
    setPage("profile");
  };
  const statusClick = () => {
    setPage("status");
  };
  const eventsClick = () => {
    setPage("events");
  };
  const shortcutsClick = () => {
    setPage("shortcuts");
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
        <a
          className="list-group-item list-group-item-action bg-light"
          onClick={mainClick}
        >
          <i className="fas fa-tachometer-alt "></i>&nbsp; Dashboard
        </a>
        <a
          className="list-group-item list-group-item-action bg-light"
          onClick={shortcutsClick}
        >
          <i className="fas fa-link "></i>&nbsp; Shortcuts
        </a>
        <a
          className="list-group-item list-group-item-action bg-light"
          onClick={eventsClick}
        >
          <i className="fas fa-calendar-day "></i>&nbsp; Events
        </a>
        <a
          className="list-group-item list-group-item-action bg-light"
          onClick={profileClick}
        >
          <i className="fas fa-user "></i>&nbsp; Profile
        </a>
        <a
          className="list-group-item list-group-item-action bg-light"
          onClick={statusClick}
        >
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
