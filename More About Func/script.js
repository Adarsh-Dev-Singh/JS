// greeting(); // supports hoisting
// //function1(); will give error because this type of function decleration does not support hoisting!!!
// const function1 = function(){ //anonymous Function
//   console.log('Hello World!');
// }; 

// function1();
// console.log(typeof function1);
// console.log(function1);

// var greeting123 = function(){
//   console.log('Hello World 69!');
// };
// console.log(typeof greeting123);
// greeting123();//does not support hoisting it should but donno why it doesn't 
// // greeting () is just a shortcut for greeting1();

// function greeting(){
//   console.log('Hello World 69!');
// }

// const object1 ={
//   'greet' : 'hello',
//   morning: function(){
//     console.log('Good morning!');
//   }
// };
// object1.morning();
// //console.log(object1.greet);

// function function2(param){
//   param(); // passed parameter -> a function; 
// }
// function2(function(){
//   console.log('Hello Daaku');//callback function
// });


//Time out for how much time a function should take before running

// setTimeout(function(){
//   console.log('Timeout!!!');},3000 // Time in milliseconds 1000ms = 1s;
// );
// setInterval(function(){
//   console.log('Timeout!!!');},3000 // Time in milliseconds 1000ms = 1s;
// );
// Hello = () => {
//   console.log('Hello!!!'); // Arrow functions
// }
// Hello();

// Jumbo(89); Doesn't support hoisting!!!!!!
// Five = () => 2 + 3 ; 
// console.log(Five());

// Jumbo = param => {
//   console.log(`Daaku World ${param} !!!!`);
// }

// const eventListener = () =>{
//   console.log('lassi');
// }

// const buttonElement = document.querySelector('.js-button');

// buttonElement.addEventListener('keydown', eventListener);
// buttonElement.removeEventListener('keydown',eventListener); // This works similar to onclick 
//  So we can replace our onclick attributes from html and write the same thing in js using addEventListener

// document.body.addEventListener('keydown',(event) =>{
//   console.log(event.key);
// })

//querySelector gives us only the first element with those properties(class) 
//Use qureySelectorAll to select all the elements with same properties(class)


// console.log([1,10,-20,30].filter((value,index) => {
//   // if(value >= 0){
//   //   return true;
//   // }else{
//   //   return false;
//   // }
//   return value >= 0; //can return a truthy or falsy value
// }))

// .map method
// console.log([1,2,3].map((value,index) =>{
//   return value*2;
// }))

// Shorthand code for the same
console.log([1,2,3].map(value => value * 2 ));
