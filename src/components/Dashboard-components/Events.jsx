import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Events = ({ handleClick }) => {
  return (
    <Col id="page-content-wrapper">
      <button
        className="btn btn-outline-dark"
        style={{ margin: 5 }}
        onClick={handleClick}
      >
        <i className="fas fa-bars"></i>
      </button>
      <span className="m-3">Plan Your Events Here </span>
      <hr />
      <Container fluid>
        <Row>
          <Col>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
            />
          </Col>
        </Row>
        <br />
      </Container>
    </Col>
  );
};
export default Events;
