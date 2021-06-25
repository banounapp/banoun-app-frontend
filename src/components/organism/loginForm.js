import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import { withRouter } from "react-router-dom";

import InputField from "./../molecules/inputField";
import { Button, Icons } from "./../atoms";
import * as Yup from "yup";
import { login } from "../../services/auth";
import { connect } from 'react-redux';
import {
  Get_User,
  
} from '../../redux/actions/types';

const FormFieldLogin = ({ history, dispatch }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const validate = Yup.object({
    username: Yup.string()
      .max(15, "لابد ان تكون 15 حرف على الاقل")
      .required("مطلوب"),
    password: Yup.string()
      .min(6, "لابد ان يكون 6 ارقام على الاقل")
      .required("مطلوب"),
  });

  const onSubmit = async (values) => {
    const res = await login(values);
    console.log(res);
    if (res.isError) {
      setAlertMessage(res.errorMessage);
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    } else {


      sessionStorage.setItem('token', res.data.token);

      if(res.data.type == "User"){

        await dispatch({
          type: Get_User,
          payload: res.data.data
        });
      }
      else{
        await dispatch({
          type: "Get_Profile_Spec",
          payload: res.data.data
        });
      }
      history.push("/");

    }

  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => (
        <Form
          action="#"
          className="text-center content-center justify-center md:mx-10 "
        >
          <h2 className="my-10 lg:my-7 text-lg md:text-xl lg:text-2xl">
            تسجيل الدخول
          </h2>
          {alertMessage !== "" && (
            <div class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2 w-9/12 justify-self-center align-self-center mx-8">
              <div class="text-white max-w-xs ">{alertMessage}</div>
            </div>
          )}
          <InputField

            SpecificStyle="flex mb-6  md:relative md:right-20"
            iconsProps={{ icon: "text-gray-500 fas fa-user " }}
            textFieldProps={{
              name: "username",
              placeholder: "اسم المستخدم",
              type: "text",
            }}
          />

          <InputField
            SpecificStyle="flex  md:relative md:right-20"
            iconsProps={{ icon: "text-gray-500 fas fa-lock " }}
            textFieldProps={{
              name: "password",
              placeholder: "الرقم السرى",
              type: "password",
            }}
          />

          <Button stylee="bg-silver-tree  text-white my-4" type="submit">
            تسجيل الدخول
          </Button>

          <p className="social-text text-base mt-6 ">
            او سجل دخول عن طريق مواقع التواصل الاجتماعيه
          </p>

          <Button
            stylee="bg-gray-100 border-2 border-gray-200 text-gray-600 my-3  "
            type="submit"
          >acebook
            <Icons iconLink="fab fa-facebook-f" to="/login" />
          </Button>
          <Button
            stylee="bg-gray-100 border-2 border-gray-200 text-gray-600 mx-3 my-3"
            type="submit"
          >oogle
            <Icons iconLink="fab fa-google" to="/login" />
          </Button>
          <br></br>

          <p className=" mx-2 my-5  inline-block lg:hidden ">ليس لديك حساب؟ </p>
          <Link to="/register" className="text-silver-tree  inline-block  lg:hidden" >
            انشاء حساب
          </Link>
          <span style={{display:"inline-block", width:"10px"}}> ,</span>
          <Link to="/registerCousulter" className="text-silver-tree  inline-block  lg:hidden">
           انشاء حساب كمتخصص
          </Link>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => dispatch;

export default withRouter(connect(mapDispatchToProps)(FormFieldLogin))
