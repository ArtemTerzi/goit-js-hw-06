const categoriesRef = document.getElementById("categories");

console.log("Number of categories: ", categoriesRef.children.length);

const categoryNameRef = document.querySelectorAll(".item");

categoryNameRef.forEach((category) => {
  const title = category.querySelector("h2");
  const titleText = title.textContent;
  const categoryListItems = category.querySelectorAll("ul > li");
  console.log("");
  console.log("Category: ", titleText);
  console.log("Elements: ", categoryListItems.length);
});
