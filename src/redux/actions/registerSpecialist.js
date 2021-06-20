import { client } from "../../services/client";

import { Get_auth_Specialist, Error_auth_specialist } from "./types";

export const GetAuth =
  (data, img_upload, NationalID_upload, certification_upload) =>
  async (dispatch) => {
    console.log(img_upload, NationalID_upload, certification_upload);

    const formData = new FormData();
    if (img_upload) {
      let img = img_upload.target.files[0];
      console.log(img);

      formData.append("image", img);
      console.log(formData);
    }
    if (NationalID_upload) {
      let img = NationalID_upload.target.files[0];
      console.log(img);

      formData.append("image", img);
      console.log(formData);
    }
    if (certification_upload) {
      let img = certification_upload.target.files[0];
      console.log(img);

      formData.append("image", img);
      console.log(formData);
    }

    formData.append("username", data.username);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("job", data.job);
    formData.append("gender", data.gender);
    formData.append("Specialization", data.Specialization);
    formData.append("bio", data.bio);

    console.log(formData);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    try {
      const res = await client.post("/specialist", formData);
      dispatch({
        type: Get_auth_Specialist,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Error_auth_specialist,
        payload: { msg: err },
      });
    }
  };
