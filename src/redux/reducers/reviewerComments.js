import {
    Post_Comment_Review,
    Get_Comment_Review,
    Error_Review
} from "../actions/types";
const initialState = {
    Reviews: [],
    loading: true,
    error: {},
};
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case Post_Comment_Review:
            return {
                ...state,
                Reviews: [payload, ...state.Reviews],
                loading: false,
            };
        case Error_Review:
            return {
                ...state,
                error: payload,
                loading: false,
            };

        case Get_Comment_Review:
            return {
                ...state,
                Reviews: payload,
                loading: false,
            };

        default:
            return state;
    }
}