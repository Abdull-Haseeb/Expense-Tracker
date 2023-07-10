const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");

let expenses = [];

expenseForm.addEventListener("submit", addExpense);

function addExpense(event) {
  event.preventDefault();

  const expenseName = document.getElementById("expenseName").value;
  const expenseAmount = document.getElementById("expenseAmount").value;

  if (expenseName.trim() === "" || expenseAmount.trim() === "") {
    return;
  }

  const expense = {
    name: expenseName,
    amount: parseFloat(expenseAmount),
  };

  expenses.push(expense);

  renderExpense(expense);
  updateTotalExpense();

  expenseForm.reset();
}

function renderExpense(expense) {
  const expenseItem = document.createElement("div");
  expenseItem.classList.add("expense-item");

  expenseItem.innerHTML = `
    <span class="name">${expense.name}</span>
    <span class="amount">$${expense.amount}</span>
  `;

  expenseList.appendChild(expenseItem);
}

function updateTotalExpense() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalExpense.textContent = `Total Expense: $${total.toFixed(2)}`;
}
