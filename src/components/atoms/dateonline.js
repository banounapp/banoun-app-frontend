import React from 'react';


export const DateOnline = ({clientname, caseattend,date,linkdate}) => {
  return (
   <>
   <div>
   <a href="#">
   <div className=" bg-spring-rain-600 w-10 h-10 absolute  left-1 -mt-5  md:left-3 md:-mt-5 lg:left-20 lg:-mt-5 rounded-full ">
   <i className="fas fa-times text-white text-center px-4 py-3"></i>
   </div>
   </a>

   <div className="rounded-lg mt-10 bg-silver-tree-300 lg:w-11/12 lg:h-32">
     <div className=" lg:flex justify-between px-10 py-10">
       <div>
         <p className="lg:text-lg">{clientname}</p>
         <p className="lg:text-lg text-spring-rain-800">{caseattend}</p>
       </div>
       <div>
         <p className="lg:text-lg">{date}</p>
         <a href="#" className="lg:text-lg text-gray-500">{linkdate}</a>
       </div>
     </div>

   </div>
   </div>
   </>
  );
};