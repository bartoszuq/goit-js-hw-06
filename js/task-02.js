// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// 1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// 2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// 3. Doda do elementu klasę item.
// 4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
let liContainer = [];

ingredients.forEach((ingredient) => {
  const liCreator = document.createElement("li");
  liCreator.classList.add("item");
  liCreator.textContent = ingredient;
  liContainer.push(liCreator);
});
ingredientsList.append(...liContainer);
console.log(liContainer);
