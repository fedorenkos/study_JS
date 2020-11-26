const money = prompt('Ваш месячный доход?', 50000);;
const income = 'freelance';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Internet, Taxi, Taxes, Food, Clothes, Travelling');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 1200000;
const period = 12;









console.log("----------------------ДЗ-3----------------------");


// const question = prompt('Ваш месячный доход?', money);

// console.log(typeof(question));

// const question1 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', addExpenses);

// console.log(typeof(question1));

// const question2 = confirm('Есть ли у вас депозит в банке?', deposit);
if (true) {
    console.log('Deposit: ' + deposit);
}

const expenses1 = prompt('Введите обязательную статью расходов?', 'Internet');

// console.log(expenses1);
const amount1 = +prompt('Во сколько это обойдется?', 4000);
const expenses2 = prompt('Введите обязательную статью расходов?', 'Taxes');

const amount2 = +prompt('Во сколько это обойдется?', 7000);

const amount = amount1 + amount2;

const budgetMonth = (money - (amount));
const budgetDay = (Math.floor(budgetMonth / 30));
console.log('Доход за месяц: ' + budgetDay);

const periodGoal = Math.ceil(mission / budgetMonth);

console.log('Цель будет достигнута за ' + periodGoal + ' месяцев');

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
console.log(addExpenses.toLowerCase().split(', '));
console.log('Доход за месяц ' + budgetDay + '$');