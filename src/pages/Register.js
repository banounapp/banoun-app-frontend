import React from 'react';
import { FormField, RightSideRegister } from '../components/organism'

const Register = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
      <RightSideRegister />
      <FormField />
    </div>

  );
}

export default Register
