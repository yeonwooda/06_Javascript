// // input 태그 만들어서 특수문자 !,#,@,$, *가 하나라도 들어가면 빬간색 만들기export const hasSpecial = (value) =>

// const idInput = document.createElement("input");

// idInput.addEventListener("input", (e) => {
//   [..."!@#$%^&*"].some((v) => value.includes(v)) ? "red" : "black";
// });

// document.body.appendChild(input);
// //input 태그 만들어서 특수문자 !,#,@,$,*가 하나라도 들어가면 빨간색 만들기
const input = document.createElement("input");

input.addEventListener("input", (e) => {
  e.target.style.color = [..."!#@$*"].some((v) => e.target.value.includes(v))
    ? "red"
    : "black";
});

document.body.appendChild(input);
