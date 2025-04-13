function removeNb (n) {
    /*
    THE MATH
    
    sum = n(n+1) / 2
    a*b = sum - a - b
    ab + a + b = sum
    a(b + 1) + b = sum
    a(b + 1) + (b + 1) - 1 = sum
    (a + 1) + (b + 1) = sum + 1 = target
    a + 1 = target / (b + 1)
    a = (target / (b + 1)) - 1
    */
    
    
    //return array
    let results = [];
    
    //get total sum
    let sum = (n*(n+1))/2;
    let target = sum + 1;
    
    for (let b = 1; b <= n; b++) {
      //run the equation 
      const a = (target / (b + 1)) - 1;
      
      //if a is a whole number, it will be part of a pair
      if (a % 1 === 0 && a <= n) {
        results.push([b, a]);
      }
    }
    
    return results;
  }