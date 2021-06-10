import React from "react";
import { Btn } from "../atoms";

export const Section2 = () => {
  return (
    <div className="px-4 md:px-32  pb-5 mt-5">
      <div className="pt-5  px-6 md:mb-20   ">
        <h1 className="text-3xl md:text-4xl mb-4">عن بنون</h1>
        <p className="text-sm md:text-2xl mb-4">
          هنا نقدم لك أفضل الارشادات للتربية الصحيحة
        </p>
      </div>

      {/* Video div */}
      <div className="block md:flex  justify-center ">
        <div className="w-full md:w-2/3  my-auto">
          <video className="lg:w-96  mx-auto " controls>
            <source src="../../assets/test.mkv" type="video/mkv" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" md:w-1/3 md:text-md bg-green  my-auto mx-1 space-y-6 lg:w-1/3  md:mx-20 text-center    ">
          <div>
            <div className="space-y-4">
              <h3 className="text-md mt-5 md:mt-0   md:text-xl lg:text-2xl  ">
                التربية الحسنة هي التي تجعل من الفرد غاية في السعادة لنفسه
                ولغيره{" "}
              </h3>
            </div>
          </div>
          <Btn stylee="md:px-10 py-3   text-white  rounded bg-gray-800">
            اعرف المزيد
          </Btn>
        </div>
      </div>
    </div>
  );
};


