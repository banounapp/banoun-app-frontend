import React from "react";

export const DateOfline = ({ clientname, caseattend, date, linkdate }) => {
  return (
    <>
      {/* <a href="#">
   <div className=" bg-spring-rain-600 w-10 h-10 absolute  left-1 -mt-5  md:left-3 md:-mt-5 lg:left-20 lg:-mt-5 rounded-full " >
   <i className="fas fa-times text-white text-center px-4 py-3"></i>
   </div>
   </a> */}

      <div
        className="rounded-lg mt-5 bg-silver-tree-300 lg:w-11/12 lg:h-32 text-base md:text-xl lg:text-lg"
        style={{ background: "rgb(227, 241, 226)",width:"93%" }}
      >
        <div className=" lg:flex justify-between px-10 py-10">
          <div>
            <p className="lg:text-lg">{clientname}</p>
            <p className="lg:text-lg text-amber-500">{caseattend}</p>
          </div>
          <div>
            <p className="lg:text-lg text-left " style={{ fontFamily: "Arial" }}>
              {date}
            </p>
            <a href="#" className="lg:text-lg text-blue-500 text-left">
              {linkdate}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
