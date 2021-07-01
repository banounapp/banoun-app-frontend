import React from "react";
import { PaymentSteps } from "../molecules/paymentSteps";

export const PaymentOne = () => {
  return (
    <div class="w-full py-6 mx-0">
      <PaymentSteps bg1="bg-silver-tree text-white  " />
      <div className="w-2/5 mx-96 mt-10 space-y-4">
        <h1 className="text-xl">أختر طريقة الحضور المناسبة لك</h1>
        <div className="text-lg">
          <input type="radio" name="Offline" value="Offline" checked /> &nbsp;
          <label for="Offline">الحضور بالعيادة</label>
        </div>
        <div className="text-lg">
          <input type="radio" name="Online" value="Online" />
          &nbsp;
          <label for="Online">الحضور أونلاين </label>
        </div>
        <div className="flex justify-between w-2/3 pb-10 pt-8">
          <div>
            <button>الغاء</button>
          </div>
          <div>
            <button>السابق</button>
          </div>
          <div>
            <button>التالي</button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
