import {ADD_TO_CHALLENGESLIST, REMOVE_FROM_CHALLENGESLIST, UPDATE_CHALLENGE} from './actionTypes';


export function addToChallengesList(challenge) {
    return { type: ADD_TO_CHALLENGESLIST, challenge };
}

export function removeFromChallengesList(challengeID) {
    return { type: REMOVE_FROM_CHALLENGESLIST, challengeID };
}

export function updateChallenge(challenge) {
    return {type: UPDATE_CHALLENGE, challenge};
}