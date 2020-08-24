console.log("Task 7");

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const inputFontSize = event => {
  spanRef.style.fontSize = `${event.target.value}px`
};

inputRef.addEventListener('change', inputFontSize);