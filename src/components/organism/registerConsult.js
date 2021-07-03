import InputField from "../molecules/inputField";
import { Button } from "../atoms";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "./registerConsult.css";
import { connect } from "react-redux";
import { GetAuth } from "./../../redux/actions/registerSpecialist";
import React, { Fragment, useEffect, useState } from "react";

const RegisterConsult = ({ GetAuth }) => {
  const [img_upload, Setimg_upload] = useState("");
  const [NationalID_upload, SetNationalID_upload] = useState("");
  const [certification_upload, SetCertification_upload] = useState("");

  const validate = Yup.object({
    username: Yup.string()
      .max(15, "لابد ان تكون 15 حرف على الاقل")
      .required("مطلوب"),
    email: Yup.string().email("البريد الالكترونى غير صحيح").required("مطلوب"),
    password: Yup.string()
      .min(6, "لابد ان يكون 6 احرف على الاقل")
      .required("مطلوب"),
    bio: Yup.string().min(7, "لابد ان تكون 7 حرف على الاقل").required("مطلوب"),
    gender: Yup.string()
      .max(7, "لابد ان تكون 7 حرف على الاقل")
      .required("مطلوب"),
    phone: Yup.number().min(8).required("مطلوب"),
    job: Yup.string().max(7, "لابد ان تكون 7 حرف على الاقل").required("مطلوب"),
    NationalID: Yup.string().required("مطلوب"),
    city: Yup.string().required("مطلوب"),
    address: Yup.string().required("مطلوب"),
    Specialization: Yup.string().required("مطلوب"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "لابد ان يكون متشابه")
      .required("مطلوب"),
  });
  // const onSubmit = async (values) => {
  //     console.log(values);

  //     const res = await FormSpecialist(values);
  //     console.log(res);

  // };
  // console.log(FormSpecialist);

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        bio: "",
        gender: "",
        phone: "",
        job: "",
        // image: "",
        // NationalID: "",
        city: "",
        address: "",
        Specialization: "",
        confirmPassword: "",
      }}
      //  validationSchema={validate}

      onSubmit={async (values, actions) => {
        GetAuth(values, img_upload, NationalID_upload, certification_upload);
        // await FormSpecialist(values)
        // alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form
          action="#"
          className="text-center content-center justify-center md:mx-10 lg:mr-30 "
        >
          <h2 className=" my-10 lg:my-7 text-lg md:text-xl lg:text-2xl   text-center">
            انشاء حساب كمتخصص
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:p-8  md:-mr-44 lg:pl-20 ">
            <div className="  ">
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-user " }}
                textFieldProps={{
                  name: "username",
                  placeholder: "الاسم بالكامل",
                  type: "text",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-phone " }}
                textFieldProps={{
                  name: "phone",
                  placeholder: "رقم التليفون",
                  type: "number",
                }}
              />

              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-envelope " }}
                textFieldProps={{
                  name: "email",
                  placeholder: "البريد الالكترونى",
                  type: "email",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-key " }}
                textFieldProps={{
                  name: "password",
                  placeholder: "الرقم السرى",
                  type: "password",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-key " }}
                textFieldProps={{
                  name: "confirmPassword",
                  placeholder: "تأكيد الرقم السرى",
                  type: "password",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-map-marker-alt" }}
                textFieldProps={{
                  name: "address",
                  placeholder: "العنوان  ",
                  type: "text",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-map-marker-alt " }}
                textFieldProps={{
                  name: "city",
                  placeholder: "المحافظه ",
                  type: "text",
                }}
              />
            </div>
            <div className=" ">
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-briefcase " }}
                textFieldProps={{
                  name: "job",
                  placeholder: "وظيفتك ",
                  type: "text",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-venus-mars" }}
                textFieldProps={{
                  name: "gender",
                  placeholder: "النوع",
                  type: "text",
                }}
              />
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-venus-mars" }}
                textFieldProps={{
                  name: "Specialization",
                  placeholder: "التخصص",
                  type: "text",
                }}
              />

              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-edit " }}
                textFieldProps={{
                  name: "bio",
                  placeholder: " نبذه عنك ",
                  type: "text",
                }}
              />

              <div class="flex  items-center justify-center bg-grey-lighter lg:mr-12 md:mr-20 ">
                <label class="w-40 h-10 flex  items-center  bg-white text-silver-tree rounded-lg  tracking-wide uppercase border border-silver-tree cursor-pointer ">
                  <i className="fas fa-cloud-upload-alt px-2"></i>
                  <span class=" text-base leading-normal"> اختر صوره </span>
                  <input
                    class="hidden"
                    type="file"
                    name="image "
                    onChange={(e) => Setimg_upload(e)}
                  />
                </label>
              </div>

              <div class="flex  items-center justify-center bg-grey-lighter lg:mr-12 md:mr-20 mt-5">
                <label class="w-40 h-10 flex  items-center  bg-white text-silver-tree rounded-lg  tracking-wide uppercase border border-silver-tree cursor-pointer ">
                  <i className="fas fa-cloud-upload-alt px-2"></i>
                  <span class="mt-1 mr-2 text-base leading-normal">
                    {" "}
                    الرقم القومي{" "}
                  </span>
                  <input
                    class="hidden"
                    type="file"
                    name="NationalID "
                    onChange={(e) => SetNationalID_upload(e)}
                  />
                </label>
              </div>

              <div class="flex  items-center justify-center bg-grey-lighter lg:mr-12 md:mr-20 mt-5 ">
                <label class="w-40 h-10  flex  items-center  bg-white text-silver-tree rounded-lg  tracking-wide uppercase border border-silver-tree cursor-pointer ">
                  <i className="fas fa-cloud-upload-alt px-2"></i>
                  <span class="mt-1 mr-2 text-base leading-normal">
                    {" "}
                    ارفع شهادتك{" "}
                  </span>
                  <input
                    class="hidden"
                    type="file"
                    name="Certification "
                    onChange={(e) => SetCertification_upload(e)}
                  />
                </label>
              </div>
            </div>
          </div>

          <Button
            stylee="bg-silver-tree  text-white my-8 content-center align-center text-center m-auto"
            type="submit"
          >
            دخول
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { GetAuth })(RegisterConsult);
