function dotCalculator(equation) {
  let separated = equation.split(' ');
  console.log(separated)
    
  if(separated[1] === '+'){
    let sum = separated[0] + separated[2];
    return sum;
  }
  else if(separated[1] === '-'){
    let sub = separated[0].length - separated[2].length;
    let subString = '';
    for (let i=0; i<sub; i++) {
      subString += '.';
    }
    return subString;
  }
  else if(separated[1] === '*'){
    let mult = separated[0].length * separated[2].length;
    let multString = '';
    for (let i=0; i<mult; i++) {
      multString += '.';
    }
    return multString;
  }
  else if(separated[1] === '//'){
    let div = Math.floor(separated[0].length / separated[2].length);
    console.log(div);
    let divString = '';
    for (let i=0; i<div; i++) {
      divString += '.';
    }
    return divString;
  }
}