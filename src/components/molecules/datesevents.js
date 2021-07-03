import React, { useState, useEffect } from "react";
import { DateOfline, DateOnline, Calender, CalenderDoc } from "../atoms";
// import Calender from "../components/atoms/calender";
// import { Appointment } from "./../organism/secAppoinemnt";

export const DatesEvents = ({ setusersArr }) => {
  const [reservedAppointments, setreservedAppointments] = useState([]);
  console.log(reservedAppointments);
  const getFormattedDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  const [appointments, setappointments] = useState({ available: [], notAvailable: [] });

  // const [availableAppointments, setavailableAppointments] = useState([]);
  useEffect(() => {
    const nonAvailableAppointments = [];
    const availableAppointments = reservedAppointments.filter((appointment) => {
      const isReserved = !appointment.user;
      isReserved || nonAvailableAppointments.push(appointment);

      return isReserved;
    });
    setappointments({available :availableAppointments ,notAvailable :nonAvailableAppointments  })
  }, [reservedAppointments]);

  const [isNotOutdated, setisNotOutdated] = useState(true);

  return (
    <>
      <div>
        <CalenderDoc
          setreservedAppointments={setreservedAppointments}
          setusersArr={setusersArr}
          setisNotOutdated={setisNotOutdated}
        />

        {isNotOutdated ? <h1 className=" lg:text-2xl">مواعيد تم حجزها</h1> : <h1 className=" lg:text-2xl">مواعيد مسبقة </h1>}
        {appointments.notAvailable.length > 0 ?
          appointments.notAvailable.map(
            (appointment) =>
              appointment.user && (
                <>
                  {appointment.attending == "offline" ? (
                    <DateOfline
                      clientname={appointment.user.username}
                      caseattend="الحضور بالعياده"
                      date={`${appointment.time} / ${getFormattedDate(new Date(appointment.date))}`}
                      linkdate=""
                    />
                  ) : (
                    <DateOnline
                      clientname={appointment.user.username}
                      caseattend="الحضور اونلاين"
                      date={`${appointment.time} / ${getFormattedDate(new Date(appointment.date))}`}
                      linkdate={appointment.joinUrl}
                      // className=" mt-10"
                    />
                  )}
                </>
              )
          ):<span className="text-gray-400">لايوجد مواعيد محجوزة بعد</span>
          }
        {
          <>
            {appointments.available.length != 0 && isNotOutdated ? (
              <h1 className="mt-20 lg:text-2xl">مواعيد لم يتم حجزها بعد</h1>
            ) : (
              ""
            )}
            {appointments.available.length != 0 &&
              appointments.available.map((appointment) => (
                <>
                  <DateOnline
                    clientname="لم يتم حجز الميعاد بعد"
                    caseattend=""
                    date={`${appointment.time} / ${getFormattedDate(new Date(appointment.date))}`}
                    notReserved={true}
                    // linkdate={appointment.joinUrl}
                    // className=" mt-10"
                  />
                </>
              ))}
          </>
        }
      </div>
    </>
  );
};
