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
      className={` w-full shadow-lg h-44 mx-1  lg:w-5/12 ml-10   md:h-44 border-2 mt-16 mb-6 rounded  flex  bg-white text-black md:w-full sm:w-full   ${stylee}` } 
    style={{ overflow: "hidden"  }}
    >
      <div className="text-center  w-full text-lg sm:text-xl my-auto   relative">
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
        <Link to={link} className="text-sm sm:text-xl text-silver-tree">
          {category}
        </Link>
        <h3 className="text-sm sm:text-md p-4 pt-5">{des.slice(0,80)}...</h3>
        {/* <Link style={{width:"40%", height:"30%",position:"absolute" , top:"80%",left:"30%" , background:"#77BFA3" ,color:"white",fontSize:".8rem"}}>اعرض المزيد</Link> */}
      </div>
      <div className="my-auto md:w-10  " style={{ width: "40%", height: "80%", marginLeft: "10%" }}
      >
        <img
          alt=""
          src={imageSource}
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
    </div>
  );
};