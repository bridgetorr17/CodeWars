/**
 * @param {string[]} strs
 * @return {string}
 */

//sort strings array alphabetically 

//find the most common prefix between the first and last strings


var longestCommonPrefix = function(strs) {

    strs.sort()

    let short = strs[0];
    let long = strs[strs.length - 1];
    let i=0;

    while (i < short.length && short.charAt(i) === long.charAt(i)){
        i++;
    }

    return short.slice(0, i);
};