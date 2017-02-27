import {ADD_TO_FRIENDSLIST, REMOVE_FROM_FRIENDSLIST} from './actionTypes';

export function addToFriendsList(friend) {
    return { type: ADD_TO_FRIENDSLIST, friend };
}

export function removeFromFriendsList(friendID) {
    return { type: REMOVE_FROM_FRIENDSLIST, friendID };
}