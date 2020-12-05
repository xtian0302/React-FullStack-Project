import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import MyNavbar from "./components/MyNavbar";
import AuthRoute from "./components/AuthRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [sideState, setSideState] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [username, setUsername] = useState("");

  const checkUserAuth = async () => {
    await axios({
      method: "GET",
      withCredentials: true,
      url: "/getUser",
    }).then((res) => {
      if (res.data) {
        setIsAuthorized(true);
        setUsername(res.data.username);
      } else {
        setIsAuthorized(false);
        setUsername("");
      }
      console.log(res.data);
    });
  };

  useEffect(() => {
    async function fetchData() {
      await checkUserAuth();
    }
    fetchData();
  }, []);

  return (
    <Router>
      <React.Fragment>
        <MyNavbar
          username={username}
          setUsername={setUsername}
          setIsAuthorized={setIsAuthorized}
          isAuthorized={isAuthorized}
        />

        <Switch>
          <AuthRoute exact isAuthorized={isAuthorized} path="/Dash">
            <Dashboard setSideState={setSideState} sideState={sideState} />
          </AuthRoute>
          <Route path="/" exact component={() => <Splash />} />
          <Route
            path="/Register"
            exact
            component={() => <Register isAuthorized={isAuthorized} />}
          />
          <Route
            path="/Login"
            exact
            component={() => (
              <Login
                setUsername={setUsername}
                setIsAuthorized={setIsAuthorized}
                isAuthorized={isAuthorized}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
