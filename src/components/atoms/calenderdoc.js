import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Calender from "react-calendar";
import { Btn } from "./btn";
import "./calender.css";
import { Button } from "./button";
import { client } from "../../services/client";
import Load from "../molecules/load";
import { checkTime } from './../../utils/DateTime';
let CalenderDoc = ({ specialist, setreservedAppointments, setusersArr, setisNotOutdated }) => {
  console.log(setusersArr);
  const timesArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
  const [availableTimes, setavailableTimes] = useState(timesArr);
  //with every click add time
  const getFormattedDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  const [reqFinished, setreqFinished] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());
  const handleDateChange = async (value) => {
    reqFinished && setreqFinished(false);

    const newDate = new Date(value);
    const date = getFormattedDate(newDate);
    const res = await client.get(`specialist/schedule/${date}`);
    console.log(res.data);
    // const reservedAppointments =res.data.reservedAppointments ;
    const newFilteredAvailableTimes = [...timesArr].filter((time) => {
      const available = !res.data.reservedTimes.includes(time);
      return available;
    });

    setavailableTimes(newFilteredAvailableTimes);
    setAddedTimes([]);
    setDateValue(newDate);
    setreqFinished(true);
    if (setreservedAppointments) {
      console.log(res.data.reservedAppointments);
      setreservedAppointments(res.data.reservedAppointments);
    }
    if (setusersArr) {
      setusersArr(res.data.reservedAppointments);
    }
  };

  const onDateChange = handleDateChange;

  const confirmAppointments = async () => {
    const body = {
      time: AddedTimes,
      date: getFormattedDate(dateValue),
      price: specialist.specialist_auth.price,
    };
    console.log(body.price);
    const requesting = async () => {
      const res = await client.post("specialist/schedule", body);
      handleDateChange(dateValue);
    };

    requesting();
  };

  const [AddedTimes, setAddedTimes] = useState([]);
  const handleAddedItems = (time) => {
    setAddedTimes([...AddedTimes, time]);
  };

  useEffect(() => {
    handleDateChange(new Date());
  }, []);

 

  console.log(availableTimes);

  const reservingButtons = [
    ...availableTimes.map((time) => {
      setisNotOutdated && setisNotOutdated(true);
      return dateValue.setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0) ? (
        checkTime(time) && (
          <Button
            stylee="bg-white-300 shadow	"
            enhancement={{
              style: {
                color: "black",
                background: AddedTimes.includes(time) ? "rgb(26, 175, 128)" : "white",
                color: AddedTimes.includes(time) ? "white" : "black",
                width: "121px",
              },
              onClick: () => handleAddedItems(time),
            }}
          >
            {time}
          </Button>
        )
      ) : (
        <Button
          stylee="bg-white-300 shadow	"
          enhancement={{
            style: {
              color: "black",
              background: AddedTimes.includes(time) ? "rgb(26, 175, 128)" : "white",
              color: AddedTimes.includes(time) ? "white" : "black",
              width: "121px",
            },
            onClick: () => handleAddedItems(time),
          }}
        >
          {time}
        </Button>
      );
    }),
  ];

  return (
    <div className=" mt-5   ">
      <div className="  my-14  mt-10  ">
        <h1 className="text-2xl  md:text-2xl mb-4">تحديد موعد جديد </h1>
      </div>

      {/* Green DIV */}

      <div className="bg-beryl-green-200 pb-8 w-full">
        <div className="block  lg:justify-around w-4/4">
          <div className="text-center" style={{ width: "95%" }}>
            <Calender
              className={["ml-4", "max-w-full", "space-y-4"]}
              style={{ maxWidth: "100%" }}
              onChange={onDateChange}
              value={dateValue}
            />
          </div>

          {/* left section */}
          {reqFinished ? (
            <>
              <div
                style={{
                  width: "100%",
                  marginTop: "50px",
                }}
              >
                <span style={{ color: "red", fontSize: "2rem" }}>
                  {" "}
                  الأوقات المتاحة في يوم : <span style={{ fontFamily: "Arial" }}>{getFormattedDate(dateValue)}</span>
                </span>
                <h1>اختر التوقيت</h1>
                <div className=" bg-spring-rain-600  " style={{ width: "93%" }}>
                  <div
                    className="bg-beryl-green-300  py-4 rounded-md mt-1 flex gap-2 flex-wrap justify-start px-4 "
                    style={{ background: "#E3F1E2", width: "100%", paddingLeft: "22%" }}
                  >
                    {dateValue.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) ? (
                      reservingButtons.length ? (
                        reservingButtons
                      ) : (
                        <span className="">"لا يوجد مواعيد متاحة لاضافتها"</span>
                      )
                    ) : (
                      ` عفوا لا يمكنك اضافة مواعيد متاحة في تاريخ قديم:) ${(setisNotOutdated && setisNotOutdated(false)) || ""}`
                    )}
                    {/* <div className="px-1 sm:px-4 py-1 sm:py-2 bg-white rounded-md ">
                {time}
              </div> */}
                  </div>
                </div>
                {/*  */}
              </div>
              <div className=" mt-3 " style={{ width: "93%" }} onClick={confirmAppointments}>
                <Btn
                  stylee="bg-silver-tree-700 text-white text-lg sm:px-1  w-full  h-10"
                  children="
                  تاكيد 
                  "
                />
              </div>
            </>
          ) : (
            <div style={{ height: "700px", marginTop: "50px", width: "95%" }}>
              <Load contain={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    specialist: state.specialist,
  };
};

CalenderDoc = connect(mapStateToProps)(CalenderDoc);
export { CalenderDoc };
