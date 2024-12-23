import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/Login" />
      )
    }
  />
);

export default PrivateRoute;
