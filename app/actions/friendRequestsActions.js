import {ADD_TO_FRIEND_REQUESTS, REMOVE_FROM_FRIEND_REQUESTS} from './actionTypes';

export function addToFriendRequests(friendRequest) {
    return { type: ADD_TO_FRIEND_REQUESTS, friendRequest };
}

export function removeFromFriendRequests(friendRequestID) {
    return { type: REMOVE_FROM_FRIEND_REQUESTS, friendRequestID };
}