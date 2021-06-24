import React from "react";
import { Footer, HeaderConsult } from "../components/organism";
import Doctors from "../components/organism/doctors";
import NavBar from "../components/organism/NavBar";

import { Statics } from "../components/organism/statics";

const Consult = () => {
  return (
    <>
      <div className="bg-alabaster-500 ">
        <HeaderConsult />
        <Statics />
        <Doctors />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Consult;
