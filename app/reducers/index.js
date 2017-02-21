import {combineReducers} from 'redux';
import {USER_LOGOUT} from '../actions/actionTypes';
import friendsList from './friendsListReducer';
import userInfo from './userInfoReducer';

const appReducer = combineReducers({
    friendsList,
    userInfo
});

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined
    }

    return appReducer(state, action)
};

export default rootReducer;
