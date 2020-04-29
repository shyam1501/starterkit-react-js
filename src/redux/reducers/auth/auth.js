import { SET_AUTH } from "../../../constants/actionTypes";
import initialState from '../initialState';

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuthorized: action.isAuthorized };
        default:
            return state;
    }
}