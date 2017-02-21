import {SET_USER_INFO} from '../actions/actionTypes';

export default function friendsListReducer(state={}, action){
    switch(action.type){
        case SET_USER_INFO:
            return action.userInfo;
        default:
            return state;
    }
}
