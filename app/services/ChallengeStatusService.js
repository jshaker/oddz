export const ROUND1_CHALLENGER = "ROUND1_CHALLENGER";
export const ROUND1_CHALLENGEE = "ROUND1_CHALLENGEE";
export const ROUND2_CHALLENGER = "ROUND2_CHALLENGER";
export const ROUND2_CHALLENGEE = "ROUND2_CHALLENGEE";
export const ROUND3_CHALLENGER = "ROUND3_CHALLENGER";
export const ROUND3_CHALLENGEE = "ROUND3_CHALLENGEE";
export const ROUND4_CHALLENGER_SUCCESS = "ROUND4_CHALLENGER_SUCCESS";
export const ROUND4_CHALLENGEE_SUCCESS = "ROUND4_CHALLENGEE_SUCCESS";
export const ROUND4_CHALLENGER_FAILURE = "ROUND4_CHALLENGER_FAILURE";
export const ROUND4_CHALLENGEE_FAILURE = "ROUND4_CHALLENGEE_FAILURE";

export function getChallengeStatus(challenge){
    if(typeof challenge.challengeeID === "undefined" && typeof challenge.challengerID !== "undefined"){
        if(typeof challenge.oddzTotal === "undefined"){
            return ROUND1_CHALLENGEE;
        }
        else {
            if(typeof challenge.challengeeGuess === "undefined"){
                return ROUND2_CHALLENGEE;
            }
            else{
                if(typeof challenge.challengerGuess === "undefined"){
                    return ROUND3_CHALLENGEE;
                }
                else{
                    if(challenge.challengerGuess === challenge.challengeeGuess){
                        return ROUND4_CHALLENGEE_SUCCESS;
                    }
                    else{
                        return ROUND4_CHALLENGEE_FAILURE;
                    }
                }
            }
        }
    }
    else if(typeof challenge.challengerID === "undefined" && typeof challenge.challengeeID !== "undefined"){
        if(typeof challenge.oddzTotal === "undefined"){
            return ROUND1_CHALLENGER;
        }
        else {
            if(typeof challenge.challengerGuess === "undefined"){
                return ROUND2_CHALLENGER;
            }
            else{
                if(typeof challenge.challengeeGuess === "undefined"){
                    return ROUND3_CHALLENGER;
                }
                else{
                    if(challenge.challengerGuess === challenge.challengeeGuess){
                        return ROUND4_CHALLENGER_SUCCESS;
                    }
                    else{
                        return ROUND4_CHALLENGER_FAILURE;
                    }
                }
            }
        }
    }
    return "";
}