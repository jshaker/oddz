import {combineReducers} from 'redux';
import friendsList from './friendsListReducer';

const rootReducer = combineReducers({
    friendsList
});

export default rootReducer;
