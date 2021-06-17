import {
    Get_User,
    Error_User
} from '../actions/types';
const initialState = {
    user: null,
    loading: true,
    error: {}
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case Get_User:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case Error_User:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}