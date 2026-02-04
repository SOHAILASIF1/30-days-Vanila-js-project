let addButton = document.getElementById("buttonAdd");
let inputTodo = document.getElementById("inputTodo");
let todoContainer = document.getElementById("new");

addButton.addEventListener("click", () => {
    let todoText = inputTodo.value.trim();
    if (todoText === "") return;

    let todoDiv = document.createElement("div");
    let todoItem = document.createElement("p");
    let deleteBtn = document.createElement("button");

    todoItem.textContent = todoText;
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", () => {
        todoDiv.remove();
    });

    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(deleteBtn);
    todoContainer.appendChild(todoDiv);

    inputTodo.value = "";
});
