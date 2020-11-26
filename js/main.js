"use strict"
const money = 50000;
const income = 'freelance';
const addExpenses = 'Internet, Taxi, Taxes, Food, Clothes, Travelling';
const deposit = true;
const mission = 1200000;
const period = 12;
const budgetDay = (Math.floor(money / 30));


const amount1 = +prompt('Во сколько это обойдется?', '');
const amount2 = +prompt('Во сколько это обойдется?', '');

const getExpensesMonth = function(amount1, amount2) {
    return amount1 + amount2;
};
console.log('Обязательные рвсходы за месяц: ' + getExpensesMonth(amount1, amount2));
getExpensesMonth(amount1, amount2);

const getAccumulatedMonth = function(money, amount1, amount2) {
    return money - (amount1 + amount2);
};

// const budgetMonth = (money - (amount1 + amount2));
const accumulatedMonth = function() {
    console.log('Накопления за месяц: ' + getAccumulatedMonth(money, amount1, amount2));
    getAccumulatedMonth(money, amount1, amount2);
};

accumulatedMonth();


const getTargetMonth = function(mission, money) {
    parseInt(mission);
    parseInt(money);
    return mission / money;
};
console.log(typeof(mission)); //number
console.log(typeof(money)); //number
console.log('За какой период будет достигнута цель: за ' + getTargetMonth() + ' месяцев');
getTargetMonth();