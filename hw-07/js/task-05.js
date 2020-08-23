console.log("Task 5");

const spanRef = document.querySelector("#name-output");
const inputRef = document.querySelector("#name-input");

const input = (event) => {
  if (event.target.value === "") {
    spanRef.textContent = "незнакомец";
  } else spanRef.textContent = event.target.value;
};
inputRef.addEventListener("input", input);
