"use strict";

console.log("Task 5");

const checkForSpam = function (message) {
  if (message.toLowerCase().includes("spam")) {
    return true;
  } else if (message.toLowerCase().includes("sale")) {
    return true;
  } else return false;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
