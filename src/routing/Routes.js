import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';


const Routes = props => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </section>
  );
};

export default Routes;
