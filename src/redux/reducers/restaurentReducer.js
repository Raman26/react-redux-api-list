import { ActionTypes } from "../constants/action-types";

const initialState = {
    restaurents:[],
};
export const restaurentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_RESTAURENTS:
            return {...state, restaurents:payload};
        default:
            return state;
    }
}

export const searchRestaurentReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_RESTAURENTS:
            return {
                ...state,
                restaurents:action.payload
            };
        default:
            return state;
    }
}