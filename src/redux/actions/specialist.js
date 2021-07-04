import { client } from "../../services/client";

import {
  Error_specialist,
  Get_specialist,
  Get_One_specialist,
  Get_Profile_Spec,
  Get_specialist_reviews,
  Get_specialist_appointments,
} from "./types";

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

////////////////////////////// get a specialist ////////////////////////////////

export const GetOneSpecialist = (id) => async (dispatch) => {
  try {
    const res = await client.get(`/specialist/${id}`);
    if (res) {
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



  try {
    const res = await client.get(`/specialist`);
    
   await dispatch({
      type: Get_Profile_Spec,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    await dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const Get_Edit_Specialist = (data) => async (dispatch) => {

  
  try {
    const res = await client.post(`/specialist/edit`, data);
    if(res){
  await     dispatch({
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

///////////////////////////////// get doctor review /////////////////////////////

export const getDoctorReview = (id) => async (dispatch) => {
  try {
    const review = await client.get(`/specialistReviews/${id}`);
    dispatch({ type: Get_specialist_reviews, payload: review.data });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};
///////////////////////////////// get doctor appointments /////////////////////////////

export const getDoctorAppointments = (id) => async (dispatch) => {
  try {
    const appointment = await client.get(`/appointment/specialist/${id}`);
    dispatch({ type: Get_specialist_appointments, payload: appointment.data });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};
//createEvent

export const CreateEventSpecialist =
  (Specialization, Topic, description, value) => async (dispatch) => {
    // const formData = new FormData();
    // formData.append('Specialization', Specialization);
    // console.log(Object.enteriesformData)

    // formData.append('Topic', Topic);
    // formData.append('description', description);
    // formData.append('Date', value);
    const body = {
      Specialization: Specialization,
      Topic: Topic,
      description: description,
      Date: value,
    };

    try {
      const res = await client.post("/event", body);
      dispatch({
        type: Get_One_specialist,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: Error_specialist,
        payload: {
          msg: err.response.data.message,
        },
      });
    }
  };




///////////////////////////////// get doctor CLients /////////////////////////////
export const getDoctorClients = async ()  => {
  try {
    const clients = await client.get(`/specialist/clients`);
    return clients.data
  } catch (err) {
    return false
  }
};
