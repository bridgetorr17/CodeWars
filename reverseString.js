function reverseLetter(str) {
  //coding and coding..
  let strArr = str.split('');
  let strArrRev = [];
  
  strArr.forEach(item => {
    if(/^[a-zA-Z]$/.test(item)){
      strArrRev.unshift(item);
    }
  });
  return strArrRev.join('');
}