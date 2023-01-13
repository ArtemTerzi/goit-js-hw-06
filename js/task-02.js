const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.getElementById("ingredients");

const elements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  // ingredientsRef.appendChild(element);  <---- easy case - bad optimization
  return element;
});
ingredientsRef.append(...elements);
