import * as types from '../actions/actionTypes';

export default function friendsListReducer(state={}, action){
    switch(action.type){
        case types.ADD_TO_FRIENDSLIST:
            return Object.assign({}, state, action.friend);
        default:
            return state;
    }
}
