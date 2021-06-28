import React from "react";
import { RightSideRegisterdoc } from "../components/organism";
import RegisterConsult from "./../components/organism/registerConsult";

const RegisterConsulter = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
      <RightSideRegisterdoc />
      <RegisterConsult />
    </div>
  );
};

export default RegisterConsulter;
