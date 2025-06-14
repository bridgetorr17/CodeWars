function playPass(s, n) {
  //ASCII 
  //65 - A
  //90 - Z
  //97 - a
  //122 - z
  
  let arr = s.split('');
  let arrReversed = [];
  
  //shift letter by n
  for(let i=0; i<arr.length; i++){
    if(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].includes(arr[i])){
      let ascii = s.charCodeAt(i);
      let originalASCII = ascii;
      ascii += n;
      if (ascii > 90 && originalASCII < 97){
        let diff = ascii - 90;
        ascii = 64 + diff;
      }
      else if (ascii > 122){
        let diff = ascii - 122;
        ascii = 96 + diff;
      }
      
      arr[i] = String.fromCharCode(ascii);
    }
    
    //replace each digit with its complement
    if(['0','1','2','3','4','5','6','7','8','9'].includes(arr[i])){
      arr[i] = (9 - parseInt(arr[i])).toString();
    }
    
    //alternate upper and lowercase 
    if(i%2 ===0){
      arr[i] = arr[i].toUpperCase();
    }
    else{
      arr[i] = arr[i].toLowerCase();
    }
  }
  
  //reverse 
  for(let i=arr.length-1; i>-1; i--){
    arrReversed.push(arr[i]);
  }
  
  return arrReversed.join('');
}