import React from "react";

export const Section3 = () => {
  return (
    // bg-silver-tree-500
    <div className=" pb-5 bg-zanah-500">
      <div className="pt-5 px-6 md:px-32 my-14 md:mb-20 mt-10  ">
      <div className="flex">
          <div class="w-9  overflow-hidden inline-block">
            <div class=" h-12  bg-silver-tree-500 -rotate-45 transform origin-top-right"></div>
          </div>
          <h1 className="text-3xl md:text-4xl mb-4">تواصل معنا </h1>
        </div>
        <p className="text-sm md:text-2xl mb-4">
          هنا نقدم لك أفضل الارشادات للتربية الصحيحة
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-10">
        <div >
          <img src="images/contact.png" className="m-auto w-56 h-44 lg:w-96 lg:h-80"/>
        </div>

        <div className="space-y-6   md:mx-20 text-center  md:text-right   ">
          <div className="leading-loose">
            <form className="max-w-xl  p-5 ">
              <div className="">
                <label
                  className="block text-lg text-gray-700"
                  htmlFor="cus_name"
                >
                  الأسم
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-white rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  required=""
                  
                  aria-label="Name"
                />
              </div>
              <div className="mt-2">
                <label
                  className="block text-lg text-gray-600"
                  htmlFor="cus_email"
                >
                  البريد الالكتروني
                </label>
                <input
                  className="w-full px-2  py-1 text-gray-700 bg-white rounded"
                  id="cuss_email"
                  name="cuss_email"
                  type="text"
                  required=""
                  
                  aria-label="Email"
                />
              </div>
              <div className="mt-2 ">
                <label
                  className=" block text-lg text-gray-600"
                  htmlFor="cus_email"
                >
                  مشكلتك
                </label>
                <textarea
                  className="w-full px-2 py-2 text-gray-700 bg-white rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                 
                  aria-label="Email"
                  rows="5"
                  cols="10"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="px-2 py-1 md:px-6 mt-6   bg-silver-tree    text-white  rounded ">
                  ارسال
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


