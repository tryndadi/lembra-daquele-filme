import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/register";

const Routes = () => {
  return (
    <Switch>
      <Route component={LandingPage} path="/" exact />
      <Route component={RegisterPage} path="/register" />
    </Switch>
  );
};

export default Routes;
