function intersect(...arrays) {
  if (arrays.length === 0) return [];
  
  //first array is the starting point
  const first = arrays[0].slice();
  
  //remove the first array 
  const red = arrays.slice(1);
  
  const com = red.reduce((common, nextArr) => {
    //consolidated array that only contains what is in common with following array
    return common.filter(item => nextArr.includes(item))}
    , first);
  
  return com;

}
