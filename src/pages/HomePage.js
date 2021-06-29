import React from "react";
import NavBar from '../components/organism/NavBar';
import {
  Header,
  Section1,
  Section2,
  Section3,
  Section5,
  Section6,
  // Footer
} from "../components/organism";
import Section4 from "../components/organism/Section4";

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
