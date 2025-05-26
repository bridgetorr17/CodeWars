function seqlist(first, c, l) {
  // Thou shalt begin !
  let sequence = [];
  for(let i=0; i<l; i++){
    sequence[i] = first + c*i;
  }
  
  console.log(sequence);
  
  return sequence;
}