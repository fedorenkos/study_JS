const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const start = document.querySelector('#start'),
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
    // expensesTitle = document.querySelectorAll('.expenses-title')[1],
    // incomeTitle = document.querySelectorAll('.income-title')[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelectRange = document.querySelector('.period-select'), 
    periodAmount = document.querySelector('.period-amount'), 
    depositCheck = document.querySelector('#deposit-check');

let incomeItems = document.querySelectorAll('.income-items'),
    expensesItems = document.querySelectorAll('.expenses-items');

class AppData{
    constructor(){
        this.income = {};
        this.addIncome = [];
        this.incomeMonth = 0;
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
    }


check(){
    if (amountSalary.value !== '') {
        start.removeAttribute('disabled');
    }
};


start() {
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
};
showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();
    
    };
addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
addExpensesBlock(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensePlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expensePlus.style.display = 'none';
    }
};
rangeSelect(){
    periodAmount.innerHTML = periodSelectRange.value;
    incomePeriodValue.value = this.calcSavedMoney();
};
getExpenses(){
    expensesItems.forEach(item => {
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
getIncome() {
    incomeItems.forEach(item => {
        const incomeTitle = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if (incomeTitle !== '' && cashIncome !== '') {
            this.income[incomeItems] = cashIncome;
        }
    });
for (const key in this.income) {
        this.incomeMonth += +this.income[key];
    }
};
getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(item => {
        item = item.trim();
        if (item !== '') {
            this.addExpenses.push(item);
        }
    });
};
getAddIncome() {
    additionalIncomeItem.forEach(item => {
        const itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
    });
};
getExpensesMonth() {
    for (const sumNumbers in this.expenses) {
        this.expensesMonth += +this.expenses[sumNumbers];
    }
};
getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
};
getStatusIncome() {
    if (this.budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
        return ('У вас средний уровень дохода');
    } else if (this.budgetDay <= 600 && this.budgetDay > 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay <= 0) {
        return ('Что то пошло не так');
    }
};
getInfoDeposit() {
    if (this.deposit) {
        do {
            this.percentDeposit = prompt('Какой годовой процент?', '10');
        } while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);
        do {
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        } while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
    }
};
calcSavedMoney() {
    return this.budgetMonth * periodSelectRange.value;
};
reset() {
    const inputLeftSideData = document.querySelectorAll('.data input[type=text]');
    const resultRightSide = document.querySelectorAll('.result input[type=text]');
    inputLeftSideData.forEach(function(e){
        e.value = '';
        e.removeAttribute('disabled');
    });
    resultRightSide.forEach(function(e){
        e.value = '';
        e.removeAttribute('disabled');
    });
    if (incomeItems.length === 3) {
        incomeItems[1].remove();
        incomeItems[2].remove();
    }
    if (expensesItems.length === 3) {
        expensesItems[1].remove();
        expensesItems[2].remove();
    }
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
};


eventListeners(){
    start.addEventListener('click', () => {
        const inputLeftSideData = document.querySelectorAll('.data input[type=text]');

        if (amountSalary.value === '') {
            alert('Ошибка, поле "Месячный доход" должно быть заполнено');
            return;
        }
        inputLeftSideData.forEach(function(item){
            item.setAttribute("disabled", "disabled");
        });
        cancel.style.display = 'block';
        start.style.display = 'none';
        this.start.call(this);
    });
    incomePlus.addEventListener('click', this.addIncomeBlock);
    expensePlus.addEventListener('click', this.addExpensesBlock);
    // periodSelectRange.addEventListener('input', () => {
    //     this.rangeSelect.call(this);
    // });
    periodSelectRange.addEventListener('input', this.rangeSelect.bind(this));
    cancel.addEventListener('click', () =>{
        this.reset.call(this);
    });
    }
};


const newData = new AppData();

newData.eventListeners();

// console.log('Наша программа включает в себя данные: ');
// for (const key in appData) {
//     console.log(key + ' ' + appData[key]);
// }
