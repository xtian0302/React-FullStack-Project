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
import { Redirect } from "react-router-dom";

const Login = ({ setIsAuthorized, isAuthorized, setUsername }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      credentials: "include",
      url: "/login",
    })
      .then(async (res) => {
        console.log("Login Success");
        if (res.status === 200) {
          await axios({
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            url: "/getUser",
          })
            .then((res) => {
              if (res.data) {
                setIsAuthorized(true);
                setUsername(res.data.username);
              }
              console.log(res.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  switch (isAuthorized) {
    case true:
      return <Redirect to="/Dash" />;
    default:
      return (
        <Row>
          <Col></Col>
          <Col>
            <Card className="m-2">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                  <Nav.Item>
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>Please Enter Your Credentials Below :</Card.Title>
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
                        onChange={(e) => setLoginUsername(e.target.value)}
                      />
                    </InputGroup>
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
                        placeholder="Enter Password"
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me?" />
                  </Form.Group>
                  <div className="float-right">
                    <Button variant="primary" onClick={handleLogin}>
                      Login
                    </Button>
                    &nbsp;
                    <a href="#">
                      <Button variant="secondary">Forgot Password</Button>
                    </a>
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

export default Login;
