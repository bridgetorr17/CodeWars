function colourful(number) {
    let colors = [];
    let numArr = Array.from(String(number), Number);
    let prod = numArr[0];
    let neigh = 1;
    
    for (let i=0; i<numArr.length; i++){
      //if that digit is already in array
      if(colors.indexOf(numArr[i]) != (-1)) return false;
      else colors.push(numArr[i])
      
      //if the next digit exists 
      if(numArr[i+1] != undefined){
        neigh = numArr[i]*numArr[i+1];
        
        if(colors.indexOf(neigh) != (-1)) return false;
        else colors.push(neigh);
        
        //continue the entire product
        prod *= numArr[i+1]; 
      }
    }
    
    if(colors.indexOf(prod) != (-1)) colors.push(prod);
    return true;
  }