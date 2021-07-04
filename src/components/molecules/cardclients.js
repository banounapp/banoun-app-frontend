import React, { useEffect, useState } from "react";
import { ModalClient } from "../atoms";
import { getDoctorClients } from "../../redux/actions/specialist";
import { ClientArchive } from "../atoms/clientArchive";

import Popup from "../atoms/popup";
export const CardClient = () => {
  const [usersArr, setusersArr] = useState([]);
  useEffect(() => {
    const getClients = async () => {
      const respArr = await getDoctorClients();
      respArr && setusersArr(respArr);
    };
    getClients();
  }, []);
  const [showAllClientsModal, setshowAllClientsModal] = useState(false);

  return (
    <>
      <>
        <div
          className=" bg-white border-2 border-gray-200 w-60 h-96 md:w-96 md:h-96 lg:w-60 lg:h-96 mr-10 lg:mr-0 rounded-lg shadow-lg mt-16 mb-16  "
          style={{ height: "70vh", overflow: "hidden" }}
        >
          <h2 className=" text-2xl mt-5 mr-5 ">عملائك</h2>
          <div className="flex justify-between px-5">
            <p className="text-gray-700">{usersArr?.length} عميل</p>
            <button href="#" className=" text-spring-rain-500" onClick={() => setshowAllClientsModal(true)}>
              عرض كل العملاء
            </button>
          </div>
          <div
            className=" grid grid-cols-2 px-7 mt-3 md:px-24 lg:px-7"
            style={usersArr.length == 0 ? { width: "100%", padding: "19px" } : {}}
          >
            {usersArr &&
              usersArr.slice(0, 5).map((user) => {
                return (
                  <>
                    <ModalClient user={user} />
                  </>
                );
              })}
            {usersArr.length == 0 && <p style={{ Width: "100%" }}> لا يوجد عملاء </p>}
          </div>
        </div>
      </>
      {showAllClientsModal ? (
        <>
          <Popup
            specificStyle={{
              width: "70%",
              top: "0%",
              zIndex: "1",
              height: "90%",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row Wrap",
            }}
            specificClass={"scroll scroll-green"}
            content={
              usersArr &&
              usersArr.map((user) => {
                return (
                  <>
                    {" "}
                    <ModalClient specificStyle={true} user={user}></ModalClient>
                  </>
                );
              })
            }
            handleClose={() => setshowAllClientsModal(false)}
            // removeX= {true}
            styleX={true}
          ></Popup>
        </>
      ) : null}
    </>
  );
};
