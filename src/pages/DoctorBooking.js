import React from "react";
import Calender from "../components/atoms/calender";
import Wave from "../components/atoms/waves";
import DoctorCard from "../components/organism/doctorcard";
import NavBar from "../components/organism/NavBar";
import Reviews from "../components/organism/reviews";

const DoctorBooking = () => {
  return (
    <div className="bg-silver-tree-100">
      <Wave stylee="mt-12 left-0" />
      <DoctorCard />
      <Wave />
      <Reviews />
      <Wave stylee="mt-12 left-0" />
      <Calender />
      <Wave stylee="mt-12" />
    </div>
  );
};

export default DoctorBooking;
