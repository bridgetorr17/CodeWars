function findUniq(arr) {
  // do magic
  let prev = 0;
  console.log('new test')
  
  for(let i=0; i<arr.length; i++){
    //get the current number of the array
    let num = arr[i];
    console.log(`current number is ${i}`)
    
    //make a new array without that number
    let newArr = arr.slice(i+1);
    console.log(`the new array slice is ${newArr}`)
    
    if(newArr.length === 1 && prev === num){
      return newArr[0];
      console.log(`last number in the array, and the previous number `)
    }
    else if (newArr.length === 1 && prev !== num){
      return num;
    }
    //if the new array does not include the original number
    else if(!newArr.includes(num)){
      return num;
    }
    else prev = num;
  }
  
}
