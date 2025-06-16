function spinWords(string){
  //TODO Have fun
  let strArr = string.split(' ');
  let strArrRev = [];
  strArr.forEach(word => {
    if(word.length >= 5){
      let wordArr = word.split('');
      let wordArrRev = [];
      for(let i=0; i<wordArr.length; i++){
        wordArrRev.unshift(wordArr[i]);
      }
      word = wordArrRev.join('');
    }
    strArrRev.push(word);
  });
  
  return strArrRev.join(' ');
}