import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import Watched from "../pages/Watched";
import WishList from "../pages/wishlist";


const Routes = () => {
  return (
    <Switch>
      <Route component={LandingPage} path="/" exact />
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Watched} path="/watched" />
      <Route component={WishList} path="/wishlist" />

    </Switch>
  );
};

export default Routes;
