function calculateDamage(yourType, opponentType, attack, defense){
    let eff;
    if (yourType === opponentType) eff = 0.5;
    else if (yourType === 'fire'){
      if(opponentType === 'grass') eff = 2;
      else if (opponentType === 'water') eff = 0.5;
      else if (opponentType === 'electric') eff = 1;
    }
    else if (yourType === 'water'){
      if(opponentType === 'fire') eff = 2;
      else if (opponentType === 'grass' || opponentType === 'electric') eff = 0.5;
    }
    else if (yourType === 'grass'){
      if(opponentType === 'water') eff = 2;
      else if (opponentType === 'fire') eff = 0.5;
      else if (opponentType === 'electric') eff = 1;
    }
    else if (yourType === 'electric'){
      if(opponentType === 'water') eff = 2;
      else if (opponentType === 'fire' || opponentType === 'grass') eff = 1;
    }
    
    return (50 * (attack / defense) * eff);
  }