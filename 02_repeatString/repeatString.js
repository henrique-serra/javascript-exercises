const repeatString = function(string, num) {
    if (num < 0) return "ERROR"
    let finalString = "";
    for (let index = 0; index < num; index++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;