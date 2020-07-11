"use strict";

console.log("Task 1");

const logItems = function (array) {
  let arrayNumber = 1;
  for (let i = 0; i < array.length; i += 1) {
    console.log(`[${arrayNumber}] - [${array[i]}]`);
    arrayNumber += 1;
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
