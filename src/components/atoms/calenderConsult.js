import React, { useState, useEffect } from "react";
import Calender from "react-calendar";
import Moment from "react-moment";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getDoctorAppointments } from "../../redux/actions/specialist";
import { Btn } from "./btn";
import "./calender.css";
import PaymentModal from "../organism/PaymentModal";
import { checkTime } from "../../utils/DateTime";
import Load from "./../molecules/load"
// import userProfile from './../../redux/reducers/userProfile';

const CalenderConsult = ({ appointments, getDoctorAppointments, userProfile }) => {
  const [dateValue, setDateValue] = useState(new Date());
  const onDateChange = async (value) => {
    setReserved(false);
    setDateValue(value);
    console.log(filteredAppointments);
  };
  const getFormattedDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  const { id } = useParams();

  //m-day-year

  const [userId, setuserId] = useState(null);

  let [filteredAppointments, setfilteredAppointments] = useState(appointments);
  useEffect(() => {
    getDoctorAppointments(id);
  }, []);

  const filterAppointments = () => {
    if (appointments) {
      const filteredAppointments = [...appointments];
      const filteredArr = filteredAppointments.filter((appointment, index) => {
     
        const appointmentDate = new Date(appointment.date);
        return getDate(dateValue) == getDate(appointmentDate);
      });
      setfilteredAppointments(filteredArr);
    }
  };

  const getDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  const [isModalOpened, setisModalOpened] = useState(false);

  // let  [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    if (appointments) {
      filterAppointments();
    }
  }, [dateValue, appointments,isModalOpened]);

  const toggleOpened = () => {
    setisModalOpened(!isModalOpened);
    setuserId(userProfile.user._id);
  };

  const specificContent = (date) => {
    return appointments.some((appointmentItem) => {
      const formattedDisbledeDate = getDate(new Date(appointmentItem.date));
      const CalenderDate = getDate(date.date);
      return CalenderDate == formattedDisbledeDate && appointmentItem.status !== "reserved" &&  new Date(date.date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0);
    })
      ? ["availableDate"]
      : "";
  };

  const [CurrentAppointment, setCurrentAppointment] = useState(null);
  const [Reserved, setReserved] = useState(null);

  const handleReserved = () => {
    setReserved(true);
  };
  return (
    <div className="  mt-52 flex justify-center flex-wrap pb-5   w-full">
      <div className="  mt-14  mt-10 w-full ">
        <h1 className="text-3xl text-center md:text-4xl mb-11 ">احجز موعدًا مع الدكتور </h1>
      </div>
      {/* Green DIV */}
        {appointments ? (
      <div className=" pb-8 w-full" style={{ background: appointments?"#D6EAD4":"white" }}>
        <div className="  my-14 md:mb-4   " style={{ marginTop: "1.5rem" }}>
          <h2 className="text-md text-center" style={{ fontSize: "1.25rem" }}>
            اختر اليوم الذي تريد أن تحجز فيه موعدًا مع الدكتور، وأكمل خطوات الحجز
          </h2>
        </div>
          <div className=" flex text-center flex-wrap justify-start  lg:justify-start" style={{ marginTop: "1.5rem" }}>
            <div className="text-center flex justify-center " style={{ width: "49.8%", paddingRight: "8.7%" }}>
              <Calender
                onChange={onDateChange}
                value={dateValue}
                className="w-full  min-w-full max-w-full space-y-4 "
                tileClassName={specificContent}
              />
            </div>

            {/* left section */}

            <div
              style={{
                width: "42.6%",
                marginTop: "0px",
                paddingTop: "4.4rem",
                paddingRight: "4.4%",
              }}
            >
              <h1 style={{ marginBottom: "1.12rem", textAlign: "start", fontSize: "1.2rem" }}>اختر التوقيت</h1>
              <h4 style={{ textAlign: "start", fontSize: ".7rem", fontWeight: "600", fontFamily: "Arial" }}>
                {getFormattedDate(dateValue)}
              </h4>
              {(filteredAppointments && filteredAppointments.length !== 0 )&&(
                <>
                  <div
                    className="  py-4 rounded-md mt-1 flex gap-2 flex-wrap justify-start px-4 "
                    style={{ background: "#E3F1E2" }}
                  >
                    {/* <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                1.00 ص
              </div> */}
                    {/* <div
                        key={appointment._id}
                        className="px-1 sm:px-4 py-1 sm:py-2 bg-red text-white rounded-md "
                        aria-disabled
                      >
                        <Moment format="h">{appointment.time}</Moment>
                      </div> */}
                    {(filteredAppointments&&new Date(dateValue).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) &&filteredAppointments.map((appointment) => (
                      <>
                        {appointment.status == "reserved" || !checkTime(appointment.time) ? (
                          <div  
                            key={appointment._id}
                            className="px-1 sm:px-4 py-1 cursor-pointer sm:py-2 bg-gray-400 text-white rounded-md flex justify-center align-center"
                            style={{ width: "23.5%", minWidth: "23.5%", ":hover": { background: "#C4C4C4", color: "white" } }}
                            onClick={() => {
                              handleReserved();
                            }}
                          >
                            <span style={{ fontSize: "1.18rem" }}> {appointment.time}</span>
                            {/* {isModalOpened ? CurrentAppointment.time:""} */}
                          </div>
                        ) : (
                          <div
                            key={appointment._id}
                            className="px-1 sm:px-4 py-1 cursor-pointer sm:py-2 bg-white text-black rounded-md flex justify-center align-center"
                            style={{ width: "23.5%", minWidth: "23.5%", ":hover": { background: "#77BFA3", color: "white" } }}
                            onClick={() => {
                              setReserved(false);
                              setCurrentAppointment(appointment);
                              setisModalOpened(true);
                            }}
                          >
                            <span style={{ fontSize: "1.18rem"  }}> {appointment.time}</span>
                            {/* {isModalOpened ? CurrentAppointment.time:""} */}
                          </div>
                        )}
                      </>
                    )))||"لا يمكنك حجز موعد بتاريخ قديم"}
                  </div>
                  {Reserved ? <span style={{color:"red", letterSpacing:"1px"}}>هذا الميعاد محجوز بالفعل أو بتوقيت قديم</span> : ""}
                </>)
                
              }
              <div className="flex justify-center">
                {filteredAppointments && filteredAppointments.length === 0 &&new Date(dateValue).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)&& (
                  <div
                    className="bg-beryl-green-300 mt-4 w-full py-1 text-red  rounded-md mt-1 flex   justify-start px-4"
                    style={{ background: "#E3F1E2" }}
                  >
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
      </div>
        ) : (
          <div style={{height:"800px" , marginTop:"50px",width:"95%"}}>
          <Load contain={true}/>
          </div>
        )}
        {isModalOpened && (
          <PaymentModal
            setisModalOpened={toggleOpened}
            CurrentAppointment={CurrentAppointment}
            getDoctorAppointments={getDoctorAppointments}
            userId={userId}
          />
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointments: state.specialist.appointments,
    userProfile: state.userProfile,
  };
};

export default connect(mapStateToProps, { getDoctorAppointments })(CalenderConsult);
{
  /* { getDoctorAppointments } */
}
