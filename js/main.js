let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let money,
    start = function() {
        while (!isNumber(money)) {
            money = prompt('Ваш месячный доход?');
        }
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1200000,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: {},
    getAccumulatedMonth: {},
    getTargetMonth: {},
    getStatusIncome: {},
    period: 12,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Internet, Taxi, Taxes, Food, Clothes, Travelling');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};






console.log("----------------------ДЗ-6----------------------");
// let showTypeOf = function(item) {
//     console.log(typeof(item));
// };

// showTypeOf(money);
// showTypeOf(appData.income);
// showTypeOf(appData.deposit);

// const expenses1 = prompt('Введите обязательную статью рассходов?');
// const expenses1Amount = +prompt('Во сколько это обойдется?', '');
// const expenses2 = prompt('Введите обязательную статью рассходов?');
// const expenses2Amount = +prompt('Во сколько это обойдется?', '');
let expenses = [];


const getExpensesMonth = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью рассходов?', 'Cinema, Theater');

        sum += +prompt('Во сколько это обойдется?');
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

const getAccumulatedMonth = function() {
    return money - expensesAmount;
};
getAccumulatedMonth();


// const budgetMonth = expensesAmount;
let accumulatedMonth = appData.getAccumulatedMonth();
console.log(accumulatedMonth);




let getTargetMonth = function() {

    return parseInt(appData.mission / accumulatedMonth);

};

let targetMonth = appData.getTargetMonth();

if (targetMonth > 0) {
    console.log('Цель будет достигнута за: ' + targetMonth + ' месяцев');
} else {
    console.log('Цель не будет достигнута!!!');
}

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

let statusIncome = addData.getStatusIncome();