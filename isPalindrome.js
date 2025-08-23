/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xArr = x.toString().split('');

    for (let i=0; i<Math.floor(xArr.length/2); i++){
        if(xArr[i] !== xArr[xArr.length-1-i]){
            return false;
        }
    }
    return true;
};