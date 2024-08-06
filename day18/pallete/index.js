// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = "red";

// box.addEventListener("click", () => {
//   box.style.backgroundColor = "pink";
// });

// document.body.appendChild(box);

const pallete = document.createElement("div");
pallete.style.display = "grid";
pallete.style.gridTemplateColumns = "repeat(5,1fr)";

const colors =
  "black grey blue green darksalmon pink red white yello skyblue".split(" ");
colors.forEach((v) => {
  const box = document.createElement("div");
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = v;
  box.addEventListener("click", () => {
    choiceBox.style.backgroundColor = v;
  });

  pallete.appendChild(box);
});
const choiceBox = document.createElement("div");
choiceBox.style.width = "300px";
choiceBox.style.height = "300px";
choiceBox.style.border = "1px solid black";

const minusBtn = document.createElement("button");
const plusBtn = document.createElement("button");

minusBtn.innerText = `-`;
plusBtn.innerText = `+`;

minusBtn.addEventListener("click", () => {
  choiceBox.style.width = parseInt(choiceBox.style.width) - 10 + "px";
  choiceBox.style.height = parseInt(choiceBox.style.height) - 10 + "px";
});

plusBtn.addEventListener("click", () => {
  choiceBox.style.width = parseInt(choiceBox.style.width) + 10 + "px";
  choiceBox.style.height = parseInt(choiceBox.style.height) + 10 + "px";
});

document.body.appendChild(pallete);
document.body.appendChild(choiceBox);
document.body.appendChild(minusBtn);
document.body.appendChild(plusBtn);
