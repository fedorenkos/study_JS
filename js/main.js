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
    expensesMonth: 0,
    period: 12,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Internet, Taxi, Taxes, Food, Clothes, Travelling');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let sum = 0;
        for (let i = 0; i < 2; i++) {

            appData.expenses[i] = prompt('Введите обязательную статью рассходов?', 'Cinema, Theater');
            let sumNumbers = 0;
            do {
                sumNumbers = +prompt('Во сколько это обойдется?');
            } while (isNaN(sumNumbers) || sumNumbers === '' || sumNumbers === null);
            sum = sum + sumNumbers;
        }
        console.log(Object.keys(appData.expenses).length);
        return sum;
    },
    getExpensesMonth: function() {
        for (const key in appData.expenses) {
            console.log('Ключ: ' + key + 'Значение: ' + appData.expenses[key]);
        }
        console.log(Object.keys(appData.expenses).length);
    },
    getAccumulatedMonth: function() {

        return appData.accumulatedMonth - expensesAmount;
    },
    getTargetMonth: function() {
        return parseInt(appData.mission / accumulatedMonth);
    },
    getStatusIncome: function() {
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
};

appData.asking();




console.log("----------------------ДЗ-7----------------------");




const getExpensesMonth = function() {

};

let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);



const getAccumulatedMonth = function() {

};
getAccumulatedMonth();

// const getBudget = function() {

// };

// getBudget();
// let getAccumulatedMonth = getBudget;

// const budgetMonth = expensesAmount;
let accumulatedMonth = appData.getAccumulatedMonth();
console.log(accumulatedMonth);




let getTargetMonth = function() {

    // return parseInt(appData.mission / accumulatedMonth);

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

}

console.log(appData.getStatusIncome());

let statusIncome = appData.getStatusIncome();