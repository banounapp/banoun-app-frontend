import React, { useState } from "react";
import { connect } from "react-redux";
import Popup from "../atoms/popup";
import { PaymentOne } from "./Payment1";
import { PaymentTwo } from "./Payment2";
import { PaymentThree } from "./Payment3";
import { client } from "../../services/client";
import { useParams } from "react-router-dom";

const PaymentModal = ({ AppointmentDate, setisModalOpened, CurrentAppointment, getDoctorAppointments,userId }) => {
  const [viewNum, setviewNum] = useState(1);

  //configure all endpoint post data here and pass changers to children to modify them
  const [paymentMethod, setpaymentMethod] = useState("cash");
  const [attending, setattending] = useState("online"); //atClinic
  const [paymentId, setpaymentId] = useState(null); //atClinic
  const [responseData, setresponseData] = useState({})
  const _id = CurrentAppointment._id;

  const appointmentPrice = CurrentAppointment.price;
  const specialistId = useParams();
  console.log(specialistId);

  const success = async (body) => {
    try {
      body.paymentMethod = paymentMethod;
      body.attending = attending;
      body._id = _id;
      body.userId = userId;
      body.appointmentPrice = appointmentPrice;

      console.log(body)
      const response = await client.patch(`https://banoun-app.herokuapp.com/api/appointment/${_id}`, body);
      console.log("Res", response);
      confirm();
      setresponseData(response.data)
    } catch (error) {
      console.log("err", error);
    }
  };
//   const checkout = () => {
//     const Payload = {
//       paymentMethod,
//       attending,
//       paymentId,
//       _id,
//       //   paymentId from stripe
//     };
//     //call api and update redux  
//   };

  const confirm = () => {
    getDoctorAppointments(specialistId.id);
    setviewNum(3);
  };

  console.log(viewNum);
  return (
    <Popup
    specificStyle={{width :"54.1%" , top:"2%"}}
      content={
        viewNum === 1 ? (
          <PaymentOne handleClose={setisModalOpened} setattending={setattending} setviewNum={setviewNum} />
        ) : viewNum === 2 ? (
          <PaymentTwo
            attending={attending}
            handleClose={setisModalOpened}
            setpaymentMethod={setpaymentMethod}
            setviewNum={setviewNum}
            setpaymentId={setpaymentId}
            success={success}
            appointmentPrice={appointmentPrice}
          ></PaymentTwo>
        ) : (
          <PaymentThree handleClose={setisModalOpened} attending={attending} setviewNum={setviewNum} responseData={responseData} ></PaymentThree>
        )
      }
      handleClose={setisModalOpened}
      removeX ={true}
    ></Popup>
  );
};

// const mapStateToProps = (state) => {
//   return { userProfile: state.userProfile };
// };

// PaymentModal = connect(mapStateToProps)(PaymentModal)
export default PaymentModal;
