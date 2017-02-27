import {SET_USER_INFO} from '../actions/actionTypes';

export default function friendsListReducer(state=null, action){
    switch(action.type){
        case SET_USER_INFO:
            return action.userInfo;
        default:
            return state;
    }
}
