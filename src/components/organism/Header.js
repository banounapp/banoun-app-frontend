import React from "react";
import { Btn } from "../atoms/btn";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className=" items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-10"  >
      <div className=" ">
        <img
          className="m-auto w-56 h-44 lg:w-96 lg:h-80"
          alt=""
          src="images/welcome.png"
        ></img>
      </div>
      <div className=" bg-green space-y-6   md:mx-20 text-center  md:text-right   ">
        <div className="space-y-6">
          <h1 className="text-xl lg:text-3xl md:text-xl   sm:text-sm   ">
            أهلا بك في{" "}
            <span className="text-4xl  md:text-4xl lg:text-6xl text-silver-tree-500">بنون</span>
          </h1>
          <div className="text-gray-500">
            <h3 className="text-xl  lg:text-3xl md:text-2xl ">
              كن معلما لأبنك في الصغر{" "}
            </h3>
            <h3 className="text-lg lg:text-3xl md:text-2xl  ">
              و صديقا حين يكبر
            </h3>
          </div>
        </div>
        {
        
       (localStorage.token=="null") &&
          <>
          <Link  to="/login">
          <Btn stylee=" py-1 text-white text-lg mx-0 px-0 bg-silver-tree-500">
            تسجيل دخول
          </Btn>
          </Link>
           <Link to ="/register">
           <Btn stylee="py-1  text-lg text-silver-tree-500  border-silver-tree-500 border mx-3">انشاء حساب</Btn>

           </Link>
          </>  }
      </div>
    </div>
  );
};


