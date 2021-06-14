import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Category from './../pages/Category';


const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pregnacy/:id" component={Category} />


      </Switch>
    </section>
  );
};

export default Routes;
