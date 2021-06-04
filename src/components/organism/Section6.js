import React from "react";
import { Btn } from "../atoms/btn";

const Section6 = () => {
  return (
    <div className="bg-spring-rain-500 px-20  pb-20 mt-10 pt-4">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl md:text-4xl mb-4"> أستشير </h1>
      </div>

      {/* Video div */}
      <div className="block md:flex  justify-center ">
        <div className="sm:w-30 lg:w-2/3 rounded md:w-2/5 ">
          <img src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-online-doctor-consultation-image_2248276.jpg"></img>
        </div>

        <div className=" md:w-1/3 md:text-md bg-green  my-auto mx-1 space-y-6 lg:w-1/3  md:mx-20 text-center    ">
          <div>
            <div className="space-y-4">
              <h3 className="text-md mt-5 md:mt-0   md:text-xl lg:text-2xl  ">
                بنون يوفر لك التربية الحسنة في جميع الفئات العمرية في اي وقت وفي
                اي مكان
              </h3>
            </div>
          </div>
          <Btn stylee="px-10 py-3      text-white  rounded bg-gray-800">
            اعرف المزيد
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Section6;
