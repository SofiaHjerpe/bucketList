const todoItem = document.createElement("p");
todoItem.innerText = "Build a house";
console.log(todoItem);
const todoList = document.querySelector(".list");
todoList.appendChild(todoItem);
const todoItemSecond = document.createElement("p");
todoItemSecond.innerText = "Build another house";
console.log(todoItemSecond);
todoList.appendChild(todoItemSecond);
todoList.insertAdjacentElement("beforeend", todoItemSecond);
const todos = todoList.innerHTML;
console.log(todos);
// todos.innerHTML = "do something";
let todo = "";
todo = todo.innerHTML = "<p>Make a website</p>";
todoList.insertAdjacentHTML("beforebegin", todo);

let newItems = ["<p> Dance </p>", "<p>Make another website</p>", "<p> Have a party</p>"];
for (let item of newItems) {
  todoList.insertAdjacentHTML("beforeend", item);
}
console.log(todoList.children.length);
let owner = document.querySelector(".owner");
owner.innerText = "Sofia's";

