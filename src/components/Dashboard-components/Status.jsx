import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import axios from "axios";

const Status = ({ handleClick }) => {
  const [insult, setInsult] = useState([]);
  useEffect(() => {
    getInsult();
  }, []);

  const getInsult = async () => {
    await axios({
      method: "GET",
      url: "/getInsult",
    }).then(async (res) => {
      setInsult(res.data);
    });
  };

  return (
    <Col id="page-content-wrapper">
      <button
        className="btn btn-outline-dark"
        style={{ margin: 5 }}
        onClick={handleClick}
      >
        <i className="fas fa-bars"></i>
      </button>
      <span className="m-3">
        Disclaimer: The views and opinions expressed in this article are those
        of the authors/api and do not necessarily reflect the official policy or
        position of the owner of this site.
      </span>
      <hr />
      <br />
      <Card>
        <h1 style={{ fontFamily: "Impact", color: "red" }}> {insult}</h1>
      </Card>
    </Col>
  );
};
export default Status;
