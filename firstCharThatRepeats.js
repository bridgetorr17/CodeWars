function firstDup (s) {
    // your solution here
    let charFound;
    let notYetFound = true;
    
    let sArr = s.split('');
    sArr.forEach((char, index, arr) => {
      let charsAfter = arr.slice(index+1, arr.length);
      
      //if the current character is inclueded in the charsAfter array
      if(charsAfter.includes(char) && notYetFound){
        charFound = char;
        notYetFound = false; //don't need to check characters after
      }
    });
    
    return charFound; 
  }
  
console.log(firstDup('this is'), 'should be i')
console.log(firstDup('levin question'), 'should be e')
console.log(firstDup('no saw'), 'should be none')