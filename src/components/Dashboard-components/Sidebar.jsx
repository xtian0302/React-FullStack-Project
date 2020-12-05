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
  const catClick = () => {
    setPage("cat");
  };
  const statusClick = () => {
    setPage("status");
  };
  const eventsClick = () => {
    setPage("events");
  };
  const covidClick = () => {
    setPage("covid");
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
        <button
          className="list-group-item list-group-item-action bg-light"
          onClick={mainClick}
        >
          <i className="fas fa-tachometer-alt "></i>&nbsp; Dashboard
        </button>
        <button
          className="list-group-item list-group-item-action bg-light"
          onClick={covidClick}
        >
          <i className="fas fa-user-nurse"></i>&nbsp; CoVid API
        </button>
        <button
          className="list-group-item list-group-item-action bg-light"
          onClick={eventsClick}
        >
          <i className="fas fa-calendar-day "></i>&nbsp; Events
        </button>
        <button
          className="list-group-item list-group-item-action bg-light"
          onClick={catClick}
        >
          <i className="fas fa-cat "></i>&nbsp; Pictures of Cats
        </button>
        <button
          className="list-group-item list-group-item-action bg-light"
          onClick={statusClick}
        >
          <i className="fas fa-question-circle "></i>&nbsp; Hurt Yourself
        </button>
      </div>
      <div style={{ margin: 50, display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleClick}
          className="btn btn-outline-dark"
          style={{
            margin: 10,
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <br />
    </>
  );
};
export default Sidebar;
