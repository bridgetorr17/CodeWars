/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //get right most index
    let ind = digits.length - 1;

    //consider instances of all values in array
    while (ind >= 0){
        //if the current index will not need to carry
        if (digits[ind] < 9){
            //increment index and return array
            digits[ind]++;
            return digits;
        }

        //if the current index will carry a value, set it to 0 and decrement to next sig dig
        digits[ind] = 0;
        ind--;
    }

    //add 1 to start of array
    digits.unshift(1);
    return digits;
};