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
    <div className=" pb-5 ">
      <div className="pt-5 px-6 md:px-32 my-14 md:mb-20 mt-10  ">
        <h1 className="text-3xl md:text-4xl mb-4">تواصل معنا </h1>
        <p className="text-sm md:text-2xl mb-4">
          هنا نقدم لك أفضل الارشادات للتربية الصحيحة
        </p>
      </div>
      <div className="block items-center md:flex   px-20 my-14">
        <div className="sm:w-30 lg:w-2/3 md:w-2/5 ">
          <img src="https://media.istockphoto.com/vectors/customer-service-woman-operator-call-center-with-headphones-and-with-vector-id1224838022?b=1&k=6&m=1224838022&s=612x612&w=0&h=JqTUWzhfNx5KTxKGCw2dclO5FVJH_S9a_2KjOEfKv5E="></img>
        </div>

        <div className="space-y-6 lg:w-1/3  md:mx-20 text-center  md:text-right   ">
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
                  className="block text-sm text-gray-00"
                  htmlFor="cus_name"
                >
                  الأسم
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  required=""
                  placeholder="الأسم"
                  aria-label="Name"
                  defaultValue={name}
                  onChange={(e) => onChangeMethod(e)}
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="email">
                  البريد الألكتروني
                </label>
                <input
                  className="w-full px-2   text-gray-700 bg-gray-200 rounded"
                  id="email"
                  name="email"
                  type="text"
                  required=""
                  placeholder="البريد الألكتروني"
                  aria-label="Email"
                  defaultValue={email}
                  onChange={(e) => onChangeMethod(e)}
                />
              </div>
              <div className="mt-2 ">
                <label className=" block text-sm text-gray-600" htmlFor="tesx">
                  مشكلتك
                </label>
                <textarea
                  className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="text"
                  name="text"
                  type="text"
                  required=""
                  placeholder="مشكلتك"
                  aria-label="text"
                  rows="5"
                  cols="10"
                  style={{ resize: "none" }}
                  onChange={(e) => onChangeMethod(e)}
                  defaultValue={text}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="px-2 py-1 md:px-6 mt-6 text-white rounded bg-gray-800"
                  type="submit"
                >
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
