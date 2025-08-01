/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const wordsArr = title.toLowerCase().split(' ');

    const capArr = wordsArr.map(word => {
        if (word.length > 2) return word[0].toUpperCase() + word.slice(1);
        else return word;
    })

    return capArr.join(' ');
};