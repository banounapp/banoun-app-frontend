import { Error_Event, Get_Event_accepted } from "../actions/types";
const initialState = {
  Eventaccepted: [],
  event: null,
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Error_Event:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case Get_Event_accepted: {
      return {
        ...state,
        Eventaccepted: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
