// const div = document.createElement("div");
// // div.innerText or div. textContent
// div.innerText = "메가커피";
// div.style.backgroundColor = "skyblue";
// document.body.appendChild(div);

// 1. box 만들기
// 유저에게 원하는 색깔, 원하는 안의 내용,
// 높이와 넓이를 입력 받고, 화면에 그리기

// const color = prompt("원하는 색상");
// const text = prompt("안의 내용");
// const box = document.createElement("div");
// box.innerText = text;
// box.style.backgroundColor = color;
// document.body.appendChild(box);

// const [color, content, height, width] =
//   prompt("색깔 내용 높이 넓이").split(" ");

// const div = document.createElement("div");
// div.style.backgroundColor = color;
// div.style.height = height + "px";
// div.style.width = width + "px";
// div.innerText = content;
// document.body.appendChild(div);

const div = document.createElement("div");
div.style.height = "100px";
div.style.width = "100px";
div.style.backgroundColor = "#55efc4";
div.style.backgroundColor = "#00b894";
div.style.backgroundColor = "#ffeaa7";
div.style.backgroundColor = "#fdcb6e";
div.style.display = "flex";
document.body.appendChild(div);
