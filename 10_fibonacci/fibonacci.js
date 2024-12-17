const fibonacci = function(member) {
    if (typeof member === "string") {
        member = Number(member);
    }
    if (member == 0) return 0;
    if (member < 0) return "OOPS";
    let fibonacci = [1, 1];
    for (let index = 2; index < member; index++) {
        fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2])
    }
    return fibonacci[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
