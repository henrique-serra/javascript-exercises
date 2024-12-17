const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    return people.reduce((oldest, person) => {
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
        oldest = personAge > oldestAge ? person : oldest;
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
