import "./style.css";

let balance = 1500;
const maxWithdrawal = 600;

const balanceElement = document.querySelector("#balance");
const amountInput = document.querySelector("#amount");
const depositButton = document.querySelector("#deposit");
const withdrawButton = document.querySelector("#withdraw");
const messageElement = document.querySelector("#message");
const banknotesElement = document.querySelector("#banknotes");

balanceElement.textContent = balance.toFixed(2);

console.log(typeof balance.toFixed(2));