import {ADD_TO_CHALLENGESLIST} from '../actions/actionTypes';

export default function challengesListReducer(state={}, action){
    switch(action.type){
        case ADD_TO_CHALLENGESLIST:
            return Object.assign({}, state, action.challenge);
        default:
            return state;
    }
}
