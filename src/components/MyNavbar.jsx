import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";
import logo from "../logo.svg";

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <img
          src={logo}
          className="App-logo m-0 p-0"
          alt="logo"
          style={{ width: 30, height: 30 }}
        />
        <Link to="/" className="navbar-brand">
          React-Client
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/Dash" className="nav-link">
              Dash Temp
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
