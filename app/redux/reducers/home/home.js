import { ACTION_TYPE_1, ACTION_TYPE_2 } from "../../../constants/actionTypes";
import initialState from '../initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
export default function reducerOne(state = initialState.home, action) {

    switch (action.type) {
        case ACTION_TYPE_1:
            return { ...state, id: action.id };
        case ACTION_TYPE_2:
            return { ...state, count: action.count };
        default:
            return state;
    }
}