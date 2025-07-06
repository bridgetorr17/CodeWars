const removeDuplicateIds = (obj) => {
  const sortedKeys = Object.keys(obj)
                         .sort((a, b) => parseInt(a) - parseInt(b));
  
  const sortedObj = sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc
  }, {})
  
  let keys = Object.keys(sortedObj);

  //iterate backwards through object
  for (let i=keys.length; i>0; i--){
    console.log(sortedObj[i])
  }
  console.log('done')
};