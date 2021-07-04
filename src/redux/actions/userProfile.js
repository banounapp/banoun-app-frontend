import { client } from "../../services/client";

import {locationsDescendingTimeOrder} from "../../utils/DateTime"

import {
    Get_User,
    Error_User,} from "./types";



export const GetUer = () => async dispatch => {

    try {
        const res = await client.get('/users');
        dispatch({
            type: Get_User,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: Error_User,
            payload: { msg: err }
        });
    }
}

///////////////////////////////// update image /////////////////////////////

export const uploadImg = (img_upload, id) => async (dispatch) => {
  const formData = new FormData();
  if (img_upload) {
    let img = img_upload.target.files[0];
    formData.append("image", img);
  }
  try {
    const res = await client.post(`/users/img/${id}`, formData);
    dispatch({
      type: Get_User,
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: Error_User,
      payload: { msg: err },
    });
  }
};

export const GetEditUer = (data) => async dispatch => {
  
    try {
        const res = await client.post('/users/edit', data);
        dispatch({
            type: Get_User,
            payload: res.data
        });

        return true
    } catch (err) {
        dispatch({
            type: Error_User,
            payload: { msg: err }
        });
        return false
    }
}

  


///////////////////////////////// get doctor CLients /////////////////////////////
export const getUserAppointments = async (clientId)  => {
    try {
        
      const appointments = await client.get(`/users/${clientId}/appointments`);
    //   console.log(appointments.data.sort(locationsDescendingTimeOrder));

      return appointments.data.sort(locationsDescendingTimeOrder)
    } catch (err) {
      return false
    }
  };

 


