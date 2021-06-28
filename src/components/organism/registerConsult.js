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
          <h2 className=" my-10 lg:my-7 text-lg md:text-xl lg:text-2xl lg:ml-40">
            انشاء حساب كمتخصص
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:gris-cols-2 -mr-80">
            <InputField
              iconsProps={{ icon: "text-gray-500 fas fa-user " }}
              textFieldProps={{
                name: "username",
                placeholder: "الاسم بالكامل",
                type: "text",
              }}
            />

            {/* <InputField
                            iconsProps={{ icon: " fas fa-camera " }}
                            textFieldProps={{ name: 'camera', placeholder: "", type: "file" }} /> */}

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
            {/* <InputField iconsProps={{ icon: "text-gray-500 fas fa-id-card-alt" }}
                            textFieldProps={{ name: 'id', placeholder: "الرقم القومى ", type: "number" }} /> */}
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

            <div className="file-input">
              <input
                type="file"
                id="file"
                className="file"
                name="certification"
              />
            </div>
            {/* <div className="file-input">
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-edit " }}
                type="file"
                id="file"
                className="file"
                name="certification"
                textFieldProps={{
                  name: "certification",
                  placeholder: " شهادة ",
                  type: "file",
                }}
              />
            </div> */}

            {/* <div className="file-input">
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-edit " }}
                type="file"
                id="file"
                className="file"
                name="image"
                textFieldProps={{
                  name: "image",
                  placeholder: " صورة شخصية  ",
                  type: "file",
                }}
              />
            </div> */}

            {/* <div className="file-input">
              <InputField
                iconsProps={{ icon: "text-gray-500 fas fa-edit " }}
                type="file"
                id="file"
                className="file"
                name="NationalID"
                textFieldProps={{
                  name: "NationalID",
                  placeholder: " الرقم القومي  ",
                  type: "file",
                }}
              />
            </div> */}

            {/* <div className="file-input">
              <input type="file" id="file" className="file" name="NationalID" />
              <label htmlFor="file">
                Select file
                <p className="file-name"></p>
              </label>
            </div> */}
            {/* <div className="file-input">
              <input type="file" id="file" className="file" name="image" />
              <label htmlFor="file">
                Select file
                <p className="file-name"></p>
              </label>
            </div> */}
          </div>
          <input
            class="choose-file"
            type="file"
            name="image "
            onChange={(e) => Setimg_upload(e)}
          />
          <input
            class="choose-file"
            type="file"
            name="NationalID "
            onChange={(e) => SetNationalID_upload(e)}
          />
          <input
            class="choose-file"
            type="file"
            name="Certification "
            onChange={(e) => SetCertification_upload(e)}
          />

          <Button
            stylee="bg-silver-tree lg:ml-40 text-white my-4 content-center"
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
