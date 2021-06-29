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
export default function userProfile(state = initialState, action) {
    console.log(state);
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
                user:null
            };
        default:
            return state;
    }
}