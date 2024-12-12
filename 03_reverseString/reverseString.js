// const reverseString = function(string) {
//     let stringToArr = string.split("");
//     let stringToArrReversed = stringToArr.reverse();
//     let arrToStringReversed = stringToArrReversed.join("");
//     return arrToStringReversed;
// };
const reverseString = function(string) {
    let stringToArr = string.split("");
    // let strLength = stringToArr.length;
    // CREATE copy of stringToArr to maintain the original order
    let stringToArrReversed = [...stringToArr];
    for (let i = 0; i < string.length; i++) {      
        
        // the world hello reversed is olleh, wich has the original indexes in the following order: 4, 3, 2, 1, 0. So, the original indexes follow this logic after reversed: string.length - 1 - index
        stringToArrReversed[string.length - 1 - i] = string[i];
    }
    let arrToStringReversed = stringToArrReversed.join("");
    return arrToStringReversed;
};

// Do not edit below this line
module.exports = reverseString;
