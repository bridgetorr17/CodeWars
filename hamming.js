/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

 //convert both numbers to binary array (4 => [1, 0], 5 => [1,0,1])
 //if number not the same length, pad smaller array with 0s
 //iterate through array and accumulate differences at indeces
var hammingDistance = function(x, y) {
    let xArr = decToBinary(x);
    let yArr = decToBinary(y);
    let ham = 0;

    if (xArr.length > yArr.length) {
        let addingZ = xArr.length - yArr.length;
        let zeros = new Array(addingZ).fill(0)
        yArr = zeros.concat(yArr);
    }
    else if (yArr.length > xArr.length) {
        let addingZ = yArr.length - xArr.length;
        console.log(addingZ);
        let zeros = new Array(addingZ).fill(0)
        xArr = zeros.concat(xArr);
    }

    xArr.forEach((dig, ind) => {
        if (yArr[ind] !== dig) ham++;
    })

    return ham;
};

function decToBinary(num){
    let bit = 0;
    let ret = [];
    
    while(num > 0){
        bit = num % 2;
        ret.unshift(bit);
        num = Math.floor(num / 2);
    }
    return ret;
}   

