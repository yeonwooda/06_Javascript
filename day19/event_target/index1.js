// const button = document.createElement('button')
// button.innerText = "신지"
// button.addEventListener('click',(e)=>{
//     console.log(e.target.innerText)
// })
// document.body.appendChild(button)

// input -> 10글자 이상이면 빨간색
// const idInput = document.createElement('input')
// idInput.addEventListener('input',(e)=>{
//     e.target.style.color = e.target.value.length >= 10 ? 'red' : 'black'
// })
// document.body.appendChild(idInput)

// 10글자 이상 못적도록 해주셈
const idInput = document.createElement("input");
idInput.addEventListener("input", (e) => {
  if (e.target.value.length > 10) {
    e.target.value = e.target.value.slice(0, 10);
  }
});
document.body.appendChild(idInput);
