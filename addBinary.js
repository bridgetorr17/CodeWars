function calculate(num1,num2){
  console.log(num1, num2)
  
  //calculate first number as decimal
  let num1Arr = [];
  let firstNum = 0;
  
  //if the binary is 0 or 1 digits, convert to integer with *1
  if(num1.length < 2) firstNum = num1*1;
  //if the binary is 2 digits or greater...
  else {
    //splite into an array
    num1Arr = num1.split('');
    //for each digit in the binary (starting at the most significat bit)
    for(let i=0; i<num1Arr.length; i++){
      //add that positions binary contribution to the decimal number
      firstNum += num1Arr[i]*(Math.pow(2,num1.length-i-1));
      console.log(firstNum);
    }
  }
  
  //repeat process for second binary number
  let num2Arr = [];
  let secondNum = 0;
  
  if(num2.length < 2) secondNum = num2*1;
  else{
    num2Arr = num2.split('');
    for(let i=0; i<num2Arr.length; i++){
      secondNum += num2Arr[i]*(Math.pow(2,num2.length-i-1));
      console.log(secondNum);
    }
  }
  
  return firstNum + secondNum;
}
