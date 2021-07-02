import React from "react";
import { Btn } from "../atoms";

export const Section5 = () => {
  return (
    <div className="mt-10 px-8 md:px-32 mb-20 mt-20">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
      <div className="flex">
          <div class="w-9  overflow-hidden inline-block">
            <div class=" h-12  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-3xl md:text-4xl "> اترك تعليقك </h1>
        </div>
      </div>

      {/*  */}
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div > <img src="images/Review.png" className=" w-12/12 h-96 -mt-10"/></div>
      <div className="mt-16 border-2 py-4 px-4 md:p-4 shadow w-12/12 h-56 lg:h-44 m-5">
      <div className=" w-16 h-16 bg-white rounded-full -mt-14 m-auto">
        <img src="images/pro.png" className="rounded-full w-10 h-12 m-auto"/>
      </div>
      <p className="mr-16 lg:mr-52">عمر صابر</p>
      <p className="mr-12 lg:mr-44"> omar@gmail.com</p>
      <input type=" text" placeholder=" اترك تعليقك..." className="mr-5"/>

    <div className=" lg:flex">
    <div className="text-gray mt-2 mt-5  md:ml-10 mr-5 lg:mt-4 flex">
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 text-gold fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
    <i className="fas fa-star hover:text-tahuna-sands-800 px-1 fa-xs sm:text-lg"></i>
  </div>
  <div ><Btn stylee="mt-10 mr-10 lg:mt-2 lg:mr-20 bg-black text-white rounded w-20 h-10">ارسال</Btn></div>
    </div>
     
    </div>
      
    </div>
    </div>
  );
};


