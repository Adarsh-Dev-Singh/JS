let choice = '';
function comChoice(){
  let Random = Math.random();
if(Random >= 0 && Random < 1/3 ){
 choice  = 'Rock';
}else if(Random >= 1/3 && Random < 2/3 ){
 choice  = 'Paper';
}else if(Random >= 2/3 && Random < 1 ){
 choice  = 'Scissor';
}
} 
comChoice();
// location.reload();

// console.log(choice);