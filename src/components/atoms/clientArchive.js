
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ArchiveCardOnline } from "./archiveCardOnline";
import { ArchiveCardOffline } from "./archiveCardOffline";

import "./clientArchive.css"
import { getUserAppointments } from "../../redux/actions/userProfile";
import Load from "./../molecules/load";

import { getFormattedDate } from "../../utils/DateTime";

let ClientArchive = ({ specialist, user }) => {
  const [userAppointments, setuserAppointments] = useState({ online: [], offline: [] });

  useEffect(() => {
    //get user appointments with this specialist
    const getAppointments = async () => {
      const respArr = await getUserAppointments(user._id);

      console.log(respArr)
      if (respArr?.length >0) {
        const onlineAppointments = [];
        const offlineAppointments = [];

        respArr.forEach((appointment) => {
          // console.log(appointment.Specialist == specialist.specialist_auth._id)
          const isRelated = appointment.Specialist._id == specialist.specialist_auth._id;
          if (isRelated) {
            appointment.attending == "online" ? onlineAppointments.push(appointment) : offlineAppointments.push(appointment);
          }
        });

        setuserAppointments({ online: onlineAppointments, offline: offlineAppointments });
      }
    };
    getAppointments();
  }, []);


  return (
    <div
      className="scroll"
      style={{
        overflow: "auto",
        height: "100%",
      
      }}
    >
    {userAppointments.online.length == 0 && userAppointments.offline.length == 0&& <div className="flex align-center justify-center" style={{ overflow: "hidden", height: "100%", width: "400px" }}>
        <Load contain={true}></Load>
      </div>}
      {userAppointments?.online.map((appointment) => {
        return (
          <div className=" mt-3 p-3">
            <ArchiveCardOnline
              clientName={user.username}
              date={getFormattedDate(new Date(appointment.date))}
              time={appointment.time}
              online=" الحضور اونلاين"
              mobile={user.phone}
              img={user.image}
              url={appointment.joinUrl}
            />
          </div>
        );
      })}
      {userAppointments?.offline.map((appointment) => {
        return (
          <div className=" mt-3 p-3">
            <ArchiveCardOffline
              clientName={user.username}
              date={getFormattedDate(new Date(appointment.date))}
              time={appointment.time}
              offline=" الحضور بالعياده"
              mobile={user.phone}
              img={user.image}
            />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    specialist: state.specialist,
  };
};

ClientArchive = connect(mapStateToProps)(ClientArchive);
export { ClientArchive };
