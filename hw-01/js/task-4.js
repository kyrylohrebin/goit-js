console.log("Task 4");

let credits = 23500;
const pricePerDroid = 3000;

const droidsQuantity = prompt("Сколько дроидов вы хотите купить?");

if (droidsQuantity === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = droidsQuantity * pricePerDroid;

  if ((credits -= totalPrice)>0) {
    console.log(
      `Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}