function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("div#boxes");

function clearBoxes() {
  boxesEl.innerHTML = "";
}

let incrementSize;

function createBoxes(amount) {
  if (numberEl.value > 100) {
    alert("ERROR: Number cannot be higher than 100");
    throw new Error("ERROR: input number cannot be set higher than 100");
  }
  const box = [];
  amount = numberEl.value;
  incrementSize = 30;
  for (let i = 0; i < amount; i++) {
    incrementSize += 10;
    const div = document.createElement("div");
    div.style.width = `${incrementSize}px`;
    div.style.height = `${incrementSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesEl.append(div);
  }
  boxesEl.append(box);
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", clearBoxes);

console.log();
