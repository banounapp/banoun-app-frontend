import { client } from "../../services/client";

import {
    Post_Review,
    Get_Review,
    Error_Review
} from "./types";

export const GetReview = () => async (dispatch) => {
    try {
        const res = await client.get("/SiteReviews");
        dispatch({
            type: Get_Review,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: Error_Review,
            payload: { msg: err },
        });
    }
};

export const PostReview = (data) => async (dispatch) => {
    
    try {
        const res = await client.post("/SiteReviews", data);
        dispatch({
            type: Post_Review,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: Error_Review,
            payload: { msg: err },
        });
    }
};