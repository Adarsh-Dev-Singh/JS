const TodoList = JSON.parse(localStorage.getItem('Todo')) || [];

function addToArray(){
  const inputElement = document.querySelector('.js_inputName')
  const name = inputElement.value;
  TodoList.push(name);
  console.log(TodoList);

  inputElement.value = ''; // will make textbox empty after enter
  localStorage.setItem('Todo',JSON.stringify(TodoList));
}
