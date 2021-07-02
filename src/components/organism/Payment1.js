import React, { useState } from "react";
import { PaymentSteps } from "../molecules/paymentSteps";
import { Button } from "../atoms/button";
export const PaymentOne = ({ handleClose, setattending, setviewNum }) => {
  const [selectedOption, setselectedOption] = useState("offline");
  const onValueChange = (event) => {
    setselectedOption(event.target.value);
  };

  return (
    <div class="w-full py-6 mx-0 justify-center">
      <PaymentSteps bg1="bg-silver-tree text-white  " />
      <div className="w-3/5  mt-10 space-y-4 flex  justify-start mr- flex-wrap" style={{ marginRight: "28%", width: "50%" }}>
        <h1 className="text-xl">أختر طريقة الحضور المناسبة لك</h1>
        <div className="text-lg block " style={{ width: "100%" }}>
          <input type="radio" name="Offline" value="offline" style={{ cursor: "pointer"}} checked={selectedOption === "offline"} onChange={onValueChange} />{" "}
          &nbsp;
          <label for="Offline" style={{ outline: "none" }}>
            الحضور بالعيادة
          </label>
        </div>
        <div className="text-lg block " style={{ width: "100%" }}>
          <input type="radio" name="Online" value="online" checked={selectedOption === "online"} style={{ cursor: "pointer"}} onChange={onValueChange} />
          &nbsp;
          <label for="Online" style={{ outline: "none" }}>
            الحضور أونلاين{" "}
          </label>
        </div>
        <div className="flex justify-between  pb-10 pt-8" style={{ width: "87%" }}>
          <Button
            stylee="border-red-300 border-green-300 shadow-md text-red-400	"
            enhancement={{ onClick: ()=>handleClose(), style: { border: "1px solid #77BFA3", width: "102px" } }}
          >
            الغاء
          </Button>

          {/* <Button stylee="border-2" enhancement={{disabled:"true"}} >السابق</Button> */}
          <Button
            stylee=" shadow-md text-red-400"
            enhancement={{
              onClick: () => {
                setattending(selectedOption);
                setviewNum(2);
              },
              style: { background: "#77BFA3", color: "white", width: "102px" },
            }}
          >
            التالي
          </Button>
        </div>
      </div>
    </div>
  );
};
