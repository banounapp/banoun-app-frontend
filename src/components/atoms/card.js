import React from "react";
import { Link, Redirect } from "react-router-dom";

export const Card = ({
  stylee,
  imageSource,
  category,
  des,
  link,
  sub_category,
  sub_id,
}) => {
  return (
    <div
      className={` w-full shadow-lg text-center mx-2 border-2 mt-16 mb-6 rounded   sm:px-4 bg-white text-black ${stylee}`}
    >
      <div className="my-auto mb-4 ">
        <img
          alt=""
          className="h-30 mx-auto circle w-44 md:h-24  md:w-30 "
          src={imageSource}
        ></img>
      </div>
      <div className="text-center mb-4 w-full text-lg sm:text-xl my-auto">
        {/* <Link to={link} className="text-sm sm:text-xl text-silver-tree">
          {category}
        </Link> */}
        <Link
          className="text-sm sm:text-xl text-silver-tree"
          to={{
            pathname: { link },
            state: { sub_category: sub_category, sub_id: sub_id },
          }}
        >
          {/* {category} */}
        </Link>
        <Link to={link} className="text-sm mb-4 sm:text-xl text-silver-tree">
          {category}
        </Link>
        <p className="text-sm sm:text-lg mt-4 px-1">{des}</p>
      </div>
    </div>
  );
};
