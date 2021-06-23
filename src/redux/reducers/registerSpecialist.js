import {
    Get_auth_Specialist,
    Error_auth_specialist,
} from '../actions/types';
const initialState = {
    auth: null,
    loading: true,
    error: {}
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case Get_auth_Specialist:
            return {
                ...state,
                auth: payload,
                loading: false
            }
        case Error_auth_specialist:
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;
    }
}