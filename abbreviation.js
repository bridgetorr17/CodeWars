function abbreviate(string) {
  // ...
  let arr = string.split(' ');
  let abbr = '';
  
  for(let i=0; i<arr.length; i++){
    if(arr[i].includes('-')){
      let arrSplitDash = arr[i].split('-');
      for(let j=0; j<arrSplitDash.length; j++){
        if(arrSplitDash[j].length >= 4){
          let replace = arrSplitDash[j].charAt(0) + (arrSplitDash[j].length-2) + arrSplitDash[j].charAt(arrSplitDash[j].length-1);
          arrSplitDash[j] = replace;
        }
      }
      arr[i] = arrSplitDash.join('-');
    }
    else{
      if(arr[i].replace(/[^a-zA-Z]/g, '').length >= 4){
        let replace = arr[i].charAt(0) + (arr[i].length-2) + arr[i].charAt(arr[i].length-1);
        arr[i] = replace;
      }
    }
  }
  return arr.join(' ')
}