import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

const Routes = () => {
  return (
    <Switch>
      <Route component={LandingPage} path="/" exact />
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={Dashboard} path="/dashboard" />
    </Switch>
  );
};

export default Routes;
