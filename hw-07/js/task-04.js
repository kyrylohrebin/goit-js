console.log("Task 4");

let counterValue = 0;

const valueRef = document.querySelector("#value");
const buttonDecrementRef = document.querySelector("#counter button[data-action='decrement']");
const buttonIncrementRef = document.querySelector("#counter button[data-action='increment']");

const increment = () => {
    valueRef.textContent = counterValue++;
}
const decrement = () => {
    valueRef.textContent = counterValue--;
}

buttonIncrementRef.addEventListener("click", increment);
buttonDecrementRef.addEventListener("click", decrement);