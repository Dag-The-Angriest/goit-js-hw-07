const categElem = document.getElementById("categories");
const childElem = document.querySelectorAll(".item");
console.log("Number of categories: ", categElem.children.length);

for (const child of childElem) {
  console.log("Category :", child.querySelector("h2").textContent);
  console.log("Elements :", child.querySelector("ul").children.length);
}
