import * as types from './actionTypes';

export function addToFriendsList(friend) {
    return { type: types.ADD_TO_FRIENDSLIST, friend };
}