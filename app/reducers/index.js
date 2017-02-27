import {combineReducers} from 'redux';
import friendsList from './friendsListReducer';
import challengesList from './challengesListReducer';
import userInfo from './userInfoReducer';
import userKey from './userKeyReducer';
import {USER_LOGOUT} from '../actions/actionTypes';

const appReducer = combineReducers({
    friendsList,
    userInfo,
    userKey,
    challengesList
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;
