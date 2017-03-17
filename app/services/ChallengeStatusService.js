export const ROUND1_CHALLENGER = "ROUND1_CHALLENGER";
export const ROUND1_CHALLENGEE = "ROUND1_CHALLENGEE";
export const ROUND2_CHALLENGER = "ROUND2_CHALLENGER";
export const ROUND2_CHALLENGEE = "ROUND2_CHALLENGEE";
export const ROUND3_CHALLENGER = "ROUND3_CHALLENGER";
export const ROUND3_CHALLENGEE = "ROUND3_CHALLENGEE";
export const ROUND4_CHALLENGER = "ROUND4_CHALLENGER";
export const ROUND4_CHALLENGEE = "ROUND4_CHALLENGEE";

export function getChallengeStatus(challenge){
    if(typeof challenge.challengeeID === "undefined" && typeof challenge.challengerID !== "undefined"){
        if(typeof challenge.oddzTotal === "undefined"){
            return ROUND1_CHALLENGEE;
        }
        else {
            if(typeof challenge.challengerGuess === "undefined"){
                return ROUND2_CHALLENGEE;
            }
            else{
                if(typeof challenge.challengeeGuess === "undefined"){
                    return ROUND3_CHALLENGEE;
                }
                else{
                    return ROUND4_CHALLENGEE;
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
                    return ROUND4_CHALLENGER;
                }
            }
        }
    }
}