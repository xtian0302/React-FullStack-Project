import React, { useEffect, useState } from "react";
import { Container, Card, Spinner } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const Cats = ({ handleClick }) => {
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    getCatData();
  }, []);

  const getCatData = async () => {
    let arr = [];
    for (let index = 0; index < 15; index++) {
      await axios({
        method: "GET",
        url: "https://aws.random.cat/meow",
      }).then(async (res) => {
        arr.push(res.data.file);
      });
    }
    setCatData(arr);
  };

  if (catData.length === 0)
    return (
      <Col>
        <br />
        <Card>
          <Card.Header>Chart</Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Col>
    );

  return (
    <Col id="page-content-wrapper">
      <button
        className="btn btn-outline-dark"
        style={{ margin: 5 }}
        onClick={handleClick}
      >
        <i className="fas fa-bars"></i>
      </button>
      <button
        className="btn btn-outline-dark"
        style={{ margin: 5 }}
        onClick={getCatData}
      >
        <i className="fas fa-redo"></i>
      </button>
      <span className="m-3">Cats...</span>
      <hr />
      <Container fluid>
        <Row>
          {catData.map((file) => {
            return (
              <Col>
                <Card
                  style={{ width: 250, height: 250, padding: 10, margin: 15 }}
                >
                  <img
                    src={file}
                    alt="cat"
                    style={{ width: 230, height: 230 }}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
        <br />
      </Container>
    </Col>
  );
};
export default Cats;
