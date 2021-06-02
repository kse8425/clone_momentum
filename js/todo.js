const todo = document.querySelector(".js-todo");
const todoForm = todo.querySelector("form");
const todoInput = todo.querySelector("input");
const tagUL = todo.querySelector("ul");
const todoList = [];
let todoObj = {};
let id = 0;

function init() {
  printTodo();
  todoForm.addEventListener("submit", handleSubmit);
}

function printTodo() {
  const tempArray = JSON.parse(localStorage.getItem("ToDo List"));
  tempArray.forEach(addTodo);
}

function handleSubmit(event) {
  event.preventDefault();
  todoObj = {
    id: id++,
    todolist: todoInput.value,
  };
  todoList.push(todoObj);
  addTodo(todoObj);
  todoInput.value = "";
  saveTodo(todoList);
}

function addTodo(obj) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  li.id = obj.id;
  btn.innerText = "❌";
  li.append(obj.todolist);
  li.append(btn);

  tagUL.appendChild(li);
  btn.addEventListener("click", delTodo);
}

function delTodo(event) {
  target = event.target;
  target.parentElement.remove();

  const source = JSON.parse(localStorage.getItem("ToDo List"));
  const resulut = source.filter(
    (list) => list.id !== parseInt(target.parentElement.id)
  );

  saveTodo(resulut);
}

function saveTodo(arrry) {
  localStorage.setItem("ToDo List", JSON.stringify(arrry));
}
init();
