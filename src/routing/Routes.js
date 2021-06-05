import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Pregnacy from './../pages/Pregnacy';

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/pregnacy" component={Pregnacy} />

      </Switch>
    </section>
  );
};

export default Routes;
