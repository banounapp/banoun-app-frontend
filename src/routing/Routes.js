import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RegisterConsulter from "../pages/registerConsulter";

// import PrivateRoute from "./privateRoute";

import Confirmation from "./../pages/confirmation";

import Application from "./../components/organism/Application"
import { InitializeData } from "./../services/auth";

const Routes = ({ dispatch }) => {
  useEffect(() => {
    InitializeData(dispatch);
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/registerCousulter" component={RegisterConsulter} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route  path="/" component={Application} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = (dispatch) => dispatch;
export default connect(mapDispatchToProps)(Routes);
