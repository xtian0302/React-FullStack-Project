import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Register = ({ isAuthorized }) => {
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register",
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setRegistrationStatus(true);
      }
    });
  };
  switch (registrationStatus || isAuthorized) {
    case true:
      return (
        <Row>
          <Col></Col>
          <Col>
            <Card className="m-2">
              <Card.Header>Registration Successfull!</Card.Header>
              <Card.Body>
                <p>
                  Thanks for registering, you may now log in to your user
                  account!
                </p>
                <Link to="/login" className="btn btn-primary">
                  Log In
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      );
    default:
      return (
        <Row>
          <Col></Col>
          <Col>
            <Card className="m-2">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/register" className="nav-link active">
                      Register
                    </Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>Please Enter Required Information :</Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          <i className="fas fa-envelope"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setRegisterUsername(e.target.value)}
                      />
                    </InputGroup>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                          <i className="fas fa-key"></i>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setRegisterPassword(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="float-right">
                    <Button variant="primary" onClick={handleRegistration}>
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      );
  }
};

export default Register;
