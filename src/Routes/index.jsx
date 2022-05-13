import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Card from "../components/moviesSlider";

const Routes = () => {
  return (
    <Switch>
      <Route component={Card} path="/" exact />
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
    </Switch>
  );
};

export default Routes;
