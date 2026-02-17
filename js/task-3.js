const btnElem = document.querySelector("#name-input");
const inputElem = document.querySelector("#name-output");
btnElem.addEventListener("input", () => {
  //   inputElem.append(e);
  const value = btnElem.value;
  console.log(value);
  if (value === "") {
    inputElem.textContent = "Anonymous";
  } else inputElem.textContent = value.trim();
});
