import {ADD_TO_CHALLENGESLIST, REMOVE_FROM_CHALLENGESLIST, UPDATE_CHALLENGE} from '../actions/actionTypes';
import _ from 'lodash';

export default function challengesListReducer(state={}, action){
    switch(action.type){
        case ADD_TO_CHALLENGESLIST:
            return Object.assign({}, state, action.challenge);
        case REMOVE_FROM_CHALLENGESLIST:
            return _.omit(state, action.challengeID);
        case UPDATE_CHALLENGE:
            return Object.assign({}, state, action.challenge);
        default:
            return state;
    }
}
