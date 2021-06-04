import React from "react";
import NavBar from "../components/organism/NavBar";
import Header from "../components/organism/Header";
import Section1 from "../components/organism/Section1";
import Section2 from "../components/organism/Section2";
import Section3 from "../components/organism/Section3";
import Section4 from "../components/organism/Section4";
import Section5 from "../components/organism/Section5";
import Section6 from "../components/organism/Section6";
import Footer from "../components/organism/footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
};

export default HomePage;
