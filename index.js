const todoItem = document.createElement("p");
todoItem.innerText = "Build a house";
console.log(todoItem);
const todoList = document.querySelector(".list");
todoList.appendChild(todoItem);
