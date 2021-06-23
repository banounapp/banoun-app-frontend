import React from "react";

export const PaymentSteps = ({ icon1, icon2, icon3, bg1, bg2, bg3 }) => {
  return (
    <div>
      <div class="flex  justify-center">
        <div class="w-1/5">
          <div class="relative mb-2">
            {/*           Line                     */}
            <div
              class="absolute z-0 flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - .5rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  class=" w-0 bg-green-300 py-px rounded"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            <div
              class={`relative z-10 w-10 h-10 mx-auto ${
                bg1 || "bg-white border-2 border-gray-200 text-black"
              } rounded-full text-lg  flex items-center`}
            >
              <span class="text-center my-auto  w-full">{icon1 || 1}</span>
            </div>
          </div>

          <div class="text-xs text-center md:text-base">طريقة الحضور</div>
        </div>

        <div class="w-1/5">
          <div class="relative mb-2">
            {/* line */}
            <div
              class=" absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - .5rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                <div
                  class="w-0 bg-green-300 py-px rounded"
                  //   To Edit the hovre change width dynamicllay
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* Line */}

            <div
              class={`relative z-10 w-10 h-10 mx-auto ${
                bg2 || "bg-white border-2 border-gray text-black"
              } rounded-full text-lg  flex items-center`}
            >
              <span class="text-center text-gray-600 w-full">{icon2 || 2}</span>
            </div>
          </div>

          <div class="text-xs text-center md:text-base">الدفع</div>
        </div>

        <div class="w-1/5">
          <div class="relative mb-2">
            <div
              class="absolute flex align-center items-center align-middle content-center"
              style={{
                width: "calc(100% - .5rem)",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            <div
              class={`relative z-10 w-10 h-10 mx-auto ${
                bg3 || "bg-white border-2 border-gray text-black"
              } rounded-full text-lg  flex items-center`}
            >
              <span class="text-center  w-full">{icon3 || 3}</span>
            </div>
          </div>

          <div class="text-xs text-center md:text-base">تأكيد</div>
        </div>
      </div>
    </div>
  );
};
