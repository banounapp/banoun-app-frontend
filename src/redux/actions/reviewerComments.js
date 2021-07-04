import { client } from "../../services/client";

import {
    Get_Comment_Review,
    Post_Comment_Review,
    Error_Review
} from "./types";

export const GetCommentReview = () => async (dispatch) => {
    try {
        const res = await client.get("/SiteReviews");
        dispatch({
            type: Get_Comment_Review,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: Error_Review,
            payload: { msg: err },
        });
    }
};

export const PostCommentReview = (data) => async (dispatch) => {
    try {
        const res = await client.post("/SiteReviews", data);
        dispatch({
            type: Post_Comment_Review,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: Error_Review,
            payload: { msg: err },
        });
    }
};