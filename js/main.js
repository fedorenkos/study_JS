let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let money;
let start = function(){
    do{
        money= prompt('Ваш месячный доход?', 50000);
    }
    while(isNaN(money) || money === '' || money === null);
};

start();
    

let income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Internet, Taxi, Taxes, Food, Clothes, Travelling'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1200000,
    period = 12;

console.log("----------------------ДЗ-5----------------------");



let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// const expenses1 = prompt('Введите обязательную статью рассходов?');
// const expenses1Amount = +prompt('Во сколько это обойдется?', '');
// const expenses2 = prompt('Введите обязательную статью рассходов?');
// const expenses2Amount = +prompt('Во сколько это обойдется?', '');
let expenses = [];

console.log(addExpenses.toLowerCase().split(','));

const getExpensesMonth = function() {
    let sum = 0;
        for (let i = 0; i < 2; i++){
            expenses[i] = prompt('Введите обязательную статью рассходов?', 'Cinema, Theater');
            
            let sumNumbers = 0;
            do{
                sumNumbers = +prompt('Во сколько это обойдется?');
            }while(isNaN(sumNumbers) || sumNumbers === '' || sumNumbers === null);
                sum = sum + sumNumbers;
        };

        console.log(expenses);
        console.log(sum);
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
    
    return parseInt(mission / accumulatedMonth);
    
};

let targetMonth = getTargetMonth();

if (targetMonth > 0 ) {
    console.log('Цель будет достигнута за: ' + targetMonth + ' месяцев');
} else{
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