import React from "react";
import { Comments } from "../molecules";

export const Section4 = () => {
  return (
    <div className=" pb-5 px-6 md:px-32">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl md:text-4xl mb-4">تعليقات الزوار </h1>
      </div>

      {/* 1 */}

      <Comments
        name="Shery Shawky"
        email="@shery Shawky"
        comment=" الطبيب الخاص بك من هنا الانالطبيب الخاص بك من هنا الان اشترك مع الطبيب
    الخاص بك من هنا الان اشترك مع الطبيب الخاص بك من هنا الان اشترك مع
    الطبيب الخاص بك من هنا الان"
      />
      {/* 2 */}

      <Comments
        name="Shery Shawky"
        email="@shery Shawky"
        comment=" الطبيب الخاص بك من هنا الانالطبيب الخاص بك من هنا الان اشترك مع الطبيب
    الخاص بك من هنا الان اشترك مع الطبيب الخاص بك من هنا الان اشترك مع
    الطبيب الخاص بك من هنا الان"
      />
    </div>
  );
};


