const removeFromArray = function(array, ...elementsToRemove) {
    let newArray = [...array];
    for (const elementToRemove of elementsToRemove) {
        newArray = newArray.filter(element => element !== elementToRemove)
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
