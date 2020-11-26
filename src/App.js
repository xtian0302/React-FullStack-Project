import Container from "react-bootstrap/Container";
import React from "react";
import { useState } from "react";

import Splash from "./components/Splash";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [sideState, setSideState] = useState(true);

  return (
    <Router>
      <React.Fragment>
        <MyNavbar />
        <Container fluid>
          <Switch>
            <Route path="/" exact component={Splash} />
            <Route
              path="/Dash"
              exact
              component={() => (
                <Dashboard setSideState={setSideState} sideState={sideState} />
              )}
            />
            <Route path="/Register" exact component={Register} />
            <Route path="/Login" exact component={Login} />
          </Switch>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
