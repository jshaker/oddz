import {USER_LOGOUT, SET_USER_INFO} from './actionTypes';

export function userLogout() {
    return { type: USER_LOGOUT };
}

export function setUserInfo(userInfo){
    return { type: SET_USER_INFO, userInfo };
}