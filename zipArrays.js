function zipWith(fn,a0,a1) {
  
    let zippedArr = [];
    
    for (let i=0; i<a0.length; i++){
      if(a1[i] === undefined) break;
      else zippedArr.push(fn(a0[i], a1[i]));
    }
    
    return zippedArr;
  }