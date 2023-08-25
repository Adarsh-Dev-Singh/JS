const TodoList = JSON.parse(localStorage.getItem('Todo')) || [];

renderTodoList();
function addToArray(){
  const inputElement = document.querySelector('.js_inputName');
  const name = inputElement.value;
  const dueDateInput = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInput.value; 
  TodoList.push({
    // name:name,
    // dueDate : dueDate
    name,
    dueDate});
  console.log(TodoList);
  inputElement.value = ''; // will make textbox empty after enter
  renderTodoList();
  localStorage.setItem('Todo',JSON.stringify(TodoList));  
}
function renderTodoList(){
let todoListHTML  = ''
for(let i = 0 ; i<TodoList.length ; i++){
  const todoObject = TodoList[i];
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  const html = `<div>${name}</div><div> ${dueDate} </div>
  <button onclick="
  TodoList.splice(${i},1);
  renderTodoList();
  " class="delete-todo-button">Delete</button>
  `;
  todoListHTML += html ;
}
console.log(todoListHTML);
document.querySelector('.js-output_div').innerHTML = todoListHTML ;
}