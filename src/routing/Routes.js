import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Category from './../pages/Category';
import BooksArticles from './../pages/booksArticles';
import Consult from './../pages/consult';


const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pregnacy/:id" component={Category} />
        <Route exact path="/sub/:catId/:subId" component={BooksArticles} />
        <Route exact path="/consult" component={Consult} />






      </Switch>
    </section>
  );
};

export default Routes;
