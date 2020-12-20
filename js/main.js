let start = document.querySelector('#start'),
    cancel = document.querySelector('#cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensePlus = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
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
    // вав
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
    check: function(){
        if (amountSalary.value !== '') {
            start.removeAttribute('disabled');
        }
    },
    start: function() {
        this.budget = +amountSalary.value;
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getInfoDeposit();
        this.getAddExpenses();
        this.getAddIncome();
        this.calcSavedMoney();
        this.getBudget();
        this.showResult();
        
    },
    showResult: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();

    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    addExpensesBlock: function() {
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensePlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensePlus.style.display = 'none';
        }
    },
    rangeSelect: function() {
        periodAmount.innerHTML = periodSelectRange.value;
        incomePeriodValue.value = this.calcSavedMoney();
    },
    getExpenses: function() {
        const _this = this;
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                _this.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function() {
        const _this = this;
        incomeItems.forEach(function(item) {
            let incomeTitle = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (incomeTitle !== '' && cashIncome !== '') {
                _this.income[incomeItems] = cashIncome;
            }
        });
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },
    getAddExpenses: function() {
        const _this = this;
        let addExpenses = additionalExpensesItem.value.split(', ');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if (item !== '') {
                _this.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        const _this = this;
        additionalIncomeItem.forEach(function(item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                _this.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function() {
        for (const sumNumbers in this.expenses) {
            this.expensesMonth += +this.expenses[sumNumbers];
        }
    },
    getBudget: function() {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function() {
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function() {
        if (this.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay <= 600 && this.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (this.budgetDay <= 0) {
            return ('Что то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (this.deposit) {
            do {
                this.percentDeposit = prompt('Какой годовой процент?', '10');
            } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);
            do {
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
        }
    },
    calcSavedMoney: function() {
        return this.budgetMonth * periodSelectRange.value;
    },
    reset: function () {
        let inputLeftSideData = document.querySelectorAll('.data input[type=text]');
        let resultRightSide = document.querySelectorAll('.result input[type=text]');
        inputLeftSideData.forEach(function(e){
            e.value = '';
            e.removeAttribute('disabled');
        });
        resultRightSide.forEach(function(e){
            e.value = '';
            e.removeAttribute('disabled');
        });

        periodSelectRange.value = 1;
        periodAmount.innerHTML = '1';

        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.income ={};
        this.addIncome = [];
        this.incomeMonth = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;


        cancel.style.display = 'none';
        start.style.display = 'block';
        expensePlus.removeAttribute('disabled');
        incomePlus.removeAttribute('disabled');
        checkbox.checked = false;
    }
};


start.addEventListener('click', function() {
    if (amountSalary.value === '') {
        alert('Ошибка, поле "Месячный доход" должно быть заполнено');
        return;
    }
    cancel.style.display = 'block';
    start.style.display = 'none';

    appData.start();
});
// incomePlus.addEventListener('click', appData.addIncomeBlock);
incomePlus.addEventListener('click', function () {
    appData.addIncomeBlock();
});
// expensePlus.addEventListener('click', appData.addExpensesBlock);
expensePlus.addEventListener('click', function () {
    appData.addExpensesBlock();
});
// periodSelectRange.addEventListener('input', appData.rangeSelect);
periodSelectRange.addEventListener('input', function () {
    appData.rangeSelect();
});
// amountSalary.addEventListener('keyup', appData.check);
amountSalary.addEventListener('keyup', function () {
    appData.check();
});
// cancel.addEventListener('click', appData.reset);
cancel.addEventListener('click', function () {
    appData.reset();
});
// console.log('Наша программа включает в себя данные: ');
// for (const key in appData) {
//     console.log(key + ' ' + appData[key]);
// }
