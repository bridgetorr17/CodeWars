function splitAndAdd(arr, n) {
  let sumArr = arr;
  let addend1 = [];
  let addend2 = [];
  let splitNum = 0;
  
  while(n > 0){
    if(sumArr.length === 1) return sumArr;
    
    if(sumArr.length%2 !== 0) splitNum = (sumArr.length - 1) / 2;
    else splitNum = sumArr.length / 2;
    
    addend1 = sumArr.slice(0, splitNum)
    addend2 = sumArr.slice(splitNum);
    
    if(addend1.length !== addend2.length) addend1.unshift(0);
    
    let newSumArr = [];
    for(let i=0; i<addend1.length; i++){
      newSumArr[i] = addend1[i] + addend2[i];
    }
    
    sumArr = newSumArr;
    
    n--;
  }
  
  return sumArr;
}