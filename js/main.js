const money = 50000;
const income = 'freelance';
const addExpenses = 'Internet, Taxi, Taxes, Food, Clothes, Travelling';
const deposit = true;
const mission = 1200000;
const period = 12;
const budgetDay = (Math.floor(money / 30));








console.log("----------------------ДЗ-3----------------------");


const question = prompt('Ваш месячный доход?', money);

console.log(typeof(question));

const question1 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses);

console.log(typeof(question1));

const question2 = confirm('Есть ли у вас депозит в банке?', deposit);
if (true) {
    console.log('Deposit: ' + questionDeposit);
}

const expenses1 = +prompt('Введите обязательную статью расходов?', '');

console.log(expenses1);
const amount1 = +prompt('Во сколько это обойдется?', '');

console.log(amount1);
const expenses2 = +prompt('Введите обязательную статью расходов?', '');

console.log(expenses2);

const amount2 = prompt('Во сколько это обойдется?', '');

console.log(amount2);



let totalExpenses = expenses1 + expenses2;
let totalAmounts = amount1 + amount2;
let budgetMonth = money - (totalExpenses + totalAmounts);
let goal = mission / budgetMonth;
console.log('Бюджет за месяц ' + (budgetMonth));

console.log('Цель будет достигнута за ' + Math.ceil(goal) + ' месяцев');

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay <= 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0) {
    console.log('Что то пошло не так');
}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' $');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
console.log('Доход за месяц ' + budgetDay + '$');