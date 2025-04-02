function moveZeros(arr) {
  let zeros = 0;
  
  //remove all zeros from middle, and keep track of how many
  let zerosAtEnd = arr.filter((item) => {
    if(item === 0) zeros++;
    return (item !== 0);
  });
  
  //push zeros back to end of the array
  for(let i=0; i<zeros; i++){
    zerosAtEnd.push(0);
  }
  return zerosAtEnd;
}