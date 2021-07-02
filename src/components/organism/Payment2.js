import React, { useState, useEffect } from "react";
import { PaymentSteps } from "../molecules/paymentSteps";
import visa from "../../assets/visa.png";
import { Button } from "../atoms/button";
import Payment from "./payment";

export const PaymentTwo = ({ handleClose, setpaymentMethod, setviewNum, setpaymentId, success, attending, appointmentPrice }) => {
  const [selectedOption, setselectedOption] = useState("cash");
  const onValueChange = (event) => {
    setselectedOption(event.target.value);
    setpaymentMethod(event.target.value);
  };
  const isNextDisabled = selectedOption === "cash";
  console.log(isNextDisabled);

  useEffect(() => {
    if(attending == "online"){
      setselectedOption("online");
      setpaymentMethod("online")
    } 
  }, [selectedOption]);

  const handleConfirm = ()=>{
    const body  = {}
    success(body) ;
    //  setviewNum(3);
  }

  return (
    <div class="w-full py-6 mx-0">
      <PaymentSteps bg2="bg-silver-tree text-white  " icon1={<i class="fas fa-check text-silver-tree"></i>} />
      <div className="w-3/5  mt-10 space-y-4 flex  justify-start mr- flex-wrap" style={{ marginRight: "28%", width: "50%" }}>
        <h1 className="text-xl"> طريقة الدفع</h1>
        {attending == "offline" && (
          <div className="text-lg" style={{ width: "100%" }}>
            <input
              type="radio"
              name="cash"
              value="cash"
              checked={selectedOption === "cash"}
              style={{ cursor: "pointer" }}
              onChange={onValueChange}
            />{" "}
            &nbsp;
            <label for="cash" style={{ outline: "none" }}>
              {" "}
              الدفع نقدا
            </label>
          </div>
        )}

        <div className="text-lg" style={{ width: "100%" }}>
          <input
            type="radio"
            name="Online"
            value="online"
            checked={selectedOption === "online"}
            style={{ cursor: "pointer" }}
            onChange={onValueChange}
          />
          &nbsp;
          <label for="Online" style={{ outline: "none" }}>
            الدفع بالبطاقة{" "}
          </label>
          <img style={{ width: "45%" }} className="inline mr-10" src={visa} />
        </div>

        {selectedOption === "online" && (
          <Payment
            setpaymentMethod={setpaymentMethod}
            setviewNum={setviewNum}
            setpaymentId={setpaymentId}
            success={success}
            appointmentPrice={appointmentPrice}
          />
        )}

        <div className="flex justify-between   pb-10 pt-8 " style={{ width: "83%" }}>
          <Button
            stylee="border-red-300 border-green-300 shadow text-red-400	"
            enhancement={{ onClick: () => handleClose(), style: { border: "1px solid #77BFA3", width: "70px" } }}
          >
            الغاء
          </Button>

          <Button
            stylee=" shadow "
            enhancement={{ onClick: () => setviewNum(1), style: { background: "#C4C4C4", color: "white", width: "70px" } }}
          >
            السابق
          </Button>

          {/* {isNextDisabled ?  */}
          <Button
            stylee={`shadow text-red-400  `}
            enhancement={{
              onClick: () =>handleConfirm(),
              style: { background: isNextDisabled ? "#77BFA3" : "#C4C4C4", color: "white", width: "70px" },
              disabled: isNextDisabled ? false : true,
            }}
          >
            التالي
          </Button>
          {/* :""} */}
        </div>
      </div>
    </div>
  );
};
