import React from "react";
import { DropdownCommunity } from "../atoms";

export const HeaderCommunity = () => {
  return (
    <div className="w-full md:w-4/5 lg:w-4/5 m-auto rounded-lg mt-16 ">
      <div className=" border-2 border-gray-300 h-auto w-full rounded-lg py-7">
        <div className=" border-b-2 border-gray-300 p-3 ">
          <p className=" mr-10 text-xl">عنوان</p>
        </div>
        <div className=" md:flex md:justify-between lg:flex lg:justify-between">
          <div className="flex">
            <img
              src="images/1-business-woman-removebg-preview 2.png "
              className=" rounded-full w-10 h-12 mr-10 mt-5"
            />

            <input
              type="text"
              placeholder="ماذا تريد ان تقول؟"
              className="mr-3 mt-10 text-gray-400 text-xl outline-none"
            />
          </div>
          <div className="flex">
            <div class="flex  items-center justify-center bg-grey-lighter mr-10 md:-mr-80 lg:-mr-80">
              <label class="w-28 flex  items-center  bg-white text-silver-tree rounded-lg  tracking-wide uppercase border border-silver-tree cursor-pointer ">
                <i className="fas fa-cloud-upload-alt px-2"></i>
                <span class="mt-1 mr-2 text-base leading-normal">
                  {" "}
                  اختر صوره{" "}
                </span>
                <input type="file" class="hidden" />
              </label>
            </div>
            <div className="w-full">
              {" "}
              <DropdownCommunity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
