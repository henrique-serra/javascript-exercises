const palindromes = function (string) {
    let formatedString = [];
    Array.from(string).forEach(character => {
        const lettersRegex = new RegExp(/[A-Za-z0-9]/);
        if ( lettersRegex.test(character) ) {
            formatedString.push(character.toLowerCase());
        }
    });
    let reversedFormatedStr = Array.from(formatedString).reverse();
    return formatedString.join("") == reversedFormatedStr.join("");
};

// Do not edit below this line
module.exports = palindromes;
