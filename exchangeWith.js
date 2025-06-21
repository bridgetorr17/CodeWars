
function exchangeWith(a, b) {
    // your code here
    const aCopy = a.slice();
    const bCopy = b.slice();
  
    a.length = 0;
    b.length = 0;
  
    for(let i=0; i<bCopy.length; i++){
      a.unshift(bCopy[i]);
    }
    
    for(let i=0; i<aCopy.length; i++){
      b.unshift(aCopy[i]);
    }
  
  }
  