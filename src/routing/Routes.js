import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Login from "../pages/Login";
import RegisterConsulter from "../pages/registerConsulter";

// import PrivateRoute from "./privateRoute";

import Confirmation from "./../pages/confirmation";
import Events from "../pages/events";

import Loading from "../pages/loading";

// import Application from "./../components/organism/Application"

import Application from "./../components/organism/Application";
import { InitializeData } from "./../services/auth";


// import Postdoc from "../pages/Postdoc.js";
import ConfirmMsg from "../pages/confirmMsg";

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
        <Route exact path="/NotFound" component={Error} />
        <Route exact path="/loading" component={Loading} />

        <Route exact path="/confirmMsg" component={ConfirmMsg} />
        <Route exact path="/NotFound" component={Error} />
        <Route path="/" component={Application} />
      </Switch>
    </>
  );
};

const mapDispatchToProps = (dispatch) => dispatch;
export default connect(mapDispatchToProps)(Routes);
