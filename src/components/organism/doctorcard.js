import React from "react";
import { Btn } from "../atoms/btn";
import doctorImage from "../../assets/doctor.png";

const DoctorCard = () => {
  return (
    // RIGHT SECTION

    <div className="block lg:flex mt-52 mx-1 md:mx-20 pb-8 justify-center mb-12 ">
      <div className="flex justify-center">
        <div className="max-w-md  md:max-w-2xl px-2">
          <div className="bg-white shadow-xl rounded-lg justify-between  md:flex">
            <div className=" z-10 w-28 mx-auto top-12 right-24 md:top-0 md:right-0   md:w-60 bottom-0 relative">
              <img
                style={{ minHeight: "100px", maxHeight: "300px" }}
                className="w-full z-20 bottom-0  absolute "
                src={doctorImage}
              ></img>
            </div>
            <div>
              <div className="p-4 md:p-5 ">
                <p className="font-bold text-xl md:text-2xl">دكتور رامي ياسر</p>
                <p className="text-gray-700 md:text-lg mt-1">
                  أخصائي طب الأطفال وحديثي الولادة
                </p>
                <p className="text-gray-700 md:text-lg">
                  متخصص في اطفال، حديثي الولادة و حساسية ومناعة اطفال
                </p>
              </div>
              <div className="p-4 md:p-5">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <div className="flex items-center">
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        التقييم
                      </div>
                      <div className="flex inline-flex -mx-px">
                        <i className="fas fa-star  px-0 sm:px-1 text-tahuna-sands-800 fa-xs sm:text-lg"></i>
                        <i className="fas fa-star  px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
                        <i className="fas fa-star  px-0 sm:px-1 text-gold fa-xs sm:text-lg"></i>
                        <i className="fas fa-star  px-0 sm:px-1 fa-xs sm:text-lg"></i>
                        <i className="fas fa-star  px-0 sm:px-1 fa-xs sm:text-lg"></i>
                      </div>
                    </div>
                  </div>
                  <Btn stylee="mt-3 md:py-1 md:px-5  sm:mt-0 bg-spring-rain-900  text-white md:text-lg rounded-lg shadow-md">
                    احجز موعدًا
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* LEFT SECTION */}
      <div
        style={{ fontSize: ".8rem", minWidth: "300px" }}
        className="bg-white rounded-xl p-8 md:p-0"
      >
        <div className="pt-6 text-lg md:p-4 text-center space-y-2">
          <p className="text-lg  font-semibold">
            {" "}
            <i className="fas fa-map-marker-alt"></i>&nbsp;عناوين العيادات
          </p>
          <p>27 شارع نجيب محفوظ، الحي المتميز، 6 أكتوبر</p>
          <p>محور 26 يوليو بجوار دار الفؤاد، 6أكتوبر</p>
          <p>
            <i className="fas fa-phone"></i> 01092307357
          </p>
          <p>سعر الجلسة : 300 ج</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
