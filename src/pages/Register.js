import React from 'react';
import {FormField, RightSideRegister} from '../components/organism'

const Register = () => {
return(
    <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-8 ">
      <RightSideRegister/>
      <FormField/>
    </div>

     );
}

export default Register
