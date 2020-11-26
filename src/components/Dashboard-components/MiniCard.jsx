import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MiniCard = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <h6 className="text-uppercase text-muted mb-2">Value</h6>
              <span className="h2 mb-0">$10000 </span>
              <span className="badge badge-success  m-auto">+10%</span>
            </Col>
            <div className="col-auto"></div>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MiniCard;
