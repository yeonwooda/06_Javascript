const minusBtn = document.createElement("button");
const plusBtn = document.createElement("button");
const num = document.createElement("span");

minusBtn.innerText = `-`;
num.innerText = `0`;
plusBtn.innerText = `+`;

minusBtn.addEventListener("click", () => {
  num.innerText =
    Number(num.innerText) === 0 ? num.innerText : Number(num.innerText) - 1;
  num.style.color = "black";
});

plusBtn.addEventListener("click", () => {
  num.innerText = Number(num.innerText) === 10 ? 10 : Number(num.innerText) + 1;
  num.style.color = Number(num.innerText) === 10 ? "red" : "black";
});

document.body.appendChild(minusBtn);
document.body.appendChild(num);
document.body.appendChild(plusBtn);
