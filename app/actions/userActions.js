import {USER_LOGOUT, SET_USER_INFO, SET_USER_KEY    } from './actionTypes';

export function userLogout() {
    return { type: USER_LOGOUT };
}

export function setUserInfo(userInfo){
    return { type: SET_USER_INFO, userInfo };
}

export function setUserKey(key){
    return { type: SET_USER_KEY, key };
}