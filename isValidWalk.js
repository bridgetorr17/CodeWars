//walk needs to be exactly 10 minutes and need to end up at starting point

function isValidWalk(walk) {
  //insert brilliant code here
  console.log(walk);
  
  let north = walk.filter((dir) => dir === 'n').length;
  let south = walk.filter((dir) => dir === 's').length;
  let east = walk.filter((dir) => dir === 'e').length;
  let west = walk.filter((dir) => dir === 'w').length;
  
  if(((north - south) === 0) && ((west - east) === 0) && (walk.length === 10)) return true;
  else return false;
}