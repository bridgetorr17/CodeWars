function myLanguages(results) {
    let returnL = [];
    
    //filter out the languages under 60
    for(let prop in results){
      if(results[prop] >= 60 ) returnL.push(prop);
    }
    
    //sort remaining languages in descending order
    returnL.sort((a,b) => results[b] - results[a]);
  
    return returnL;
  }