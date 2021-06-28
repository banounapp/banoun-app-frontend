import React from 'react';
import { ModalEditDoc } from "../atoms";


export const CardProfile = () => {
  return (
   <>
   <div className=" bg-white border-2 border-gray-200 w-60 h-96 md:w-96 md:h-11/12 lg:w-60 lg:h-96 mr-10 lg:mr-0 rounded-lg shadow-lg mt-28  ">
     
       <div className="rounded-full h-32 w-32  bg-silver-tree-200 border-2 border-gray-200 m-auto  relative -top-16">
       <img src="images/1-business-woman-removebg-preview 2.png" alt="profile pic" className=" w-24 h-28 mr-3 mt-3 rounded-full"/>
       </div>

       <h2  className=" text-center relative -top-10 text-2xl">ليلي سمير</h2>
       <div className="relative -top-10 text-center"> 
       <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         <i className='fas fa-star text-amber-500 fa-xs '></i>
         
        
       </div>
       <ul className=" relative -top-9 right-3 md:text-lg lg:text-sm text-gray-700">
           <ModalEditDoc/>
           <li><i class="fas fa-shopping-bag px-3 py-1"></i> اخصائي نفسيه مراهقين واطفال</li>
         
           <li> <i class="fas fa-map-marker-alt px-3 py-1"></i>الابراهيميه :2 55 شارع العمري</li>
           <li> <i class="fas fa-venus-mars px-3 py-1"></i>انثي</li>
           <li><i class="fas fa-dollar-sign px-3 py-1"></i>250</li>
           <li><i class="fas fa-phone-square-alt px-3 py-1"></i> +218023989</li>
           <li><i class="far fa-address-card px-3 py-1"></i> 2652569847694</li>

           <li><span className="px-3 text-2xl ">@</span>  lilasamir@gmail.com</li>
       </ul>
       

   </div>

   </>
  );
};
