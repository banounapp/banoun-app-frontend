import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import Routes from './routing/Routes';
import { setAuthToken } from './services/auth';
// import { ToastContainer } from 'react-toastify';




const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);
  return (
         <Switch>
           <Route component={Routes} />
           {/* <ToastContainer /> */}
         </Switch>
   );
}
 
export default App;