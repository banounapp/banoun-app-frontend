import React from "react";
import { Btn } from "../atoms";
import { Link } from 'react-router-dom';


export const Section6 = () => {
  return (
    <div className="bg-spring-rain-300  md:px-32  pb-20 mt-10 pt-4" id='consult'>
      <div className="flex mb-8  mt-5">
          <div class="w-9  overflow-hidden inline-block">
            <div class=" h-12  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-3xl md:text-4xl mb-4"> استشير </h1>
        </div>

      {/* Video div */}
      <div className="block md:flex  justify-center " >
        <div className="sm:w-30 lg:w-2/5 rounded md:w-2/5 ">
          <img src="images/img.png"></img>
        </div>

        <div className=" md:w-1/3 md:text-md bg-green  my-auto mx-1 space-y-6 lg:w-1/3  md:mx-20 text-center    ">
          <div>
            <div className="space-y-4">
              <h3 className="text-md mt-5 md:mt-0 p-5  md:text-xl lg:text-xl  text-right">
                <span className=" text-silver-tree block text-3xl  lg:text-6xl py-1 ">بنون</span>
                 يوفر لك التربية الحسنة في جميع الفئات العمرية في اي وقت وفي
                اي مكان
              </h3>
            </div>
          </div>
           <Link to="/consult" >
           <Btn stylee="px-10 py-3 text-white  rounded bg-gray-800 w-32">
            اعرف المزيد
          </Btn>
           </Link>
         
        </div>
      </div>
    </div>
  );
};


