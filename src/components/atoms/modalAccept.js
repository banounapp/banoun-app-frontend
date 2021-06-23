import React from "react";
import { Btn } from "./btn";

export const ModalAccept = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" bg-silver-tree text-white h-10 ml-5 rounded mt-4 px-3 focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className=" text-white ">
          <p>عرض التفاصيل</p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <img src=" images/docgirl.png" className="w-32 h-36" />
                  <button
                    className="p-1  text-black  float-left text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="far fa-times-circle text-black "></i>
                  </button>
                </div>
                {/*body*/}
                <div className=" mr-3">
                  <ul className="text-black text-right py-2 mr-3 text-lg mb-5">
                    <li className="text-gray-400 mt-1">
                      الاسم بالكامل{" "}
                      <span className="text-black p-7">ابتسام البسيوني</span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      البريد الالكتروني{" "}
                      <span className="text-black p-5">ebtisam @gmail.com</span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      رقم التليفون{" "}
                      <span className="text-black p-9"> 01278023989</span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      التخصص{" "}
                      <span className="text-black p-12">اخصائي طب اطفال</span>
                    </li>
                    <li className="text-gray-400 mt-1">
                      {" "}
                      العنوان <span className="text-black p-16"> طنطا</span>
                    </li>

                    <li className="text-gray-400 mt-1">
                      نبذه <span className="text-black p-20"> ست زي الفل</span>
                    </li>
                  </ul>
                </div>
                {/*footer*/}

                <div className=" mr-56 mb-4">
                  <Btn stylee=" bg-silver-tree text-white h-10 ml-5">
                    {" "}
                    تاكيد الحساب
                  </Btn>
                  <Btn stylee=" bg-white border border-silver-tree text-red h-10 ml-5">
                    {" "}
                    رفض
                  </Btn>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
