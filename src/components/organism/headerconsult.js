import React from 'react';
export const HeaderConsult = () => {
  return (
  <>
  
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5">
      <div className="lg:px-20">
          <img src="images/back - header (1).png" alt="bg" className="px-5  " />
          <div className="absolute  top-44 px-8 lg:px-20">
          <h2 className=" text-2xl ">كيف تستثمر في صحة ابنائك؟</h2>
          <p className=" text-lg py-2 lg:py-7">في بنون نوفر لك الرعاية الكاملة لك ولطفلك في كل مراحل عمره <br></br>استشر طبيبك من بين مجموعتنا من الأطباء
               المتميزين <br></br>وساعد طفلك وأهل بيتك على البقاء في حياة سليمة</p>
          </div>
      </div>
      <div>
          <img src="images/Consulting (1).png" className=" w-2/3 md:w-72 m-auto lg:w-96" />
      </div>
  </div>

  </>
    
  );
};
