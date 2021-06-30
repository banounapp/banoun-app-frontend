import React from 'react';
import { Button } from "./../atoms";


export const Confirm = () => {
    return (
       
       <>
       <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       <div className=" mr-20 md:mr-10 lg:mr-96">
           <h2 className=" mt-20 lg:mt-56 text-lg lg:text-xl">اعد كتابه بريدك الالكتروني للتاكيد</h2>
           <input placeholder="تاكيد البريد الالكتروني" type="email" name="email" 
           className=" block w-56 md:w-72 lg:w-80 h-10 p-3 mt-10 border-2 border-gray-500 rounded  "
           />
           <Button stylee="bg-silver-tree  text-white my-4 mr-10 md:mr-10 lg:mr-20" type="submit">
           تاكيد 
          </Button>
          </div>
           <div>
               <img src="images/undraw_verified_re_4io7.svg" alt="comfirm pic"
               className=" w-56 h-72 mr-10 lg:w-96 lg:h-80 lg:mt-36"
               />
           </div>
          
       </div>
       </>

    );
};





