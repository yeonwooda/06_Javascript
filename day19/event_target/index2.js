const idInput = document.createElement("input");
const textLength = document.createElement("span");
textLength.innerText = "0/20";

idInput.addEventListener("input", (e) => {
  const { length } = e.target.value;
  if (length > 20) {
    e.target.value = e.target.value.slice(0, 20);
    textLength.innerText = "20/20";
  } else {
    textLength.innerText = length + "/20";
  }
  if (6 <= length && length <= 20) {
    checkBtn.style.backgroundColor = "green";
  } else {
    checkBtn.style.backgroundColor = "grey";
  }
});

const checkBtn = document.createElement("button");
checkBtn.innerText = "확인";
checkBtn.style.backgroundColor = "grey";

document.body.appendChild(idInput);
document.body.appendChild(textLength);
document.body.appendChild(checkBtn);
