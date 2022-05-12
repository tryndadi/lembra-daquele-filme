import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import RegisterPage from "../pages/register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LandingPage} path="/" exact />
        <Route component={RegisterPage} path="/register" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
