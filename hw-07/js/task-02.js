console.log("Task 2");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef= document.querySelector("#ingredients");

const createListItem = (listItem) => {
  return listItem.map((item) => {
    const elements = document.createElement("li");
    elements.textContent = item;
    return elements;
  });
};
;

listRef.append(...createListItem(ingredients));