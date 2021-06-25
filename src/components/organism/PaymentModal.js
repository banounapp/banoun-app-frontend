import React, { useState } from "react";
import Popup from "../atoms/popup";
import { PaymentOne } from "./Payment1";
import { PaymentTwo } from "./Payment2";
import { PaymentThree } from "./Payment3";

const PaymentModal = ({ AppointmentDate, setisModalOpened}) => {
  const [viewNum, setviewNum] = useState(1);
  

    console.log(viewNum)
  return (
   
    <Popup content = { viewNum === 1 ? <PaymentOne /> : viewNum === 2 ? <PaymentTwo></PaymentTwo> : <PaymentThree></PaymentThree>}  handleClose = {setisModalOpened}>
        
    </Popup>
 
  );
};


export default PaymentModal;
