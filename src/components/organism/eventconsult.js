import React from "react";
import { Btn } from "../atoms";

export const EventConsult = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 md:px-10 lg:px-20 lg:py-10">
        <div>
          <img
            src="images/image 49.png"
            alt="pregnancy"
            className="w-full md:w-9/12 md:mt-10	 lg:w-10/12 	"
          />
        </div>

        <div className="  px-20  py-20 ">
          <p className=" text-base md:text-base lg:text-2xl py-1 ">
            اذا كنت تريد التحدث مع احد المختصين لدي بنون بشكل فردي فبامكانك تصفح
            مجموعه الاخصائيين وحجز موعد مع اي منهم من هنا
          </p>
          <Btn
            stylee="bg-silver-tree  text-white   h-8  w-9/12 mt-4  md:w-8/12  md:mt-2 lg:w-4/12 md:mr-1 lg:mr-1 lg:mt:5"
            type="submit"
          >
            استشر مختص
          </Btn>
        </div>
      </div>
    </>
  );
};
