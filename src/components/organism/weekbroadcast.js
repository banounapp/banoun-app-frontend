import React from "react";
export const WeekBroadcast = () => {
  return (
    <>
      <div className=" grid grid-cols-1  py-5 lg:px-20 ">
        <div className="flex">
          <div class="w-7  overflow-hidden inline-block">
            <div class=" h-7  bg-spring-rain-700 -rotate-45 transform origin-top-right"></div>
          </div>
          <p className=" text-lg lg:text-2xl py-1">البث الاسبوعي</p>
        </div>

        <div>
            <img src=" images/image 48.png" className=" py-5 w-full h-96  md:w-full md:h-72 lg:h-72 lg:w-full  "/>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:py-20 relative -mt-80 md:-mt-60 lg:-mt-80">
                <div className=" text-center  lg:py-5 lg:px-44">
                    <p className=" text-lg  lg:text-lg"> دكتور رامي ياسر</p>
                    <h2 className=" text-xl md:text-xl lg:text-xl py-3 lg:py-5">كيف تتعامل مع طفلك العنيد؟</h2>
                   <div className=" text-lg md:text-lg lg:text-lg flex ">
                   <p className=" mr-10 md:mr-16"> الجمعه  السادسه مساءا </p>
                   <span className=" mr-10 lg:mr-10">16/6/2021</span>
                   
                   </div>
                </div>
                <div>
                    <img src="images/image 50.png" className="relative m-auto w-32 h-40 mt-8  md:w-52 md:h-80 lg:w-52 lg:h-80 md:-mt-24 lg:-mt-24 lg:mr-72 "/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
