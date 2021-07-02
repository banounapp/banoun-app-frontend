import React from "react";
import { CardAppoinment } from "../atoms";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUserAppointments } from "../../redux/actions/userProfile";
import { checkTime ,getFormattedDate } from "./../../utils/DateTime";
let Appointment = ({ userProfile }) => {
  const [userAppointments, setuserAppointments] = useState({ outDated: [], upcoming: [] });
  useEffect(() => {
    const getAppointments = async () => {
      const respArr = await getUserAppointments(userProfile?.user?._id);

      console.log(respArr);
      if (respArr) {
        const outDated = [];
        const upcoming = [];

        respArr.forEach((appointment) => {
          // console.log(new Date(appointment.date).setHours(0,0,0) ,new Date().setHours(0,0,0))
          if (new Date(appointment.date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && checkTime(appointment.time)) {
            //   appointment.attending == "online" ? outDated.push(appointment) : upcoming.push(appointment);
            upcoming.push(appointment);
          } else {
            outDated.push(appointment);
          }
        });

        console.log(outDated, upcoming);
        setuserAppointments({ outDated: outDated, upcoming: upcoming });
      }
    };

    getAppointments();
  }, []);

  return (
    <>
      <div className="lg:mt-4 lg:ml-4 lg:ml-28">
        <p className="md:text-xl m-10 lg:text-2xl">مواعيد محجوزة</p>
        <div className="mt-5 mb-5 bg-white mr-8 p-2 w-72 rounded-lg md:p-1 md:pt-5 md:pb-5 md:w-5/6 lg:block lg:w-max" style={{width:"100%" ,textAlign:"start"}}>
          {userAppointments.upcoming.map((appointment) => {
            return (
              <CardAppoinment
                specialistName={appointment.Specialist.username}
                status={appointment.attending == "offline" ?"الحضوربالعيادة" :"الحضور أونلاين"  }
                color={ appointment.attending == "offline" ?'text-forest-green-500':"text-my-sin-500"}
                appoinemnt={`${getFormattedDate(new Date(appointment.date))} ${appointment.time}`}
                meeting={appointment.joinUrl}
              />
            );
          })}
        </div>
        <p className="md:text-xl m-10 lg:text-2xl">مواعيد سابقة</p>
        {/* <div className='mt-5 bg-white p-5 w-64 rounded-lg md:w-1/1'> */}
        <div className="mt-5 mb-5 bg-white mr-8 p-2 w-72 rounded-lg  md:pt-5 md:pb-5 md:w-5/6 lg:block lg:w-max" style={{width:"100%"}}>
          {userAppointments?.outDated.map((appointment) => (
            <CardAppoinment
              specialistName={appointment.Specialist.username}
              status={appointment.attending == "offline" ?"الحضوربالعيادة" :"الحضور أونلاين"  }
              color={ appointment.attending == "offline" ?'text-forest-green-500':"text-my-sin-500"}
              appoinemnt={`${getFormattedDate(new Date(appointment.date))} ${appointment.time}`}
              meeting={appointment.joinUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.userProfile,
  };
};
Appointment = connect(mapStateToProps)(Appointment);

export { Appointment };
