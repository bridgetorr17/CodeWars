/**
 * @param {string} s
 * @return {number}
 */

//iterate through the input string
//check if the current character exists in the current substring
//if so, remove all chars before and including that repeated character
//add the new character to the substring
//update the longest substring length

var lengthOfLongestSubstring = function(s) {
    let subStr = [];
    let length = 0;

    for (let i=0; i<s.length; i++){
        let currentCharPos = subStr.indexOf(s.charAt(i))

        if (currentCharPos !== -1){
            //that character already exists in the substring
            subStr.splice(0, currentCharPos + 1);
        }

        subStr.push(s.charAt(i));

        length = Math.max(
            length,
            subStr.length
        )
    }

    return length
};