import Container from "react-bootstrap/Container";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import MyNavbar from "./components/MyNavbar";
import AuthRoute from "./components/AuthRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [sideState, setSideState] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const checkUserAuth = async () => {
    await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getUser",
    }).then((res) => {
      if (res.data) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
      console.log(res.data);
    });
  };

  useEffect(async () => {
    await checkUserAuth();
  }, []);

  return (
    <Router>
      <React.Fragment>
        <MyNavbar setIsAuthorized={setIsAuthorized} />
        <Container fluid>
          <Switch>
            <AuthRoute exact isAuthorized={isAuthorized} path="/Dash">
              <Dashboard setSideState={setSideState} sideState={sideState} />
            </AuthRoute>
            <Route path="/" exact component={() => <Splash />} />
            <Route path="/Register" exact component={Register} />
            <Route
              path="/Login"
              exact
              component={() => (
                <Login
                  setIsAuthorized={setIsAuthorized}
                  isAuthorized={isAuthorized}
                />
              )}
            />
          </Switch>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
