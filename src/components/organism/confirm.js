import React, { useState } from "react";
import { Button } from "./../atoms";

import { confirmationCode } from "../../services/auth";
import { withRouter } from 'react-router-dom';

const Confirm = ({history}) => {

  const [validated, setvalidated] = useState(true)
  const [formData, SetData] = useState({
    text: "",
  });
  const { text } = formData;
  const onChange = (e) =>
    SetData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
     const isError  = confirmationCode(formData);
     if(!isError.isError){
       history.push("/login")
     }
     else{
      setvalidated(false)
     }
  };

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <form
          className=" mr-20 md:mr-10 lg:mr-96"
          onSubmit={(e) => onSubmit(e)}
        >
          <h2 className=" mt-20 lg:mt-56 text-lg lg:text-xl">ادخل الكود </h2>
          <p style={{color:"#999"}}>افحص بريدك الالكتروني</p>
          <input
            placeholder="الكود"
            type="text"
            name="text"
            className=" block w-56 md:w-72 lg:w-80 h-10 p-3 mt-10 border-2 border-gray-500 rounded"
            defaultValue={text}
            onChange={(e) => onChange(e)}
          />
          {!validated && <p style={{color:"red" }}>الكود الذي أدخلته غير صحيح</p> }
          <Button
            stylee="bg-silver-tree  text-white my-4 mr-10 md:mr-10 lg:mr-20"
            type="submit"
          >
            تاكيد
          </Button>
        </form>
        <div>
          <img
            src="images/undraw_verified_re_4io7.svg"
            alt="comfirm pic"
            className=" w-56 h-72 mr-10 lg:w-96 lg:h-80 lg:mt-36"
          />
        </div>
      </div>
    </>
  );
};

export default withRouter(Confirm);
