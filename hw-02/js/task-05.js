"use strict";

console.log("Task 5");

const checkForSpam = function (message) {
  let messageArr = message.toLowerCase();
  return messageArr.includes("spam") || messageArr.includes("sale");
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
