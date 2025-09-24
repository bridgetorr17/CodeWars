/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(' ')
    
    while(arr.length > 0){
        //starting from back, check for word
        if(arr[arr.length - 1] !== '') return arr[arr.length - 1].length;
        //pop last element off array
        else arr.pop();
    }

    return 0;
};