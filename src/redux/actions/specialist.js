import { client } from "../../services/client";

import {
  Error_specialist,
  Get_specialist,
  Get_One_specialist,
  Get_specialist_reviews,
  Get_specialist_appointments,
} from "./types";

////////////////////////////// get all specialists ////////////////////////////////

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
    dispatch({
      type: Get_One_specialist,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

///////////////////////////////// get doctor review /////////////////////////////

export const getDoctorReview = (id) => async (dispatch) => {
  try {
    const review = await client.get(`/specialistReviews/${id}`);
    console.log(review);
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
    console.log(appointment);
    dispatch({ type: Get_specialist_appointments, payload: appointment.data });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};
