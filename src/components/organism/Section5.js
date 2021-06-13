import React from "react";
import { Btn } from "../atoms";

export const Section5 = () => {
  return (
    <div className="mt-10 px-8 md:px-32 mb-20 mt-20">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl md:text-4xl mb-4"> اترك تعليقك </h1>
      </div>

      {/*  */}
      <div className="relative border-2 pb-3 px-6 w-4/5 mx-auto md:w-2/3">
        <div className="text-center mx-auto">
          <div className="relative h-4 sm:h-10">
            <img
              className="absolute  rounded-full left-auto mx-auto  bottom-2 sm:bottom-4 left-6  w-12 h-12  sm:w-20 sm:h-20"
              alt=""
              src="https://pbs.twimg.com/media/Ea6FcyhXsAEAt8c.jpg"
            ></img>
          </div>
          <div>
            <p>عمر صابر</p>
            <p className="text-sm sm:text-md text-gray-400">عمر صابر@</p>
          </div>
        </div>
        <p className="text-gray text-sm sm:text-md mt-6">اترك تعليقك...</p>
        <div className="h-14">
          <div className="flex  justify-between mt-6">
            <div className="text-gray mt-2 sm:mt-0  md:ml-10 ">
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 fa-xs sm:text-lg"></i>
              <i className="fas fa-star hover:text-tahuna-sands-800 px-0 sm:px-1 fa-xs sm:text-lg"></i>
            </div>
            <div>
              <Btn stylee="px-2 md:px-6 mx-auto ml-0 sm:ml-10 py-1 bg-gray-800 text-white text-sm md:text-lg  mt-2 rounded ">
                أرسال
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


