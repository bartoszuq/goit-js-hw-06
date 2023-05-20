function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomColorSpan = document.querySelector("span.color");
const buttonEl = document.querySelector("button.change-color");
const bakcground = document.querySelector("body");

buttonEl.addEventListener("click", () => {
  const currentColor = (bakcground.style.backgroundColor = getRandomHexColor());
  console.log(`current hex color: ${currentColor}`);
  randomColorSpan.textContent = currentColor;
});
// console.log(bakcground);
