import {
  Error_specialist,
  Get_specialist,
  Get_One_specialist,
  Get_specialist_reviews,
  Get_specialist_appointments,
} from "../actions/types";

////////////////////////// intial state //////////

const initialState = {
  specialists: [],
  specialist: null,
  reviews: [], // add reviews
  appointments: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
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
      console.log(payload);
      return {
        ...state,
        reviews: payload,
        loading: false,
      };
    ////////////////////////// /// Get Specialist appointments

    case Get_specialist_appointments:
      console.log(payload);
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

    default:
      return state;
  }
}
