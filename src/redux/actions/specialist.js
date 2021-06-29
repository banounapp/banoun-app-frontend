import { client } from "../../services/client";

import { Error_specialist, Get_specialist, Get_One_specialist, Get_Profile_Spec } from "./types";

export const GetAllSpecialist = () => async (dispatch) => {
  try {
    const res = await client.get("/specialist");
    dispatch({
      type: Get_specialist,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const GetOneSpecialist = (id) => async (dispatch) => {
  try {
    const res = await client.get(`/specialist/${id}`);
    if (res) {

      console.log(res, res.data)
      await dispatch({
        type: Get_One_specialist,
        payload: res.data,
      });

    }
  } catch (err) {
    await dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

//wrong
export const Get_Profile_Specialist = () => async (dispatch) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorizarion": sessionStorage.getItem('token')

    }
  }

  try {
    const res = await client.get(`/specialist`, config);

    await dispatch({
      type: Get_Profile_Spec,
      payload: res.data,
    });
    return res.data
  } catch (err) {
    await dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const Get_Edit_Specialist = (data) => async (dispatch) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorizarion": sessionStorage.getItem('token')

    }
  }
  try {
    const res = await client.post(`/specialist/edit`, data, config);
    if (res) {
      console.log(res.data)
      await dispatch({
        type: Get_Profile_Spec,
        payload: res.data,
      });
    }
  } catch (err) {
    await dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

//createEvent
export const CreateEventSpecialist = (Specialization, Topic, description, value) => async (dispatch) => {
  // const formData = new FormData();
  console.log(Specialization, Topic)
  // formData.append('Specialization', Specialization);
  // console.log(Object.enteriesformData)

  // formData.append('Topic', Topic);
  // formData.append('description', description);
  // formData.append('Date', value);
  const body = {
    Specialization: Specialization, Topic: Topic, description: description, Date: value
  }

  try {
    const res = await client.post('/event', body);
    console.log(res)
    dispatch({
      type: Get_One_specialist,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.message)
    dispatch({
      type: Error_specialist,
      payload: {
        msg: err.response.data.message
      },
    });
  }
};
