function comChoice(){
  let choice = '';
  let Random = Math.random();
if(Random >= 0 && Random < 1/3 ){
 choice  = 'Rock';
}else if(Random >= 1/3 && Random < 2/3 ){
 choice  = 'Paper';
}else if(Random >= 2/3 && Random < 1 ){
 choice  = 'Scissor';
}
return choice ;  
} 
comChoice();
function playGame(playerMove){
      if(playerMove == 'Rock'){
    if(choice === 'Rock'){
      result = 'Tie' ;
    }else if(choice === 'Paper' ){
      result = 'You Lose!' ;
    }else if(choice === 'Scissor' ){
      result = 'You Win!'  ;
    }

  }else if(playerMove == 'Paper'){
      if(choice === 'Paper'){
        result = 'Tie' ;
        }else if(choice === 'Rock' ){
          result = 'You Lose!' ;
        }else if(choice === 'Scissor' ){
          result = 'You Win!'  ;        
        }

  }else if(playerMove == 'Scissor'){
      if(choice === 'Scissor'){
      result = 'Tie' ;
    }else if(choice === 'Rock' ){
      result = 'You Lose!' ;
    }else if(choice === 'Paper' ){
      result = 'You Win!'  ;
    }
}
alert(`You Picked ${playerMove} and Computer Picked ${choice} . ${result}` )
}

// location.reload();

// console.log(choice);