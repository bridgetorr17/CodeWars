//recursive function that flips a stack of "pancakes" based on size
function flip(stack) {
    if (stack.length === 1) {
      console.log('we\'re done')
      console.log(stack);
      return stack;
    }
    
    const max = Math.max(...stack);
    const maxIndex = stack.indexOf(max);
    
    if(maxIndex === stack.length - 1){
      console.log(stack)
      console.log(`max already at the bottom`)
      //return the stack concatenated with the bottom (max element)
      return flip(stack.slice(0, stack.length-1)).concat(max);
    }
    
    else{
      console.log(`need to do some sorting on ${stack}`)
      let aboveSpat = stack.slice(0, stack.indexOf(max) + 1);
      let belowSpat = stack.slice(stack.indexOf(max) + 1);
      
      aboveSpat.reverse();
      
      console.log(aboveSpat);
      stack = aboveSpat.concat(belowSpat);
  
      stack.reverse();
      console.log(stack);
      return flip(stack.slice(0, stack.length-1)).concat(stack[stack.length-1]);
    }
  }