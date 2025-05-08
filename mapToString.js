function change(string){
    // ..
    let outputString = new Array(26).fill(0);
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let index
    
    string = string.toLowerCase();
    
    for (let i=0; i<string.length+1; i++){
      console.log(string.charAt(i));
      if(alph.includes(string.charAt(i))){
        index = alph.indexOf(string.charAt(i));
        alph[index] = '';
        outputString[index] = 1;
      }
    }
    return outputString.join('');
  }