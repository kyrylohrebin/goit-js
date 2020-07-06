console.log("Task 3");

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const enterPassword = prompt("Введите пароль");

if (enterPassword === null) {
  message = "Отменено пользователем!";
} else if (enterPassword === "jqueryismyjam") {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
