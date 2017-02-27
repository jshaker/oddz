import {ADD_TO_CHALLENGESLIST} from './actionTypes';

export function addToChallengesList(challenge) {
    return { type: ADD_TO_CHALLENGESLIST, challenge };
}
