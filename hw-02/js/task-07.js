"use strict";

console.log("Task 7");

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
    if ((isLoginValid(login)) === false) {
      return "Ошибка! Логин должен быть от 4 до 16 символов";
    }
  
    if (isLoginUnique(allLogins, login)) {
      return "Такой логин уже используется!";
    }
  
    allLogins.push(login);
    return "Логин успешно добавлен!";
  };

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
