import React from 'react';
import { VideoEvent } from '../atoms';

export const LastEvent = () => {
  return (
   <>
  <div>
        
      <div className="bg-silver-tree-600 w-full h-16 rounded-lg">
          <p className="text-gray-700 relative top-5 right-5 text-2xl">احداث سابقه</p>
      </div>
      <div className=" lg:flex justify-between">
        <div className=" border-2 border-gray-300 w-12/12 lg:w-6/12 h-16  text-spring-rain-500 ">
        <a href="#">
        <i className="fas fa-bars mr-5 mt-5"></i>
        <span className="mr-3">عرض القائمه</span>
        </a>
        </div>
        <div className=" border-2 border-gray-300 w-12/12 lg:w-6/12 h-16 mt-2 lg:mt-0">
       <a href="#">
       <i className="fab fa-windows mr-5 mt-5"></i>
        <span className="mr-3">عرض الشبكه</span>
       </a>

        </div>
       
      </div>

      <VideoEvent/>
      <VideoEvent/>
  
  </div>
   </>
  );
};