const getTheTitles = function(books) {
    return books.reduce((array, book) => {
        array.push(book.title);
        return array;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
