function add(a, b) {
  let aPadded, bPadded = '';
  
  //make sure both inputs are same length
  if(a.length > b.length) {
    bPadded = String(b).padStart(a.length, '0');
    aPadded = a;
  }
  else {
    aPadded = String(a).padStart(b.length, '0');
    bPadded = b;
  }
  
  //split into arrays to do addition
  let aArr = aPadded.split('');
  let bArr = bPadded.split('');
  let cArr = [];
  let carry = 0;

  //carry out addition for each digit
  for (let i=bArr.length-1; i > -1; i--){
    
    //addition
    let sumC = Number(bArr[i]) + Number(aArr[i]) + carry;
    
    
    //handle the carry
    if (sumC >= 10){
      carry = 1;
      sumC = sumC%10;
    }
    else carry = 0;
    
    cArr.unshift(sumC);
    
    //if the last position has a carry
    if (i===0 && carry===1){
      cArr.unshift(1);
    }
  }
  
  console.log(cArr.join(''));
  return cArr.join('');
}