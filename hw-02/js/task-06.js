"use strict";

console.log("Task 6");

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");

  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert("Это не число!");
      continue;
    }
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }

  alert(`Общая сумма ${total}`);
}
