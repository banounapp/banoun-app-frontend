import React, { useState, useEffect } from "react";
import Calender from "react-calendar";
import Moment from "react-moment";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { getDoctorAppointments } from "../../redux/actions/specialist";
import { Btn } from "./btn";
import "./calender.css";

const CalenderSystem = ({ appointments, getDoctorAppointments }) => {
  const [value, onChange] = useState(new Date());
  const { id } = useParams();
  console.log(value);
  console.log(appointments);

  useEffect(() => {
    getDoctorAppointments(id);
  }, []);

  return (
    <div className=" mt-52">
      <div className="  my-14  mt-10  ">
        <h1 className="text-3xl text-center md:text-4xl mb-4">
          احجز موعدًا مع الدكتور{" "}
        </h1>
      </div>
      {/* Green DIV */}
      <div className="bg-beryl-green-200 pb-8 ">
        <div className="  my-14 md:mb-4 pt-4   ">
          <h2 className="text-md text-center">
            اختر اليوم الذي تريد أن تحجز فيه موعدًا مع الدكتور، وأكمل خطوات
            الحجز
          </h2>
        </div>
        <div className=" flex text-center flex-wrap justify-center  lg:justify-around">
          <div className="text-center ">
            <Calender
              onChange={onChange}
              value={value}
              className="mx-4  space-y-4"
            />
          </div>

          {/* left section */}

          <div
            style={{
              maxWidth: "500px",
              marginTop: "50px",
              padding: "0 10px",
            }}
          >
            <h1>أختر التوقيت</h1>
            <div className="bg-beryl-green-300  py-4 rounded-md mt-1 flex gap-2 flex-wrap justify-around px-4 ">
              {/* <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div> */}
              {appointments &&
                appointments.map((appointment) => (
                  <>
                    {appointment.status == "reserved" ? (
                      <div
                        key={appointment._id}
                        className="px-1 sm:px-4 py-1 sm:py-2 bg-red text-white rounded-md "
                      >
                        <Moment format="h:mm:ss">{appointment.time}</Moment>
                      </div>
                    ) : (
                      <div
                        key={appointment._id}
                        className="px-1 sm:px-4 py-1 cursor-pointer sm:py-2 bg-red text-white rounded-md "
                      >
                        {appointment.time}
                      </div>
                    )}
                  </>
                ))}
            </div>
            {/*  */}
            <div className="flex">
              <div className="bg-beryl-green-300 mt-4 w-2/3 py-1 text-red  rounded-md mt-1 flex   justify-around">
                غير متاح الحجز
              </div>
              <div className="text-center w-1/3 ">
                <Btn
                  stylee="bg-silver-tree-50 sm:px-1 align-center w-2/3 h-2/3"
                  children="
                  متابعة 
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointments: state.specialist.appointments,
  };
};

export default connect(mapStateToProps, { getDoctorAppointments })(
  CalenderSystem
);
