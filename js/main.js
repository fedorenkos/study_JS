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

        
        for (let i = 0; i < 2; i++) {
            let mandatoryExpense = prompt('Введите обязательную статью рассходов?', 'Cinema, Theater');
            let sumNumbers = 0;
            do {
                sumNumbers = +prompt('Во сколько это обойдется?');
            } while (!isNumber(sumNumbers) || sumNumbers === '' || sumNumbers === null);
            appData.expenses[mandatoryExpense] = sumNumbers;
            console.log(appData.expenses);
        }
    },
    
    // Циклом пройдись по appData.expenses и в методе getExpensesMonth верни сумму расходов.
    getExpensesMonth: function() {
        for (const sumNumbers in appData.expenses) {
            if(isNumber(appData.expenses[sumNumbers])) {
                appData.expensesMonth += appData.expenses[sumNumbers];
                }
            }
        return appData.expensesMonth;
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        console.log(appData.budgetMonth);
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        console.log('Бюджет на день: ' + appData.budgetDay);
        return appData.getBudget;
    },
    getTargetMonth: function() {
        appData.getTargetMonth = appData.mission / appData.budget;
        if (appData.getTargetMonth > 0) {
            console.log('Цель будет достигнута за: ' + appData.getTargetMonth + ' месяцев');
        } else {
            console.log('Цель не будет достигнута!!!');
        }
        return appData.getTargetMonth;
    },
    getStatusIncome: function() {
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay <= 600 && appData.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay <= 0) {
            return ('Что то пошло не так');
        }
        console.log( appData.getStatusIncome);
        return appData.getStatusIncome;
    }
};
console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
    console.log(appData[key]);
}

appData.asking();




console.log("----------------------ДЗ-7----------------------");





let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);
const budgetMonth = expensesAmount;

let targetMonth = appData.getTargetMonth();

appData.getBudget();
let getStatusIncome = function() {

}

console.log(appData.getStatusIncome());

let statusIncome = appData.getStatusIncome();