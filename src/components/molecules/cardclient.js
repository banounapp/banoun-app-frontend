import React from 'react';
import { ModalClient } from "../atoms";



export const CardClient = () => {
  return (
   <>
   <div className=" bg-white border-2 border-gray-200 w-60 h-96 md:w-96 md:h-96 lg:w-60 lg:h-96 mr-10 lg:mr-0 rounded-lg shadow-lg mt-16  ">
     <h2  className=" text-2xl mt-5 mr-5 ">عملائك</h2>
      <div className="flex justify-between px-5">
          <p className="text-gray-700">18 عميل</p>
          <a href="#" className=" text-spring-rain-500">عرض كل العملاء</a>
      </div>
      <div className=" grid grid-cols-2 px-7 mt-3 md:px-24 lg:px-7">
      <ModalClient/>
      <ModalClient/>
      <ModalClient/>
      <ModalClient/>
          
      </div>
     

    
       

   </div>

   </>
  );
};
