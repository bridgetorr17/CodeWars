function remove(str, what) {
    //code me
    let strRemoved = str;
    let removedIndex = 0;
    
    //for every char property in what
    for (let prop in what){
      //remove the first n instances of that character, 
      //where n=value of that property
      for(let i = 0; i<what[prop]; i++){
        strRemoved = strRemoved.replace(prop, '');
        console.log(strRemoved);
      }
    }
    
    //return str with removed characters
    return strRemoved;
  }
  