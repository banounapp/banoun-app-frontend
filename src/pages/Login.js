import React from 'react'
import {FormFieldLogin, LeftSideLogin} from '../components/organism'


 const Login = () => {
    return(
        <div className="grid md:grid-cols-1 lg:grid-cols-2   lg:gap-8 "> 
          <FormFieldLogin/>
          <LeftSideLogin/>
        </div>
    
         );
}
export default Login;