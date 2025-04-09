//function that return peaks of an array, as well as the indeces of those peaks
//it also account for plateaus as peaks, where it would return the value of the plateau and the starting index of the plateau

function pickPeaks(arr){
    let peaks = [];
    let peakInd = [];
    let platIndex = 0;
    let platValue = 0;
    let isPlatPeak = false;
    
    //iterate through arr (start at index 1 and ending at second to last)
    for(let i=1; i<arr.length-1; i++){
      //compare current val with values around it
      if((arr[i+1] < arr[i]) && (arr[i-1] < arr[i])){
        peaks.push(arr[i]);
        peakInd.push(i);
        console.log(`pushed ${arr[i]} peak at ${i}`);
      }
      
      //start of a plateau
      else if ((arr[i-1] < arr[i]) && (arr[i] === arr[i+1])){
        platIndex = i;
        platValue = arr[i];
        isPlatPeak = true; //does this have the potential to be a plateau peek
        console.log(`tracking ${platValue} plat at ${platIndex}`);
      }
      
      //end of plateau and it was a possible plateau peak
      else if ((arr[i-1] === arr[i]) && (arr[i+1] !== arr[i]) && isPlatPeak){
        //check if it was a platPeak
        if(arr[i] > arr[i+1]){
          peaks.push(platValue);
          peakInd.push(platIndex);
        }
        isPlatPeak = false; //reset boolean
        console.log(`pushed ${platValue} plat peak at ${platIndex}`);
      }
    }
    return {pos:peakInd,peaks:peaks}
  }