"use strict";

console.log("Task 6");

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
    if (input === null) {
    break;
  }

  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert("Это не число!");
      continue;
    }
  }

numbers.push(+input);

} while (input !== null);

for(const number of numbers){
  total += number;
}

if (numbers.length > 0) {
  alert(`Общая сумма ${total}`);
} else {
  alert('Отменено пользователем');
}