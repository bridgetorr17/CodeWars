const matrixfy = str => {
    if(str.length === 0) return 'name must be at least one letter';
    console.log(str);
    // find the closest perfect square
    let sqrt = Math.sqrt(str.length);
    let sqrtRounded = Math.round(sqrt);
    let closestPerfSq = Math.pow(sqrtRounded, 2);
    if (closestPerfSq < str.length){
      //that one is too small, need to go up one square root
      let sqrtNew = Math.sqrt(closestPerfSq);
      sqrtNew++;
      closestPerfSq = Math.pow(sqrtNew, 2);
    }
    let length = Math.sqrt(closestPerfSq);
    
    //empty two dimensional array
    let matrix = Array(length).fill(null).map(() => Array(length));
    
    let strArr = str.split('');
    let count = 0;
    
    //fill the two dimensional array
    for(let i=0; i < length; i++){
      for(let j=0; j < length; j++){
        //if the original string is out of letters, use a '.'
        if(count === strArr.length) matrix[i][j] = '.';
        else {
          matrix[i][j] = strArr[count];
          count++; //keep track of place in original string
        }
      }
    }
    
    console.log(matrix);
    return matrix;
  };
  