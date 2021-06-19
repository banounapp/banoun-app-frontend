import React from "react";
import { FormFieldLogin1, LeftSideLogin } from "../components/organism";

const LoginConsulter = () => {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
            <FormFieldLogin1 />
            <LeftSideLogin />
        </div>
    );
};
export default LoginConsulter;
