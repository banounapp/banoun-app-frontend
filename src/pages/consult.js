import React from "react";
import { HeaderConsult } from "../components/organism";
import Doctors from "../components/organism/doctors";
import Footer from "../components/organism/footer";
import NavBar from "../components/organism/NavBar";

import { Statics } from "../components/organism/statics";

const Consult = () => {
  return (
    <>
      <div className="bg-alabaster-500 ">
        <HeaderConsult />
        <Statics />
        <Doctors />
        <Footer />
      </div>
    </>
  );
};

export default Consult;
