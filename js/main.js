"use strict"

const money = +prompt('Ваш месячный доход?', 50000);
const income = 'freelance';
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Internet, Taxi, Taxes, Food, Clothes, Travelling');
const deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 1200000;
const period = 12;
// const budgetDay = (Math.floor(money / 30));
console.log("----------------------ДЗ-4----------------------");
let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

const expenses1 = prompt('Введите обязательную статью рассходов?');
const amount1 = +prompt('Во сколько это обойдется?', '');
const expenses2 = prompt('Введите обязательную статью рассходов?');
const amount2 = +prompt('Во сколько это обойдется?', '');


console.log(addExpenses.toLowerCase().split(','));


const getExpensesMonth = function(amount1, amount2) {
    return amount1 + amount2;
};
console.log('Обязательные рвсходы за месяц: ' + getExpensesMonth(amount1, amount2));
getExpensesMonth(amount1, amount2);

const getAccumulatedMonth = function(money) {
    return money - getExpensesMonth(amount1, amount2);
};
getAccumulatedMonth(money, amount1, amount2);


// const budgetMonth = (money - (amount1 + amount2));
let accumulatedMonth = getAccumulatedMonth(money);
console.log(accumulatedMonth);

const getTargetMonth = function(mission, money) {
    // parseInt(mission);
    // parseInt(accumulatedMonth);
    return mission / money;
};
console.log('За какой период будет достигнута цель: за ' + getTargetMonth(mission, money) + ' месяцев');
getTargetMonth();

const budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);



let getStatusIncome = function() {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay <= 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay <= 600 && budgetDay > 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay <= 0) {
        return ('Что то пошло не так');
    }
}

console.log(getStatusIncome());