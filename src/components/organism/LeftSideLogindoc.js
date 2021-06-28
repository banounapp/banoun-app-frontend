import React from "react";
import { Button } from "../atoms/button";
import { Link } from "react-router-dom";

export const LeftSideLogindoc = () => {
  return (
    <div className="bg-silver-tree lg:h-screen hidden md:hidden lg:inline-block lg:rounded-br-full">
      <div className="panel right-panel ">
        <div className="text-white text-center lg:my-40 ">
          <h3 className=" lg:text-3xl mt-5 "> ليس لديك حساب؟</h3>
          <p className="  lg:text-xl mt-5 mb-5">
            اذا كان ليس لديك حساب تفضل بانشاء حساب وانضم لعائله بنون{" "}
          </p>
          <Link to="/RegisterCousulter">
            <Button
              stylee=" border-solid border-2  
          border-light-white-500 text-gray-50 "
            >
              {" "}
              انشاء حساب{" "}
            </Button>
          </Link>
          <img src="images/baby.png" className="relative right-20" alt="" />
        </div>
      </div>
    </div>
  );
};
