import React, { useState } from "react";
import { PaymentOne } from "./Payment1";
import { PaymentTwo } from "./Payment2";
import { PaymentThree } from "./Payment3";

const PaymentModal = ({ AppointmentDate }) => {
  const [viewNum, setviewNum] = useState(1);

  return (
    <div
      style={{ position: "absolute", top: "" }}
      className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50">
        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {viewNum === 1 ? <PaymentOne /> : viewNum === 2 ? <PaymentTwo></PaymentTwo> : <PaymentThree></PaymentThree>}
        </div>
      </div>
    </div>
  );
};


export default PaymentModal;
