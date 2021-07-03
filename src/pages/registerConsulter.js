import React from "react";
import { RightSideRegisterdoc } from "../components/organism";
import RegisterConsult from "./../components/organism/registerConsult";

const RegisterConsulter = () => {
  return (
    <div className=" flex justify-between ">
      <RightSideRegisterdoc />
      <RegisterConsult />
    </div>
  );
};

export default RegisterConsulter;
