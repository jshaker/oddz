export function validateGuess(value,oddzTotal) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10)) &&
        parseInt(Number(value)) >= 0 &&
        parseInt(Number(value)) <= oddzTotal;
}

export function isPositiveInt(value){
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10)) &&
        parseInt(Number(value)) >= 0;
}