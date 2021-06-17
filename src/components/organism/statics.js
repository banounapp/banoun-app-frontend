import React from 'react';
export const Statics = () => {
  return (
  <>
  
  <div className="  py-5 bg-zanah-500  ">
    
    <h2 className=" text-3xl text-center">احصاءات</h2>
     
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5">
        
         <div>
         <div className=" rounded-full h-32 w-32 bg-white m-auto mt-5">
             <img src="images/Doctor Icon.png" className=" m-auto py-8 w-12"/>
         </div>
         <p className=" text-center mt-3 text-lg">اكثر من 50 اخصائي</p>
         </div>
         <div>
         <div className=" rounded-full h-32 w-32 bg-white m-auto mt-5">
             <img src="images/family Icon.png" className=" m-auto py-8 w-14"/>
         </div>
         <p className=" text-center mt-3 text-lg">اكثر من 250 حاله نجاح </p>
         </div>
        <div>
        <div className=" rounded-full h-32 w-32 bg-white m-auto mt-5">
             <img src="images/youth Icon.png" className=" m-auto py-8 w-14"/>
         </div>
         <p className=" text-center mt-3 text-lg"> اكثر من 500 مستخدم </p>
        </div>
     </div>
   
  </div>

  </>
    
  );
};
