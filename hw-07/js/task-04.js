console.log("Task 4");

const valueRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector("#counter button[data-action='decrement']");
const buttonIncrementRef = document.querySelector("#counter button[data-action='increment']");

const increment = () => {
    const counterValue = Number(valueRef.textContent) + 1;
    valueRef.textContent = counterValue;
}
const decrement = () => {
    const counterValue = Number(valueRef.textContent) - 1;
    valueRef.textContent = counterValue;
}

buttonIncrementRef.addEventListener("click", increment);
buttonDecrementRef.addEventListener("click", decrement);