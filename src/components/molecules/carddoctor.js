import React from "react";
import _ from "lodash";

export const CardDoc = ({  imageSource, docname, des,rate }) => {
  

  return (
    
    <div className=" border-2 border-pale-leaf-500  rounded w-40 h-48  lg:w-44 lg:h-52 bg-white m-auto mt-10 lg:mt-16 lg:px-10">
        <img
          alt=""
          className=" w-24 h-30 lg:w-32 lg:h-32 m-auto -mt-7  "
          src={imageSource}
        ></img>
           <h1 className="text-base lg:text-base text-center mt-3">{docname}</h1>
         <h3 className="text-sm  text-center  text-gray-400 mt-1">{des}</h3>
       <div className="text-center lg:pb-2">
       {/* <i class="far fa-star fa-xs"></i> */}
     
         {_.times(rate, (i) => (
                     <i   key={i}className='fas fa-star text-amber-500 fa-xs '></i>



          ))}
       </div>

       
    </div>
  );
};





