console.log("Task 4");

let credits = 23500;
const pricePerDroid = 3000;
let totalPrice;

let droidsQuantity = prompt("Сколько дроидов вы хотите купить?");

if (droidsQuantity === null) {
  console.log("Отменено пользователем!");
}

totalPrice = Number(droidsQuantity) * pricePerDroid;

if ((credits -= pricePerDroid * droidsQuantity)) {
  console.log(
    `Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits} кредитов.`
  );
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
}
