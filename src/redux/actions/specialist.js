import { client } from "../../services/client";

import { Error_specialist, Get_specialist, Get_One_specialist ,Get_Profile_Spec} from "./types";

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
    if(res){

      console.log(res,res.data)
        await  dispatch({
            type: Get_One_specialist,
            payload: res.data,
          });

    }
  } catch (err) {
   await  dispatch({
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
    return res.data
  } catch (err) {
   await  dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};

export const Get_Edit_Specialist = (data) => async (dispatch) => {

  
  try {
    const res = await client.post(`/specialist/edit`, data);
    if(res){
      console.log(res.data)
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


///////////////////////////////// get doctor appointments /////////////////////////////

export const getDoctorAppointments = (id) => async (dispatch) => {
  try {
    const appointment = await client.get(`/appointment/specialist/${id}`);
    console.log(appointment);
    dispatch({ type: "Get_specialist_appointments", payload: appointment.data });
  } catch (err) {
    dispatch({
      type: Error_specialist,
      payload: { msg: err },
    });
  }
};



///////////////////////////////// get doctor CLients /////////////////////////////
export const getDoctorClients = async ()  => {
  try {
    const clients = await client.get(`/specialist/clients`);
    console.log(clients.data);
    return clients.data
  } catch (err) {
    console.log(err) ; 
    return false
  }
};
