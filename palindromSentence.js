/**
 * @param {string} s
 * @return {boolean}
 */

//string -> array
//remove non alpha numeric characters from array
//check palindrome: for loop through half the letters

var isPalindrome = function(s) {
    let arr = s.toLowerCase().split(' ');
    let arrAlph = []

    arr.forEach(word => {
        let wordChars = word.split('');
        wordChars.forEach(char => {
            arrAlph.push(char)
        })
    })

    let arrAlphFilt = arrAlph.filter(char => {
        let charSt = `${char[0]}`
        return ((96 < charSt.charCodeAt(0) && charSt.charCodeAt(0) < 123) 
                || 47 < charSt.charCodeAt(0) && charSt.charCodeAt(0) < 58 )
    })
    
    for (let i=0; i<arrAlphFilt.length/2; i++){
        if (arrAlphFilt[i] !== arrAlphFilt[arrAlphFilt.length - 1 - i]) return false;
    }
    return true;
};