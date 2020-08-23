console.log("Task 7");

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.min = 0;
inputRef.max = 50;
spanRef.setAttribute('style', `font-size: ${inputRef.value}px`);

const inputFontSize = event => {
  event.target.spanRef.setAttribute('style', `font-size: ${event.target.spanRef.value}px`);
};

inputFontSizeRef.addEventListener('change', inputFontSize);