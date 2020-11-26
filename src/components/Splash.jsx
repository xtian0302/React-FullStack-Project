import React from "react";
import Card from "react-bootstrap/Card";
import Link from "react-router-dom/Link";

const Splash = () => {
  return (
    <div>
      <Card className="m-2">
        <Card.Header>Page youll be in when not logged iun</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>

          <Link to="/register" className="btn btn-primary">
            Register Now!
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Splash;
