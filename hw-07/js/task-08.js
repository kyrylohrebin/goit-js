console.log("Task 8");

const renderRef = document.querySelector(
  "#controls button[data-action = render]"
);
const destroyRef = document.querySelector(
  "#controls button[data-action = destroy]"
);
const inputRef = document.querySelector("#controls input");
const boxesRef = document.querySelector("#boxes");

const createDivBox = (size) => {
  const div = document.createElement("div");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = getRandomColor();
  return div;
};

const getRandomColor = () => {
  const getColorProperty = () => Math.floor(Math.random() * 255);
  return `rgb(${getColorProperty()}, ${getColorProperty()}, ${getColorProperty()})`;
};

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = createDivBox(size);
    fragment.appendChild(box);
  }
  boxesRef.appendChild(fragment);
}

const buttonRender = () => {
  const amount = Number(inputRef.value);
  createBoxes(amount);
};

const buttonDestroy = () => (boxesRef.innerHTML = "");

renderRef.addEventListener("click", buttonRender);
destroyRef.addEventListener("click", buttonDestroy);
