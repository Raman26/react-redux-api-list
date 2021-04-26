import {combineReducers} from 'redux';
import {restaurentReducer} from './restaurentReducer';

const reducers =combineReducers ({
    allRestaurents: restaurentReducer,
});

export default reducers;