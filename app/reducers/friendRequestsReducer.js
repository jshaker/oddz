import {ADD_TO_FRIEND_REQUESTS, REMOVE_FROM_FRIEND_REQUESTS} from '../actions/actionTypes';
import _ from 'lodash';

export default function friendRequestsReducer(state={}, action){
    switch(action.type){
        case ADD_TO_FRIEND_REQUESTS:
            return Object.assign({}, state, action.friendRequest);
        case REMOVE_FROM_FRIEND_REQUESTS:
            return _.omit(state, action.friendRequestID);
        default:
            return state;
    }
}
