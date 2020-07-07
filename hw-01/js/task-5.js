console.log("Task 5");

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

const chinaDeliveryCost = 100;
const chileDeliveryCost = 250;
const australiaDeliveryCost = 170;
const indiaDeliveryCost = 80;
const jamaicaDeliveryCost = 120;

const countryName = prompt("В какую страну доставляем товар?");

if (countryName === null) {
  alert("Отменено пользователем");
} else {

  switch (countryName.toLowerCase()) {
    case china:
      alert(`Доставка в ${countryName} будет стоить ${chinaDeliveryCost} кредитов`);
      break;

    case chile:
      alert(`Доставка в ${countryName} будет стоить ${chileDeliveryCost} кредитов`);
      break;

    case australia:
      alert(`Доставка в ${countryName} будет стоить ${australiaDeliveryCost} кредитов`);
      break;

    case india:
      alert(`Доставка в ${countryName} будет стоить ${indiaDeliveryCost} кредитов`);
      break;

    case jamaica:
      alert(`Доставка в ${countryName} будет стоить ${jamaicaDeliveryCost} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}