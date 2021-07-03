import React from "react";
import { Button } from "../atoms/button";
import { Link } from "react-router-dom";

export const RightSideRegisterdoc = () => {
  return (
    <div className="bg-silver-tree lg:h-screen hidden md:hidden lg:inline-block lg:rounded-bl-full  lg:w-3/12 ">
      <div className="panel right-panel ">
        <div className="text-white text-center  lg:my-40 ">
          <h3 className=" lg:text-3xl mt-5 "> لديك حساب ؟</h3>
          <p className="  lg:text-xl mt-5 mb-5">
            اذا كان لديك حساب تفضل بالدخول لعائله بنون{" "}
          </p>

          <Link to="/loginConsulter">
            <Button
              stylee=" border-solid border-2  
          border-light-white-500 text-gray-50 "
            >
              {" "}
              تسجيل دخول{" "}
            </Button>
          </Link>

          <img
            src="images\Group.png"
            className=" relative right-60 top-8 "
            alt=""
            style={{
              width: "600px",
              height: "300px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
