// // balance
const balanceElement = document.querySelector(".balance.value");
// console.log(balanceElement)
// // income
const incomeTotal = document.querySelector(".total-income");
// console.log(incomeTotal)
// // outcome
const outcomeTotal = document.querySelector(".total-outcome");
// console.log(outcomeTotal)
// //chart
const chartElement = document.querySelector(".chart");
// console.log(chartElement)
// // toggling buttons
const buttons = document.getElementsByClassName("tab");

// dashboard elements
const expenseElement = document.querySelector("#expense");
const incomeElement = document.querySelector("#income");

const allElement = document.querySelector("#all");
// dashboard element list
const expenseList = document.querySelector("#expense.list");
const incomeList = document.querySelector("#income.list");
const allList = document.querySelector("#all.list");

// console.log(list)
// // toggling fnx / listen for classname


let activeTab = document.querySelector(".active")
console.log(activeTab)
let activePage = activeTab.getAttribute("data-tab")
console.log(activePage)
// activePage.style.display = 'none'
hidePage();
let active = document.getElementById(activePage)
// activePage.style.display = "block";
console.log(active)
active.style.display = "block"

for (i = 0; i <= buttons.length - 1; i++) {
  let button = buttons[i];
  //   button.classList.remove("active");
  button.addEventListener("click", (e) => {
    // console.log(button);
    removeActive();
    button.classList.add("active");
    let budgetTabs = e.target.dataset.tab;
    // hidePage();
    let page = document.getElementById(budgetTabs)
    console.log(page);

    hidePage();
    page.style.display = "block";
  });
  // console.log(button[0])
}

function removeActive() {
  for (i = 0; i <= buttons.length - 1; i++) {
    let button = buttons[i];
    button.classList.remove("active");

    // console.log(button[0])
  }
}

// dashboard add income
const incomeAdd = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");
const list = document.querySelector(".incomeLists");
// console.log(list.innerHTML)

incomeAdd.addEventListener("click", () => {
 
  let li = document.createElement("LI");
  let item =
    '<div class="entry" > '+incomeTitle.value + " " + incomeAmount.value +' </div>' +
    '<div id="icons" >' +
    '<i class="far fa-edit"></i>' +
    '<i class="far fa-trash-alt"></i>' +
    "</div>";
  li.innerHTML = item;
  let budgetList = document.querySelector(".budget-list");
  console.log(li);
  budgetList.appendChild(li);
  // let iconIncome = document.getElementById("icons");
  //   iconIncome.appendChild(budgetList)
});

// dashboard add expense
// console.log(page)  
function hidePage() {
let page = document.getElementsByClassName("pages");
      for (i = 0; i <= page.length - 1; i++) {
        let incomePage = page[i];
        incomePage.style.display = "none";
      }
}
// hidePage()
// function showPage() {
//   for (i = 0; i <= page.length - 1; i++) {
//     let incomePage = page[i];
//     incomePage.style.display = "block";
//   }
// }

// for (i = 0; i <= page.length - 1; i++) {
//   let incomePage = page[i];
//   incomePage.style.display = "none"
// }
  


// let firstdiv = document.getElementsByClassName("first");
// console.log(firstdiv)

// if (firstdiv.style.display == "none") {
//   firstdiv.style.display = "block";
// } else {
//  firstdiv.style.display = "block";
// }


// showStuff()


// function openList1() {
//   let firstdiv = document.getElementsByClassName("first");
//   // var list = document.getElementById("ollist");

//   if (firstdiv.style.display == "none") {
//     firstdiv.style.display = "block";
//   } 
// }

// openList1(firstdiv)















// const expenseAdd = document.querySelector("#add.expense");
// const expenseTitle = document.getElementById("expense-title-input");
// const expenseAmount = document.getElementById("expense=amount-input");

// function addEntry () {
//    for (i = 0; i <= income.length - 1; i++) {
//      let button = buttons[i];
//      button.classList.add("list");

//      // console.log(button[0])
//    }
// }
// list for each toggled option

// items = [
//     'orange', 'mango', 'watermelon'
// ]
// console.log(items[1])

// let person = {
//     name: 'john',
//     location: 'uyo',
//     color: 'black'
// }
// console.log(person.name)

// document.querySelector('.active').classList.add('active')

// let display = document.querySelector(".active")
// console.log(display)

// let expense = document.getElementById("expenseTab")
// console.log(expense)
// expense.classList.add("active");
// console.log(active)
// console.log(active);

// button.addEventListener('click', function () {
// console.log(button);

// })

// // incomeBtn.addEventListener("click", function () {
// //     active(incomeBtn);
// //     inactive([expenseBtn, allBtn]);
// // });

// // allBtn.addEventListener("click", function () {
// //     active(allBtn);
// //     inactive([incomeBtn, expenseBtn]);
// // });
