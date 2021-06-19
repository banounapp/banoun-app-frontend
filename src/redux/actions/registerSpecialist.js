import { client } from "../../services/client";

import {
    Get_auth_Specialist,
    Error_auth_specialist,

} from './types';


export const GetAuth = (data) => async dispatch => {
    console.log(data);
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    try {
        const res = await client.post('/specialist', data);
        dispatch({
            type: Get_auth_Specialist,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: Error_auth_specialist,
            payload: { msg: err }
        });
    }
}



