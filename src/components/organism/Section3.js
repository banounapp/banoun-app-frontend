import React, { useState } from "react";
import { Connectus } from "../../services/Connectus";

export const Section3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const { text, email, name } = formData;
  const onChangeMethod = (e) => {
    // console.dir(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
      <div className="block items-center md:flex   px-20 my-14">
        <div className="sm:w-30 lg:w-2/3 md:w-2/5 ">
          <img src="/images/contact.png"></img>
        </div>
        <div className="space-y-6 lg:w-1/3  md:mx-20 text-center  md:text-right   " >
          <div className="leading-loose">
            <form
              className="max-w-xl  p-5 bg-white rounded shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();

                Connectus(formData);
              }}
            >
              <div className="">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="cus_name"
                >
                  الأسم
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                 

                  type="text"
                  required=""
                  
                  aria-label="Name"
                  defaultValue={name}
                  onChange={(e) => onChangeMethod(e)}
                />
              </div>
              <div className="mt-2">
                <label
                  className=" block text-sm text-gray-600"
                  htmlFor="email"
                >
                  البريد الالكتروني
                </label>
                <input
                  className="w-full px-2   text-gray-700 bg-gray-200 rounded"
                     id="email"
                  name="email"
                  type="text"
                  required=""
                  
                  aria-label="Email"
                  defaultValue={email}
                  onChange={(e) => onChangeMethod(e)}
                />
              </div>
              <div className="mt-2 ">
                <label
                  className=" block text-sm text-gray-600"
                  htmlFor="cus_email"
                >
                  مشكلتك
                </label>
                <textarea
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="text"
                  name="text"
                  type="text"
                  required=""
                 
                  aria-label="text"
                  rows="5"
                  cols="10"
                  style={{ resize: "none" }}
                  onChange={(e) => onChangeMethod(e)}
                  defaultValue={text}
                ></textarea>
              </div>
              <div className="text-center">
                <button className="px-2 py-1 md:px-6 mt-6   bg-silver-tree    text-white  rounded "  type="submit">
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
