// 1. Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.

// 2. Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst
// nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const categoryItems = document.querySelectorAll("li.item");
const categoryCounter = categoryItems.length;
console.log(`Number of categories: ${categoryCounter}`);

const categoryNames = categoryItems.forEach((item) => {
  const header = item.querySelector("h2").textContent;
  // const elementsCounter = item.querySelector("ul").childElementCount;
  const elementsCounter = item.querySelectorAll("li").length;
  console.log("\n");
  console.log(`Category: ${header}`);
  console.log(`Elements: ${elementsCounter}`);
});
