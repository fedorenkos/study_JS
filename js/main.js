let start = document.querySelector('#start'),
    cancel = document.querySelector('#cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensePlus = document.getElementsByTagName('button')[1],
    inputCheck = document.querySelector('#deposit-check'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    amountSalary = document.querySelector('.salary-amount'),
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    incomeTitle = document.querySelectorAll('.income-title')[1],
    incomeItems = document.querySelectorAll('.income-items'),

    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelectRange = document.querySelector('.period-select'), //input
    periodAmount = document.querySelector('.period-amount'); // div в который идет вывод
    depositCheck = document.querySelector('#deposit-check');


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


let appData = {
    income: {},
    addIncome: [],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
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
        appData.budget = +amountSalary.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getInfoDeposit();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();

    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = +appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value =  Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcSavedMoney();
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensePlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensePlus.style.display = 'none';
        }
    },
    rangeSelect: function(e){
        periodAmount.innerHTML = e.target.value;
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
    getIncome: function(){
        incomeItems.forEach(function(item){
            console.log(item);
                incomeTitle = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (incomeTitle !== '' && cashIncome !== '') {
                appData.income[incomeItems] = cashIncome;
            }
        });
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(', ');
        console.log(addExpenses);
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            console.log(itemValue);
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
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
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return targetAmount.value / appData.budget;
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
        return appData.budgetMonth * periodSelectRange.value;
    }
};

start.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensePlus.addEventListener('click', appData.addExpensesBlock);
periodSelectRange.addEventListener('input', appData.rangeSelect);

// function inputRange(){
//     let periodAmount = document.querySelector('.period-amount');
//     console.log(periodSelectRange.value);
//     periodAmount.innerHTML = periodSelectRange.value;
// }
// document.querySelector('.period-amount').oninput = inputRange;



console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
    console.log(key + ' ' + appData[key]);
}

// let expensesAmount = appData.getExpensesMonth();
// console.log('Расходы за месяц: ' + expensesAmount);

// let targetMonth = appData.getTargetMonth();



console.log(appData.getStatusIncome());

console.log(appData.calcSavedMoney);