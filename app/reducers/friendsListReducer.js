import {ADD_TO_FRIENDSLIST, REMOVE_FROM_FRIENDSLIST} from '../actions/actionTypes';
import _ from 'lodash';

export default function friendsListReducer(state={}, action){
    switch(action.type){
        case ADD_TO_FRIENDSLIST:
            return Object.assign({}, state, action.friend);
        case REMOVE_FROM_FRIENDSLIST:
            return _.omit(state, action.friendID);
        default:
            return state;
    }
}
