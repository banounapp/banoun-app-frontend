import { client } from "../../services/client";

import {
    Get_User,
    Error_User,

} from './types';

export const GetUer = () => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorizarion": sessionStorage.getItem('token')

        }
    }
    try {
        const res = await client.get('/users', config);
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
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorizarion": sessionStorage.getItem('token')

        }
    }
    try {
        // console.log(data);
        const res = await client.post('/users/edit', data, config);
        // console.log(res);
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

