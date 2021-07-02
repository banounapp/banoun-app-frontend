import React from "react";
import { Card } from "../molecules";

export const Section1 = () => {
  return (
    <div style={{backgroundColor:"#D6EAD4"}}>
      <div className="pt-5 px-6 md:px-32  md:mb-20 mt-20  ">
        <div className="flex  ">
          <div class="w-9  overflow-hidden inline-block">
            <div class=" h-12  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-3xl md:text-4xl mb-4"> المحتوي </h1>
        </div>
        <p className="text-sm md:text-2xl mb-4">هنا نقدم لك أفضل الارشادات للتربية الصحيحة</p>
      </div>

      <div className=" grid lg:grid-cols-3 mr-24  h-4/5">
        <div className="ml-10">
          <Card stylee="lg:w-full -mt-1 lg:mt-20 -mr-7 lg:mr-12" category="الحمل" imageSource="images/card1.png" />
          <Card stylee="lg:w-full -mt-1 lg:mt-72 -mr-7 lg:mr-12" category="الطفوله" imageSource="images/card2.png" />
          <Card stylee="lg:w-full -mt-1 lg:mt-72 -mr-7 lg:mr-12" category="حالات خاصه" imageSource="images/card3.png" />
        </div>
        <div className=" hidden lg:block z-10">
          <img src="images/tree.png" className="" />
        </div>
        <div className="ml-10">
          <Card stylee="lg:w-full -mt-1 -mr-7 lg:mt-80 lg:-mr-2 " category="ما بعد الولاده" imageSource="images/card4.png" />
          <Card stylee="lg:w-full -mt-1 -mr-7 lg:mt-72 lg:-mr-2" category="المراهقه" imageSource="images/card5.png" />
        </div>
      </div>
    </div>
  );
};
