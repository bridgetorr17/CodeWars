function solution(value){
  //...
  let valStr = value.toString();
  let paddedStr = valStr;
  
  for(let i=0; i<(5-valStr.length); i++){
    paddedStr = '0' + paddedStr;
  }

  return `Value is ${paddedStr}`;
}