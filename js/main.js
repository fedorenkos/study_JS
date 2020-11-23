// let message = function() {
//     alert('Hello');
// };

// document.getElementById('github').addEventListener('click', message);


const money = 50000;
const income = 'freelance';
const addExpenses = 'Internet, Taxi, Taxes, Food, Clothes, Travelling';
const deposit = true;
const mission = 1000000;
const period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' $');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));


const budgetDay = (money / 30);
console.log('Доход за месяц ' + budgetDay + '$');

console.log("----------------------ДЗ-3----------------------");

let question = prompt('Ваш месячный доход?', money);

console.log(typeof(question));

let question1 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses);

console.log(typeof(question1));

let question2 = confirm('Есть ли у вас депозит в банке?', deposit);

console.log(typeof(question2));


let expenses1 = prompt('Введите обязательную статью расходов?');
console.log(expenses1);
let expenses2 = prompt('Введите обязательную статью расходов?');
console.log(expenses2);
let amount1 = prompt('Во сколько это обойдется?');
console.log(amount1);
let amount2 = prompt('Во сколько это обойдется?');
console.log(amount2);
// 5 заданий