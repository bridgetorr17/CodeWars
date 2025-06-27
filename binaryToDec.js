const binaryArrayToNumber = arr => {
  // your code
  return arr.reverse()
            .map((bin, ind) => bin*Math.pow(2,ind))
            .reduce((acc, curr) => acc + curr, 0)
};