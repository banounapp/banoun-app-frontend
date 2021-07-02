import React from "react";
import CalenderConsult from "../components/atoms/calenderConsult";
import Wave from "../components/atoms/waves";
import DoctorCard from "../components/organism/doctorcard";
import Footer from "../components/organism/footer";
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
      <CalenderConsult />
      <Wave stylee="mt-12" />
    </div>
  );
};

export default DoctorBooking;
