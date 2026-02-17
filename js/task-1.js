const categElem = document.getElementById("categories");

console.log("Number of categories: ", categElem.children.length);

for (const child of categElem.children) {
  console.log("Category :", child.querySelector("h2").textContent);
  console.log("Elements :", child.querySelector("ul").children.length);
}
