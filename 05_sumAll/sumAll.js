function isNegative(number) {
    return number < 0;
}

function isInteger(number) {
    return Math.floor(number) === number;
}

const sumAll = function(a, b) {
    if ( 
        (isNegative(a) || isNegative(b)) 
        || ( !(isInteger(a)) || !(isInteger(b))) ) {
        return "ERROR";
    }
    let sum = 0;
    let arr = [a, b];
    arr.sort((a, b) => a - b);
    let smallNum = arr[0];
    let largeNum = arr[1];
    for (let index = smallNum; index <= largeNum; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
