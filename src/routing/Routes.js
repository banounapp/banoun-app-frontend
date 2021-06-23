import React,{useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RegisterConsulter from "../pages/registerConsulter";
import HomePage from "./../pages/HomePage";
import Category from "./../pages/Category";
import BooksArticles from "./../pages/booksArticles";
import Consult from "../pages/consult";
import Profile from "./../pages/profile";
// import PrivateRoute from "./privateRoute";
import Postdoc from "./../pages/Postdoc";
import DetailsPost from "./../pages/DetailsPost";
import LoginConsulter from "./../pages/LoginConsulter";
import DoctorBooking from "../pages/DoctorBooking";
import Confirmation from './../pages/confirmation';
import DocProfile from './../pages/docprofile';
import {InitializeData} from "./../services/auth"
const Routes = ({dispatch}) => {
  useEffect(() => {
    InitializeData(dispatch);
  },[]);
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pregnacy/:id" component={Category} />
        <Route exact path="/sub/:catId/:subId" component={BooksArticles} />
        <Route exact path="/consult" component={Consult} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/RegisterCousulter" component={RegisterConsulter} />
        <Route exact path="/loginConsulter" component={LoginConsulter} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/posts" component={Postdoc} />
        <Route exact path="/DetailsPost/:id" component={DetailsPost} />
        <Route exact path="/doctorbooking/:id" component={DoctorBooking} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route  exact path="/docprofile" component ={DocProfile}/>


      </Switch>
    </section>
  );
};

const mapDispatchToProps = (dispatch)=>dispatch;
export default connect(mapDispatchToProps)(Routes);
