import {
    Get_User,
    Error_User
} from '../actions/types';
const initialState = {
    user: null,
    loading: true,
    error: {},
    isAuthenticated: false,
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case Get_User:
            return {
                ...state,
                user: payload,
                loading: false,
                isAuthenticated: true,

            }
        case Error_User:
            return {
                ...state,
                error: payload,
                loading: false,
                isAuthenticated: false,

            };
        default:
            return state;
    }
}