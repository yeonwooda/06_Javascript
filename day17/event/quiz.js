// const minusBtn = document.createElement("button");
// const plusBtn = document.createElement("button");
// const num = document.createElement("span");

// minusBtn.innerText = `-`;
// num.innerText = `0`;
// plusBtn.innerText = `+`;

// minusBtn.addEventListener("click", () => {
//   num.innerText = Number(num.innerText) - 1;
// });

// plusBtn.addEventListener("click", () => {
//   num.innerText = Number(num.innerText) + 1;
// });

// document.body.appendChild(minusBtn);
// document.body.appendChild(num);
// document.body.appendChild(plusBtn);

// ====
const minusBtn = document.createElement("button");
const result = document.createElement("span");
const plusBtn = document.createElement("button");

minusBtn.innerText = `-`;
result.innerText = `0`;
plusBtn.innerText = `+`;

plusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num < 10 ? num + 1 : num;
  result.innerText = newNum;
  result.Style.color = newNum == 10 ? "red" : "black";
});

minusBtn.addEventListener("click", () => {
  const num = Number(result.innerText);
  const newNum = num === 0;
  result.innerText = newNum;
});

document.body.appendChild(minusBtn);
document.body.appendChild(result);
document.body.appendChild(plusBtn);
