import React from "react";
import {
  Header,
 
  Section2,
  Section3,
  Section6,
} from "../components/organism";

import  Section1 from "../components/organism/Section1"

import Section4 from "../components/organism/Section4";
import Section5 from "../components/organism/Section5";


const HomePage = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
