import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./../../pages/HomePage";
import Category from "./../../pages/Category";
import BooksArticles from "./../../pages/booksArticles";
import Consult from "../../pages/consult";
import Profile from "./../../pages/profile";
// import PrivateRoute from "./privateRoute";
import Postdoc from "./../../pages/Postdoc";
import DetailsPost from "./../../pages/DetailsPost";
import DoctorBooking from "../../pages/DoctorBooking";
import DocProfile from "./../../pages/docprofile";
import NavBar from "./NavBar";
import Error from "./../../pages/Error";
import {Footer}  from '../../components/organism/footer'
import Community from './../../pages/Community';
import ReviewingDoctor from "./ReviewingDoctor";
const Application = () => {
  return (
    <>
      <NavBar />
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pregnacy/:id" component={Category} />
          <Route exact path="/sub/:catId/:subId" component={BooksArticles} />
          <Route exact path="/consult" component={Consult} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/posts" component={Postdoc} />
          <Route exact path="/DetailsPost/:id" component={DetailsPost} />
          <Route exact path="/doctorbooking/:id" component={DoctorBooking} />
          <Route exact path="/docprofile" component={DocProfile} />
          <Route exact path="/Community" component={Community} />
          <Route exact path="/ReviwingDoctor/:id" component={ReviewingDoctor} />


          <Redirect to="/NotFound"></Redirect>
        </Switch>
      </>
      <Footer />

    </>
  );
};

export default Application;
