var countBits = function(n) {
    // Program Me
    let nArr = [];
    let quotientZero = false;
    let numCopy = n;
    
    //convert n to a binary number
    while(!quotientZero){
      //if even number
      if (numCopy % 2 === 0){
        numCopy = numCopy / 2;
        nArr.unshift(0);
        
      }
      //if odd number
      else {
        numCopy = (numCopy - 1) / 2;
        nArr.unshift(1);
      }
      
      if (numCopy === 0) quotientZero = true;
    }  
    
    
    //count the '1's in the n array
    let onesArr = nArr.filter(b => b===1);
    
    return onesArr.length;
  };