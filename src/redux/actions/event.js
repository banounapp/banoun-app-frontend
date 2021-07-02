import { client } from "../../services/client";

import { Error_Event, Get_Event_accepted } from "./types";

export const GetEventsaccepted = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await client.get("/event/accepted", config);
    dispatch({
      type: Get_Event_accepted,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Error_Event,
      payload: { msg: err },
    });
  }
};
