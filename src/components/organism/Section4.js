import React from "react";
import { Comments } from "../molecules";

export const Section4 = () => {
  return (
    <div className=" pb-5 px-6 md:px-32" id="visitors">
      <div className="pt-5   my-14 md:mb-20 mt-10  ">
        <div className="flex">
          <div class="w-9  overflow-hidden inline-block">
            <div class=" h-12  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-3xl md:text-4xl mb-4">تعليقات الزوار </h1>
        </div>
      </div>

      {/* 1 */}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <Comments
          name="Shery Shawky"
          email="shery@gmail.com"
          comment=" الطبيب الخاص بك من هنا الانالطبيب الخاص بك من هنا الان اشترك مع الطبيب
    الخاص بك من هنا الان اشترك مع الطبيب الخاص بك من هنا الان اشترك مع
    الطبيب الخاص بك من هنا الان"
        />
        {/* 2 */}

        <Comments
          name="Shery Shawky"
          email="shery@gmail.com"
          comment=" الطبيب الخاص بك من هنا الانالطبيب الخاص بك من هنا الان اشترك مع الطبيب
    الخاص بك من هنا الان اشترك مع الطبيب الخاص بك من هنا الان اشترك مع
    الطبيب الخاص بك من هنا الان"
        />
      </div>
    </div>
  );
};
