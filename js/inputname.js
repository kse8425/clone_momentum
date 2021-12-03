const inputName = document.querySelector(".js-name");
const tagform = inputName.querySelector("form");
const tagInput = inputName.querySelector("input");

init();
function init() {
  checkName();
}

function checkName() {
  if (localStorage.getItem("name") === null) {
    tagform.addEventListener("submit", handleSubmit);
  } else {
    printName();
  }
}
function handleSubmit(event) {
  setName(tagInput.value);
}

function setName(name) {
  localStorage.setItem("name", name);
}
function printName() {
  const currnetName = localStorage.getItem("name");
  inputName.textContent = `Hello! ${currnetName}`;
}
