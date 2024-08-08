// const pwInput = document.createElement("input");
// const eye = document.createElement("i");
// eye.className = "fa-solid fa-eye";
// pwInput.type = "password";
// eye.addEventListener("input", (e) => {
//   const { value } = e.target;
//   if (pwInput.value) {
//   } else {
//   }
// });
// document.body.appendChild(pwInput);
// document.body.appendChild(eye);

const input = document.createElement("input");
const eyeBtn = document.createElement("butotn");

const openEye = `<i class="fa-solid fa-eye"></i>`;
const closedEye = `<i class="fa-solid fa-eye-slash"></i>`;
eyeBtn.innerHTML = openEye;
input.type = "password";

eyeBtn.addEventListener("click", (e) => {
  if (input.type === "password") {
    eyeBtn.innerHTML = closedEye;
    input.type = "text";
  } else {
    eyeBtn.innerHTML = openEye;
    input.type = "password";
  }
});

document.body.appendChild(input);
document.body.appendChild(eyeBtn);
