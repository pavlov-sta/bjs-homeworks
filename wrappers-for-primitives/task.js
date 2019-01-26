"use strict";
function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  const todayDate = new Date();
  const data = new Date(date);
  const month = new Date((data.getFullYear() - todayDate.getFullYear()) * 12 + (data.getMonth() + 1) - (todayDate.getMonth() + 1));
  
  const monthlyInterestRate = (percent / 12) / 100;
  const monthlyFee = amount * (monthlyInterestRate + monthlyInterestRate / ((Math.pow((1 + monthlyInterestRate), month) - 1)));
  const totalAmount = monthlyFee * month + amount - contribution;
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2);
}

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  let user = new String(name);
  if (name === undefined || name === null || name === "" ){
    user = 'Аноним';
  };
  const greeting = new String(`Привет, мир! Меня зовут ${user}` );
  console.log(greeting);
  return greeting;
}