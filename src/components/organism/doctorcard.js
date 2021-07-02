import React, { useEffect } from "react";
import { Btn } from "../atoms/btn";
import doctorImage from "../../assets/doctor.png";
import { GetOneSpecialist } from "../../redux/actions/specialist";
import { useParams } from "react-router-dom";
import _ from "lodash";

import { connect } from "react-redux";

const DoctorCard = ({ specialist, GetOneSpecialist }) => {
  const { id } = useParams();

  useEffect(() => {
    GetOneSpecialist(id);
  }, [id]);

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
                src={`https://banoun-app.herokuapp.com/api/upload/show/${
                  specialist && specialist[0]?.image?.filename
                }`}
              ></img>
            </div>
            <div>
              <div className="p-4 md:p-5 ">
                <p className="font-bold text-xl md:text-2xl">
                  {specialist && specialist[0].username}
                </p>
                <p className="text-gray-700 md:text-lg mt-1">
                  {specialist && specialist[0].bio}
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
                        {specialist &&
                          _.times(specialist[0].rate, (i) => (
                            <i
                              key={i}
                              className="fas fa-star text-amber-500 fa-xs "
                            ></i>
                          ))}
                        {specialist && specialist[0].rate == 0 && (
                          <span>لم يتم تقييم الدكتور بعد</span>
                        )}
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
          <p>{specialist && specialist[0].city}</p>
          <p>
            {specialist && specialist[0].address}

            {/* محور 26 يوليو بجوار دار الفؤاد، 6أكتوبر */}
          </p>
          <p>
            <i className="fas fa-phone"></i> 0
            {specialist && specialist[0].phone}
          </p>
          <p>سعر الجلسة : {specialist && specialist[0].price} ج</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  specialist: state.specialist.specialist,
});

export default connect(mapStateToProps, { GetOneSpecialist })(DoctorCard);
