import {
  Error_specialist,
  Get_specialist,
  Get_One_specialist,
  Get_Profile_Spec,
  Get_specialist_reviews,
  Get_specialist_appointments,
} from "../actions/types";
const initialState = {
  specialists: [],
  specialist: null,
  specialist_auth: null,
  loading: true,
  error: {},
  appointments:null
};
export default function specialist(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    ////////////////////////// /// Get Specialist

    case Get_specialist:
      return {
        ...state,
        specialists: payload,
        loading: false,
      };

    ////////////////////////// /// Get Specialist Reviews

    case Get_specialist_reviews:
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    ////////////////////////// /// Get Specialist appointments

    case Get_specialist_appointments:
      return {
        ...state,
        appointments: payload,
        loading: false,
      };
    case Error_specialist:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case Get_One_specialist:
      return {
        ...state,
        specialist: payload,
        loading: false,
      };

    case Get_Profile_Spec:
      return {
        ...state,
        specialist_auth: payload,
        loading: false,
      };
    case "Error_specialist_auth":
      return {
        ...state,
        specialist_auth: null,
        error: payload,
        loading: false,
      };
    case "Get_specialist_appointments":
      return {
        ...state,
        appointments: payload,
        loading: false,
      };

    default:
      return state;
  }
}
