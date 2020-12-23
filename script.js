const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


const dummyTransactions = [
    {id:1 ,text:'Cash',amount:-20},
    {id:2 ,text:'Paycheck',amount:100},
];


let transactions = dummyTransactions;

function addTransactionDOM(transaction) {
    const sign = transaction.amount > 0 ? '+' : '-';
    const item = document.createElement('li');
    item.classList.add(transaction.amount > 0 ? 'plus' : 'minus' );
    item.innerHTML=`${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>`;
}

