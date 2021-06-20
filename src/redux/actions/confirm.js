import { confirm_code, confirm_Error } from "./types";

import { client } from "../../services/client";

//get posts

export const Getcode = (code) => async (dispatch) => {
  try {
    const res = await client.get(`/confirm/${code}`);

    dispatch({
      type: confirm_code,
      payload: res.data,
    });

    // dispatch({ type: profile_clear });
  } catch (err) {
    dispatch({
      type: confirm_Error,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
