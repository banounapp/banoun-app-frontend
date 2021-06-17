import {
    Get_categories,
    Error_categories,
    Get_category,
    sub_category
} from './types';

import { client } from "../../services/client";


export const GetAllCategories = () => async dispatch => {

    try {

        const res = await client.get('/category');


        dispatch({
            type: Get_categories,
            payload: res.data
        });


    } catch (err) {


        dispatch({
            type: Error_categories,
            payload: { msg: err }

        });

    }

}






export const GetCategory = (id) => async dispatch => {

    try {

        const res = await client.get(`/category/${id}`);


        dispatch({
            type: Get_category,
            payload: res.data
        });


    } catch (err) {


        dispatch({
            type: Error_categories,
            payload: { msg: err }

        });

    }

}


export const GetSubCategory = (catId, subId) => async dispatch => {

    try {

        const res = await client.get(`/category/${catId}/${subId}`);


        dispatch({
            type: sub_category,
            payload: res.data
        });


    } catch (err) {


        dispatch({
            type: Error_categories,
            payload: { msg: err }

        });

    }

}