function hexStringToRGB(hexString) {
  
    //map for hex letters
    const hexMap = new Map();
    hexMap.set('a', 10);
    hexMap.set('b', 11);
    hexMap.set('c', 12);
    hexMap.set('d', 13);
    hexMap.set('e', 14);
    hexMap.set('f', 15);
    
    //map to return
    const returnMap = new Object();
    
    //format string
    hexString = hexString.toLowerCase().slice(1);
    let hexVals = [];
    
    //console.log(hexString);
     
    //separate hex values 
    for (let i=2; i<hexString.length+1; i += 2){
      let hexVal = hexString.slice(i-2, i)
      hexVals.push(hexVal)
    }
    
    //console.log(hexVals);
  
    let decimalVals = [];
    //convert separated strings to decimal from hex
    hexVals.forEach((hex, index) => {
      let decimalVal = 0;
      
      //for every index of the hex value (only two digits in this case)
      for (let i=0; i<hex.length; i++){
        let singleHexChar = hex.slice(hex.length-i-1, hex.length-i);
        
        if (97 <= singleHexChar.charCodeAt(0) && singleHexChar.charCodeAt(0) <= 102){
          singleHexChar = hexMap.get(singleHexChar);
          //decimalVals[index].push(hexMap.get(singleHexChar));
        }
        else {
          singleHexChar = parseInt(singleHexChar);
          //decimalVals[index].push(parseInt(singleHexChar));
        }
        //console.log(singleHexChar);
        //console.log(i);
        
        //mulitply hex value by 16 to the power of that index
        decimalVal += singleHexChar * Math.pow(16, i);
        //console.log(decimalVal);
      }
      
      decimalVals.push(decimalVal);
    });
    
    //they didn't REALLY want a map... 
    //add property/value pairs for RGB object
    returnMap['r'] = decimalVals[0];
    returnMap['g'] = decimalVals[1];
    returnMap['b'] = decimalVals[2];
    
    console.log(returnMap);
    return returnMap;
  }