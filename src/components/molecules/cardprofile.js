import React, { useEffect, useState } from "react";
import { ModalEditDoc } from "../atoms";
import { connect } from "react-redux";
import _ from "lodash";
const CardProfile = ({ specialist }) => {
  return (
    <>
      <div className=" bg-white border-2 border-gray-200 w-60 h-96 md:w-96 md:h-11/12 lg:w-60 lg:h-96 mr-10 lg:mr-0 rounded-lg shadow-lg mt-28  ">
        <div className="rounded-full h-32 w-32  bg-silver-tree-200 border-2 border-gray-200 m-auto  relative -top-16">
          <img
            src={`${
              specialist?.image?.filename
                ? `https://banoun-app.herokuapp.com/api/upload/show/${specialist.image.filename}`
                : "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }`}
            alt="profile pic"
            className="  rounded-full"
            style={{ overflow: "hidden", minWidth: "100%", minHeight: "100%", margin: "0px" }}
          />
        </div>

        <h2 className=" text-center relative -top-10 text-2xl"> {specialist?.username}</h2>
        <div className="relative -top-10 text-center">
          {specialist && _.times(specialist.rate, (i) => <i key={i} className="fas fa-star text-amber-500 fa-xs "></i>)}
        </div>
        <ul className=" relative -top-9 right-3 md:text-lg lg:text-sm text-gray-700">
          <ModalEditDoc />
          <li>
            <i class="fas fa-shopping-bag px-3 py-1"></i> {specialist?.job}{" "}
          </li>

          <li>
            {" "}
            <i class="fas fa-map-marker-alt px-3 py-1"></i> {specialist?.address}{" "}
          </li>
          <li>
            {" "}
            <i class="fas fa-venus-mars px-3 py-1"></i>
            {specialist?.gender}
          </li>
          <li>
            <i class="fas fa-dollar-sign px-3 py-1"></i>
            {specialist?.price}
          </li>
          <li>
            <i class="fas fa-phone-square-alt px-3 py-1"></i> {specialist?.phone}
          </li>
          {/* <li><i class="far fa-address-card px-3 py-1"></i> 2652569847694</li> */}

          <li>
            <span className="px-3 text-2xl ">@</span> {specialist?.email}{" "}
          </li>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  specialist: state.specialist.specialist_auth,
});

export default connect(mapStateToProps)(CardProfile);
