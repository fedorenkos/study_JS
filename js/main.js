let startBtn = document.querySelector('#start');
console.log(startBtn);
let cancelBtn = document.querySelector('#cancel');
console.log(cancelBtn);
let incomeBtnAdd = document.getElementsByTagName('income_add');
console.log(incomeBtnAdd);
let expenseBtnAdd = document.getElementsByTagName('expenses_add');
console.log(expenseBtnAdd);
let inputCheck = document.querySelector('#deposit-check');
console.log(inputCheck);
let additionalIncome = document.querySelectorAll('.additional_income-item');
console.log(additionalIncome);

console.log('--------------values right-side--------------');
let budgetMonthValue = document.getElementsByClassName('budget_month-value');
console.log(budgetMonthValue);
let budgetDayValue = document.getElementsByClassName('budget_day-value');
console.log(budgetDayValue);
let expensesMonthValue = document.getElementsByClassName('expenses_month-value');
console.log(expensesMonthValue);
let additionalIncomeValue = document.getElementsByClassName('additional_income-value');
console.log(additionalIncomeValue);
let expensesIncomeValue = document.getElementsByClassName('additional_expenses-value');
console.log(expensesIncomeValue);
let incomePeriodValue = document.getElementsByClassName('income_period-value');
console.log(incomePeriodValue);
let targetMonthValue = document.getElementsByClassName('target_month-value');
console.log(targetMonthValue);


let amountSalary = document.querySelector('.salary-amount');
console.log(amountSalary);

console.log('--------Titles----------');
let expensesTitle = document.querySelectorAll('.expenses-title');
console.log(expensesTitle);
let incomeTitle = document.querySelectorAll('.income-title');
console.log(incomeTitle);
console.log('--------Titles----------');

let incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);

let expensAmount = document.querySelector('.expenses-amount');
console.log(expensAmount);
let additionalExpenses = document.querySelector('.additional_expenses-item');
console.log(additionalExpenses);
let targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);
let periodSelectRange = document.querySelector('.period-select');
console.log(periodSelectRange);

// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

// let money,
//     start = function() {
//         while (!isNumber(money)) {
//             money = prompt('Ваш месячный доход?', 50000);
//         }
//         console.log(typeof(money));
//     };

// start();

// let appData = {
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 1200000,
//     budget: money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     period: 12,
//     asking: function() {
//         console.log("----------------------ДЗ-8----------------------");
//         if (confirm('Есть ли у вас дополнительный источник зароботка?')) {

//             let itemIncome;
//             do {
//                 itemIncome = prompt('Какой дополнительный заработок?', 'Таксую');
//             } while (isNumber(itemIncome) || itemIncome === '' || itemIncome === null)
//             appData.income = itemIncome;
//             console.log(typeof(itemIncome));

//             let cashIncome = 0;
//             do {
//                 cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
//             } while (!isNumber(cashIncome) || cashIncome === '' || cashIncome === null)
//             appData.income[itemIncome] = +cashIncome;
//             console.log(typeof(cashIncome));
//         }

//         let addExpenses;
//         do {
//             addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'internet, taxi, taxes, food, clothes, travelling');
//         } while (isNumber(appData.addExpenses) || appData.addExpenses === '' || appData.addExpenses === null)
//         appData.addExpenses = addExpenses;
//         let words = addExpenses.split(',');

//         for (let i = 0; i < words.length; i++) {
//             let word = words[i].trim();
//             let upperCaseWord = word[0].toUpperCase() + word.slice(1);

//             console.log(upperCaseWord);
//         }
//         appData.deposit = confirm('Есть ли у вас депозит в банке?');


//         for (let i = 0; i < 2; i++) {
//             let mandatoryExpense = prompt('Введите обязательную статью рассходов?', 'Cinema, Theater');
//             let sumNumbers = 0;
//             do {
//                 sumNumbers = prompt('Во сколько это обойдется?');
//             } while (!isNumber(sumNumbers) || sumNumbers === '' || sumNumbers === null);
//             appData.expenses[mandatoryExpense] = +sumNumbers;
//             console.log(appData.expenses);
//         }
//     },

//     // Циклом пройдись по appData.expenses и в методе getExpensesMonth верни сумму расходов.
//     getExpensesMonth: function() {
//         for (const sumNumbers in appData.expenses) {
//             if (isNumber(appData.expenses[sumNumbers])) {
//                 appData.expensesMonth += appData.expenses[sumNumbers];
//             }
//         }
//         return appData.expensesMonth;
//     },
//     getBudget: function() {
//         appData.budgetMonth = appData.budget - appData.expensesMonth;
//         console.log(appData.budgetMonth);
//         appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//         console.log('Бюджет на день: ' + appData.budgetDay);
//         return appData.getBudget;
//     },
//     getTargetMonth: function() {
//         appData.getTargetMonth = appData.mission / appData.budget;
//         if (appData.getTargetMonth > 0) {
//             console.log('Цель будет достигнута за: ' + appData.getTargetMonth + ' месяцев');
//         } else {
//             console.log('Цель не будет достигнута!!!');
//         }
//         return appData.getTargetMonth;
//     },
//     getStatusIncome: function() {
//         if (appData.budgetDay > 1200) {
//             return ('У вас высокий уровень дохода');
//         } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
//             return ('У вас средний уровень дохода');
//         } else if (appData.budgetDay <= 600 && appData.budgetDay > 0) {
//             return ('К сожалению у вас уровень дохода ниже среднего');
//         } else if (appData.budgetDay <= 0) {
//             return ('Что то пошло не так');
//         }
//         console.log(appData.getStatusIncome);
//         return appData.getStatusIncome;
//     },
//     getInfoDeposit: function() {
//         if (appData.deposit) {
//             do {
//                 appData.percentDeposit = prompt('Какой годовой процент?', '10');
//             } while (!isNumber(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
//             console.log((appData.percentDeposit));
//             do {
//                 appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
//             } while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
//             appData.moneyDeposit;
//         }
//     },
//     calcSavedMoney: function() {
//         return appData.budgetMonth * appData.period;
//     }
// };


// appData.asking();
// appData.getInfoDeposit();







// console.log('Наша программа включает в себя данные: ');
// for (const key in appData) {
//     console.log(key + ' ' + appData[key]);
// }

let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);

let targetMonth = appData.getTargetMonth();

appData.getBudget();

console.log(appData.getStatusIncome());

console.log(appData.calcSavedMoney);