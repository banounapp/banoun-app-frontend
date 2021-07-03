import React from "react";
import { Btn } from "../atoms";
import {Link } from "react-router-dom"
export const Card = ({ stylee, imageSource, category, des  , route }) => {
  return (
    <Link
      className={` w-full h-28 md:h-36 lg:h-44 border-2 mt-16 mb-6 rounded  flex sm:px-4 bg-white text-black ${stylee}`}
      to = {route}
    >
      <div className="my-auto">
        <img
          alt="pic"
          className="h-20 w-32 md:h-24  md:w-30 lg:w-36 lg:h-28"
          src={imageSource}
        ></img>
      </div>
      <div className="text-center  w-full text-lg sm:text-xl my-auto">
        <h1 className="text-sm sm:text-xl">{category}</h1>
        <h3 className="text-sm sm:text-xl">{des}</h3>

        <Btn stylee=" md:px-10 md:py-1 bg-black text-white"> للمزيد</Btn>
      </div>
    </Link>
  );
};


