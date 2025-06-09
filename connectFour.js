function connectFourPlaceTokens(columns) {
  //make balnk 7x6 board
  let board = Array.from({ length: 6 }, () => Array(7).fill('-'));
  let token = '';
  let placed = false;
  
  for(let i=0; i<columns.length; i++){
    //every other is Y and R
    if(i%2===0) token = 'Y';
    else token = 'R';
    
    //find the row that it needs to be in
    let rowNow = 5;
    let placed = false;
    
    while(!placed){
      if(board[rowNow][columns[i]] === '-'){
        board[rowNow][columns[i]] = token;
        placed = true;
        }
      else rowNow--;
    }
  }
  return board;
}