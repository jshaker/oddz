import {ADD_TO_CHALLENGESLIST, REMOVE_FROM_CHALLENGES_LIST} from '../actions/actionTypes';
import _ from 'lodash';

export default function challengesListReducer(state={}, action){
    switch(action.type){
        case ADD_TO_CHALLENGESLIST:
            return Object.assign({}, state, action.challenge);
        case REMOVE_FROM_CHALLENGES_LIST:
            return _.omit(state, action.challengeID);
        default:
            return state;
    }
}
