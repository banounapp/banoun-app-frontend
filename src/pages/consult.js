import React,{useEffect} from "react";
import { HeaderConsult } from "../components/organism";
import Doctors from "../components/organism/doctors";
import {Footer} from "../components/organism/footer";
import NavBar from "../components/organism/NavBar";
import {useScrollToTop} from "../customHooks/window"

import { Statics } from "../components/organism/statics";

const Consult = () => {
  useScrollToTop()
  return (
    <div style={{minHeight:"100vh"}} >
      <div className="bg-alabaster-500 ">
        <HeaderConsult />
        <Statics />
        <Doctors />
      </div>
    </div>
  );
};

export default Consult;
