function grabscrab(anagram, dictionary) {
    // Your code here
    let matches = [];
    //remove all words from dictionary that do not match length of anagram
    let dictFilter = dictionary.filter(word => word.length === anagram.length)
    
    //check if every letter in filtered words exists in the anagram
    let dictFilterFilter = dictFilter.forEach(word => {
      let match = true;
      let wordArr = word.split('');
      let anaLeft = anagram.split('');
      wordArr.forEach((letter) => {
        if (anaLeft.includes(letter) && match) {
          let ind = anaLeft.indexOf(letter);
          anaLeft = anaLeft.slice(0,ind) + anaLeft.slice(ind+1);
        }
        else {
          match = false;
        }
      });
      if (match) matches.push(word);
    });
    console.log(matches);
    return matches
  }