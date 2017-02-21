import {combineReducers} from 'redux';
import friendsList from './friendsListReducer';
import userInfo from './userInfoReducer';
import userKey from './userKeyReducer';
import {USER_LOGOUT} from '../actions/actionTypes';

const appReducer = combineReducers({
    friendsList,
    userInfo,
    userKey
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;
