function generateHashtag (str) {
  
    let upperCaseString = str;
    let newChar;
    let charArray = [];
    
    //capitalize all first letters of words
    for(let i=0; i<str.length; i++){
      if (str.charAt(i) === ' ' && str.charAt(i+1) != ' '){
        //make the upper case fix
        newChar = str.charAt(i+1).toUpperCase(); 
        
        //change out that character with its uppercase equivalent
        //easier to do it within array (I think)
        charArray = upperCaseString.split('');
        charArray[0] = charArray[0].toUpperCase();
        charArray[i+1] = newChar;
        upperCaseString = charArray.join('');
      }
    }
    
    
    let hashTag = '#'
    
    //remove all spaces
    let removedSpaces = upperCaseString.replaceAll(' ', '');
    
    //first letter should always be capitalized
    removedSpaces = removedSpaces.charAt(0).toUpperCase() + removedSpaces.slice(1);
    
    //check size of return hashtag
    if(removedSpaces === '' || removedSpaces.length >= 140){
      return false;
    }
    
    else {
      console.log(hashTag + removedSpaces);
      return hashTag + removedSpaces;
    }
  }