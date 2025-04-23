function matrixMultiplication(a, b) {
    let row = a.length;
    
    //make empty square array
    let result = Array(row).fill(null).map((arr) => Array(row).fill(0));
    
    for(let i=0; i<row; i++){
      for(let j=0; j<row; j++){
        for(let k=0; k<row; k++){
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
        
    return result;
  }