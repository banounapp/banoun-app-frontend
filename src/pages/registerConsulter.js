import React from 'react';
import { RightSideRegister } from '../components/organism'
import RegisterConsult from './../components/organism/registerConsult';


const RegisterConsulter = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            <RightSideRegister />
            <RegisterConsult />
        </div>

    );
}

export default RegisterConsulter
