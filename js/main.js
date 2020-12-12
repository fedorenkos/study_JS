let start = document.querySelector('#start'),
    cancel = document.querySelector('#cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensePlus = document.getElementsByTagName('button')[1],
    inputCheck = document.querySelector('#deposit-check'),
    additionalIncome = document.querySelectorAll('.additional_income-item'),

// console.log('--------------values right-side--------------');
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    expensesIncomeValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],


    amountSalary = document.querySelector('.salary-amount'),

// console.log('--------Titles----------');
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    incomeTitle = document.querySelectorAll('.income-title')[1],
// console.log('--------Titles----------');

    incomeAmount = document.querySelector('.income-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items'),
// console.log(expensesItems);
    additionalExpenses = document.querySelectorAll('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelectRange = document.querySelector('.period-select'),
    depositCheck = document.querySelector('#deposit-check');


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1200000,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    period: 12,
    start: function() {
        if (amountSalary.value === '') {
            alert('Ошибка, поле "Месячный доход" должно быть заполнено');
            return;
        }
        appData.budget = amountSalary.value;
        // console.log('amountSalary.value' + amountSalary.value);

        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getInfoDeposit();
        appData.getBudget();
        appData.showResult();

    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
    },
    addIncomeBlock: function(){
        // console.log(incomeItems.parentNode);
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },
    addExpensesBlock: function(){
        // console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensePlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensePlus.style.display = 'none';
        }

    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            console.log(item);
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    asking: function() {
        console.log("----------------------ДЗ-8----------------------");
        if (confirm('Есть ли у вас дополнительный источник зароботка?')) {

            let itemIncome;
            do {
                itemIncome = prompt('Какой дополнительный заработок?', 'Таксую');
            } while (isNumber(itemIncome) || itemIncome === '' || itemIncome === null)
            appData.income = itemIncome;
            console.log(typeof(itemIncome));

            let cashIncome = 0;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            } while (!isNumber(cashIncome) || cashIncome === '' || cashIncome === null)
            appData.income[itemIncome] = +cashIncome;
            console.log(typeof(cashIncome));
        }

        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'internet, taxi, taxes, food, clothes, travelling');
        } while (isNumber(appData.addExpenses) || appData.addExpenses === '' || appData.addExpenses === null)
        appData.addExpenses = addExpenses;
        let words = addExpenses.split(',');

        for (let i = 0; i < words.length; i++) {
            let word = words[i].trim();
            let upperCaseWord = word[0].toUpperCase() + word.slice(1);

            console.log(upperCaseWord);
        }
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },

    getExpensesMonth: function() {
        for (const sumNumbers in appData.expenses) {
            if (isNumber(appData.expenses[sumNumbers])) {
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
        console.log(appData.getStatusIncome);
        return appData.getStatusIncome;
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            } while (!isNumber(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
            console.log((appData.percentDeposit));
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            appData.moneyDeposit;
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};

start.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensePlus.addEventListener('click', appData.addExpensesBlock);






console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
    console.log(key + ' ' + appData[key]);
}

// let expensesAmount = appData.getExpensesMonth();
// console.log('Расходы за месяц: ' + expensesAmount);

// let targetMonth = appData.getTargetMonth();



console.log(appData.getStatusIncome());

console.log(appData.calcSavedMoney);