const removeDuplicateIds = (obj) => {
  //sort the keys in order first
  const sortedKeys = Object.keys(obj)
                           .sort((a, b) => parseInt(a) - parseInt(b));
  
  //make a sorted object from the sorted keys
  const sortedObj = sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc
  }, {})
  
  let ids = []; //tracking all values in obj
  
  //iterate backwards through object
  for (let i=sortedKeys.length; i>0; i--){
    sortedObj[sortedKeys[i-1]] = sortedObj[sortedKeys[i-1]].filter((letter) => {
      if (!ids.includes(letter)){
        ids.push(letter);
        return true;
      } else{
        return false;
      }
    });
  }

  return sortedObj;
};