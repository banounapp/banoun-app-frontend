import { confirm_code, confirm_Error } from "../actions/types";
const initialState = {
  code: null,
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case confirm_code:
      return {
        ...state,
        code: payload,
        loading: false,
      };
    case confirm_Error:
      return {
        ...state,
        code: payload,
        loading: false,
      };

    default:
      return state;
  }
}
