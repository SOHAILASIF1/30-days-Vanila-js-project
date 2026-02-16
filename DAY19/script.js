let renderDiv = document.getElementById("renderExpense");
let addBtn = document.getElementById("addBtn");
let formDiv = document.getElementById("form-data");
let formData = document.getElementById("expense-form");
let totalDisplay = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// 🔁 Render Function
function renderExpenses() {
    renderDiv.innerHTML = "";
    let total = 0;

    expenses.forEach((expense, index) => {

        const element = document.createElement("div");
        element.classList.add("renderData");

        element.innerHTML = `
            <h3>${expense.title}</h3>
            <p>${expense.description}</p>
            <p><strong>$${expense.amount}</strong></p>
        `;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("deleteBtn");

        delBtn.onclick = () => deleteExpense(index);

        element.appendChild(delBtn);
        renderDiv.appendChild(element);

        total += Number(expense.amount);
    });

    totalDisplay.textContent = "Total Expense: $" + total;
}

// ➕ Add Expense
function handleSubmit(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;

    const newExpense = { title, description, amount };

    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    formData.reset();
    formDiv.style.display = "none";
    addBtn.style.display = "block";

    renderExpenses();
}

// ❌ Delete
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

// Show Form
addBtn.addEventListener("click", () => {
    formDiv.style.display = "block";
    addBtn.style.display = "none";
});

formData.addEventListener("submit", handleSubmit);

renderExpenses();
