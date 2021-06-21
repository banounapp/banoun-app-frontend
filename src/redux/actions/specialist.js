import { client } from "../../services/client";

import {
    Error_specialist,
    Get_specialist,
    
} from './types';



export const GetAllSpecialist = () => async dispatch => {
    try {
        const res = await client.get('/specialist');
        dispatch({
            type: Get_specialist,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: Error_specialist,
            payload: { msg: err }
        });
    }
}


