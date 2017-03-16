import {ADD_TO_CHALLENGES_LIST, REMOVE_FROM_CHALLENGES_LIST} from './actionTypes';

export function addToChallengesList(challenge) {
    return { type: ADD_TO_CHALLENGES_LIST, challenge };
}

export function removeFromChallengesList(challengeID) {
    return { type: REMOVE_FROM_CHALLENGES_LIST, challengeID };
}