function campfire(friends, quote, index) {
  let passedQuote = quote;
  //edge case, the first person is asked what they were told
  if(index===0){
    return `${friends[friends.length-1][0]} told me that I told ${friends[friends.length-1][0]} '${passedQuote}'.`
  }
  
  //get array of friend names
  let names = friends.map(friend => friend[0]);
  
  for(let i=0; i<=index; i++){
    console.log(friends[i][1]);
    
    if(friends[i][1] === 'participative'){
      if (passedQuote.includes('Whatever.')){
        passedQuote = 'A classic movie quote!';
      }
    }
    else if(friends[i][1] === 'uninterested'){
      passedQuote = 'Whatever.'
    }
    else if(friends[i][1] === 'excited'){
      if(passedQuote.slice(-8) !== 'amazing!'){
        passedQuote += 'Wow! That\'s amazing!';
      }
    }
    
    //if they have reached the person that was asked
    if(index === i){
      names = names.slice(0,index);
    }
  }
  let toldSent = `${names[index-1]} told me that`
  for(let i=2; i<index; i++){
    if(i-index >= 0) toldSent += ` ${names[index-i]} told ${names[index-i-1]} that`
    else toldSent += ` ${names[index-i]} told ${names[index-i-1]} ${passedQuote}`
  }
  return toldSent;
}