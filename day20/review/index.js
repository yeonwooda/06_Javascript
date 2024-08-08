// 비밀번호 input & 비밀번호 확인 input 두개 만들고
// 두개가 같아야 밑에 일치버튼이 파란색으로 바뀌는 코드 만들기
// 같지않으면 불일치 빨간색

// const pwInput = document.createElement("input");
// const PwchInput = document.createElement("input");
// const checkBtn = document.createElement("button");
// checkBtn.innerText = "불일치";
// checkBtn.style.backgroundColor = "red";

// pwInput.addEventListener("input", (e) => {
//   const { length } = e.target.value;
//   if (length == chPwInput.value.length) {
//     checkBtn.style.backgroundColor = "red";
//   } else {
//     checkBtn.style.backgroundColor = "blue";
//   }
// });

// document.body.appendChild(pwInput);
// document.body.appendChild(chPwInput);
// document.body.appendChild(checkBtn);

const pwInput = document.createElement("input");
const pwchInput = document.createElement("input");
const passBtn = document.createElement("button");
passBtn.innerText = "불일치";
passBtn.style.backgroundColor = "red";

pwInput.addEventListener("input", (e) => {
  const { value } = e.target;
  if (pwchInput.value == value) {
    passBtn.innerText = "일치";
    passBtn.style.backgroundColor = "green";
  } else {
    passBtn.innerText = "불일치";
    passBtn.style.backgroundColor = "red";
  }
});

pwchInput.addEventListener("input", (e) => {
  const { value } = e.target;
  if (pwInput.value == value) {
    passBtn.innerText = "일치";
    passBtn.style.backgroundColor = "green";
  } else {
    passBtn.innerText = "불일치";
    passBtn.style.backgroundColor = "red";
  }
});

document.body.appendChild(pwInput);
document.body.appendChild(pwchInput);
document.body.appendChild(passBtn);
