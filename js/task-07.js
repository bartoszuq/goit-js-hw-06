const sliderEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

console.log(`font size: ${sliderEl.value}px`);
textEl.style.fontSize = `${sliderEl.value}px`;

sliderEl.addEventListener("input", () => {
  textEl.style.fontSize = `${sliderEl.value}px`;
  console.log(`font size: ${sliderEl.value}px`);
});
