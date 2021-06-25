import React from "react";
import { PaymentSteps } from "../molecules/paymentSteps";

export const PaymentThree = () => {
  return (
    <div class="w-full py-6 mx-0">
      <PaymentSteps
        bg3="bg-silver-tree text-white  "
        icon2={<i class="fas fa-check text-silver-tree"></i>}
        icon1={<i class="fas fa-check text-silver-tree"></i>}
      />
      <div className="w-2/5 mx-4 sm:mx-96 mt-10 space-y-4  px-8 ">
        <h1 className="text-xl">
          سيتم أرسال رسالة أليك بالميعاد المحدد مع طبيبط
        </h1>
        <p className="text-lg text-gray-600">سيتم تفعيله في الميعاد المحدد</p>

        <div className="flex justify-between w-2/3 pb-10">
          <div>
            <button>الغاء</button>
          </div>
          <div>
            <button>السابق</button>
          </div>
          <div>
            <button>تأكيد</button>
          </div>
        </div>
      </div>
    </div>
  );
};
