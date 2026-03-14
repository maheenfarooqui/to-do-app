
var todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");
function addTodo(){
    console.log(todoInput.value);
    todoList.innerHTML += `<li>${todoInput.value}</li>`
    todoInput.value ="";

}