import React from "react";
import { Btn } from "../atoms/btn";

const Card = ({ stylee, imageSource, category }) => {
  return (
    <div
      className={` w-full relative z-10  h-28 md:h-36 border-2 mt-16 mb-6 rounded  flex sm:px-4 bg-white text-black ${stylee}`}
    >
      <div className="my-auto">
        <img
          alt=""
          className="h-30 w-44 md:h-24  md:w-30 "
          src={imageSource}
        ></img>
      </div>
      <div className="text-center  w-full text-lg sm:text-xl my-auto">
        <h1 className="text-sm sm:text-xl">{category}</h1>
        <Btn stylee=" md:px-10 md:py-1 bg-black text-white"> للمزيد</Btn>
      </div>
    </div>
  );
};

export default Card;
