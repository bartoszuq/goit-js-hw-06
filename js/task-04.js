// const value = document.querySelector("#value");
// const handler = () => console.log("button was clicked");
// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// console.log(handler);

// const click = () => {
//   console.log("button was clicked");
// };
// const button = document.querySelector("button");
// const buttonDecrement = document.querySaelector(
//   document.dataset.action === "decrement"
// );
let counterValue = 0;
const valueSpan = document.querySelector("#value");
const incrementButton = document.querySelector(
  `button[data-action="increment"]`
);
const decrementButton = document.querySelector(
  `button[data-action="decrement"]`
);
function updateCounter(value) {
  valueSpan.textContent = value;
}
incrementButton.addEventListener("click", () => {
  updateCounter((counterValue += 1));
});
decrementButton.addEventListener("click", () => {
  updateCounter((counterValue -= 1));
});
// console.log(value);
// const buttonIncrement = document.querySelector(
//   button.dataset.action === "increment"
// );
//
// const clickedMinus1 = (event) => {
//   console.log("-1");
// };
// const clickedPlus1 = (event) => {
//   console.log("+1");
// };
// console.dir(button);
// console.log(button.dataset.action);
//
// if (button.dataset.action === "decrement") {
//   console.log("tak");
//   button.addEventListener("click", clickedMinus1);
// } else {
//   console.log("nie");
// }
// if (button.dataset.action === "increment") {
//   console.log("tak");
//   button.addEventListener("click", clickedPlus1);
// } else {
//   console.log("nie");
// }

// console.log(button.dataset.action);
// console.log(button.getAttribute("type"));
