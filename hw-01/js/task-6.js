console.log("Task 6");

let input;
let total = 0;

while (true) {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }
  input = Number(input);

  const notNumber = Number.isNaN(input);

  if (notNumber) {
    alert("Это не число!");
    continue;
  }

  total += input;
}

console.log(`Общая сумма ${total}`);