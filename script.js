// // balance
const balanceElement = document.querySelector('.balance.value');
// console.log(balanceElement)
// // income
const incomeTotal = document.querySelector('.total-income');
// console.log(incomeTotal)
// // outcome
const outcomeTotal = document.querySelector('.total-outcome');
// console.log(outcomeTotal)
// //chart
const chartElement = document.querySelector('.chart');
// console.log(chartElement)
// // toggling buttons
const expenseBtn = document.querySelector('.tab1');
const incomeBtn = document.querySelector('.tab2');
// console.log(incomeBtn)
const allBtn = document.querySelector(".tab3");
// dashboard elements
const expenseElement = document.querySelector("#expense");
const incomeElement = document.querySelector("#income");

const allElement = document.querySelector("#all");
// dashboard element list
const expenseList = document.querySelector("#expense.list"); 
const incomeList = document.querySelector("#income.list");
const allList = document.querySelector("#all.list");
// dashboard add expense
const expenseAdd = document.querySelector("#add.expense");
const expenseTitle = document.getElementById("#expense-title-input");
const expenseAmount = document.getElementById("#expense=amount-input");
// dashboard add income
const incomeAdd = document.querySelector("#add-income");
const incomeTitle = document.getElementById("#income-title-input");
const incomeAmount = document.getElementById("#income-amount-input");

// // toggling fnx / listen for classname
document.querySelector('.active').classList.add('active')
// Element.classList .remove('active');
// Element.classList .add("active");

expenseBtn.addEventListener('click', function () {
console.log(expenseBtn);

    active(expenseBtn)
    inactive([incomeBtn, allBtn])
})

// // incomeBtn.addEventListener("click", function () {
// //     active(incomeBtn);
// //     inactive([expenseBtn, allBtn]);
// // });

// // allBtn.addEventListener("click", function () {
// //     active(allBtn);
// //     inactive([incomeBtn, expenseBtn]);
// // });