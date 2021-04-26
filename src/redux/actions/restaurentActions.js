import { ActionTypes} from '../constants/action-types';
export const setRestaurents = (restaurents) => {
    return {
        type:ActionTypes.SET_RESTAURENTS,
        payload:restaurents,
    };
};

export const searchRestaurent = (restaurents, name) => {
    return {
        type:ActionTypes.SEARCH_RESTAURENTS,
        payload:restaurents,
    };
};