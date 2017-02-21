import {ADD_TO_FRIENDSLIST} from './actionTypes';

export function addToFriendsList(friend) {
    return { type: ADD_TO_FRIENDSLIST, friend };
}