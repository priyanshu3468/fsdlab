const main = document.querySelector("main");
const buttonP = document.querySelector("#buttonP");
const button = document.querySelector("#button");
const inputP = document.querySelector("#inputP");
const input = document.querySelector("#input");
const password = document.querySelector("#password");
const passP = document.querySelector("#passP");
const span = document.querySelector("#span");
input.addEventListener("input", (e) => {
  inputP.textContent = `${e.target.value}`;
});

password.addEventListener("input", (e) => {
  let word = e.target.value;
  if (word.length <= 4 && word.length > 0) {
    passP.textContent = "Weak";
  } else if (word.length > 4 && word.length < 8) {
    passP.textContent = "Medium";
  } else if (word.length >= 8) {
    passP.textContent = "Strong";
  }
});
