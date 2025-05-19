function wave(str){
  // Code here
  if(str.length === 0) return [];
  else str = str.toLowerCase();
  
  let waveArr = [];
  let strArr = str.split('');
  
  strArr.forEach((char, ind) => {
    //reset the strArr with all lower case letters
    strArr = str.split('');
    
    //for all non spaces
    if(char !== ' '){
      //set that character to uppercase
      char = char.toUpperCase();
      
      //replace that strArr index with the capital letter
      let waveArrPlace = strArr;
      waveArrPlace[ind] = char;
      waveArr.push(waveArrPlace.join(''));
    }
  });
  
  return waveArr;
}