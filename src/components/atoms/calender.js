import React, { useState, useEffect } from "react";
import Calender from "react-calendar";
import Moment from "react-moment";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getDoctorAppointments } from "../../redux/actions/specialist";
import { Btn } from "./btn";
import "./calender.css";
import PaymentModal from "./../organism/PaymentModal";

const CalenderSystem = ({ appointments, getDoctorAppointments }) => {
  const [dateValue, setDateValue] = useState(new Date());
  const onDateChange = async (value) => {
    setDateValue(value);
  };

  const { id } = useParams();

  //m-day-year

  appointments = [
    {
      _id: 1,
      date: "2-10-2021",

      time: "10Pm",
      status: "Available",
      price :10
    },
    {
      _id: 2,
      date: "2-10-2021",

      time: "10Pm",
      status: "Available",
      price :10

    },
    {
      _id: 3,
      date: "3-10-2021",

      time: "10Pm",
      status: "reserved",
      price :10

    },
    {
      _id: 4,
      date: "2-11-2021",

      time: "10pm",
      status: "Available",
      price :10

    },
    {
      _id: 5,
      date: "2-12-2021",

      time: "10pm",
      status: "Available",
      price :10

    },
  ];
  let [filteredAppointments, setfilteredAppointments] = useState(appointments);
  useEffect(() => {
    getDoctorAppointments(id);
    filteredAppointments = appointments;
  }, []);
  const filterAppointments = () => {
    filteredAppointments = [...appointments];
    const filteredArr = filteredAppointments.filter((appointment, index) => {
      const appointmentDate = new Date(appointment.date);
      return getDate(dateValue) == getDate(appointmentDate);
    });
    setfilteredAppointments(filteredArr);
  };

  const getDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  useEffect(() => {
    filterAppointments();
  }, [dateValue]);

  const [isModalOpened, setisModalOpened] = useState(false);

  const toggleOpened = () => {
    setisModalOpened(!isModalOpened);
  };

  const specificContent = (date) => {
    return appointments.some((appointmentItem) => {
      const formattedDisbledeDate = getDate(new Date(appointmentItem.date));
      const CalenderDate = getDate(date.date);
      return CalenderDate == formattedDisbledeDate;
    })
      ? ["availableDate"]
      : "";
  };

  const [CurrentAppointment, setCurrentAppointment] = useState(null);

  return (
    <div className=" mt-52">
      <div className="  my-14  mt-10  ">
        <h1 className="text-3xl text-center md:text-4xl mb-4">احجز موعدًا مع الدكتور </h1>
      </div>
      {/* Green DIV */}
      <div className="bg-beryl-green-200 pb-8 ">
        <div className="  my-14 md:mb-4 pt-4   ">
          <h2 className="text-md text-center">اختر اليوم الذي تريد أن تحجز فيه موعدًا مع الدكتور، وأكمل خطوات الحجز</h2>
        </div>
        <div className=" flex text-center flex-wrap justify-center mt-10  lg:justify-around">
          <div className="text-center w-3/4 flex justify-center flex-wrap ">
            <Calender onChange={onDateChange} value={dateValue} className="mx-4 w-3/4  space-y-4 " tileClassName={specificContent} />
          </div>
        

          {/* left section */}

          <div
            style={{
              maxWidth: "500px",
              marginTop: "50px",
              padding: "0 10px",
            }}
            className="w-1/4"
          >
            <h1>أختر التوقيت</h1>
            <div className="bg-beryl-green-300  py-4 rounded-md mt-1 flex gap-2 flex-wrap justify-center px-4 ">
              {/* <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div> */}
              {filteredAppointments &&
                filteredAppointments.map((appointment) => (
                  <>
                    {appointment.status == "reserved" ? (
                      <div
                        key={appointment._id}
                        className="px-1 sm:px-4 py-1 sm:py-2 bg-red text-white rounded-md "
                        aria-disabled
                      >
                        <Moment format="h">{appointment.time}</Moment>
                      </div>
                    ) : (
                      <div
                        key={appointment._id}
                        className="px-1 sm:px-4 py-1 cursor-pointer sm:py-2 bg-red text-white rounded-md "
                        onClick={() => {
                          setCurrentAppointment(appointment);
                          setisModalOpened(true);
                        }}
                      >
                        {appointment.time}
                      </div>
                    )}
                  </>
                ))}
            </div>

            <div className="flex justify-center">
              {filteredAppointments.length === 0 && (
                <div className="bg-beryl-green-300 mt-4 w-2/3 py-1 text-red  rounded-md mt-1 flex   justify-around">
                  غير متاح الحجز
                </div>
              )}
              {/* <div className="text-center w-1/3 " onClick={() => setisModalOpened(true)}>
                <Btn
                  stylee="bg-silver-tree-50 sm:px-1 align-center w-2/3 h-2/3"
                  children="
                  متابعة 
                  "
              </div>
                /> */}
            </div>
          </div>
        </div>
        {isModalOpened && <PaymentModal setisModalOpened={toggleOpened} CurrentAppointment={CurrentAppointment} getDoctorAppointments={getDoctorAppointments}  />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointments: state.specialist.appointments,
  };
};

export default connect(mapStateToProps, { getDoctorAppointments })(CalenderSystem);
{
  /* { getDoctorAppointments } */
}
