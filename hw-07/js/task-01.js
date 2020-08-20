console.log("Task 1");

const categories = document.querySelector("#categories");

console.log(`В списке ${categories.children.length} категории.`);

const categoryItems = document.querySelectorAll(".item");

Object.values(categories.children).forEach((item) => {
  console.table([
    `Количество элементов: ${item.children[1].childElementCount}`,
    `Категория: ${item.children[0].textContent}`,
  ]);
});
