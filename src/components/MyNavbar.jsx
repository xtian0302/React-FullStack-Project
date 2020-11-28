import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";
import axios from "axios";
import logo from "../logo.svg";

const MyNavbar = ({ setIsAuthorized, isAuthorized, username, setUsername }) => {
  const handleLogout = async () => {
    await axios({
      method: "GET",
      withCredentials: true,
      url: "http://10.11.140.16:4000/logout",
    }).then((res) => {
      if (res.data) {
        setIsAuthorized(false);
        setUsername("");
      }
    });
  };

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
            {(() => {
              if (isAuthorized) {
                return (
                  <React.Fragment>
                    <Navbar.Text>Welcome {username} </Navbar.Text> &nbsp;
                    <Link to="/Dash" className="nav-link">
                      <i className="fas fa-tachometer-alt"></i> Dashboard
                    </Link>
                    <Nav.Link onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt"></i> Log Out
                    </Nav.Link>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment>
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </React.Fragment>
                );
              }
            })()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
