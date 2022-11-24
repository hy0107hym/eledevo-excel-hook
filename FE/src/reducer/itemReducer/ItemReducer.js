import { actions } from "../../container";

const { types } = actions;
const INITIAL_STATE = {
    listItem: [],
    isFetching: false,
    isError: false,
    message: ""
}
export default function ItemReducer(
    state = INITIAL_STATE,
    { type, payload }

) {
    switch (type) {
        case types.GET_REQUEST:
        case types.ADD_REQUEST:
        case types.DELETE_REQUEST:
        case types.UPDATE_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ""
            }
        case types.GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listItem: payload.listData
            }
        case types.ADD_SUCCESS:
        case types.DELETE_SUCCESS:
        case types.UPDATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case types.GET_FAILURE:
        case types.ADD_FAILURE:
        case types.DELETE_FAILURE:
        case types.UPDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        default:
            return state
    }
}