import React from "react";
import { Btn } from "../atoms/btn";

export const Header = () => {
  return (
    <div className="block items-center md:flex   px-20 my-14">
      <div className="sm:w-30 lg:w-2/3 md:w-2/5 ">
        <img
          className="m-auto"
          alt=""
          src="https://img.freepik.com/free-vector/family-meeting-grandparents-country-house-excited-children-parents-visiting-grandmother-grandfather-boy-running-granny-vector-illustration-happy-family-love-parenting_74855-8358.jpg?size=626&ext=jpg"
        ></img>
      </div>
      <div className=" bg-green space-y-6 lg:w-1/3  md:mx-20 text-center  md:text-right   ">
        <div className="space-y-6">
          <h1 className="text-xl lg:text-3xl md:text-xl   sm:text-sm   ">
            أهلا بك في{" "}
            <span className="text-4xl  md:text-4xl lg:text-6xl">بنون</span>
          </h1>
          <div>
            <h3 className="text-xl  lg:text-3xl md:text-2xl ">
              كن معلما لأبنك في الصغر{" "}
            </h3>
            <h3 className="text-lg lg:text-3xl md:text-2xl  ">
              و صديقا حين يكبر
            </h3>
          </div>
        </div>
        {sessionStorage.getItem('token') ?
          <> <Btn stylee=" py-1 text-white text-lg mx-0 px-0 bg-silver-tree-500">
            تسجيل دخول
          </Btn>
            <Btn stylee="py-1  text-lg  border-2 mx-3">انشاء حساب</Btn>
          </> : alert('false')}
      </div>
    </div>
  );
};


