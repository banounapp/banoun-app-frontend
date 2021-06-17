import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RegisterConsulter from "../pages/registerConsulter";
import HomePage from './../pages/HomePage';

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/RegisterCousulter" component={RegisterConsulter} />
        {/* <Route path="/RegisterCousulter" component={RegisterConsulter} /> */}


      </Switch>
    </section>
  );
};

export default Routes;
