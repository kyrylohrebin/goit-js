console.log("Task 6");

const inputRef = document.querySelector("#validation-input");

const validation = (event) => {
  if (Number(inputRef.dataset.length) === event.target.value.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else
  if (event.target.value === "") {
    inputRef.removeAttribute("class");
  } else {
  inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("change", validation);