import React from "react";
import NavBar from '../components/organism/NavBar';
import {Footer}  from '../components/organism/footer'
import {
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
 
} from "../components/organism";


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
