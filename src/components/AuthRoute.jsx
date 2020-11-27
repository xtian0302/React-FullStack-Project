import React from "react";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";

const AuthRoute = ({ children, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? children : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
