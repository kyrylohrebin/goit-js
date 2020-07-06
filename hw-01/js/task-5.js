console.log("Task 5");

let deliveryCost;

let countryName = prompt("В какую страну доставляем товар?");

if (countryName === null) {
  alert("Отменено пользователем");
} else {
  countryName = countryName[0].toUpperCase() + countryName.substring(1);

  switch (countryName.toLowerCase()) {
    case "китай":
    case "china":
      deliveryCost = 100;
      alert(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;

    case "чили":
    case "chile":
      deliveryCost = 250;
      alert(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;

    case "австралия":
    case "australia":
      deliveryCost = 170;
      alert(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;

    case "индия":
    case "india":
      deliveryCost = 80;
      alert(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;

    case "ямайка":
    case "jamaica":
      deliveryCost = 120;
      alert(`Доставка в ${countryName} будет стоить ${deliveryCost} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
