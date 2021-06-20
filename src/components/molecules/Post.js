import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ text, imgsrc, name, title, id }) => {
  return (
    <div className="mt-5 border-2 py-4 px-2 md:p-4 shadow">
      <div className="block  sm:flex justify-between">
        <div className="flex">
          <div>
            <img
              className="w-14 h-18 sm:w-28 sm:h-20 rounded-circle"
              alt=""
              src={imgsrc}
            ></img>
          </div>
          <div className="text-xs md:text-xl">
            <h2>{name}</h2>
            <span className="text-gray-400">{title}</span>
          </div>
        </div>
      </div>
      <div className="text-xs px-2 md:text-xl mt-6">
        <p>{text}</p>
      </div>
      <Link to={`/DetailsPost/${id}`}>
        <button class=" text-sm  rounded   mt-4 px-3 sm:px-4  md:px-10 md:py-1 bg-black text-white">
          المزيد
        </button>
      </Link>
    </div>
  );
};
