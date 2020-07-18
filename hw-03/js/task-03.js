"use strict";

console.log("Task 3");

const findBestEmployee = function (employees) {
  let bestEmployee;
  let mostTasks;
  const entries = Object.entries(employees);

  for (const [employee, tasksDone] of entries) {
    if (!mostTasks || tasksDone > mostTasks) {
      mostTasks = tasksDone;
      bestEmployee = employee;
    }
  }
  return `${bestEmployee}: ${mostTasks}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
