function convertPalindromes(numbers) {
    let returnArr = [];
    let palindrome = true;
    
    //for each number in the array passed in
    numbers.forEach(num => {
      
      let palindrome = true;
      num = num.toString();
      
      //iterate through half the array and determine if palindrome
      for(let i = 0; i<num.length/2; i++){
        
        //if a digit and its counterpart are not equal
        if(num.charAt(i) !== num.charAt(num.length- 1 - i)){
          
          //not a palindrome, thank you next
          palindrome = false;
          break;
        }
      }
      
      //add value to return array
      if (palindrome) returnArr.push(1);
      else returnArr.push(0);
    });
    
    console.log(returnArr);
    return returnArr;
  };