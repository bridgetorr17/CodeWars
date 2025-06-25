function productArray(numbers){
  //your code here
  let sums = [];
  numbers.forEach(num => {
    let numCopy = [...numbers];
    let arr = numCopy.splice(numbers.indexOf(num), 1);
    let prod = numCopy.reduce((product, currentNum) => product*currentNum,
              1);
    sums.push(prod);
  })
  
  return sums;
}