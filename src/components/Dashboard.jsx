import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard-components/Sidebar.css";
import Sidebar from "./Dashboard-components/Sidebar";
import Main from "./Dashboard-components/Main";
import Events from "./Dashboard-components/Events";
import Cats from "./Dashboard-components/Cats";
import Covid from "./Dashboard-components/Covid";
import Status from "./Dashboard-components/Status";
import axios from "axios";

const Dashboard = ({ setSideState, sideState }) => {
  const [page, setPage] = useState("main");

  const [joke, setJoke] = useState("");

  useEffect(() => {
    getDadJoke();
  }, []);

  const getDadJoke = async () => {
    await axios({
      method: "GET",
      url: "https://icanhazdadjoke.com/",
      headers: {
        Accept: "text/plain",
      },
    }).then((res) => {
      setJoke(res.data);
    });
  };
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
            case "covid":
              return <Covid handleClick={handleClick} />;
            case "events":
              return <Events handleClick={handleClick} />;
            case "cat":
              return <Cats handleClick={handleClick} />;
            case "status":
              return <Status handleClick={handleClick} />;
            default:
              return <Main handleClick={handleClick} />;
          }
        })()}
        <span style={{ position: "fixed", bottom: 0, right: 0, zIndex: 1000 }}>
          {joke} &nbsp;&nbsp;&nbsp;
        </span>
      </Row>
    </div>
  );
};

export default Dashboard;
