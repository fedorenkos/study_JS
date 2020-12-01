let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let money,
    start = function() {
        while (!isNumber(money)) {
            money = prompt('Ваш месячный доход?', 50000);
        }
        console.log(typeof(money));
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
    period: 12,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Internet, Taxi, Taxes, Food, Clothes, Travelling');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};






console.log("----------------------ДЗ-6----------------------");

let expenses = [];


const getExpensesMonth = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью рассходов?', 'Cinema, Theater');
        let sumNumbers = 0;
        do {
            sumNumbers = +prompt('Во сколько это обойдется?');
        } while (isNaN(sumNumbers) || sumNumbers === '' || sumNumbers === null);
        sum = sum + sumNumbers;
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

const getAccumulatedMonth = function() {
    return money - expensesAmount;
};
getAccumulatedMonth();


// const budgetMonth = expensesAmount;
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);




let getTargetMonth = function() {

    return parseInt(appData.mission / accumulatedMonth);

};

let targetMonth = getTargetMonth();

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

let statusIncome = getStatusIncome();