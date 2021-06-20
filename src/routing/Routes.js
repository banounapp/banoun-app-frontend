import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import RegisterConsulter from '../pages/registerConsulter';
import HomePage from './../pages/HomePage';
import Category from './../pages/Category';
import BooksArticles from './../pages/booksArticles';
import Consult from '../pages/consult';
import Profile from './../pages/profile';
import EditProfile from './../pages/EditProfile';
import PrivateRoute from './privateRoute';
const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path='/pregnacy/:id' component={Category} />
        <Route exact path='/sub/:catId/:subId' component={BooksArticles} />
        <Route exact path='/consult' component={Consult} />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/RegisterCousulter' component={RegisterConsulter} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/editprofile' component={EditProfile} />
      </Switch>
    </section>
  );
};

export default Routes;
