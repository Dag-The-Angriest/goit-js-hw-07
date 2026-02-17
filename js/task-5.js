function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  const theColor = getRandomHexColor();
  console.log(theColor);
  body.style.backgroundColor = theColor;
  color.textContent = theColor;
}
