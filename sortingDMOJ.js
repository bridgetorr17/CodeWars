//input argument : list (array) of n numbers
//output return : list (printed one number per line)  of n numbers, sorted from smallest to largest

function sortingDMOJ (n){
    const sorted = n.sort((a,b) => a-b);
    sorted.forEach(num => console.log(num));
}

console.log('TEST 1 expected output \n 1 1 2 6');
sortingDMOJ([1,2,1,6]);