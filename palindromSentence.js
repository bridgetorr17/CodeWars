/**
 * @param {string} s
 * @return {boolean}
 */

//string -> array
//remove non alpha numeric characters from array
//check palindrome: for loop through half the letters

// var isPalindrome = function(s) {
//     let arr = s.toLowerCase().split(' ');
//     let arrAlph = []

//     arr.forEach(word => {
//         let wordChars = word.split('');
//         wordChars.forEach(char => {
//             arrAlph.push(char)
//         })
//     })

//     let arrAlphFilt = arrAlph.filter(char => {
//         let charSt = `${char[0]}`
//         return ((96 < charSt.charCodeAt(0) && charSt.charCodeAt(0) < 123) 
//                 || 47 < charSt.charCodeAt(0) && charSt.charCodeAt(0) < 58 )
//     })
    
//     for (let i=0; i<arrAlphFilt.length/2; i++){
//         if (arrAlphFilt[i] !== arrAlphFilt[arrAlphFilt.length - 1 - i]) return false;
//     }
//     return true;
// };

//establish left and right pointers
//while pointers have not reached eachother, consider every alpha numeric character, in order
//if the alphanumeric characters do not equal, it is not a palindrome - return false
//if the pointers have reached the middle with no inequalities, it is a palindrome - return true

var isPalindrome = function(s) {
    let sPal = s.toLowerCase();
    let left = 0;
    let right = sPal.length - 1;

    while (left < right) {
        while (left < right && !isAlpha(sPal[left])) left++;
        while (left < right && !isAlpha(sPal[right])) right--;

        if (sPal[left] !== sPal[right]) return false;
        else {
            left++;
            right--;
        }
    }

    return true;
};

var isAlpha = function(char){
    return ((96 < char.charCodeAt(0) && char.charCodeAt(0) < 123) 
                || 47 < char.charCodeAt(0) && char.charCodeAt(0) < 58 )
}