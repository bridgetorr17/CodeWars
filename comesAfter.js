function comes_after(str,l) {
    //code
    let strArr = str.split('');
    let strAft = '';
    strArr.forEach((letter, ind, arr) => {
      if (letter === l || letter === l.toUpperCase()){
        if(arr[ind+1]){
          //if there is a number, punction, space, or underscore
          if (arr[ind+1] !== '!' && 
              arr[ind+1] !== '.' && 
              arr[ind+1] !== '_' && 
              arr[ind+1] !== ' ' && 
              arr[ind+1] !== '0' && 
              arr[ind+1] !== '1' && 
              arr[ind+1] !== '2' && 
              arr[ind+1] !== '3' && 
              arr[ind+1] !== '4' && 
              arr[ind+1] !== '5' && 
              arr[ind+1] !== '6' && 
              arr[ind+1] !== '7' && 
              arr[ind+1] !== '8' && 
              arr[ind+1] !== '9'){
            console.log(arr[ind+1]);
            strAft += arr[ind+1];
          }
        }
      }
    })
    console.log(strAft);
    return strAft;
  }