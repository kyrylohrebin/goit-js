console.log("Task 6");

let input;
let total = 0;

do {
  input = prompt("Введите число");

  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert("Это не число!");
      continue;
    }

    total += +input;
  }
} while (input !== null);

alert(`Общая сумма ${total}`);
