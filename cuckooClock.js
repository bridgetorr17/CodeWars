function cuckooClock(inputTime, chimes) {
    //initialize variables
    //split hours and minutes, make counter
    let inputHours = parseInt(inputTime.substring(0,2));
    let inputMinutes = parseInt(inputTime.substring(3));
    
    //categorize inputMinutes into one of the quarters
    if(0 < inputMinutes && inputMinutes < 15){
      inputMinutes = 15;
    }
    else if(15 < inputMinutes && inputMinutes < 30){
      inputMinutes = 30;
    }
    else if(30 < inputMinutes && inputMinutes < 45){
      inputMinutes = 45;
    }
    else if(45 < inputMinutes && inputMinutes <= 59){
      inputMinutes = 0;
      if(inputHours === 12) inputHours = 1;
      else inputHours++;
    }
    
    let done = false;
    let chimesCount = 0;
    
    //keep chiming until the goal has been hit
    while(!done){
      if(inputMinutes === 0){
        chimesCount += inputHours;
        if(chimesCount < chimes) inputMinutes = 15;
        else done = true;
      }
      
      else if(inputMinutes === 15){
        chimesCount++;
        if(chimesCount < chimes) inputMinutes = 30;
        else done = true;
      }
      
      else if(inputMinutes === 30){
        chimesCount++;
        if(chimesCount < chimes) inputMinutes = 45;
        else done = true;
      }
      
      else if(inputMinutes === 45){
        chimesCount++;
        if(chimesCount < chimes){
          inputMinutes = 0;
          if(inputHours === 12) inputHours = 1;
          else inputHours++;
        }
        else done = true;
      }
    }
    
    //format output
    if(inputHours < 10) inputHours = '0' + inputHours;
    if(inputMinutes === 0) inputMinutes = '00';
    return `${inputHours}:${inputMinutes}`
  }