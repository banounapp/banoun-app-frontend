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
      className={` w-11/12 shadow-lg h-28 lg:h-72 mx-2 md:h-36 border-2 mt-16 mb-6 rounded  flex sm:px-4 bg-white text-black  overflow-auto mr-5  lg:p-4${stylee}`}
    >
      <div className="text-center  w-full text-lg sm:text-xl my-auto">
        {/* <Link to={link} className="text-sm sm:text-xl text-silver-tree">
          {category}
        </Link> */}
        <Link
          className="text-sm sm:text-xl text-silver-tree "
          to={{
            pathname: { link },
            state: { sub_category: sub_category, sub_id: sub_id },
          }}
        >
          {/* {category} */}
        </Link>
        <Link to={link} className="text-sm sm:text-xl text-silver-tree mt-6">
          {category}
        </Link>
        <h3
          className="text-sm sm:text-md p-3 "
          style={{ wordSpacing: 2, lineHeight: 2, width: 400 }}
        >
          {des}
        </h3>
      </div>
      <div className="my-auto ">
        <img
          alt=""
          className="h-30 w-44 md:h-24  md:w-30 "
          src={imageSource}
        ></img>
      </div>
    </div>
  );
};
