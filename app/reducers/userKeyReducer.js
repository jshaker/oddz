import {SET_USER_KEY} from '../actions/actionTypes';

export default function friendsListReducer(state="", action){
    switch(action.type){
        case SET_USER_KEY:
            return action.key;
        default:
            return state;
    }
}
