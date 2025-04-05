function computeDepth (x){

    let full = false;
    let i = 0;
    let digits = [];
    
    while(!full){
      //multiply number by increasing depth
      i = i + 1;
      let multiple = x * i;
      let multStr = multiple.toString();
      
      //add each digit to digits array if not already accounted for
      for(let j = 0; j < multStr.length; j++){
        if(!digits.includes(multStr.charAt(j))){
          digits.push(multStr.charAt(j));
        }
      }
      
      //once all digits are accounted for breakout of while loop
      if(digits.length === 10) full = true;
    }
    
    return i;
  }