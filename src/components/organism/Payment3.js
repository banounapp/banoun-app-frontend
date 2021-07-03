import React, { useRef } from "react";
import { PaymentSteps } from "../molecules/paymentSteps";
import { Button } from "../atoms";
export const PaymentThree = ({ handleClose, setviewNum, attending, responseData }) => {
  const textAreaRef = useRef(null);

  const copy = (e) => {
    console.log(textAreaRef);
    textAreaRef.current.select();
    document.execCommand("copy");
  };
  const manageCopy=()=>{}

  // const saveCopied =(e)=>{

  //     e.clipboardData.setData("text/plain", responseData?.joinUrl&&responseData.joinUrl);
  //     console.log(e.clipboardData.getData("text"))

  // }
  return (
    <div class="w-full py-6 mx-0">
      <PaymentSteps
        bg3="bg-silver-tree text-white  "
        icon2={<i class="fas fa-check text-silver-tree"></i>}
        icon1={<i class="fas fa-check text-silver-tree"></i>}
      />

      <div className="w-3/5  mt-10 space-y-4 flex  justify-start mr- flex-wrap" style={{ marginRight: "28%", width: "50%" }}>
        <h1 className="text-xl w-full">
          "تمت العملية بنجاح "{attending == "online" ? ", فيما يلي رابط اجتماعك مع الدكتور" : ""}
        </h1>
        <p className="text-lg text-gray-600 w-full ">
          {attending == "online" ? "سيتم تفعيله في الميعاد المحدد" : "برجاء الحضور في الميعاد المحدد"}
        </p>

        {attending == "online" && (
          <Button
            stylee="border-red-300 border-green-300 shadow 	 truncate"
            enhancement={{ style: { border: "1px solid #77BFA3", width: "90%", color: "#858585",cursor: "pointer",zIndex:100 },onClick:(e) => copy(e) ,onmousedown :(e) => copy(e)  }}
          >
            <i class="far fa-copy mx-3"  style={{ width :"5%"}}></i>
            <input
              type="text"
              style={{
                outLine: "none ",
                border: "none",
                cursor:"pointer",
                ":focus , :hover ,:active": {
                  border: "none",
                },  
                width:"75%",
                paddingLeft:"10px"
              }}
              ref={textAreaRef}
              value={responseData?.joinUrl && responseData.joinUrl}
              onClick={(e) =>manageCopy(e)}
            ></input>
            {/* <span>...</span> */}
          </Button>
        )}
        <Button
          stylee="border-red-300 border-green-300 shadow text-red-400	"
          enhancement={{ onClick: () => handleClose(), style: { border: "1px solid #77BFA3", width: "200px" } }}
        >
          الرجوع للصفحة الرئيسية
        </Button>
      </div>
    </div>
  );
};
