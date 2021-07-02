import { client } from "../../services/client";

import {locationsDescendingTimeOrder} from "../../utils/DateTime"

import {
    Get_User,
    Error_User,

} from './types';

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


export const GetEditUer = (data) => async dispatch => {
  
    try {
        console.log(data);
        const res = await client.post('/users/edit', data);
        console.log(res);
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
      console.log(err) ; 
      return false
    }
  };

 


